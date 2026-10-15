import type { SupabaseClient } from "@supabase/supabase-js";
import type { AccountRole } from "./testAccount";

/** A successful request must return the role actually stored by PostgreSQL. */
export async function saveAccountRole(
  client: SupabaseClient,
  profileId: string,
  role: AccountRole,
  characterSlots?: number,
): Promise<AccountRole> {
  if (characterSlots !== undefined && (!Number.isInteger(characterSlots) || characterSlots < 1 || characterSlots > 100)) {
    throw new Error("Укажите целое количество слотов от 1 до 100.");
  }
  const { data, error } = await client
    .from("user_profiles")
    .update(characterSlots === undefined ? { role } : { role, character_slots: characterSlots })
    .eq("id", profileId)
    .select(characterSlots === undefined ? "id,role" : "id,role,character_slots")
    .maybeSingle<{ id: string; role: AccountRole; character_slots?: number }>();

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
  if (characterSlots !== undefined && data.character_slots !== characterSlots) {
    throw new Error("База не сохранила выбранный лимит слотов. Обновите список и проверьте права администратора.");
  }
  return data.role;
}
