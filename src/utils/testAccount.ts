import { createClient, type SupabaseClient } from '@supabase/supabase-js';

export type AccountRole = 'player' | 'master' | 'admin';
export type AccountMode = AccountRole;

const pageConfig =
  typeof window !== 'undefined' ? window.__LOH_TEST_ACCOUNT_CONFIG__ : undefined;

const supabaseUrl =
  (import.meta.env.PUBLIC_SUPABASE_URL as string | undefined) || pageConfig?.supabaseUrl;
const supabaseAnonKey =
  (import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string | undefined) ||
  pageConfig?.supabaseAnonKey;

export const isTestAccountConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const testAccountSupabase: SupabaseClient | null = isTestAccountConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    })
  : null;

/**
 * Разрешает проверять закрытый конструктор без Discord только на dev-сервере.
 * `import.meta.env.DEV` становится false в Netlify-сборке, поэтому одного
 * подменённого hostname недостаточно, чтобы включить обход в продакшене.
 */
export const isLocalAuthBypassEnabled = (() => {
  if (!import.meta.env.DEV || typeof window === 'undefined') return false;
  const hostname = window.location.hostname.toLocaleLowerCase('en');
  return hostname === 'localhost'
    || hostname === '127.0.0.1'
    || hostname === '[::1]'
    || hostname.endsWith('.webcontainer.io');
})();

export function normalizeAccountRole(value: unknown): AccountRole {
  if (value === 'admin') return 'admin';
  if (value === 'master' || value === 'gm') return 'master';
  return 'player';
}

export function availableAccountModes(role: AccountRole): AccountMode[] {
  if (role === 'admin') return ['admin', 'master', 'player'];
  if (role === 'master') return ['master', 'player'];
  return ['player'];
}

export function defaultAccountMode(role: AccountRole): AccountMode {
  const saved = window.localStorage.getItem('loh-test-account-mode') as AccountMode | null;
  return saved && availableAccountModes(role).includes(saved) ? saved : role;
}

export function accountModePath(mode: AccountMode): string {
  return `/test/cabinet/${mode}/`;
}
