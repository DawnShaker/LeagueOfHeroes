import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";
import * as diagnostics from "../functions/team-notifications/diagnostics.ts";

const source = readFileSync(
  new URL("../functions/team-notifications/index.ts", import.meta.url),
  "utf8",
);
interface Options {
  recipientIsMaster?: boolean;
  claimError?: object;
  finishError?: object;
  unexpected?: Error;
  jobs?: object[];
  env?: Record<string, string | undefined>;
}

function worker(options: Options = {}) {
  let handler: (request: Request) => Promise<Response>;
  const logs: unknown[][] = [];
  const calls: string[] = [];
  const env = {
    TEAM_CRON_SECRET: "test-cron-secret",
    SUPABASE_URL: "https://project.example",
    SUPABASE_SERVICE_ROLE_KEY: "test-service-key",
    ...options.env,
  };
  const client = {
    async rpc(name: string) {
      calls.push(name);
      if (name === "team_is_master")
        return { data: options.recipientIsMaster ?? true, error: null };
      if (options.unexpected) throw options.unexpected;
      return name === "team_claim_notifications"
        ? { data: options.jobs || [], error: options.claimError || null }
        : { data: null, error: options.finishError || null };
    },
    from(table: string) {
      const rows = {
        team_notifications: {
          state: "sending",
          lease_id: "lease",
          recipient_id: "recipient",
          reason: "message",
        },
        team_cards: {
          archived: false,
          completed: false,
          assignees: ["recipient"],
        },
        team_members: { notify_discord: true, notify_email: true },
      };
      return {
        update() {
          calls.push("cancelNotification");
          return this;
        },
        select() {
          return this;
        },
        eq() {
          return this;
        },
        async single() {
          return { data: rows[table], error: null };
        },
        async maybeSingle() {
          return { data: rows[table], error: null };
        },
      };
    },
  };
  const imports = {
    "npm:@supabase/supabase-js@2.110.8": {
      createClient() {
        calls.push("createClient");
        return client;
      },
    },
    "./sender.ts": {
      async deliverNotification() {
        calls.push("deliverNotification");
      },
    },
    "./diagnostics.ts": diagnostics,
  };
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  runInNewContext(output, {
    exports: {},
    require(name: string) {
      assert.ok(name in imports, `Unexpected import ${name}`);
      return imports[name];
    },
    Deno: {
      env: {
        get(name: string) {
          return env[name];
        },
      },
      serve(callback: typeof handler) {
        handler = callback;
      },
    },
    Request,
    Response,
    crypto,
    console: {
      error(...values: unknown[]) {
        logs.push(values);
      },
    },
  });
  return {
    logs,
    calls,
    async invoke(secret = "test-cron-secret") {
      return handler(
        new Request("https://worker.example", {
          method: "POST",
          headers: { "x-team-cron-secret": secret },
        }),
      );
    },
  };
}

test("queue RPC error is logged with its database code; response excludes raw database details", async () => {
  const instance = worker({
    claimError: {
      code: "PGRST202",
      message: "Could not find team_claim_notifications",
      details: "private recipient data",
      hint: "test-service-key",
    },
  });
  const response = await instance.invoke();
  assert.equal(response.status, 500);
  const body = await response.json();
  assert.equal(body.error, "queue_unavailable");
  assert.equal(body.database_code, "PGRST202");
  assert.match(body.request_id, /^[0-9a-f-]{36}$/);
  assert.equal(instance.logs.length, 1);
  assert.deepEqual(instance.logs[0][1], {
    error: "queue_unavailable",
    request_id: body.request_id,
    database_code: "PGRST202",
    message: "Could not find team_claim_notifications",
  });
  assert.doesNotMatch(
    JSON.stringify([body, instance.logs]),
    /private recipient data|test-service-key|test-cron-secret/,
  );
  assert.deepEqual(instance.calls, [
    "createClient",
    "team_claim_notifications",
  ]);
});

test("acknowledgement failure preserves counts and logs the exact database error", async () => {
  const instance = worker({
    jobs: [
      {
        id: "job",
        lease_id: "lease",
        card_id: "card",
        workspace_id: "workspace",
        channel: "email",
      },
    ],
    finishError: {
      code: "42501",
      message: "permission denied for function team_finish_notification",
    },
  });
  const response = await instance.invoke();
  const body = await response.json();
  assert.equal(response.status, 500);
  assert.equal(body.error, "queue_ack_failed");
  assert.equal(body.database_code, "42501");
  assert.equal(body.sent, 1);
  assert.equal(body.failed, 0);
  assert.ok(instance.calls.includes("deliverNotification"));
  assert.equal(instance.logs.length, 1);
});

test("missing environment is diagnosed without logging configured secrets", async () => {
  const instance = worker({ env: { SUPABASE_URL: undefined } });
  const response = await instance.invoke();
  assert.equal((await response.json()).error, "worker_not_configured");
  assert.equal(instance.calls.length, 0);
  assert.match(JSON.stringify(instance.logs), /Missing SUPABASE_URL/);
  assert.doesNotMatch(
    JSON.stringify(instance.logs),
    /test-service-key|test-cron-secret/,
  );
});

test("notification is cancelled when its recipient no longer has a master role", async () => {
  const instance = worker({
    recipientIsMaster: false,
    jobs: [
      {
        id: "job",
        lease_id: "lease",
        card_id: "card",
        workspace_id: "workspace",
        channel: "discord",
      },
    ],
  });
  const response = await instance.invoke();
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { sent: 0, failed: 0 });
  assert.ok(instance.calls.includes("cancelNotification"));
  assert.equal(instance.calls.includes("deliverNotification"), false);
  assert.equal(instance.calls.includes("team_finish_notification"), false);
});

test("unexpected worker errors produce a correlated server log and controlled response", async () => {
  const instance = worker({ unexpected: new Error("Database request failed") });
  const response = await instance.invoke();
  const body = await response.json();
  assert.equal(body.error, "worker_exception");
  assert.equal(instance.logs.length, 1);
  assert.equal(
    (instance.logs[0][1] as { request_id: string }).request_id,
    body.request_id,
  );
  assert.doesNotMatch(JSON.stringify(body), /Database request failed/);
});

test("unauthorized calls never reach the database or diagnostics; an empty queue stays successful", async () => {
  const denied = worker();
  assert.equal((await denied.invoke("wrong-secret")).status, 401);
  assert.deepEqual(denied.calls, []);
  assert.deepEqual(denied.logs, []);
  const success = worker();
  const response = await success.invoke();
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { sent: 0, failed: 0 });
  assert.deepEqual(success.logs, []);
});
