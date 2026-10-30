import { calculateEncounter, encounterStorageKey, positiveInteger, restoreEncounter, validateMonster, xpForCR } from '../utils/encounterBuilder';
import type { Encounter, MonsterGroup } from '../utils/encounterBuilder';

interface EncounterPreset { id: string; name: string; day: number; monsters: MonsterGroup[] }
interface Planner { characters: Encounter['characters']; presets: EncounterPreset[]; activeId: string }

const root = document.getElementById('encounter-builder');
if (root) {
  const element = <T extends HTMLElement = HTMLElement>(id: string) => root.querySelector<T>(`#${id}`)!;
  const input = (id: string) => element<HTMLInputElement>(id);
  const format = (value: number | null) => value === null ? '—' : value.toLocaleString('ru-RU', { maximumFractionDigits: 2 });
  let planner: Planner = { characters: [], presets: [], activeId: '' };
  let encounter: Encounter = { characters: [], monsters: [] };
  let damagedSave = false;
  const status = (message: string) => { element('encounter-save-status').textContent = message; };
  const activePreset = () => planner.presets.find(preset => preset.id === planner.activeId);
  function save() {
    if (damagedSave) return;
    try {
      localStorage.setItem(encounterStorageKey, JSON.stringify({ version: 2, ...planner, draftMonsters: encounter.monsters }));
      status('План сохранён в этом браузере и восстановится при следующем открытии.');
    } catch { status('Браузер не разрешил сохранить план. Изменения доступны до закрытия страницы.'); }
  }
  function renderList(id: string, items: string[], kind: 'characters' | 'monsters') {
    const list = element(id); list.replaceChildren();
    if (!items.length) { const empty = document.createElement('p'); empty.textContent = kind === 'characters' ? 'Персонажи пока не добавлены.' : 'Противники пока не добавлены.'; list.append(empty); }
    items.forEach((text, index) => {
      const row = document.createElement('div'); row.className = 'list-item';
      const label = document.createElement('span'); label.textContent = text;
      const remove = document.createElement('button'); remove.type = 'button'; remove.className = 'remove-btn'; remove.textContent = '×'; remove.setAttribute('aria-label', `Удалить: ${text}`);
      remove.addEventListener('click', () => { encounter[kind].splice(index, 1); render(); save(); });
      row.append(label, remove); list.append(row);
    });
  }
  function renderSummary() {
    const summary = element('day-summary'); summary.replaceChildren();
    if (!planner.presets.length) { summary.textContent = 'Сохраните первое столкновение, чтобы собрать план приключения.'; return; }
    const days = new Map<number, EncounterPreset[]>();
    for (const preset of planner.presets) days.set(preset.day, [...(days.get(preset.day) || []), preset]);
    let total = 0;
    for (const [day, presets] of [...days].sort(([a], [b]) => a - b)) {
      const heading = document.createElement('h4'); heading.textContent = `День ${day} — ${presets.length} ${presets.length === 1 ? 'столкновение' : presets.length < 5 ? 'столкновения' : 'столкновений'}`; summary.append(heading);
      let dayXP = 0;
      for (const preset of presets) {
        const xp = preset.monsters.reduce((sum, monster) => sum + xpForCR(monster.cr, monster.zeroXP) * monster.count, 0);
        dayXP += xp;
        const line = document.createElement('p'); line.textContent = `${preset.name}: ${format(xp)} опыта`; summary.append(line);
      }
      total += dayXP;
      const subtotal = document.createElement('p'); subtotal.textContent = `Итого за день: ${format(dayXP)} опыта`; summary.append(subtotal);
    }
    const grand = document.createElement('strong'); grand.textContent = `Всего за приключение: ${format(total)} опыта`; summary.append(grand);
  }
  function render() {
    encounter.characters = planner.characters;
    const result = calculateEncounter(encounter);
    element('party-count').textContent = format(result.characterCount); element('avg-level').textContent = format(result.averageLevel);
    for (const key of ['low', 'moderate', 'high'] as const) {
      element(`${key}-threshold`).textContent = result.characterCount ? format(result.budgets[key]) : '—';
      element(`${key}-per-character`).textContent = result.characterCount ? `${format(result.budgets[key] / result.characterCount)} на персонажа` : '—';
    }
    element('total-difficulty').textContent = result.difficulty;
    element('difficulty-multiplier').textContent = result.highRatio !== null && result.highRatio > 1 ? ` (${format(result.highRatio)}× высокого бюджета)` : '';
    element('total-xp').textContent = format(result.totalXP); element('xp-per-character').textContent = format(result.xpPerCharacter);
    const warnings = element('encounter-warnings'); warnings.replaceChildren(); warnings.hidden = !result.warnings.length;
    for (const text of result.warnings) { const item = document.createElement('li'); item.textContent = text; warnings.append(item); }
    renderList('character-list', encounter.characters.map(character => `${character.count} × персонаж ${character.level} уровня`), 'characters');
    renderList('monster-list', encounter.monsters.map(monster => `${monster.count} × ${monster.name} (CR ${monster.cr}; ${format(xpForCR(monster.cr, monster.zeroXP))} опыта за существо)`), 'monsters');
    const select = element<HTMLSelectElement>('preset-select'); select.replaceChildren();
    const empty = document.createElement('option'); empty.value = ''; empty.textContent = 'Выберите столкновение'; select.append(empty);
    for (const preset of planner.presets) { const option = document.createElement('option'); option.value = preset.id; option.textContent = `День ${preset.day}: ${preset.name}`; select.append(option); }
    select.value = planner.activeId;
    const current = activePreset(); element('update-preset').toggleAttribute('disabled', !current); element('delete-preset').toggleAttribute('disabled', !current);
    renderSummary();
  }
  function readMonsters(): MonsterGroup[] { return encounter.monsters.map(monster => validateMonster(monster)); }
  function error(id: string, value?: unknown) { const target = element(id); target.hidden = !value; target.textContent = value instanceof Error ? value.message : value ? 'Не удалось обработать ввод.' : ''; }

  element('character-form').addEventListener('submit', event => {
    event.preventDefault(); error('character-error');
    try { planner.characters = [...planner.characters, { count: positiveInteger(input('char-count').value, 'Количество персонажей'), level: positiveInteger(input('char-level').value, 'Уровень', 20) }]; encounter.characters = planner.characters; calculateEncounter(encounter); element<HTMLFormElement>('character-form').reset(); render(); save(); input('char-count').focus(); }
    catch (value) { error('character-error', value); }
  });
  input('monster-cr').addEventListener('input', () => { element('zero-xp-control').hidden = input('monster-cr').value.trim() !== '0'; });
  element('monster-form').addEventListener('submit', event => {
    event.preventDefault(); error('monster-error');
    try {
      const cr = input('monster-cr').value.trim();
      encounter.monsters.push(validateMonster({ name: input('monster-name').value, cr, count: positiveInteger(input('monster-count').value, 'Количество противников'), zeroXP: cr === '0' && element<HTMLSelectElement>('zero-xp').value === '0' }));
      calculateEncounter(encounter); element<HTMLFormElement>('monster-form').reset(); element('zero-xp-control').hidden = true; render(); save(); input('monster-name').focus();
    } catch (value) { error('monster-error', value); }
  });
  element('save-preset').addEventListener('click', () => {
    try {
      const name = input('preset-name').value.trim(); if (!name || name.length > 100) throw new Error('Укажите название столкновения (до 100 символов).');
      const day = positiveInteger(input('preset-day').value, 'День');
      const preset: EncounterPreset = { id: crypto.randomUUID(), name, day, monsters: readMonsters() };
      planner.presets.push(preset); planner.activeId = preset.id; render(); save();
    } catch (value) { window.alert(value instanceof Error ? value.message : 'Не удалось сохранить столкновение.'); }
  });
  element<HTMLSelectElement>('preset-select').addEventListener('change', event => {
    const id = (event.currentTarget as HTMLSelectElement).value; planner.activeId = id;
    const preset = activePreset(); encounter.monsters = preset ? structuredClone(preset.monsters) : [];
    if (preset) { input('preset-name').value = preset.name; input('preset-day').value = String(preset.day); }
    render(); save();
  });
  element('update-preset').addEventListener('click', () => {
    const preset = activePreset(); if (!preset) return;
    try { const name = input('preset-name').value.trim(); if (!name) throw new Error('Укажите название столкновения.'); preset.name = name; preset.day = positiveInteger(input('preset-day').value, 'День'); preset.monsters = readMonsters(); render(); save(); }
    catch (value) { window.alert(value instanceof Error ? value.message : 'Не удалось обновить столкновение.'); }
  });
  element('delete-preset').addEventListener('click', () => {
    const preset = activePreset(); if (!preset) return;
    planner.presets = planner.presets.filter(item => item.id !== preset.id); planner.activeId = ''; encounter.monsters = []; input('preset-name').value = ''; render(); save();
  });
  element('clear-encounter').addEventListener('click', () => {
    if ((damagedSave || planner.characters.length || planner.presets.length || encounter.monsters.length) && !window.confirm('Удалить сохранённый план, персонажей и все столкновения?')) return;
    planner = { characters: [], presets: [], activeId: '' }; encounter = { characters: [], monsters: [] }; damagedSave = false;
    for (const id of ['character-form', 'monster-form']) element<HTMLFormElement>(id).reset();
    input('preset-name').value = ''; input('preset-day').value = '1'; element('zero-xp-control').hidden = true; error('character-error'); error('monster-error'); render(); save(); input('char-count').focus();
  });

  try {
    const raw = localStorage.getItem(encounterStorageKey);
    if (raw) {
      const data = JSON.parse(raw);
      if (data?.version === 2 && Array.isArray(data.characters) && Array.isArray(data.presets)) {
        planner = { characters: data.characters, presets: data.presets, activeId: data.activeId || '' };
        planner.characters.forEach(character => positiveInteger(character.count, 'Количество персонажей'));
        planner.presets = planner.presets.map((preset: EncounterPreset) => ({ ...preset, day: positiveInteger(preset.day, 'День'), monsters: preset.monsters.map(validateMonster) }));
        const draft = Array.isArray(data.draftMonsters) ? data.draftMonsters.map(validateMonster) : activePreset()?.monsters || [];
        encounter = { characters: planner.characters, monsters: structuredClone(draft) };
        status('Сохранённый план восстановлен из этого браузера.');
      } else {
        const legacy = restoreEncounter(raw); planner.characters = legacy.characters; encounter = legacy;
        if (legacy.monsters.length) { const preset = { id: crypto.randomUUID(), name: 'Столкновение 1', day: 1, monsters: legacy.monsters }; planner.presets.push(preset); planner.activeId = preset.id; }
        status('Сохранённое столкновение перенесено в план приключения.');
      }
    }
  } catch { damagedSave = true; status('Сохранённый план повреждён или имеет неизвестный формат. Он не перезаписан. Очистите его, чтобы начать новый план.'); }
  render();
}
