-- supabase/schema.sql
-- Схема БД для Supabase: user_profiles, invites, bookmarks
-- Запуск: вставьте в Supabase SQL Editor или выполните через psql

-- Расширение для gen_random_uuid()
create extension if not exists "pgcrypto";

-- Таблица профилей пользователей (связь с auth.users)
create table if not exists public.user_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  discord_id text unique,
  role text not null default 'user', -- 'user', 'gm', 'admin'
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

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

-- Политики доступа
create policy if not exists "users_can_view_own_profile" on public.user_profiles
  for select using (auth.uid() = id);

create policy if not exists "admins_view_all_profiles" on public.user_profiles
  for select using (
    exists (select 1 from public.user_profiles where id = auth.uid() and role = 'admin')
  );

create policy if not exists "users_view_own_bookmarks" on public.bookmarks
  for select using (auth.uid() = user_id);

create policy if not exists "users_manage_own_bookmarks" on public.bookmarks
  for insert, update, delete using (auth.uid() = user_id);

create policy if not exists "admins_manage_invites" on public.invites
  for all using (
    exists (select 1 from public.user_profiles where id = auth.uid() and role = 'admin')
  );

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
-- 1) После применения миграции зарегистрируйте администратора через Supabase Auth,
--    затем выполните: update public.user_profiles set role = 'admin' where email = 'you@yourdomain.tld';
-- 2) Не храните SUPABASE_SERVICE_ROLE_KEY в клиентском коде.
