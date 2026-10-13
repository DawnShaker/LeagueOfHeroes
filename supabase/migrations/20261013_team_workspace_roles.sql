-- Рабочие пространства доступны только ролям master и admin на сайте.
-- Существующие назначения сохраняются; при понижении роли доступ прекращается.
begin;
create or replace function public.team_is_master(p_user uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.user_profiles where id=p_user and role in ('master','admin'));
$$;
revoke all on function public.team_is_master(uuid) from public,anon,authenticated;
grant execute on function public.team_is_master(uuid) to service_role;

create or replace function public.team_access(p_workspace uuid, p_level text default 'read') returns boolean
language sql stable security definer set search_path = public as $$
  select auth.uid() is not null and public.team_is_master(auth.uid()) and (public.is_account_admin() or exists (
    select 1 from public.team_members where workspace_id = p_workspace and user_id = auth.uid()
      and (p_level = 'read' or role = 'manager' or (p_level = 'write' and role = 'editor'))
  ));
$$;

create or replace function public.team_set_member(p_workspace uuid, p_discord_id text, p_role text) returns void
language plpgsql security definer set search_path = public as $$
declare v_user uuid;
begin
  if not public.team_access(p_workspace,'manage') then raise exception 'Нет права управлять участниками'; end if;
  select i.user_id into v_user from auth.identities i join public.user_profiles p on p.id=i.user_id
    where i.provider='discord' and coalesce(i.identity_data->>'provider_id',i.identity_data->>'sub')=trim(p_discord_id);
  if v_user is null then raise exception 'Пользователь должен сначала войти на сайт через Discord'; end if;
  if p_role is not null and not public.team_is_master(v_user) then raise exception 'Рабочие пространства доступны только мастерам и администраторам'; end if;
  if v_user = auth.uid() then raise exception 'Собственный доступ изменяет другой руководитель'; end if;
  if p_role is null then
    delete from public.team_members where workspace_id = p_workspace and user_id = v_user;
    update public.team_cards set assignees = array_remove(assignees,v_user) where workspace_id = p_workspace and v_user = any(assignees);
    update public.team_notifications n set state='cancelled',error_code='recipient_unavailable' where n.recipient_id=v_user and n.state in ('pending','sending') and exists (select 1 from public.team_cards c where c.id=n.card_id and c.workspace_id=p_workspace);
  else
    insert into public.team_members(workspace_id,user_id,role) values(p_workspace,v_user,p_role)
      on conflict(workspace_id,user_id) do update set role = excluded.role;
  end if;
  insert into public.team_activity(workspace_id,actor_id,detail) values(p_workspace,auth.uid(),case when p_role is null then 'Участник удалён из пространства' else 'Изменён доступ участника: ' || p_role end);
end;
$$;

create or replace function public.team_notification_preferences(p_workspace uuid, p_discord boolean, p_email boolean) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.team_access(p_workspace) then raise exception 'Нет доступа'; end if;
  update public.team_members set notify_discord = p_discord, notify_email = p_email where workspace_id = p_workspace and user_id = auth.uid();
  if not found then raise exception 'Вы не участник пространства'; end if;
  insert into public.team_notifications(card_id,recipient_id,channel,reason,scheduled_at,dedupe_key)
  select c.id,auth.uid(),ch,'reminder',c.due_at - make_interval(mins => c.reminder_minutes),c.id::text || ':' || c.schedule_revision || ':' || auth.uid() || ':' || ch
  from public.team_cards c cross join unnest(array['discord','email']) ch
  where c.workspace_id = p_workspace and auth.uid() = any(c.assignees) and not c.completed and not c.archived
    and c.due_at >= now() and c.reminder_minutes is not null
    and ((ch = 'discord' and p_discord) or (ch = 'email' and p_email))
  on conflict(dedupe_key) do update set state = 'pending',error_code = null,attempts = 0
    where team_notifications.state = 'cancelled' and team_notifications.error_code = 'recipient_unavailable';
end;
$$;

create or replace function public.team_queue_message(p_card uuid, p_message text) returns integer
language plpgsql security definer set search_path = public as $$
declare v_card public.team_cards; v_count integer; v_batch uuid := gen_random_uuid();
begin
  select * into v_card from public.team_cards where id = p_card for update;
  if not found or not public.team_access(v_card.workspace_id,'write') then raise exception 'Нет доступа'; end if;
  if v_card.archived then raise exception 'Карточка в архиве'; end if;
  if length(trim(p_message)) not between 1 and 1500 then raise exception 'Сообщение: от 1 до 1500 символов'; end if;
  if exists (select 1 from public.team_notifications where card_id = p_card and reason = 'message' and created_at > now() - interval '1 minute') then raise exception 'Повторная рассылка доступна через минуту'; end if;
  insert into public.team_notifications(card_id,recipient_id,channel,reason,message,scheduled_at,dedupe_key)
    select p_card,m.user_id,ch,'message',trim(p_message),now(),v_batch || ':' || m.user_id || ':' || ch
    from public.team_members m cross join unnest(array['discord','email']) ch where m.workspace_id = v_card.workspace_id and m.user_id = any(v_card.assignees) and public.team_is_master(m.user_id)
      and ((ch = 'discord' and m.notify_discord) or (ch = 'email' and m.notify_email));
  get diagnostics v_count = row_count;
  if v_count > 0 then insert into public.team_activity(workspace_id,card_id,actor_id,detail) values(v_card.workspace_id,p_card,auth.uid(),'Сообщение поставлено в очередь исполнителям карточки'); end if;
  return v_count;
end;
$$;

create or replace function public.team_claim_notifications()
returns table(id uuid, lease_id uuid, channel text, discord_id text, email text, title text, message text, card_id uuid, workspace_id uuid)
language plpgsql security definer set search_path = public as $$
begin
  update public.team_notifications n set state = 'failed',error_code = 'worker_timeout' where n.state = 'sending' and n.leased_at < now() - interval '5 minutes' and n.attempts >= 5;
  update public.team_notifications n set state = 'cancelled',error_code = 'recipient_unavailable'
  where n.state in ('pending','sending') and not exists (
    select 1 from public.team_cards c join public.team_members m on m.workspace_id = c.workspace_id and m.user_id = n.recipient_id
    where c.id = n.card_id and public.team_is_master(m.user_id) and not c.archived and m.user_id = any(c.assignees) and (n.reason <> 'reminder' or not c.completed)
      and ((n.channel = 'discord' and m.notify_discord) or (n.channel = 'email' and m.notify_email))
  );
  return query with picked as (
    select n.id from public.team_notifications n where (n.state = 'pending' or (n.state = 'sending' and n.leased_at < now() - interval '5 minutes')) and n.scheduled_at <= now() and n.attempts < 5
    order by n.scheduled_at limit 5 for update skip locked
  ), claimed as (
    update public.team_notifications n set state = 'sending',lease_id = gen_random_uuid(),leased_at = now(),attempts = n.attempts + 1 from picked where n.id = picked.id returning n.*
  ) select n.id,n.lease_id,n.channel,coalesce(i.identity_data->>'provider_id',i.identity_data->>'sub'),case when u.email_confirmed_at is not null then u.email else null end,
      c.title,case when n.reason = 'reminder' then 'Напоминание о сроке: ' || to_char(c.due_at at time zone 'UTC','YYYY-MM-DD HH24:MI') || ' UTC' else n.message end,c.id,c.workspace_id
    from claimed n join public.team_cards c on c.id = n.card_id join auth.users u on u.id = n.recipient_id
    left join auth.identities i on i.user_id=u.id and i.provider='discord';
end;
$$;
commit;
