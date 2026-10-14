import type { SupabaseClient } from "@supabase/supabase-js";
import type { AccountRole } from "./testAccount";

/** A successful request must return the role actually stored by PostgreSQL. */
export async function saveAccountRole(
  client: SupabaseClient,
  profileId: string,
  role: AccountRole,
): Promise<AccountRole> {
  const { data, error } = await client
    .from("user_profiles")
    .update({ role })
    .eq("id", profileId)
    .select("id,role")
    .maybeSingle();

  if (error) {
    if (
      role === "test_master" &&
      error.code === "23514" &&
      error.message.includes("user_profiles_role_check")
    ) {
      throw new Error(
        "База пока не поддерживает роль «Тестовый мастер». Выполните в Supabase → SQL Editor миграцию supabase/migrations/20261008_test_master_role.sql, затем назначьте роль повторно.",
      );
    }
    throw new Error(error.message);
  }
  if (!data || data.id !== profileId) {
    throw new Error(
      "Роль не сохранена: профиль недоступен для изменения. Обновите страницу и проверьте права администратора.",
    );
  }
  if (data.role !== role) {
    throw new Error(
      "База не сохранила выбранную роль. Обновите список пользователей и проверьте настройки базы.",
    );
  }
  return data.role;
}
