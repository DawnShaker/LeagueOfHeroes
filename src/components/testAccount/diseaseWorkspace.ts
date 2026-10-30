import { diseaseEntries } from '../../data/diseases';
import type { DiseaseMechanics, DiseaseWorkspaceStore, DueDiseaseEvent, LocalDiseaseCase } from '../../types/disease';
import { canTrackDisease, diseaseInline, diseaseSearchText, escapeDiseaseHtml as esc, formatDuration, formatGameTime, materialLabels, normalizeDiseaseText, progressionLabels } from '../../utils/diseaseCatalog';
import { advanceDiseaseTime, applyDiseaseCheck, caseState, correctLastDiseaseEvent, createDiseaseCase, incubationMinutes, logDiseaseEvent, MAX_GAME_MINUTE, newDiseaseId, newDiseaseStore, parseDiseaseStore, pendingDiseaseEvents, requestDiseaseRest, resolveDiseaseEvent, rollDiseaseDice, validateMechanics } from '../../utils/diseaseProgression';
import { accountModePath, defaultAccountMode, isLocalAuthBypassEnabled, isTestAccountConfigured, localAccountPreviewProfile, normalizeAccountRole, testAccountSupabase } from '../../utils/testAccount';
const byId = new Map(diseaseEntries.map(e => [e.id, e]));
const searchIndex = new Map(diseaseEntries.map(e => [e.id, diseaseSearchText(e)]));
const phaseLabels = { incubation: 'Инкубация', active: 'Активна', recovered: 'Излечена', closed: 'Завершён', exposure: 'Без заражения' };
const activeCase = (c: LocalDiseaseCase) => c.phase === 'incubation' || c.phase === 'active';
const section = (title: string, content: string) => `<section class="dw-reader-section"><h3>${esc(title)}</h3>${content}</section>`;
const tag = (text: string, gold = false) => `<span class="dw-tag${gold ? ' dw-tag-gold' : ''}">${esc(text)}</span>`;
const button = (action: string, text: string, primary = false) => `<button type="button" class="dw-button${primary ? ' dw-primary' : ''}" data-action="${esc(action)}">${esc(text)}</button>`;
const options = (entries: Record<string, string>, value: string) => Object.entries(entries).map(([key, text]) => `<option value="${esc(key)}"${key === value ? ' selected' : ''}>${esc(text)}</option>`).join('');
const textInput = (name: string, label: string, value = '', max = 120) => `<label>${esc(label)}<input name="${name}" value="${esc(value)}" maxlength="${max}" /></label>`;
const numberInput = (name: string, label: string, value: number | null, min = 0, max = 1000000, required = true) => `<label>${esc(label)}<input name="${name}" type="number" min="${min}" max="${max}" step="1" value="${value ?? ''}" ${required ? 'required' : ''} /></label>`;
export async function initializeDiseaseWorkspace(): Promise<void> {
    const root = document.querySelector<HTMLElement>('#disease-catalog-root');
    if (!root || root.dataset.initialized)
        return;
    const loading = document.querySelector<HTMLElement>('#disease-catalog-loading')!;
    const error = document.querySelector<HTMLElement>('#disease-catalog-error')!;
    function deny(message: string) { loading.hidden = true; error.textContent = message; error.hidden = false; root!.hidden = true; }
    try {
        let userId: string;
        if (isLocalAuthBypassEnabled)
            userId = localAccountPreviewProfile.id;
        else {
            if (!isTestAccountConfigured || !testAccountSupabase) {
                deny('Для мастерской нужен настроенный Supabase и вход через Discord.');
                return;
            }
            const { data, error: sessionError } = await testAccountSupabase.auth.getSession();
            if (sessionError)
                throw sessionError;
            if (!data.session) {
                window.location.replace(`/test/auth/?next=${encodeURIComponent(location.pathname + location.search)}`);
                return;
            }
            const user = data.session.user;
            const { data: profile, error: profileError } = await testAccountSupabase.from('user_profiles').select('role').eq('id', user.id).single();
            if (profileError || !profile) {
                deny('Не удалось проверить профиль мастера.');
                return;
            }
            const role = normalizeAccountRole(profile.role);
            if (role !== 'master' && role !== 'admin') {
                location.replace(accountModePath(defaultAccountMode(role)));
                return;
            }
            if (!(user.identities?.some(i => i.provider === 'discord') || user.app_metadata?.provider === 'discord' || user.app_metadata?.providers?.includes('discord'))) {
                deny('Для мастерской нужен вход через Discord.');
                return;
            }
            userId = user.id;
        }
        mountWorkspace(root, userId);
        loading.hidden = true;
        root.hidden = false;
        root.setAttribute('aria-busy', 'false');
        root.dataset.initialized = 'true';
    }
    catch {
        deny('Не удалось открыть мастерскую болезней. Обновите страницу или войдите снова.');
    }
}
function mountWorkspace(root: HTMLElement, userId: string): void {
    const el = <T extends HTMLElement = HTMLElement>(id: string) => root.querySelector<T>(`#${id}`)!;
    const input = (id: string) => el<HTMLInputElement>(id);
    const select = (id: string) => el<HTMLSelectElement>(id);
    const storageKey = `loh-disease-workspace-v1:${userId}`;
    let store = newDiseaseStore(), savedRaw: string | null = null, storageEnabled = true, conflict = false, authorized = true;
    let selectedEntry = '', selectedCharacter = '', selectedCase = '', tab = 'catalog', pageSize = 32, listScroll = 0;
    let onSubmit: (data: FormData) => void = () => { };
    let noticeTimer = 0;
    const dialog = el<HTMLDialogElement>('dw-dialog');
    const form = el<HTMLFormElement>('dw-dialog-form');
    const filterIds: Record<string, string> = { transmission: 'disease-transmission-filter', impact: 'disease-impact-filter', pace: 'dw-pace', treatment: 'dw-treatment', kind: 'dw-kind', group: 'disease-group-filter', progression: 'disease-progression-filter', readiness: 'dw-readiness' };
    function notice(message: string, isError = false): void {
        const node = el('dw-notice');
        node.hidden = false;
        node.textContent = message;
        node.dataset.error = String(isError);
        clearTimeout(noticeTimer);
        noticeTimer = window.setTimeout(() => { node.hidden = true; }, 10000);
    }
    function storageWarning(message: string, reload = false): void {
        const node = el('dw-storage-warning');
        node.hidden = false;
        node.innerHTML = `<p>${esc(message)}</p><div class="dw-actions">${button('export', 'Скачать текущую копию')}${reload ? button('reload-storage', 'Перечитать сохранение') : ''}</div>`;
    }
    try {
        savedRaw = localStorage.getItem(storageKey);
        if (savedRaw)
            store = parseDiseaseStore(JSON.parse(savedRaw));
    }
    catch {
        storageEnabled = false;
        storageWarning('Сохранение недоступно или повреждено. Исходные данные не перезаписаны; новая игра работает только в памяти. Скачайте копию перед закрытием страницы.');
    }
    function commit(change: (next: DiseaseWorkspaceStore) => void): void {
        if (!authorized)
            throw new Error('Сессия завершена. Войдите снова.');
        if (conflict)
            throw new Error('Сохранение изменилось в другой вкладке. Экспортируйте текущую копию и перечитайте сохранение.');
        if (storageEnabled) {
            let current: string | null;
            try {
                current = localStorage.getItem(storageKey);
            }
            catch {
                storageEnabled = false;
                storageWarning('Браузер запретил сохранение. Работа продолжается в памяти; скачайте копию перед закрытием страницы.');
                current = savedRaw;
            }
            if (current !== savedRaw) {
                conflict = true;
                storageWarning('Игра изменена в другой вкладке. Чтобы не затереть изменения, экспортируйте текущую копию и перечитайте сохранение.', true);
                throw new Error('Обнаружены изменения в другой вкладке.');
            }
        }
        const next = structuredClone(store);
        change(next);
        next.revision = store.revision + 1;
        const checked = parseDiseaseStore(next);
        if (storageEnabled) {
            const raw = JSON.stringify(checked);
            try {
                localStorage.setItem(storageKey, raw);
                savedRaw = raw;
            }
            catch {
                storageEnabled = false;
                storageWarning('Не удалось сохранить игру в браузере. Текущие изменения доступны в памяти; экспортируйте JSON перед закрытием страницы.');
            }
        }
        store = checked;
        renderTracker();
        renderCatalog(false);
        if (selectedEntry)
            renderEntry();
    }
    function openDialog(title: string, html: string, submit: (data: FormData) => void, submitLabel = 'Сохранить'): void {
        el('dw-dialog-title').textContent = title;
        el('dw-dialog-body').innerHTML = html;
        el('dw-dialog-error').hidden = true;
        el('dw-dialog-submit').textContent = submitLabel;
        onSubmit = submit;
        if (!dialog.open)
            dialog.showModal();
    }
    form.addEventListener('submit', event => {
        event.preventDefault();
        try {
            onSubmit(new FormData(form));
            dialog.close();
        }
        catch (error) {
            el('dw-dialog-error').textContent = error instanceof Error ? error.message : 'Не удалось сохранить.';
            el('dw-dialog-error').hidden = false;
        }
    });
    el('dw-dialog-close').addEventListener('click', () => dialog.close());
    el('dw-dialog-cancel').addEventListener('click', () => dialog.close());
    const value = (data: FormData, name: string) => String(data.get(name) ?? '').trim();
    const num = (data: FormData, name: string) => Number(value(data, name));
    const requiredName = (data: FormData, key: string) => { const text = value(data, key); if (!text)
        throw new Error('Укажите имя или название.'); return text; };
    const getCase = (next: DiseaseWorkspaceStore, id = selectedCase) => { const c = next.cases.find(c => c.id === id); if (!c)
        throw new Error('Случай не найден.'); return c; };
    const characterName = (id: string) => store.characters.find(c => c.id === id)?.name || 'Неизвестный персонаж';
    function writeUrl(push = false): void {
        const url = new URL(location.href);
        const params = url.searchParams;
        const set = (key: string, value: string) => { if (!value || value === 'all')
            params.delete(key);
        else
            params.set(key, value); };
        set('q', input('disease-search').value.trim());
        Object.entries(filterIds).forEach(([key, id]) => set(key, select(id).value));
        set('sort', select('disease-sort').value === 'family' ? '' : select('disease-sort').value);
        set('favorites', input('dw-favorites').checked ? '1' : '');
        set('disease', selectedEntry);
        set('tab', tab === 'catalog' ? '' : tab);
        // Personal character IDs and diagnoses are never put into shareable links.
        if (push)
            history.pushState(null, '', url);
        else
            history.replaceState(null, '', url);
    }
    function readUrl(): void {
        const p = new URLSearchParams(location.search);
        input('disease-search').value = p.get('q') || '';
        Object.entries(filterIds).forEach(([key, id]) => { const s = select(id), v = p.get(key) || 'all'; s.value = [...s.options].some(o => o.value === v) ? v : 'all'; });
        const sort = p.get('sort');
        select('disease-sort').value = sort === 'name' || sort === 'source' ? sort : 'family';
        input('dw-favorites').checked = p.get('favorites') === '1';
        selectedEntry = byId.has(p.get('disease') || '') ? p.get('disease')! : '';
        tab = ['catalog', 'tracker', 'rules'].includes(p.get('tab') || '') ? p.get('tab')! : 'catalog';
        pageSize = 32;
        switchTab(tab, false);
        renderCatalog(false);
        root.querySelector('.dw-catalog-layout')!.classList.toggle('dw-reading', Boolean(selectedEntry));
        if (selectedEntry)
            renderEntry();
    }
    function switchTab(next: string, update = true): void {
        tab = next;
        root.querySelectorAll<HTMLButtonElement>('[data-tab]').forEach(b => { const active = b.dataset.tab === tab; b.setAttribute('aria-selected', String(active)); b.tabIndex = active ? 0 : -1; });
        for (const name of ['catalog', 'tracker', 'rules'])
            el(`dw-${name}`).hidden = name !== tab;
        if (tab === 'tracker')
            renderTracker();
        if (update)
            writeUrl();
    }
    function renderCatalog(updateUrl = true): void {
        if (updateUrl && matchMedia('(max-width: 900px)').matches)
            root.querySelector('.dw-catalog-layout')!.classList.remove('dw-reading');
        const q = normalizeDiseaseText(input('disease-search').value);
        const matches = (key: string, field: string | string[]) => select(filterIds[key]).value === 'all' || (Array.isArray(field) ? field.includes(select(filterIds[key]).value) : field === select(filterIds[key]).value);
        const entries = diseaseEntries.filter(e => (!q || q.split(/\s+/).every(word => searchIndex.get(e.id)!.includes(word))) &&
            (!input('dw-favorites').checked || store.favorites.includes(e.id)) && matches('transmission', e.transmissionTags) && matches('impact', e.impactTags) &&
            matches('pace', e.pace) && matches('treatment', e.treatmentTags) && matches('kind', e.kind) && matches('group', e.sourceGroup) && matches('progression', e.progressionTags) && matches('readiness', e.readiness));
        const sort = select('disease-sort').value;
        entries.sort((a, b) => sort === 'source' ? a.index - b.index : sort === 'family' ? a.family.localeCompare(b.family, 'en') || a.index - b.index : (a.nameRu || a.name).localeCompare(b.nameRu || b.name, 'ru') || a.index - b.index);
        let family = '';
        el('disease-list').innerHTML = entries.slice(0, pageSize).map(e => {
            const group = sort === 'family' && e.family !== family ? `<p class="dw-family">${esc(e.nameRu || e.aliases[0] || e.name)}</p>` : '';
            family = e.family;
            return `${group}<button type="button" class="dw-entry" data-entry="${e.id}" aria-pressed="${e.id === selectedEntry}"><span class="dw-entry-title">${esc(e.nameRu || e.name)}${store.favorites.includes(e.id) ? '<span aria-label="В избранном">★</span>' : ''}</span><span class="dw-entry-en">${esc(e.name)} · №${e.index}</span><span class="dw-tags">${tag(e.transmissionTags[0])}${e.infectionDc ? tag(`Сл ${e.infectionDc}`, true) : ''}${tag(e.impactTags[0])}${e.kind !== 'disease' ? tag(materialLabels[e.kind]) : ''}</span><span class="dw-entry-timing">${esc(e.incubation)} · ${esc(e.progressionTags[0])}</span></button>`;
        }).join('');
        el('disease-result-count').textContent = `${entries.length} из ${diseaseEntries.length} · показано ${Math.min(pageSize, entries.length)}`;
        el('disease-no-results').hidden = entries.length > 0;
        el('dw-load-more').hidden = entries.length <= pageSize;
        if (updateUrl)
            writeUrl();
    }
    function selectEntry(id: string, push = true): void {
        if (!byId.has(id))
            return;
        listScroll = window.scrollY;
        selectedEntry = id;
        root.querySelector('.dw-catalog-layout')!.classList.add('dw-reading');
        switchTab('catalog', false);
        renderCatalog(false);
        renderEntry();
        writeUrl(push);
        if (matchMedia('(max-width: 900px)').matches)
            el('dw-reader').scrollIntoView({ block: 'start' });
        el('dw-reader').querySelector<HTMLElement>('h2')?.focus({ preventScroll: true });
    }
    function renderEntry(): void {
        const e = byId.get(selectedEntry);
        if (!e)
            return;
        const variants = diseaseEntries.filter(v => v.id !== e.id && (v.family === e.family || e.relatedIds.includes(v.id)));
        const m = e.mechanics;
        el('dw-reader').innerHTML = `<header class="dw-reader-header"><button type="button" class="dw-button dw-reader-mobile-back" data-action="back-list">← К результатам</button><div class="dw-tags">${tag(materialLabels[e.kind])}${tag('Авторская адаптация', true)}${tag(e.readiness === 'prepared' ? 'Есть профиль учёта' : 'Требует решения мастера')}</div><h2 tabindex="-1">${esc(e.nameRu || e.name)}</h2><span class="dw-entry-en">${esc(e.name)} · №${e.index}</span><div class="dw-actions">${canTrackDisease(e) ? button('add-case', '＋ Добавить случай', true) : ''}${button('favorite', store.favorites.includes(e.id) ? '★ В избранном' : '☆ В избранное')}${button('copy-link', 'Ссылка')}</div></header>` +
            section('Заражение', `<p>${diseaseInline(e.infection)}</p>`) +
            section('Проявление', `<p>Инкубация: <strong>${esc(e.incubation)}</strong></p><p class="dw-muted">Заразность до симптомов определяется описанием; если она не указана, уточните её у мастера.</p>`) +
            section('Симптомы, эффекты и триггеры', `<p>${diseaseInline(e.effects)}</p>`) +
            section('Развитие', `<p>${diseaseInline(e.progression)}</p><p class="dw-muted">Профиль: ${esc(progressionLabels[m.mode])}${m.trigger === 'rest' ? ' · после продолжительного отдыха' : m.trigger === 'interval' ? ` · каждые ${m.intervalMinutes} мин.` : ''}. ${m.mode === 'successes' ? `Для излечения: ${m.target} успеха подряд; провал сбрасывает серию.` : ''}</p>`) +
            section('Лечение и исход', `<p>${diseaseInline(e.treatment)}</p>`) +
            (e.questions.length ? section('Что уточнить перед игрой', `<ul>${e.questions.map(q => `<li>${esc(q)}</li>`).join('')}</ul>`) : '') +
            (variants.length ? section('Варианты и связанные записи', `<div class="dw-actions">${variants.map(v => `<button class="dw-button" type="button" data-entry="${v.id}">${esc(v.name)}</button>`).join('')}</div>`) : '') +
            section('Источник и адаптация', `<p>${esc(e.sourceGroup)}</p><p class="dw-muted">${esc(e.status)}. Русское название — рабочий перевод для поиска. Исходные формулировки выше сохранены; происхождение записи не подтверждено первоисточником.</p>`);
    }
    function caseProgress(c: LocalDiseaseCase): string {
        if (c.phase === 'incubation')
            return `${formatDuration(c.onsetAt - store.minute)} · ${c.mechanics.mode === 'timer' ? 'сюжетный срок' : 'проявление'}`;
        if (c.phase !== 'active')
            return phaseLabels[c.phase];
        const mode = c.mechanics.mode;
        return mode === 'successes' ? `Серия ${c.successes}/${c.mechanics.target}` : mode === 'stages' ? `Стадия ${c.stage}/3` : mode === 'failures' ? `Провалы ${c.failures}/${c.mechanics.target}` : mode === 'scale' ? `Шкала ${c.scale}/${c.mechanics.target}` : progressionLabels[mode];
    }
    function nextTiming(c: LocalDiseaseCase): string {
        if (c.phase === 'incubation')
            return formatGameTime(c.onsetAt);
        if (c.phase !== 'active')
            return '';
        const times = [c.nextCheckAt, c.nextEffectAt, c.pendingRestAt].filter((v): v is number => v !== null);
        if (times.length)
            return `${formatGameTime(Math.min(...times))} · ${formatDuration(Math.min(...times) - store.minute)}`;
        return c.mechanics.trigger === 'rest' ? 'Следующее развитие: после отдыха' : 'Следующее событие отмечает мастер';
    }
    function renderTracker(): void {
        const active = store.cases.filter(activeCase);
        el('dw-game-title').textContent = store.title;
        el('dw-clock-value').textContent = formatGameTime(store.minute);
        el('dw-active-count').textContent = String(active.length);
        el('dw-character-list').innerHTML = `<button type="button" class="dw-character-button" data-character="" aria-pressed="${!selectedCharacter}"><span>Все персонажи</span><small>${active.length}</small></button>` + store.characters.map(c => `<button type="button" class="dw-character-button" data-character="${esc(c.id)}" aria-pressed="${selectedCharacter === c.id}"><span>${esc(c.name)}</span><small>${active.filter(x => x.characterId === c.id).length}</small></button>`).join('') + (!store.characters.length ? '<p class="dw-muted dw-small">Добавьте персонажа или NPC. Достаточно имени.</p>' : '');
        const character = store.characters.find(c => c.id === selectedCharacter);
        el('dw-cases-title').textContent = character ? `Заражения: ${character.name}` : 'Все заражения';
        el('dw-character-actions').innerHTML = character ? `${button('choose-disease', '＋ Подобрать заражение', true)}${button('edit-character', 'Изменить персонажа')}${button('delete-character', 'Удалить персонажа')}<span class="dw-muted dw-small">${esc(character.notes)}</span>` : '';
        const cases = store.cases.filter(c => (!selectedCharacter || c.characterId === selectedCharacter) && (input('dw-show-archive').checked || activeCase(c)));
        el('dw-cases').innerHTML = cases.length ? cases.map(c => `<button type="button" class="dw-case-row" data-case="${esc(c.id)}" aria-pressed="${c.id === selectedCase}"><span><strong>${esc(c.snapshot.name)}</strong><small>${esc(characterName(c.characterId))} · ${esc(caseProgress(c))}<br>${esc(nextTiming(c))}</small></span><span class="dw-phase">${phaseLabels[c.phase]}</span></button>`).join('') : '<div class="dw-empty"><h3>Здесь будут заражения</h3><p>Откройте запись в каталоге и нажмите «Добавить случай». Завершённые случаи доступны через переключатель над списком.</p><button type="button" class="dw-button" data-action="choose-disease">Открыть каталог</button></div>';
        const queue = pendingDiseaseEvents(store), queueNode = el('dw-event-queue');
        queueNode.hidden = !queue.length;
        queueNode.innerHTML = queue.length ? `<h3>Наступившие события: ${queue.length}</h3><p>Очередь всей игры. Обрабатывайте по времени. При совпадении сроков порядок выбирает мастер; после события могут появиться следующие сроки.</p>${queue.slice(0, 5).map((event, i) => { const c = store.cases.find(c => c.id === event.caseId)!; return `<div class="dw-queue-row"><div><strong>${esc(event.label)} · ${esc(characterName(c.characterId))}</strong><small>${esc(c.snapshot.name)} · ${formatGameTime(event.at)}</small></div><button type="button" class="dw-button ${event.at === queue[0].at ? 'dw-primary' : ''}" data-resolve="${i}" ${event.at !== queue[0].at ? 'disabled' : ''}>Обработать</button></div>`; }).join('')}` : '';
        if (selectedCase && store.cases.some(c => c.id === selectedCase && (!selectedCharacter || c.characterId === selectedCharacter)))
            renderCase();
        else {
            selectedCase = '';
            el('dw-case-reader').hidden = true;
        }
    }
    function renderCase(): void {
        const c = store.cases.find(c => c.id === selectedCase);
        if (!c)
            return;
        const node = el('dw-case-reader');
        node.hidden = false;
        node.innerHTML = `<header class="dw-reader-header"><div class="dw-tags">${tag(phaseLabels[c.phase], true)}${tag(progressionLabels[c.mechanics.mode])}</div><h2>${esc(c.snapshot.name)}</h2><p class="dw-muted dw-small">${esc(characterName(c.characterId))} · ${esc(caseProgress(c))}</p><div class="dw-actions">${c.phase === 'active' ? button('case-check', 'Записать проверку') : ''}${button('case-event', 'Событие / последствия')}${activeCase(c) ? button('case-treatment', 'Лечение / завершение') : ''}${button('case-correct', 'Коррекция')}${button('case-mechanics', 'Настройки механики')}${button('case-undo', 'Отменить изменение')}${button('case-notes', 'Заметки и диагноз')}</div><div class="dw-case-metrics"><div><strong>${c.damage}</strong>Учтено урона</div><div><strong>−${c.hpLoss}</strong>Максимум хитов</div><div><strong>${c.exhaustion}</strong>Истощение от этого случая</div></div></header>` +
            section('Тайминг', `<dl><dt>Воздействие</dt><dd>${formatGameTime(c.exposedAt)}</dd><dt>Проявление / срок</dt><dd>${formatGameTime(c.onsetAt)}</dd><dt>Далее</dt><dd>${esc(nextTiming(c) || 'Развитие завершено')}</dd><dt>Успехи / провалы</dt><dd>${c.successes} / ${c.failures}</dd><dt>Известность</dt><dd>${{ hidden: 'Диагноз скрыт', symptoms: 'Известны симптомы', diagnosis: 'Известен диагноз' }[c.visibility]}</dd><dt>Заразен</dt><dd>${{ unknown: 'Не определено', yes: 'Да', no: 'Нет' }[c.contagious]}</dd></dl>`) +
            (c.notes ? section('Заметки мастера', `<p>${diseaseInline(c.notes)}</p>`) : '') +
            section('Сохранённая механика случая', `<p>${diseaseInline(c.snapshot.effects)}</p><p><strong>Развитие:</strong> ${diseaseInline(c.snapshot.progression)}</p><p><strong>Лечение:</strong> ${diseaseInline(c.snapshot.treatment)}</p><p class="dw-muted">Сл проверки: ${c.mechanics.dc ?? 'решение мастера'} · ${esc(c.snapshot.version)}. Урон и потеря максимума хитов — раздельный учёт, не текущие хиты персонажа. Все последствия применяются по описанию.</p>`) +
            section('Журнал', `<ol class="dw-history">${[...c.events].reverse().map(e => `<li><time>${formatGameTime(e.at)}</time>${esc(e.text)}</li>`).join('')}</ol>`);
    }
    function editCharacter(): void {
        const existing = store.characters.find(c => c.id === selectedCharacter);
        openDialog(existing ? 'Персонаж или NPC' : 'Новый персонаж или NPC', `<div class="dw-form-grid">${textInput('name', 'Имя', existing?.name || '')}<label>Заметка<textarea name="notes" maxlength="5000" rows="3">${esc(existing?.notes || '')}</textarea></label></div>`, data => {
            const name = requiredName(data, 'name');
            commit(next => { if (existing)
                Object.assign(next.characters.find(c => c.id === existing.id)!, { name, notes: value(data, 'notes') });
            else {
                const id = newDiseaseId();
                next.characters.push({ id, name, notes: value(data, 'notes') });
                selectedCharacter = id;
            } });
        });
    }
    function mechanicsForm(m: DiseaseMechanics): string {
        return `<fieldset><legend>Механика этого случая</legend><div class="dw-form-grid"><label>Модель развития<select name="mode">${options(progressionLabels, m.mode)}</select></label><label>Проверки<select name="trigger">${options({ manual: 'Вручную', interval: 'Через интервал', rest: 'После продолжительного отдыха' }, m.trigger)}</select></label>${numberInput('interval', 'Интервал проверок, минут', m.intervalMinutes, 1, MAX_GAME_MINUTE, false)}${numberInput('dc', 'Сл проверки (необязательно)', m.dc, 1, 100, false)}${numberInput('target', 'Успехов / провалов / порог шкалы', m.target, 1, 100)}${textInput('hpDice', 'Потеря максимума хитов при провале: кубы', m.failureHpDice || '', 30)}${numberInput('effectInterval', 'Интервал отдельного урона, минут', m.effectIntervalMinutes, 1, MAX_GAME_MINUTE, false)}${textInput('effectDice', 'Кубы периодического урона', m.effectDice || '', 30)}<div class="dw-form-full">${textInput('effectLabel', 'Название периодического эффекта', m.effectLabel, 200)}</div></div><p class="dw-form-hint">Интервал нужен только для проверок по времени. Для таймера выберите «Вручную» и задайте срок вместо инкубации. Отдельный периодический урон и проверка — разные события. Серия успехов сбрасывается при провале. Стадии используют общие авторские правила.</p></fieldset>`;
    }
    function readMechanics(data: FormData): DiseaseMechanics {
        const optional = (key: string) => value(data, key) ? num(data, key) : null;
        const mode = value(data, 'mode'), trigger = mode === 'timer' ? 'manual' : value(data, 'trigger');
        return validateMechanics({ mode, trigger, intervalMinutes: trigger === 'interval' ? optional('interval') : null, dc: optional('dc'), target: num(data, 'target'), failureHpDice: value(data, 'hpDice') || null,
            effectIntervalMinutes: mode === 'timer' ? null : optional('effectInterval'), effectDice: mode === 'timer' ? null : value(data, 'effectDice') || null, effectLabel: value(data, 'effectLabel') });
    }
    function addCase(): void {
        const e = byId.get(selectedEntry);
        if (!e || !canTrackDisease(e))
            return;
        const fixed = /^\d+\s/.test(e.incubation) || e.incubation.toLowerCase() === 'мгновенно' ? incubationMinutes(e.incubation) : null;
        openDialog(`Добавить: ${e.nameRu || e.name}`, `<p class="dw-muted">${esc(e.infection)}. Инкубация в каталоге: <strong>${esc(e.incubation)}</strong>.</p>${e.questions.length ? `<p class="dw-form-hint">${e.questions.map(esc).join(' ')}</p>` : ''}<div class="dw-form-grid"><label>Персонаж<select name="character"><option value="new">＋ Новый персонаж / NPC</option>${store.characters.map(c => `<option value="${esc(c.id)}"${c.id === (selectedCharacter || store.characters[0]?.id) ? ' selected' : ''}>${esc(c.name)}</option>`).join('')}</select></label>${textInput('newName', 'Имя нового персонажа')}<label>Результат воздействия<select name="outcome"><option value="infected">Заражение подтверждено / провал</option><option value="protected">Нет заражения / успех / иммунитет</option></select></label>${numberInput('exposedAt', 'Время воздействия, минут от начала игры', store.minute, 0, store.minute)}${numberInput('duration', 'Инкубация или сюжетный срок', fixed, 0, MAX_GAME_MINUTE)}<label>Единицы срока<select name="durationUnit"><option value="1">Минуты</option><option value="60">Часы</option><option value="1440">Дни</option></select></label></div><p class="dw-form-hint">Момент воздействия: ${formatGameTime(store.minute)}. Месяцы, диапазоны и сюжетные сроки задаются мастером. Для отсутствия заражения срок можно оставить пустым.</p><button type="button" class="dw-button" data-action="roll-incubation">Бросить / подставить срок из каталога</button><p id="dw-incubation-result" class="dw-form-hint"></p>${mechanicsForm(e.mechanics)}<div class="dw-form-grid"><label>Известность диагноза<select name="visibility">${options({ hidden: 'Скрыт', symptoms: 'Известны симптомы', diagnosis: 'Известен диагноз' }, 'hidden')}</select></label><label>Заразен<select name="contagious">${options({ unknown: 'Не определено', yes: 'Да', no: 'Нет' }, 'unknown')}</select></label><label class="dw-form-full">Заметка / результат спасброска<textarea name="notes" maxlength="10000" rows="2"></textarea></label></div><label class="dw-check"><input type="checkbox" name="duplicate" /> Отдельный повторный случай той же болезни (решение мастера)</label>`, data => {
            const m = readMechanics(data), infected = value(data, 'outcome') === 'infected';
            if (infected && value(data, 'duration') === '')
                throw new Error('Укажите длительность инкубации или срок.');
            const duration = num(data, 'duration') * num(data, 'durationUnit'), at = num(data, 'exposedAt');
            let charId = value(data, 'character');
            const existing = store.cases.find(c => c.characterId === charId && c.diseaseId === e.id && activeCase(c));
            if (infected && existing && !data.has('duplicate'))
                throw new Error('У персонажа уже есть активный случай этой болезни. Используйте его или явно разрешите отдельный случай.');
            commit(next => {
                if (charId === 'new') {
                    const name = requiredName(data, 'newName');
                    charId = newDiseaseId();
                    next.characters.push({ id: charId, name, notes: '' });
                }
                const c = createDiseaseCase(e, charId, at, infected ? duration : 0, m, infected ? 'infected' : 'protected');
                c.visibility = value(data, 'visibility') as LocalDiseaseCase['visibility'];
                c.contagious = value(data, 'contagious') as LocalDiseaseCase['contagious'];
                c.notes = value(data, 'notes');
                if (c.notes)
                    logDiseaseEvent(c, at, 'note', c.notes);
                next.cases.push(c);
                selectedCharacter = charId;
                selectedCase = c.id;
            });
            if (!infected)
                input('dw-show-archive').checked = true;
            switchTab('tracker');
            notice(infected ? 'Случай добавлен. Продвигайте игровое время и обрабатывайте события.' : 'Воздействие записано: заражения нет.');
        }, 'Добавить случай');
        form.elements.namedItem('duration') && ((form.elements.namedItem('duration') as HTMLInputElement).required = false);
    }
    function resolveEventDialog(event: DueDiseaseEvent): void {
        const c = store.cases.find(c => c.id === event.caseId)!;
        const check = event.kind === 'check' || event.kind === 'rest';
        const isScale = check && c.mechanics.mode === 'scale';
        const dice = event.kind === 'effect' ? c.mechanics.effectDice : check ? c.mechanics.failureHpDice : null;
        openDialog(event.label, `<p class="dw-muted"><strong>${esc(characterName(c.characterId))} · ${esc(c.snapshot.name)}</strong><br>${formatGameTime(event.at)}</p><p class="dw-muted">${diseaseInline(c.snapshot.effects)}</p>${event.kind === 'timer' ? '<p class="dw-warning">Срок завершится. Укажите итог по описанию: смерть и превращение не применяются без решения мастера.</p>' : ''}${check && !isScale ? `<label>Результат проверки${c.mechanics.dc ? ` · Сл ${c.mechanics.dc}` : ''}<select name="success"><option value="yes">Успех</option><option value="no">Провал</option></select></label>` : ''}${isScale ? `<p class="dw-muted">Шкала изменится: ${c.scale} → ${c.scale + 1}. Порог: ${c.mechanics.target}. Эффект порога применяет мастер.</p>` : ''}${dice || event.kind === 'effect' ? `<div class="dw-form-grid">${numberInput('amount', event.kind === 'effect' ? 'Учесть урон' : 'Потеря максимума хитов при провале', 0)}<div><p class="dw-form-hint">${dice ? `По профилю: ${esc(dice)}` : 'Введите величину последствия.'}</p>${dice ? `<button class="dw-button" type="button" data-roll="${esc(dice)}" data-roll-target="amount">Бросить ${esc(dice)}</button>` : ''}</div></div>` : ''}<label>Запись мастера${event.kind === 'timer' ? ' (обязательно)' : ''}<textarea name="note" maxlength="10000" rows="3" ${event.kind === 'timer' ? 'required' : ''}></textarea></label>`, data => {
            const success = value(data, 'success') !== 'no';
            commit(next => resolveDiseaseEvent(next, event, success, event.kind === 'effect' || !success ? num(data, 'amount') : 0, value(data, 'note')));
            selectedCase = c.id;
            renderTracker();
            notice('Событие обработано.');
        }, 'Применить и записать');
    }
    function manualCaseAction(action: string): void {
        const c = store.cases.find(c => c.id === selectedCase);
        if (!c)
            return;
        if (['case-check', 'case-event', 'case-treatment'].includes(action) && pendingDiseaseEvents(store).some(e => e.caseId === c.id)) {
            notice('Сначала обработайте наступившие события этого случая. При необходимости исправить сами сроки используйте коррекцию.', true);
            return;
        }
        if (action === 'case-check') {
            if (pendingDiseaseEvents(store).some(e => e.caseId === c.id)) {
                notice('У случая есть наступившее событие. Обработайте его в очереди.', true);
                return;
            }
            openDialog(c.mechanics.mode === 'scale' ? 'Дополнительный шаг шкалы' : 'Дополнительная проверка', `<p class="dw-muted">${esc(c.snapshot.name)}. Профиль: ${esc(progressionLabels[c.mechanics.mode])}. Событие вне расписания не переносит следующий срок.</p>${c.mechanics.mode === 'scale' ? `<p class="dw-muted">Шкала изменится: ${c.scale} → ${c.scale + 1}. Порог: ${c.mechanics.target}.</p>` : `<label>Результат<select name="success"><option value="yes">Успех</option><option value="no">Провал</option></select></label>${numberInput('amount', 'Потеря максимума хитов при провале', 0)}`}<label>Запись<textarea name="note" maxlength="10000" rows="3"></textarea></label>`, data => commit(next => { const current = getCase(next, c.id), before = caseState(current); if (current.mechanics.mode === 'scale') {
                current.scale++;
                logDiseaseEvent(current, next.minute, 'scale', `Внеплановый шаг шкалы: ${current.scale}/${current.mechanics.target}. ${value(data, 'note')}`, before);
            }
            else {
                applyDiseaseCheck(current, value(data, 'success') === 'yes', next.minute, value(data, 'success') === 'no' ? num(data, 'amount') : 0, value(data, 'note'));
                current.events[current.events.length - 1].before = before;
            } }), 'Записать событие');
        }
        else if (action === 'case-event') {
            openDialog('Событие и последствия', `<p class="dw-muted">Приступ, начало хода, дополнительный урон или другое событие по описанию. Значения добавляются к учёту этого случая.</p><div class="dw-form-grid">${numberInput('damage', 'Урон', 0)}${numberInput('hpLoss', 'Потеря максимума хитов', 0)}${numberInput('exhaustion', 'Добавить уровней истощения', 0, 0, 6)}</div><label>Описание события<textarea name="note" required maxlength="10000" rows="3"></textarea></label>`, data => commit(next => { const current = getCase(next, c.id), before = caseState(current); current.damage += num(data, 'damage'); current.hpLoss += num(data, 'hpLoss'); current.exhaustion += num(data, 'exhaustion'); logDiseaseEvent(current, next.minute, 'manual', `${value(data, 'note')} Урон +${num(data, 'damage')}; потеря максимума +${num(data, 'hpLoss')}; истощение +${num(data, 'exhaustion')}.`, before); }), 'Записать событие');
        }
        else if (action === 'case-treatment') {
            openDialog('Лечение или исход', `<p class="dw-muted">${diseaseInline(c.snapshot.treatment)}</p><p class="dw-form-hint">Излечение остановит развитие. Накопленные урон, потеря максимума хитов и истощение сохранятся в учёте. Если они восстановлены по правилам болезни, измените их через коррекцию.</p><label>Итог<select name="phase"><option value="recovered">Излечен</option><option value="active">Лечение применено, болезнь продолжается</option><option value="closed">Иной итог: завершить случай</option></select></label><label>Способ лечения / итог<textarea name="note" required maxlength="10000" rows="3"></textarea></label>`, data => commit(next => { const current = getCase(next, c.id), before = caseState(current); const phase = value(data, 'phase'); if (phase !== 'active') {
                current.phase = phase as 'recovered' | 'closed';
                current.nextCheckAt = null;
                current.nextEffectAt = null;
                current.pendingRestAt = null;
            } logDiseaseEvent(current, next.minute, 'treatment', `${phase === 'recovered' ? 'Излечен' : phase === 'closed' ? 'Случай завершён' : 'Лечение без завершения болезни'}: ${value(data, 'note')}`, before); }), 'Применить лечение / итог');
        }
        else if (action === 'case-correct') {
            openDialog('Коррекция состояния', `<p class="dw-muted">Введите итоговые значения. Изменение сохраняется в журнале и относится только к этому заражению.</p><div class="dw-form-grid"><label>Фаза<select name="phase">${options(phaseLabels, c.phase)}</select></label>${numberInput('onsetAt', 'Проявление / сюжетный срок, минута игры', c.onsetAt, c.exposedAt, MAX_GAME_MINUTE)}${numberInput('stage', 'Стадия', c.stage, 0, 3)}${numberInput('successes', 'Серия успехов', c.successes)}${numberInput('failures', 'Накоплено провалов', c.failures)}${numberInput('scale', 'Числовая шкала', c.scale, -1000000)}${numberInput('damage', 'Всего учтено урона', c.damage)}${numberInput('hpLoss', 'Текущая потеря максимума хитов', c.hpLoss)}${numberInput('exhaustion', 'Истощение от этой болезни', c.exhaustion, 0, 6)}${numberInput('nextCheckAt', 'Следующая проверка, минута игры', c.nextCheckAt, 0, MAX_GAME_MINUTE, false)}${numberInput('nextEffectAt', 'Следующий урон, минута игры', c.nextEffectAt, 0, MAX_GAME_MINUTE, false)}</div><label>Причина<textarea name="note" required maxlength="10000" rows="2"></textarea></label>`, data => commit(next => { const current = getCase(next, c.id), before = caseState(current); current.phase = value(data, 'phase') as LocalDiseaseCase['phase']; current.onsetAt = num(data, 'onsetAt'); for (const k of ['stage', 'successes', 'failures', 'scale', 'damage', 'hpLoss', 'exhaustion'] as const)
                current[k] = num(data, k); current.nextCheckAt = value(data, 'nextCheckAt') ? num(data, 'nextCheckAt') : null; current.nextEffectAt = value(data, 'nextEffectAt') ? num(data, 'nextEffectAt') : null; if (current.phase !== 'active') {
                current.nextCheckAt = null;
                current.nextEffectAt = null;
                current.pendingRestAt = null;
            } logDiseaseEvent(current, next.minute, 'adjust', `Коррекция: ${value(data, 'note')}`, before); }), 'Сохранить коррекцию');
        }
        else if (action === 'case-undo') {
            openDialog('Отменить изменение', `<p class="dw-muted">Будут восстановлены значения перед последним неотменённым изменением состояния. История сохранится. Игровые часы не переводятся назад.</p>`, () => commit(next => correctLastDiseaseEvent(getCase(next, c.id), next.minute)), 'Отменить изменение');
        }
        else if (action === 'case-mechanics') {
            openDialog('Настройки механики случая', `<p class="dw-muted">Настройки изменятся только для этого заражения. При активной болезни новые интервалы отсчитываются от текущего игрового времени. Уже наступившие события обработайте до изменения настроек.</p>${mechanicsForm(c.mechanics)}<label>Причина изменения<textarea name="note" required maxlength="10000" rows="2"></textarea></label>`, data => commit(next => {
                const current = getCase(next, c.id), before = caseState(current);
                if (pendingDiseaseEvents(next).some(e => e.caseId === c.id))
                    throw new Error('Сначала обработайте наступившие события случая.');
                const m = readMechanics(data);
                if (m.mode === 'timer' && current.phase === 'active')
                    throw new Error('Для сюжетного таймера сначала выберите фазу инкубации и задайте срок через коррекцию.');
                current.mechanics = m;
                current.nextCheckAt = current.phase === 'active' && m.trigger === 'interval' ? next.minute + m.intervalMinutes! : null;
                current.nextEffectAt = current.phase === 'active' && m.effectIntervalMinutes ? next.minute + m.effectIntervalMinutes : null;
                current.pendingRestAt = null;
                current.lastRestAt = null;
                logDiseaseEvent(current, next.minute, 'mechanics', `Изменены настройки: ${value(data, 'note')}`, before);
            }));
        }
        else if (action === 'case-notes') {
            openDialog('Заметки и известность диагноза', `<p class="dw-form-hint">Локальные пометки мастера; сведения не отправляются игрокам.</p><div class="dw-form-grid"><label>Известность<select name="visibility">${options({ hidden: 'Диагноз скрыт', symptoms: 'Известны симптомы', diagnosis: 'Известен диагноз' }, c.visibility)}</select></label><label>Заразен<select name="contagious">${options({ unknown: 'Не определено', yes: 'Да', no: 'Нет' }, c.contagious)}</select></label></div><label>Заметки<textarea name="notes" maxlength="10000" rows="5">${esc(c.notes)}</textarea></label>`, data => commit(next => { const current = getCase(next, c.id); current.visibility = value(data, 'visibility') as LocalDiseaseCase['visibility']; current.contagious = value(data, 'contagious') as LocalDiseaseCase['contagious']; current.notes = value(data, 'notes'); logDiseaseEvent(current, next.minute, 'note', 'Обновлены заметки, известность диагноза и заразность.'); }));
        }
    }
    function exportStore(): void {
        const url = URL.createObjectURL(new Blob([JSON.stringify(store, null, 2)], { type: 'application/json' }));
        const a = document.createElement('a');
        a.href = url;
        a.download = 'league-of-heroes-diseases.json';
        a.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
    async function copyLink(): Promise<void> {
        const url = new URL(location.href);
        url.searchParams.delete('tab');
        try {
            await navigator.clipboard.writeText(url.toString());
            notice('Ссылка на запись скопирована.');
        }
        catch {
            openDialog('Ссылка на запись', `<label>Скопируйте ссылку<input readonly value="${esc(url.toString())}" /></label>`, () => { }, 'Готово');
        }
    }
    function handleAction(action: string): void {
        if (action === 'favorite' && selectedEntry)
            commit(next => { next.favorites = next.favorites.includes(selectedEntry) ? next.favorites.filter(id => id !== selectedEntry) : [...next.favorites, selectedEntry]; });
        else if (action === 'copy-link')
            void copyLink();
        else if (action === 'add-case')
            addCase();
        else if (action === 'back-list') {
            root.querySelector('.dw-catalog-layout')!.classList.remove('dw-reading');
            window.scrollTo({ top: listScroll });
        }
        else if (action === 'choose-disease') {
            switchTab('catalog');
            root.querySelector('.dw-catalog-layout')!.classList.remove('dw-reading');
            input('disease-search').focus();
        }
        else if (action === 'edit-character')
            editCharacter();
        else if (action === 'delete-character') {
            const character = store.characters.find(c => c.id === selectedCharacter);
            if (!character)
                return;
            openDialog('Удалить локального персонажа', `<p class="dw-muted">Персонаж <strong>${esc(character.name)}</strong> и все его случаи с историей будут удалены из этой игры. При необходимости сначала экспортируйте JSON.</p>`, () => { commit(next => { next.cases = next.cases.filter(c => c.characterId !== character.id); next.characters = next.characters.filter(c => c.id !== character.id); selectedCharacter = ''; selectedCase = ''; }); }, 'Удалить персонажа и случаи');
        }
        else if (action === 'roll-incubation') {
            const e = byId.get(selectedEntry)!;
            const result = incubationMinutes(e.incubation);
            if (result === null) {
                el('dw-incubation-result').textContent = 'Этот срок требует решения мастера. Введите точную длительность вручную.';
                return;
            }
            (form.elements.namedItem('duration') as HTMLInputElement).value = String(result);
            (form.elements.namedItem('durationUnit') as HTMLSelectElement).value = '1';
            el('dw-incubation-result').textContent = `Зафиксированный срок: ${result} мин. (${e.incubation}). Повторное нажатие перебросит срок до сохранения случая.`;
        }
        else if (action.startsWith('case-'))
            manualCaseAction(action);
        else if (action === 'export')
            exportStore();
        else if (action === 'reload-storage') {
            try {
                const raw = localStorage.getItem(storageKey);
                const next = raw ? parseDiseaseStore(JSON.parse(raw)) : newDiseaseStore();
                store = next;
                savedRaw = raw;
                conflict = false;
                storageEnabled = true;
                el('dw-storage-warning').hidden = true;
                selectedCharacter = '';
                selectedCase = '';
                dialog.close();
                renderTracker();
                renderCatalog(false);
                if (selectedEntry)
                    renderEntry();
                notice('Сохранение перечитано.');
            }
            catch {
                notice('Сохранение не удалось прочитать. Текущая копия сохранена в памяти.', true);
            }
        }
    }
    root.addEventListener('click', event => {
        const target = (event.target as HTMLElement).closest<HTMLElement>('button');
        if (!target)
            return;
        try {
            if (target.dataset.entry)
                selectEntry(target.dataset.entry);
            else if (target.hasAttribute('data-character')) {
                selectedCharacter = target.dataset.character || '';
                selectedCase = '';
                renderTracker();
            }
            else if (target.dataset.case) {
                selectedCase = target.dataset.case;
                renderTracker();
            }
            else if (target.dataset.tab)
                switchTab(target.dataset.tab);
            else if (target.dataset.action)
                handleAction(target.dataset.action);
            else if (target.dataset.advance) {
                commit(next => advanceDiseaseTime(next, Number(target.dataset.advance)));
            }
            else if (target.dataset.resolve) {
                const event = pendingDiseaseEvents(store)[Number(target.dataset.resolve)];
                if (event)
                    resolveEventDialog(event);
            }
            else if (target.dataset.roll) {
                const field = form.elements.namedItem(target.dataset.rollTarget || 'amount') as HTMLInputElement;
                field.value = String(Math.max(0, rollDiseaseDice(target.dataset.roll)));
            }
        }
        catch (error) {
            notice(error instanceof Error ? error.message : 'Не удалось выполнить действие.', true);
        }
    });
    el('dw-add-character').addEventListener('click', () => { const previous = selectedCharacter; selectedCharacter = ''; editCharacter(); selectedCharacter = previous; });
    el('dw-edit-game').addEventListener('click', () => openDialog('Название локальной игры', textInput('title', 'Название', store.title), data => commit(next => { next.title = requiredName(data, 'title'); })));
    el('dw-advance-custom').addEventListener('click', () => openDialog('Продвинуть игровое время', `<div class="dw-form-grid">${numberInput('duration', 'Прошло', 1, 1, MAX_GAME_MINUTE)}<label>Единицы<select name="unit"><option value="1">Минуты</option><option value="60">Часы</option><option value="1440">Дни</option></select></label></div><p class="dw-form-hint">События появятся в очереди; их последствия не применятся без обработки.</p>`, data => commit(next => advanceDiseaseTime(next, num(data, 'duration') * num(data, 'unit'))), 'Продвинуть время'));
    el('dw-rest').addEventListener('click', () => openDialog('Завершён продолжительный отдых', `<p class="dw-muted">Отметьте уже завершённый отдых. Это событие не добавляет часы: отдельно продвиньте время на фактическую длительность отдыха и обработайте наступившие сроки.</p><label>Кто отдыхал<select name="character"><option value="">Все персонажи</option>${store.characters.map(c => `<option value="${esc(c.id)}"${c.id === selectedCharacter ? ' selected' : ''}>${esc(c.name)}</option>`).join('')}</select></label>`, data => { let count = 0; commit(next => { count = requestDiseaseRest(next, value(data, 'character') || null); }); notice(count ? `Добавлено проверок после отдыха: ${count}.` : 'Нет новых проверок после отдыха: они уже отмечены в это время или не предусмотрены болезнями.'); }, 'Отметить отдых'));
    el('dw-export').addEventListener('click', exportStore);
    el('dw-import').addEventListener('click', () => input('dw-import-file').click());
    input('dw-import-file').addEventListener('change', async () => {
        const file = input('dw-import-file').files?.[0];
        input('dw-import-file').value = '';
        if (!file)
            return;
        try {
            if (file.size > 10000000)
                throw new Error('Файл больше 10 МБ.');
            const imported = parseDiseaseStore(JSON.parse(await file.text()));
            openDialog('Импорт локальной игры', `<p class="dw-muted">Заменить текущую игру данными из файла?</p><p><strong>${esc(imported.title)}</strong> · ${imported.characters.length} персонажей · ${imported.cases.length} случаев · ${formatGameTime(imported.minute)}</p><p class="dw-form-hint">Текущие данные заменятся полностью. Перед импортом можно отменить действие и экспортировать текущую игру.</p>`, () => { commit(next => { const revision = next.revision; Object.assign(next, structuredClone(imported)); next.revision = revision; selectedCharacter = ''; selectedCase = ''; }); switchTab('tracker'); notice('Игра импортирована.'); }, 'Заменить локальную игру');
        }
        catch (error) {
            notice(error instanceof Error ? error.message : 'Некорректный JSON. Текущие данные не изменены.', true);
        }
    });
    input('dw-show-archive').addEventListener('change', renderTracker);
    input('disease-search').addEventListener('input', () => { pageSize = 32; renderCatalog(); });
    [...Object.values(filterIds), 'disease-sort', 'dw-favorites'].forEach(id => el(id).addEventListener('change', () => { pageSize = 32; renderCatalog(); }));
    el('disease-reset-filters').addEventListener('click', () => { input('disease-search').value = ''; Object.values(filterIds).forEach(id => select(id).value = 'all'); select('disease-sort').value = 'family'; input('dw-favorites').checked = false; pageSize = 32; renderCatalog(); });
    el('dw-load-more').addEventListener('click', () => { pageSize += 32; renderCatalog(false); });
    root.querySelector('[role=tablist]')!.addEventListener('keydown', (e: KeyboardEvent) => { const tabs = [...root.querySelectorAll<HTMLButtonElement>('[data-tab]')]; const current = tabs.indexOf(document.activeElement as HTMLButtonElement); if (current < 0)
        return; let index = current; if (e.key === 'ArrowRight')
        index = (current + 1) % tabs.length;
    else if (e.key === 'ArrowLeft')
        index = (current + tabs.length - 1) % tabs.length;
    else if (e.key === 'Home')
        index = 0;
    else if (e.key === 'End')
        index = tabs.length - 1;
    else
        return; e.preventDefault(); switchTab(tabs[index].dataset.tab!); tabs[index].focus(); });
    document.addEventListener('keydown', event => { if (root.hidden || dialog.open)
        return; const editing = event.target instanceof HTMLElement && (['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName) || event.target.isContentEditable); if (event.key === '/' && !editing) {
        event.preventDefault();
        switchTab('catalog');
        root.querySelector('.dw-catalog-layout')!.classList.remove('dw-reading');
        input('disease-search').focus();
    }
    else if (event.key === 'Escape' && event.target === input('disease-search')) {
        input('disease-search').value = '';
        pageSize = 32;
        renderCatalog();
    } });
    window.addEventListener('popstate', readUrl);
    window.addEventListener('storage', event => { if (event.key === storageKey && event.newValue !== savedRaw) {
        conflict = true;
        storageWarning('Игра изменена в другой вкладке. Экспортируйте текущую копию или перечитайте сохранение, прежде чем продолжить.', true);
    } });
    testAccountSupabase?.auth.onAuthStateChange((event, session) => { if (event === 'SIGNED_OUT' || (session && session.user.id !== userId)) {
        authorized = false;
        root.hidden = true;
        dialog.close();
        store = newDiseaseStore();
        el('dw-character-list').replaceChildren();
        el('dw-cases').replaceChildren();
        el('dw-case-reader').replaceChildren();
        el('dw-dialog-body').replaceChildren();
        const error = document.querySelector<HTMLElement>('#disease-catalog-error')!;
        error.textContent = 'Сессия завершена. Войдите снова.';
        error.hidden = false;
    } });
    readUrl();
    renderTracker();
}
