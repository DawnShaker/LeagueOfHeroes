[![Netlify Status](https://api.netlify.com/api/v1/badges/77025382-2349-4ada-a5ca-c0f4389d2f10/deploy-status)](https://app.netlify.com/projects/leagueoheroes/deploys)

# League of Heroes — D&D 5E Handbook & Rules Guide

Актуальная локальная копия справочника и инструментов для кампаний D&D 5E (вёрстка и сборка на Astro).

Ключевые отличия от исходного README:
- Страница Glossary реализована (`/glossary`), данные лежат в `src/data/glossary.ts`.
- Динамический маршрут `src/pages/glossary/[id].astro` использует `getStaticPaths()` (SSG).
- Добавлены кнопки донатов в навигации (Boosty / Patreon) в `src/components/navigation/TopNav.astro`.
- Для совместимости в проде добавлен `@vitejs/plugin-legacy` в `astro.config.mjs` — сборка генерирует legacy-бандлы для старых браузеров.

## Структура (коротко)

- `public/` — статические ассеты
- `src/components/` — переиспользуемые компоненты (navigation, species, classes, handbook и т.д.)
- `src/data/` — основная база данных (species, classes, spells, glossary и др.)
- `src/pages/` — страницы сайта (включая динамические маршруты `[...]`)
- `src/styles/` — глобальные стили и тема
- `astro.config.mjs`, `package.json`, `tsconfig.json` — конфиги проекта

## Быстрые команды

```bash
npm install
npm run dev      # локально (dev server)
npm run build    # production build -> ./dist
npm run preview  # локальный просмотр собранного сайта
```

После изменения зависимостей выполните `npm install` перед сборкой на CI/Netlify.

## Glossary

- Данные: `src/data/glossary.ts` — массив объектов { id, name, nameEn, category, html }
- Страница: `src/pages/glossary.astro` — список + детальная панель, клиентский скрипт читает данные из `#glossary-data`.
- Прямые ссылки: `/glossary/:id` перенаправляют на `/glossary#id` (файл `src/pages/glossary/[id].astro` содержит `getStaticPaths()` для SSG).

Чтобы добавить запись, создайте объект в `glossary.ts` с уникальным `id` и при необходимости полем `html` (вставляется через innerHTML).

## Развёртывание и типичные проблемы

- Netlify + Astro (SSG): все динамические маршруты должны экспортировать `getStaticPaths()` — иначе сборка упадёт с ошибкой `GetStaticPathsRequired`. Файл `src/pages/glossary/[id].astro` уже исправлен.
- Если в проде вы видите `Uncaught SyntaxError: Unexpected token '.'` — это часто связано с неподдерживаемым синтаксисом (optional chaining `?.`) в сгенерированном клиентском JS. Решения:
	- Оставить `@vitejs/plugin-legacy` в `astro.config.mjs` (в репозитории уже добавлен).
	- Или удалить/заменить использованные `?.` на явные проверки.
- После обновления кода на Netlify полезно очистить кэш/edge-кэш (Invalidate cache) и повторно задеплоить.

## Тестовые личные кабинеты и Discord Auth

Тестовый контур намеренно не добавлен в общую навигацию. Точка входа доступна
только по прямой ссылке:

- `/test/auth/` — вход и регистрация через Discord;
- `/test/cabinet/player/` — кабинет игрока;
- `/test/cabinet/master/` — кабинет мастера;
- `/test/cabinet/admin/` — кабинет администратора.

Для подключения:

1. Скопируйте `.env.example` в `.env` и заполните `PUBLIC_SUPABASE_URL` и
   `PUBLIC_SUPABASE_ANON_KEY`.
2. Выполните `supabase/schema.sql` в Supabase SQL Editor.
3. В Discord Developer Portal создайте приложение и добавьте callback Supabase:
   `https://YOUR_PROJECT_REF.supabase.co/auth/v1/callback`.
4. В Supabase откройте Authentication → Providers → Discord, включите провайдер
   и добавьте Discord Client ID и Client Secret.
5. В Authentication → URL Configuration добавьте адреса возврата:
   `http://localhost:4321/test/auth/callback/` и
   `https://YOUR_NETLIFY_DOMAIN/test/auth/callback/`.
6. После первого входа назначьте первого администратора в SQL Editor:
   `update public.user_profiles set role = 'admin' where discord_id = 'DISCORD_USER_ID';`

Роль `master` автоматически открывает режимы мастера и игрока. Роль `admin`
открывает все три режима. Активный режим меняется переключателем в кабинете и
не требует повторного входа.

## Полезные файлы

- Навигация: `src/components/navigation/TopNav.astro` (добавлены кнопки донатов)
- Glossary: `src/pages/glossary.astro`, `src/pages/glossary/[id].astro`, `src/data/glossary.ts`
- Плагины/конфиг: `astro.config.mjs` (подключён `@vitejs/plugin-legacy`)

## Контрибьютинг

- Следуйте типам в `src/types/` при добавлении данных.
- Для больших HTML-фрагментов в `glossary` используйте поле `html` и проверяйте рендер на XSS (данные локальные — безопаснее, но будьте внимательны при внешнем вводе).
