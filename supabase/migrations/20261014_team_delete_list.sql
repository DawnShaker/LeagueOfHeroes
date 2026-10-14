-- Удаление списка руководителем с сохранением всех карточек.
begin;
create index if not exists team_activity_history_idx on public.team_activity(workspace_id, id desc);
create or replace function public.team_delete_list(p_list uuid, p_move_to uuid default null)
returns void language plpgsql security definer set search_path = public as $$
declare
  source public.team_lists;
  destination public.team_lists;
  last_position integer;
  moved_count integer := 0;
begin
  select * into source from public.team_lists where id = p_list;
  if not found or not public.team_access(source.workspace_id, 'manage') then
    raise exception 'Нет права управлять списком или список уже удалён';
  end if;
  if p_move_to = p_list then
    raise exception 'Выберите другой список этого пространства';
  end if;
  -- Lock both lists in a stable order. FK checks prevent cards being added to
  -- the source between the move and deletion; any failure rolls back the move.
  perform id from public.team_lists
    where workspace_id = source.workspace_id and (id = p_list or id = p_move_to)
    order by id for update;
  select * into source from public.team_lists where id = p_list;
  if not found then
    raise exception 'Список уже удалён. Обновите доску';
  end if;
  if p_move_to is not null then
    select * into destination from public.team_lists
      where id = p_move_to and workspace_id = source.workspace_id;
    if not found then
      raise exception 'Выберите другой список этого пространства';
    end if;
    select coalesce(max(position), -1) into last_position
      from public.team_cards where workspace_id = source.workspace_id and list_id = p_move_to;
    with moving as (
      select id, row_number() over (order by position, id) as offset_position
      from public.team_cards where workspace_id = source.workspace_id and list_id = p_list
    )
    update public.team_cards c
      set list_id = p_move_to, position = last_position + moving.offset_position
      from moving where c.id = moving.id and c.list_id = p_list;
    get diagnostics moved_count = row_count;
  elsif exists (select 1 from public.team_cards where list_id = p_list) then
    raise exception 'Для удаления списка с карточками выберите список для переноса';
  end if;
  delete from public.team_lists where id = p_list;
  insert into public.team_activity(workspace_id, actor_id, detail)
    values(source.workspace_id, auth.uid(), 'Удалён список: ' || source.title ||
      case when moved_count > 0 then format('. Карточки (%s) перенесены в «%s».', moved_count, destination.title) else '' end);
end;
$$;
revoke all on function public.team_delete_list(uuid,uuid) from public, anon;
grant execute on function public.team_delete_list(uuid,uuid) to authenticated;
notify pgrst, 'reload schema';
commit;
