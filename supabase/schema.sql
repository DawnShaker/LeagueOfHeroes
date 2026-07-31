-- supabase/schema.sql
-- Схема БД для Supabase: Discord Auth, роли, invites, bookmarks
-- Запуск: вставьте в Supabase SQL Editor или выполните через psql

-- Расширение для gen_random_uuid()
create extension if not exists "pgcrypto";

-- Таблица профилей пользователей (связь с auth.users)
create table if not exists public.user_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  discord_id text unique,
  display_name text,
  avatar_url text,
  role text not null default 'player',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Совместимое обновление ранней версии схемы.
alter table public.user_profiles add column if not exists display_name text;
alter table public.user_profiles add column if not exists avatar_url text;
alter table public.user_profiles alter column role set default 'player';
update public.user_profiles set role = 'player' where role = 'user';
update public.user_profiles set role = 'master' where role = 'gm';
update public.user_profiles set role = 'player' where role not in ('player', 'master', 'admin');
alter table public.user_profiles drop constraint if exists user_profiles_role_check;
alter table public.user_profiles
  add constraint user_profiles_role_check check (role in ('player', 'master', 'admin'));

-- Таблица инвайтов
create table if not exists public.invites (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  type text not null,
  created_by uuid references public.user_profiles(id),
  used_by uuid references public.user_profiles(id),
  max_uses int default 1,
  current_uses int default 0,
  expires_at timestamptz,
  created_at timestamptz default now(),
  used_at timestamptz
);

-- Таблица закладок
create table if not exists public.bookmarks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.user_profiles(id) on delete cascade,
  resource_type text not null,
  resource_id text not null,
  created_at timestamptz default now(),
  constraint bookmarks_unique unique(user_id, resource_type, resource_id)
);

-- Включаем Row-Level Security
alter table public.user_profiles enable row level security;
alter table public.invites enable row level security;
alter table public.bookmarks enable row level security;

-- Проверка администратора вынесена в security definer, чтобы политики профилей
-- не вызывали рекурсивную проверку RLS той же таблицы.
create or replace function public.is_account_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

revoke all on function public.is_account_admin() from public;
grant execute on function public.is_account_admin() to authenticated;

-- Автоматически создаём/обновляем профиль после Discord OAuth.
create or replace function public.handle_auth_user_profile()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.user_profiles (
    id,
    email,
    discord_id,
    display_name,
    avatar_url,
    role
  )
  values (
    new.id,
    new.email,
    coalesce(
      new.raw_user_meta_data ->> 'provider_id',
      new.raw_user_meta_data ->> 'sub'
    ),
    coalesce(
      new.raw_user_meta_data ->> 'full_name',
      new.raw_user_meta_data ->> 'name',
      new.raw_user_meta_data ->> 'user_name',
      new.email
    ),
    new.raw_user_meta_data ->> 'avatar_url',
    'player'
  )
  on conflict (id) do update set
    email = excluded.email,
    discord_id = coalesce(excluded.discord_id, public.user_profiles.discord_id),
    display_name = coalesce(excluded.display_name, public.user_profiles.display_name),
    avatar_url = coalesce(excluded.avatar_url, public.user_profiles.avatar_url),
    updated_at = now();

  return new;
end;
$$;

drop trigger if exists on_auth_user_profile_changed on auth.users;
create trigger on_auth_user_profile_changed
  after insert or update of email, raw_user_meta_data on auth.users
  for each row execute function public.handle_auth_user_profile();

-- Создаём профили для уже существующих пользователей.
insert into public.user_profiles (id, email, discord_id, display_name, avatar_url, role)
select
  id,
  email,
  coalesce(raw_user_meta_data ->> 'provider_id', raw_user_meta_data ->> 'sub'),
  coalesce(
    raw_user_meta_data ->> 'full_name',
    raw_user_meta_data ->> 'name',
    raw_user_meta_data ->> 'user_name',
    email
  ),
  raw_user_meta_data ->> 'avatar_url',
  'player'
from auth.users
on conflict (id) do nothing;

-- Политики доступа
drop policy if exists "users_can_view_own_profile" on public.user_profiles;
create policy "users_can_view_own_profile" on public.user_profiles
  for select using (auth.uid() = id);

drop policy if exists "admins_view_all_profiles" on public.user_profiles;
create policy "admins_view_all_profiles" on public.user_profiles
  for select using (public.is_account_admin());

drop policy if exists "admins_update_profiles" on public.user_profiles;
create policy "admins_update_profiles" on public.user_profiles
  for update
  using (public.is_account_admin())
  with check (public.is_account_admin());

drop policy if exists "users_view_own_bookmarks" on public.bookmarks;
create policy "users_view_own_bookmarks" on public.bookmarks
  for select using (auth.uid() = user_id);

drop policy if exists "users_manage_own_bookmarks" on public.bookmarks;
drop policy if exists "users_insert_own_bookmarks" on public.bookmarks;
create policy "users_insert_own_bookmarks" on public.bookmarks
  for insert with check (auth.uid() = user_id);

drop policy if exists "users_update_own_bookmarks" on public.bookmarks;
create policy "users_update_own_bookmarks" on public.bookmarks
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "users_delete_own_bookmarks" on public.bookmarks;
create policy "users_delete_own_bookmarks" on public.bookmarks
  for delete using (auth.uid() = user_id);

drop policy if exists "admins_manage_invites" on public.invites;
create policy "admins_manage_invites" on public.invites
  for all using (public.is_account_admin()) with check (public.is_account_admin());

-- Обновление updated_at при изменении профиля
create or replace function public.set_timestamp()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_timestamp on public.user_profiles;
create trigger set_timestamp
  before update on public.user_profiles
  for each row execute function public.set_timestamp();

-- Примечания:
-- 1) После применения миграции войдите через Discord, затем назначьте первого
--    администратора вручную:
--    update public.user_profiles set role = 'admin' where discord_id = 'DISCORD_USER_ID';
-- 2) Не храните SUPABASE_SERVICE_ROLE_KEY в клиентском коде.
