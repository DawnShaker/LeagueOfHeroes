import { PGlite } from "@electric-sql/pglite";
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { test } from "node:test";

// Local PostgreSQL, no production connection, messages or real accounts.
test("workspace SQL: RLS, roles, revisions, contextual notification queue and revoked access", async () => {
  const db = new PGlite();
  const ids = {
    admin: "00000000-0000-4000-8000-000000000001",
    manager: "00000000-0000-4000-8000-000000000002",
    editor: "00000000-0000-4000-8000-000000000003",
    observer: "00000000-0000-4000-8000-000000000004",
    outsider: "00000000-0000-4000-8000-000000000005",
    player: "00000000-0000-4000-8000-000000000006",
    test_master: "00000000-0000-4000-8000-000000000007",
  };
  try {
    await db.exec(`create role anon; create role authenticated; create role service_role bypassrls;
      create schema auth;
      create table auth.users(id uuid primary key,email text,email_confirmed_at timestamptz);
      create table auth.identities(user_id uuid,provider text,identity_data jsonb);
      create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
      create table public.user_profiles(id uuid primary key,display_name text,discord_id text,role text);
      create function public.is_account_admin() returns boolean language sql stable security definer set search_path=public as $$ select exists(select 1 from public.user_profiles where id=auth.uid() and role='admin') $$;
      grant usage on schema public,auth to anon,authenticated,service_role;
      grant execute on function auth.uid(),public.is_account_admin() to authenticated,service_role;`);
    for (const [name, id] of Object.entries(ids)) {
      await db.query("insert into auth.users values($1,$2,now())", [
        id,
        `${name}@example.com`,
      ]);
      await db.query("insert into user_profiles values($1,$2,$3,$4)", [
        id,
        name,
        id.slice(-5),
        name === "admin"
          ? "admin"
          : ["manager", "editor", "observer"].includes(name)
            ? "master"
            : name === "test_master"
              ? "test_master"
              : "player",
      ]);
      await db.query(
        `insert into auth.identities values($1,'discord',jsonb_build_object('sub',$2::text))`,
        [id, id.slice(-5)],
      );
    }
    await db.exec(
      readFileSync(
        new URL("../migrations/20261012_team_workspaces.sql", import.meta.url),
        "utf8",
      ),
    );
    await db.exec(
      readFileSync(
        new URL(
          "../migrations/20261013_team_workspace_roles.sql",
          import.meta.url,
        ),
        "utf8",
      ),
    );
    const login = async (name) => {
      await db.exec("reset role");
      await db.query("select set_config('request.jwt.claim.sub',$1,false)", [
        ids[name],
      ]);
      await db.exec("set role authenticated");
    };
    const worker = () => db.exec("reset role; set role service_role");
    await worker();
    assert.equal((await db.query("select team_is_master($1) as allowed",[ids.admin])).rows[0].allowed,true);
    assert.equal((await db.query("select team_is_master($1) as allowed",[ids.player])).rows[0].allowed,false);
    await login("editor");
    await assert.rejects(
      () => db.query("select team_create_workspace('Forbidden')"),
      /администратор/,
    );
    await login("admin");
    const board = (
      await db.query("select team_create_workspace('Совет') as id")
    ).rows[0].id;
    const other = (
      await db.query("select team_create_workspace('Администрация') as id")
    ).rows[0].id;
    await db.query("select team_set_member($1,$2,$3)", [
      board,
      ids.manager.slice(-5),
      "manager",
    ]);
    await login("manager");
    await db.query("select team_set_member($1,$2,$3)", [
      board,
      ids.editor.slice(-5),
      "editor",
    ]);
    await db.query("select team_set_member($1,$2,$3)", [
      board,
      ids.observer.slice(-5),
      "observer",
    ]);
    for (const name of ["player", "test_master"]) {
      await assert.rejects(
        () =>
          db.query("select team_set_member($1,$2,'editor')", [
            board,
            ids[name].slice(-5),
          ]),
        /только мастерам/,
      );
    }
    // Simulate memberships left over from the previous access rules.
    await db.exec("reset role");
    for (const name of ["player", "test_master"]) {
      await db.query(
        "insert into team_members values($1,$2,'manager',true,true)",
        [board, ids[name]],
      );
    }
    await login("manager");
    await assert.rejects(
      () =>
        db.query("select team_set_member($1,$2,$3)", [
          other,
          ids.outsider.slice(-5),
          "manager",
        ]),
      /Нет права/,
    );
    const list = (
      await db.query(
        "select id from team_lists where workspace_id=$1 order by position",
        [board],
      )
    ).rows[0].id;
    await login("outsider");
    for (const table of [
      "team_workspaces",
      "team_members",
      "team_lists",
      "team_cards",
      "team_comments",
      "team_activity",
      "team_notifications",
    ])
      assert.equal(
        (await db.query(`select * from ${table}`)).rows.length,
        0,
        `${table} should be private`,
      );
    await assert.rejects(
      () => db.query("select * from team_directory($1)", [board]),
      /Нет доступа/,
    );
    await assert.rejects(
      () => db.query("select * from team_claim_notifications()"),
      /permission denied/,
    );
    await login("observer");
    assert.equal(
      (await db.query("select * from team_workspaces")).rows.length,
      1,
    );
    await assert.rejects(
      () =>
        db.query(
          "insert into team_cards(workspace_id,list_id,title,created_by) values($1,$2,$3,$4)",
          [board, list, "Forbidden", ids.observer],
        ),
      /row-level security/,
    );
    await login("editor");
    await assert.rejects(
      () =>
        db.query("select team_set_member($1,$2,$3)", [
          board,
          ids.outsider.slice(-5),
          "editor",
        ]),
      /Нет права/,
    );
    await assert.rejects(
      () =>
        db.query("insert into team_members values($1,$2,$3,false,false)", [
          board,
          ids.outsider,
          "manager",
        ]),
      /permission denied/,
    );
    await assert.rejects(
      () =>
        db.query(
          "insert into team_cards(workspace_id,list_id,title,created_by,assignees) values($1,$2,$3,$4,$5)",
          [board, list, "Foreign assignee", ids.editor, [ids.outsider]],
        ),
      /Исполнители/,
    );
    await assert.rejects(
      () =>
        db.query(
          `insert into team_cards(workspace_id,list_id,title,created_by,checklist) values($1,$2,$3,$4,'[{"text":"x"}]')`,
          [board, list, "Malformed checklist", ids.editor],
        ),
      /чек-лист/,
    );
    const card = (
      await db.query(
        "insert into team_cards(workspace_id,list_id,title,created_by,assignees,due_at,reminder_minutes) values($1,$2,$3,$4,$5,now()+interval '30 minutes',60) returning id,revision",
        [board, list, "Проверка", ids.editor, [ids.editor, ids.observer]],
      )
    ).rows[0];
    assert.equal(card.revision, 1);
    for (const name of ["player", "test_master"]) {
      await login(name);
      for (const table of [
        "team_workspaces",
        "team_members",
        "team_lists",
        "team_cards",
        "team_comments",
        "team_activity",
        "team_notifications",
      ]) {
        assert.equal(
          (await db.query(`select * from ${table}`)).rows.length,
          0,
          `${name} cannot read ${table}, even as a workspace manager`,
        );
      }
      await assert.rejects(
        () => db.query("select * from team_directory($1)", [board]),
        /Нет доступа/,
      );
      await assert.rejects(
        () =>
          db.query("select team_notification_preferences($1,true,true)", [
            board,
          ]),
        /Нет доступа/,
      );
      await assert.rejects(
        () => db.query("select team_queue_message($1,'Forbidden')", [card.id]),
        /Нет доступа/,
      );
      assert.equal(
        (
          await db.query(
            "update team_cards set title='Forbidden' where id=$1 returning id",
            [card.id],
          )
        ).rows.length,
        0,
      );
      await assert.rejects(
        () => db.query("select team_is_master($1)", [ids.admin]),
        /permission denied/,
      );
    }
    await login("editor");
    assert.equal(
      (
        await db.query(
          "update team_cards set title=$1 where id=$2 and revision=1 returning revision",
          ["Новое название", card.id],
        )
      ).rows[0].revision,
      2,
    );
    assert.equal(
      (
        await db.query(
          "update team_cards set title=$1 where id=$2 and revision=1 returning id",
          ["Устаревшая правка", card.id],
        )
      ).rows.length,
      0,
    );
    await assert.rejects(
      () =>
        db.query("update team_cards set created_by=$1 where id=$2", [
          ids.admin,
          card.id,
        ]),
      /permission denied/,
    );
    await assert.rejects(
      () =>
        db.query(
          "insert into team_activity(workspace_id,detail) values($1,$2)",
          [board, "Fake audit"],
        ),
      /permission denied/,
    );
    await worker();
    assert.equal(
      (await db.query("select * from team_claim_notifications()")).rows.length,
      0,
      "opted out recipients receive nothing",
    );
    await login("editor");
    await db.query("select team_notification_preferences($1,true,false)", [
      board,
    ]);
    await db.query("select team_notification_preferences($1,true,false)", [
      board,
    ]);
    await worker();
    let jobs = (await db.query("select * from team_claim_notifications()"))
      .rows;
    assert.equal(
      jobs.length,
      1,
      "preference change requeues only one current reminder despite a title edit",
    );
    assert.equal(jobs[0].channel, "discord");
    assert.equal(jobs[0].discord_id, ids.editor.slice(-5));
    assert.equal(
      (await db.query("select * from team_claim_notifications()")).rows.length,
      0,
      "leased job cannot be claimed twice",
    );
    await db.query("select team_finish_notification($1,$2,null)", [
      jobs[0].id,
      ids.admin,
    ]);
    assert.equal(
      (
        await db.query("select state from team_notifications where id=$1", [
          jobs[0].id,
        ])
      ).rows[0].state,
      "sending",
    );
    await db.query("select team_finish_notification($1,$2,null)", [
      jobs[0].id,
      jobs[0].lease_id,
    ]);
    await login("observer");
    await assert.rejects(
      () =>
        db.query("select team_queue_message($1,$2)", [card.id, "Forbidden"]),
      /Нет доступа/,
    );
    await db.query("select team_notification_preferences($1,false,true)", [
      board,
    ]);
    await login("editor");
    const count = (
      await db.query("select team_queue_message($1,$2) as count", [
        card.id,
        "Повестка",
      ])
    ).rows[0].count;
    assert.equal(
      count,
      2,
      "only assigned, opted in channels receive the message",
    );
    await assert.rejects(
      () => db.query("select team_queue_message($1,$2)", [card.id, "Again"]),
      /минуту/,
    );
    await login("manager");
    await db.query("select team_set_member($1,$2,null)", [
      board,
      ids.observer.slice(-5),
    ]);
    await login("observer");
    assert.equal((await db.query("select * from team_cards")).rows.length, 0);
    await worker();
    jobs = (await db.query("select * from team_claim_notifications()")).rows;
    assert.equal(jobs.length, 1);
    assert.equal(jobs[0].channel, "discord");
    await login("editor");
    await db.query("update team_cards set archived=true where id=$1", [
      card.id,
    ]);
    await worker();
    assert.equal(
      (await db.query("select * from team_claim_notifications()")).rows.length,
      0,
    );
    const states = await db.query(
      "select state from team_notifications where id=$1",
      [jobs[0].id],
    );
    // worker rechecks the archive even for already claimed messages.
    assert.equal(states.rows[0].state, "cancelled");
    await login("editor");
    await db.query(
      "insert into team_cards(workspace_id,list_id,title,created_by,assignees,due_at,reminder_minutes) values($1,$2,'Role change',$3,$4,now()+interval '30 minutes',60)",
      [board, list, ids.editor, [ids.editor]],
    );
    for (const role of ["player", "test_master"]) {
      await db.exec("reset role");
      await db.query("update user_profiles set role=$1 where id=$2", [
        role,
        ids.editor,
      ]);
      await login("editor");
      assert.equal(
        (await db.query("select * from team_workspaces")).rows.length,
        0,
      );
      await assert.rejects(
        () =>
          db.query("select team_notification_preferences($1,true,false)", [
            board,
          ]),
        /Нет доступа/,
      );
      await worker();
      assert.equal(
        (await db.query("select * from team_claim_notifications()")).rows
          .length,
        0,
        "downgraded users receive no private notifications",
      );
      await db.exec("reset role");
      await db.query("update user_profiles set role='master' where id=$1", [
        ids.editor,
      ]);
      await login("editor");
      await db.query("select team_notification_preferences($1,true,false)", [
        board,
      ]);
    }
  } finally {
    await db.close();
  }
});
