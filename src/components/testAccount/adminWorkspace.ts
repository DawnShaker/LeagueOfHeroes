import { accountRoles, accountRoleLabels, isLocalAuthBypassEnabled, localAccountPreviewProfile, normalizeAccountRole, testAccountSupabase, type AccountRole } from '../../utils/testAccount';
import { saveAccountRole } from '../../utils/adminRoles';

interface Profile {
  id: string;
  email: string | null;
  discord_id: string | null;
  display_name: string | null;
  avatar_url: string | null;
  role: string;
  character_slots: number;
  created_at: string | null;
}
interface Draft { role: AccountRole; slots: string }
const escape = (value: unknown) => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export async function initializeAdminWorkspace(userId: string, onSlotsChanged: (slots: number) => void) {
  const root = document.querySelector<HTMLElement>('#admin-dashboard')!;
  const body = root.querySelector<HTMLTableSectionElement>('#admin-users-body')!;
  const search = root.querySelector<HTMLInputElement>('#admin-search')!;
  const roleFilter = root.querySelector<HTMLSelectElement>('#admin-role-filter')!;
  const previous = root.querySelector<HTMLButtonElement>('#admin-prev')!;
  const next = root.querySelector<HTMLButtonElement>('#admin-next')!;
  const refresh = root.querySelector<HTMLButtonElement>('#refresh-users')!;
  const summary = root.querySelector<HTMLElement>('#admin-page-summary')!;
  const status = root.querySelector<HTMLElement>('#admin-status')!;
  const stats = root.querySelector<HTMLElement>('#admin-stats')!;
  const pageSize = 20;
  const drafts = new Map<string, Draft>();
  let profiles: Profile[] = [], page = 0, total = 0, request = 0, saving = false;
  let searchTimer: ReturnType<typeof setTimeout>;
  let totals: Record<string, number> = {};

  function message(text: string, error = false) {
    status.textContent = text;
    status.dataset.kind = error ? 'error' : 'success';
    status.hidden = !text;
  }
  function renderStats() {
    stats.innerHTML = [['', 'Всего'], ['player', 'Игроки'], ['test_master', 'Тестовые мастера'], ['master', 'Мастера'], ['admin', 'Администраторы']].map(([role, label]) => `<button type="button" data-role-count="${role}" aria-pressed="${roleFilter.value === role}"><span>${label}</span><strong>${totals[role] ?? '—'}</strong></button>`).join('');
  }
  function render() {
    body.innerHTML = profiles.length ? profiles.map(profile => {
      const draft = drafts.get(profile.id);
      const role = draft?.role ?? normalizeAccountRole(profile.role);
      const slots = draft?.slots ?? String(profile.character_slots);
      const name = profile.display_name || profile.email || 'Без имени';
      const disabled = isLocalAuthBypassEnabled || saving;
      return `<tr data-profile="${escape(profile.id)}">
        <td data-label="Пользователь"><span class="admin-user">${profile.avatar_url ? `<img src="${escape(profile.avatar_url)}" alt="" loading="lazy">` : ''}<span><strong>${escape(name)}</strong><small>${escape(profile.email || (isLocalAuthBypassEnabled ? 'Локальный профиль' : 'Discord'))}</small></span></span></td>
        <td data-label="Discord ID"><code>${escape(profile.discord_id || '—')}</code></td>
        <td data-label="Роль"><select data-admin-role="${escape(profile.id)}" aria-label="Роль пользователя ${escape(name)}" ${disabled || profile.id === userId ? 'disabled' : ''}>${accountRoles.map(value => `<option value="${value}" ${value === role ? 'selected' : ''}>${accountRoleLabels[value]}</option>`).join('')}</select>${profile.id === userId ? '<small class="field-help">Свою роль меняет другой администратор</small>' : ''}</td>
        <td data-label="Слоты героев"><input class="slot-input" type="number" min="1" max="100" step="1" required value="${escape(slots)}" data-character-slots="${escape(profile.id)}" aria-label="Количество слотов персонажей пользователя ${escape(name)}" ${disabled ? 'disabled' : ''}></td>
        <td data-label="Создан">${profile.created_at ? escape(new Intl.DateTimeFormat('ru-RU', { dateStyle: 'medium' }).format(new Date(profile.created_at))) : '—'}</td>
        <td class="admin-row-actions" data-label="Изменения"><div><button type="button" class="primary-button" data-save-profile="${escape(profile.id)}" ${disabled || !draft ? 'disabled' : ''}>Сохранить</button><button type="button" class="ghost-button" data-reset-profile="${escape(profile.id)}" ${disabled || !draft ? 'disabled' : ''}>Сбросить</button></div><p class="inline-status row-status" role="status" aria-live="polite">${isLocalAuthBypassEnabled ? 'Изменение пользователей доступно после входа на сайте' : draft ? 'Есть несохранённые изменения' : ''}</p></td>
      </tr>`;
    }).join('') : '<tr><td colspan="6" class="empty-value">Пользователи не найдены. Измените поиск или фильтр.</td></tr>';
    summary.textContent = total ? `${page * pageSize + 1}–${Math.min((page + 1) * pageSize, total)} из ${total}` : 'Нет результатов';
    previous.disabled = saving || page === 0;
    next.disabled = saving || (page + 1) * pageSize >= total;
    renderStats();
  }

  async function load(loadTotals = false) {
    if (saving) return;
    const sequence = ++request;
    body.setAttribute('aria-busy', 'true');
    refresh.disabled = previous.disabled = next.disabled = true;
    body.querySelectorAll<HTMLInputElement | HTMLButtonElement | HTMLSelectElement>('input, button, select').forEach(control => control.disabled = true);
    message('Загружаем пользователей…');
    try {
      const queryText = search.value.trim();
      if (isLocalAuthBypassEnabled) {
        const all: Profile[] = [localAccountPreviewProfile];
        totals = Object.fromEntries([['', all.length], ...accountRoles.map(role => [role, all.filter(profile => profile.role === role).length])]);
        const filtered = all.filter(profile => (!roleFilter.value || profile.role === roleFilter.value) && [profile.display_name, profile.email, profile.discord_id].some(value => value?.toLocaleLowerCase('ru').includes(queryText.toLocaleLowerCase('ru'))));
        total = filtered.length;
        profiles = filtered.slice(page * pageSize, (page + 1) * pageSize);
      } else {
        if (!testAccountSupabase) throw new Error('Сеанс недоступен. Войдите в аккаунт повторно.');
        let query = testAccountSupabase.from('user_profiles').select('id,email,discord_id,display_name,avatar_url,role,character_slots,created_at', { count: 'exact' });
        if (roleFilter.value) query = query.eq('role', roleFilter.value);
        if (queryText) {
          const pattern = JSON.stringify(`%${queryText.replace(/[\\%_]/g, '\\$&')}%`);
          query = query.or(`display_name.ilike.${pattern},email.ilike.${pattern},discord_id.ilike.${pattern}`);
        }
        const results = await Promise.all([
          query.order('created_at', { ascending: false }).order('id').range(page * pageSize, (page + 1) * pageSize - 1),
          loadTotals ? Promise.all(['', ...accountRoles].map(async role => {
            let countQuery = testAccountSupabase!.from('user_profiles').select('id', { count: 'exact', head: true });
            if (role) countQuery = countQuery.eq('role', role);
            const result = await countQuery;
            if (result.error) throw result.error;
            return [role, result.count ?? 0] as const;
          })) : null,
        ]);
        if (sequence !== request) return;
        if (results[0].error) throw results[0].error;
        total = results[0].count ?? 0;
        profiles = results[0].data || [];
        if (results[1]) totals = Object.fromEntries(results[1]);
      }
      if (sequence !== request) return;
      if (page > 0 && page * pageSize >= total) {
        page = Math.max(0, Math.ceil(total / pageSize) - 1);
        await load();
        return;
      }
      render();
      message('');
    } catch (error) {
      if (sequence !== request) return;
      message(`Не удалось загрузить пользователей. ${error instanceof Error ? error.message : String((error as { message?: string })?.message || error)} Нажмите «Обновить», чтобы повторить.`, true);
    } finally {
      if (sequence === request) {
        body.setAttribute('aria-busy', 'false');
        refresh.disabled = false;
        previous.disabled = page === 0;
        next.disabled = (page + 1) * pageSize >= total;
        body.querySelectorAll<HTMLTableRowElement>('[data-profile]').forEach(row => {
          row.querySelector<HTMLSelectElement>('[data-admin-role]')!.disabled = isLocalAuthBypassEnabled || row.dataset.profile === userId;
          row.querySelector<HTMLInputElement>('[data-character-slots]')!.disabled = isLocalAuthBypassEnabled;
          row.querySelector<HTMLButtonElement>('[data-save-profile]')!.disabled = isLocalAuthBypassEnabled || !drafts.has(row.dataset.profile!);
          row.querySelector<HTMLButtonElement>('[data-reset-profile]')!.disabled = isLocalAuthBypassEnabled || !drafts.has(row.dataset.profile!);
        });
      }
    }
  }

  body.addEventListener('input', event => {
    const field = event.target as HTMLInputElement | HTMLSelectElement;
    const row = field.closest<HTMLTableRowElement>('[data-profile]');
    const profile = profiles.find(profile => profile.id === row?.dataset.profile);
    if (!row || !profile) return;
    const role = row.querySelector<HTMLSelectElement>('[data-admin-role]')!.value as AccountRole;
    const slots = row.querySelector<HTMLInputElement>('[data-character-slots]')!.value;
    const dirty = role !== normalizeAccountRole(profile.role) || slots !== String(profile.character_slots);
    if (dirty) drafts.set(profile.id, { role, slots }); else drafts.delete(profile.id);
    row.querySelector<HTMLButtonElement>('[data-save-profile]')!.disabled = !dirty;
    row.querySelector<HTMLButtonElement>('[data-reset-profile]')!.disabled = !dirty;
    const rowStatus = row.querySelector<HTMLElement>('.row-status')!;
    rowStatus.dataset.kind = 'success';
    rowStatus.textContent = dirty ? 'Есть несохранённые изменения' : '';
    field.removeAttribute('aria-invalid');
  });
  body.addEventListener('click', async event => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-save-profile], [data-reset-profile]');
    if (!button || button.disabled || saving || !testAccountSupabase || isLocalAuthBypassEnabled) return;
    const id = button.dataset.saveProfile || button.dataset.resetProfile!;
    const profile = profiles.find(profile => profile.id === id)!;
    if (button.dataset.resetProfile) { drafts.delete(id); render(); return; }
    const draft = drafts.get(id);
    if (!draft) return;
    const row = button.closest<HTMLTableRowElement>('tr')!;
    const slotsInput = row.querySelector<HTMLInputElement>('[data-character-slots]')!;
    const slots = Number(draft.slots);
    const rowStatus = row.querySelector<HTMLElement>('.row-status')!;
    if (!draft.slots || !Number.isInteger(slots) || slots < 1 || slots > 100) {
      rowStatus.dataset.kind = 'error';
      rowStatus.textContent = 'Укажите целое количество слотов от 1 до 100. Изменения не сохранены.';
      slotsInput.setAttribute('aria-invalid', 'true');
      slotsInput.focus();
      return;
    }
    if (draft.role === 'admin' && profile.role !== 'admin' && !window.confirm(`Назначить пользователя «${profile.display_name || profile.email || 'Без имени'}» администратором? Он получит доступ к управлению пользователями и всеми рабочими пространствами.`)) return;
    // Keep filters and page in place; update only the changed row after saving.
    saving = true;
    clearTimeout(searchTimer);
    ++request;
    root.querySelectorAll<HTMLInputElement | HTMLButtonElement | HTMLSelectElement>('input, button, select').forEach(control => control.disabled = true);
    rowStatus.dataset.kind = 'success';
    rowStatus.textContent = 'Сохраняем…';
    try {
      const savedRole = await saveAccountRole(testAccountSupabase, id, draft.role, slots);
      const oldRole = normalizeAccountRole(profile.role);
      if (oldRole !== savedRole) { totals[oldRole] -= 1; totals[savedRole] += 1; }
      profile.role = savedRole;
      profile.character_slots = slots;
      drafts.delete(id);
      if (id === userId) onSlotsChanged(slots);
      rowStatus.dataset.kind = 'success';
      rowStatus.textContent = `Сохранено: ${accountRoleLabels[savedRole]}, слотов — ${slots}.`;
      renderStats();
    } catch (error) {
      rowStatus.dataset.kind = 'error';
      rowStatus.textContent = `Не сохранено. ${error instanceof Error ? error.message : String(error)} Повторите сохранение или нажмите «Сбросить».`;
    } finally {
      saving = false;
      body.setAttribute('aria-busy', 'false');
      search.disabled = roleFilter.disabled = refresh.disabled = false;
      stats.querySelectorAll<HTMLButtonElement>('button').forEach(control => control.disabled = false);
      previous.disabled = page === 0;
      next.disabled = (page + 1) * pageSize >= total;
      body.querySelectorAll<HTMLTableRowElement>('[data-profile]').forEach(item => {
        item.querySelector<HTMLSelectElement>('[data-admin-role]')!.disabled = item.dataset.profile === userId;
        item.querySelector<HTMLInputElement>('[data-character-slots]')!.disabled = false;
        item.querySelector<HTMLButtonElement>('[data-save-profile]')!.disabled = !drafts.has(item.dataset.profile!);
        item.querySelector<HTMLButtonElement>('[data-reset-profile]')!.disabled = !drafts.has(item.dataset.profile!);
      });
    }
  });
  search.addEventListener('input', () => { if (saving) return; clearTimeout(searchTimer); searchTimer = setTimeout(() => { page = 0; void load(); }, 250); });
  roleFilter.addEventListener('change', () => { page = 0; void load(); });
  stats.addEventListener('click', event => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-role-count]');
    if (!button || saving) return;
    roleFilter.value = button.dataset.roleCount!;
    page = 0;
    void load();
  });
  previous.addEventListener('click', () => { page -= 1; void load(); });
  next.addEventListener('click', () => { page += 1; void load(); });
  refresh.addEventListener('click', () => { void load(true); });
  window.addEventListener('beforeunload', event => { if (drafts.size || saving) { event.preventDefault(); event.returnValue = ''; } });
  await load(true);
}
