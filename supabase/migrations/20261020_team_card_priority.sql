begin;
alter table public.team_cards
  add column priority text not null default 'p2'
  check (priority in ('p1', 'p2', 'p3'));
grant update (priority) on public.team_cards to authenticated;
notify pgrst, 'reload schema';
commit;
