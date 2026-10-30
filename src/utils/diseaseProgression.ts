import type { CaseState, DiseaseCaseEvent, DiseaseEntry, DiseaseMechanics, DiseaseWorkspaceStore, DueDiseaseEvent, LocalDiseaseCase } from '../types/disease';
export const MAX_GAME_MINUTE = 52560000;
export const MAX_DISEASE_EXPORT_BYTES = 10000000;
export const newDiseaseStore = (): DiseaseWorkspaceStore => ({ schemaVersion: 1, revision: 0, title: 'Моя игра', minute: 0, characters: [], cases: [], favorites: [] });
export const newDiseaseId = (): string => crypto.randomUUID();
export function caseState(c: CaseState): CaseState {
    return { mechanics: structuredClone(c.mechanics), onsetAt: c.onsetAt, phase: c.phase, stage: c.stage, successes: c.successes, failures: c.failures, scale: c.scale,
        damage: c.damage, hpLoss: c.hpLoss, exhaustion: c.exhaustion, nextCheckAt: c.nextCheckAt,
        nextEffectAt: c.nextEffectAt, lastRestAt: c.lastRestAt, pendingRestAt: c.pendingRestAt };
}
export function logDiseaseEvent(c: LocalDiseaseCase, at: number, kind: string, text: string, before: CaseState | null = null): void {
    if (c.events.length >= 1000)
        throw new Error('В случае уже 1000 записей. Экспортируйте архив и начните новый случай.');
    c.events.push({ id: newDiseaseId(), at, kind, text, before });
}
export function rollDiseaseDice(formula: string, random: () => number = Math.random): number {
    const match = /^(\d{1,2})d(\d{1,3})(?:\s*([+-])\s*(\d{1,4}))?$/i.exec(formula.trim());
    if (!match || +match[1] < 1 || +match[1] > 50 || +match[2] < 2 || +match[2] > 100)
        throw new Error('Формула кубов: например, 1d6 или 2d6+2 (до 50d100).');
    let result = 0;
    for (let i = 0; i < +match[1]; i++)
        result += 1 + Math.min(+match[2] - 1, Math.floor(random() * +match[2]));
    return result + (match[3] === '-' ? -1 : 1) * Number(match[4] || 0);
}
/** Only unambiguous units are suggested. Months, ranges and narrative durations require a GM choice. */
export function incubationMinutes(value: string, random: () => number = Math.random): number | null {
    const text = value.trim().toLowerCase();
    if (text === 'мгновенно')
        return 0;
    const match = /^(\d+d\d+|\d+)\s*(мин(?:ут[а-я]*)?|ч(?:ас[а-я]*)?|день|дня|дней|нед\.?)$/.exec(text);
    if (!match)
        return null;
    const amount = match[1].includes('d') ? rollDiseaseDice(match[1], random) : Number(match[1]);
    const factor = match[2].startsWith('мин') ? 1 : match[2].startsWith('ч') ? 60 : match[2].startsWith('нед') ? 10080 : 1440;
    return amount * factor;
}
export function createDiseaseCase(entry: DiseaseEntry, characterId: string, now: number, duration: number, mechanics: DiseaseMechanics, outcome: 'infected' | 'protected'): LocalDiseaseCase {
    if (['generator', 'track', 'event', 'template'].includes(entry.kind))
        throw new Error('Выберите конкретное заражение: эта запись является справочным материалом.');
    integer(now, 0, MAX_GAME_MINUTE, 'Время воздействия');
    integer(duration, 0, MAX_GAME_MINUTE - now, 'Инкубация');
    validateMechanics(mechanics);
    const c: LocalDiseaseCase = {
        id: newDiseaseId(), characterId, diseaseId: entry.id,
        snapshot: { name: entry.nameRu || entry.name, nameEn: entry.name, infection: entry.infection, effects: entry.effects, progression: entry.progression, treatment: entry.treatment, version: 'catalog-2026-10-30-v1' },
        mechanics: structuredClone(mechanics), exposedAt: now, onsetAt: now + duration,
        phase: outcome === 'protected' ? 'exposure' : duration > 0 || mechanics.mode === 'timer' ? 'incubation' : 'active',
        stage: duration > 0 ? 0 : 1, successes: 0, failures: 0, scale: mechanics.mode === 'scale' && duration === 0 ? 1 : 0,
        damage: 0, hpLoss: 0, exhaustion: 0, nextCheckAt: null, nextEffectAt: null, lastRestAt: null, pendingRestAt: null,
        visibility: 'hidden', contagious: 'unknown', notes: '', events: [],
    };
    if (c.phase === 'active')
        scheduleActive(c, c.onsetAt);
    logDiseaseEvent(c, now, 'exposure', outcome === 'protected' ? 'Воздействие: заражения нет (спасбросок успешен или есть иммунитет).' : `Заражение подтверждено. Инкубация: ${duration} мин.`);
    return c;
}
function scheduleActive(c: LocalDiseaseCase, at: number): void {
    if (c.mechanics.mode !== 'timer' && c.mechanics.trigger === 'interval' && c.mechanics.intervalMinutes)
        c.nextCheckAt = at + c.mechanics.intervalMinutes;
    if (c.mechanics.effectIntervalMinutes)
        c.nextEffectAt = at + c.mechanics.effectIntervalMinutes;
}
export function pendingDiseaseEvents(store: DiseaseWorkspaceStore): DueDiseaseEvent[] {
    const events: DueDiseaseEvent[] = [];
    for (const c of store.cases) {
        if (c.phase === 'incubation' && c.onsetAt <= store.minute)
            events.push({ caseId: c.id, kind: c.mechanics.mode === 'timer' ? 'timer' : 'onset', at: c.onsetAt, label: c.mechanics.mode === 'timer' ? 'Срок сюжетного события' : 'Окончание инкубации' });
        if (c.phase !== 'active')
            continue;
        if (c.nextCheckAt !== null && c.nextCheckAt <= store.minute)
            events.push({ caseId: c.id, kind: 'check', at: c.nextCheckAt, label: c.mechanics.mode === 'scale' ? 'Изменение шкалы' : 'Проверка развития' });
        if (c.nextEffectAt !== null && c.nextEffectAt <= store.minute)
            events.push({ caseId: c.id, kind: 'effect', at: c.nextEffectAt, label: c.mechanics.effectLabel || 'Периодический эффект' });
        if (c.pendingRestAt !== null)
            events.push({ caseId: c.id, kind: 'rest', at: c.pendingRestAt, label: c.mechanics.mode === 'scale' ? 'Шкала после отдыха' : 'Проверка после отдыха' });
    }
    return events.sort((a, b) => a.at - b.at || a.caseId.localeCompare(b.caseId) || a.kind.localeCompare(b.kind));
}
export function advanceDiseaseTime(store: DiseaseWorkspaceStore, amount: number): void {
    integer(amount, 1, MAX_GAME_MINUTE - store.minute, 'Прошедшее время');
    store.minute += amount;
}
export function requestDiseaseRest(store: DiseaseWorkspaceStore, characterId: string | null): number {
    if (pendingDiseaseEvents(store).length)
        throw new Error('Сначала обработайте наступившие события, затем отметьте отдых.');
    let count = 0;
    for (const c of store.cases) {
        if (c.phase !== 'active' || c.mechanics.trigger !== 'rest' || (characterId && c.characterId !== characterId) || c.lastRestAt === store.minute)
            continue;
        const before = caseState(c);
        c.lastRestAt = store.minute;
        c.pendingRestAt = store.minute;
        logDiseaseEvent(c, store.minute, 'rest', 'Завершён продолжительный отдых; ожидается обработка развития.', before);
        count++;
    }
    return count;
}
export function applyDiseaseCheck(c: LocalDiseaseCase, success: boolean, at: number, hpLoss = 0, note = ''): void {
    if (c.phase !== 'active')
        throw new Error('Проверка доступна только для активной болезни.');
    integer(hpLoss, 0, 1000000, 'Потеря максимума хитов');
    if (!success) {
        c.failures++;
        c.successes = 0;
        c.hpLoss += hpLoss;
    }
    else
        c.successes++;
    const { mode, target } = c.mechanics;
    let result = success ? 'Успех' : 'Провал';
    if (mode === 'successes') {
        result += `; серия ${c.successes}/${target}`;
        if (c.successes >= target) {
            c.phase = 'recovered';
            result += '; болезнь излечена. Накопленные последствия учтены отдельно';
        }
    }
    else if (mode === 'stages') {
        if (success && c.stage <= 1) {
            c.phase = 'recovered';
            result += '; болезнь излечена';
        }
        else if (success)
            c.stage--;
        else if (c.stage < 3)
            c.stage++;
        else
            result += '; повторный провал на стадии 3: определите осложнение по описанию';
    }
    else if (mode === 'failures' && c.failures >= target)
        result += '; достигнут порог провалов — определите исход по описанию';
    if (hpLoss)
        result += `; максимум хитов уменьшен на ${hpLoss}`;
    if (c.phase === 'recovered') {
        c.nextCheckAt = null;
        c.nextEffectAt = null;
        c.pendingRestAt = null;
    }
    logDiseaseEvent(c, at, 'check', `${result}.${note ? ' ' + note : ''}`);
}
export function resolveDiseaseEvent(store: DiseaseWorkspaceStore, event: DueDiseaseEvent, success = true, amount = 0, note = ''): void {
    const queue = pendingDiseaseEvents(store);
    const next = queue.find(e => e.caseId === event.caseId && e.kind === event.kind && e.at === event.at);
    if (!next || next.at !== queue[0].at)
        throw new Error('Очередь изменилась. Обработайте самое раннее событие в списке.');
    const c = store.cases.find(item => item.id === event.caseId)!;
    const before = caseState(c);
    integer(amount, 0, 1000000, 'Величина последствия');
    if (event.kind === 'onset') {
        c.phase = 'active';
        c.stage = 1;
        c.scale = c.mechanics.mode === 'scale' ? 1 : 0;
        scheduleActive(c, event.at);
        logDiseaseEvent(c, event.at, 'onset', `Инкубация завершена. Примените эффекты: ${c.snapshot.effects}${note ? ' ' + note : ''}`, before);
    }
    else if (event.kind === 'timer') {
        c.phase = 'closed';
        logDiseaseEvent(c, event.at, 'outcome', `Сюжетный срок наступил. Итог мастера: ${note || 'указан в описании болезни'}`, before);
    }
    else if (event.kind === 'effect') {
        c.damage += amount;
        c.nextEffectAt = event.at + c.mechanics.effectIntervalMinutes!;
        logDiseaseEvent(c, event.at, 'effect', `${c.mechanics.effectLabel || 'Периодический эффект'}: учтено ${amount} урона.${note ? ' ' + note : ''}`, before);
    }
    else {
        if (event.kind === 'rest')
            c.pendingRestAt = null;
        else
            c.nextCheckAt = event.at + c.mechanics.intervalMinutes!;
        if (c.mechanics.mode === 'scale') {
            c.scale++;
            logDiseaseEvent(c, event.at, 'scale', `Шкала: ${c.scale}/${c.mechanics.target}.${c.scale >= c.mechanics.target ? ' Порог достигнут: примените указанный в описании эффект.' : ''}${note ? ' ' + note : ''}`, before);
        }
        else {
            applyDiseaseCheck(c, success, event.at, amount, note);
            c.events[c.events.length - 1].before = before;
        }
    }
}
export function correctLastDiseaseEvent(c: LocalDiseaseCase, at: number): void {
    const last = [...c.events].reverse().find(e => e.before && e.kind !== 'correction' && !c.events.some(x => x.kind === 'correction' && x.text === `Отменено изменение ${e.id}.`));
    if (!last?.before)
        throw new Error('Нет изменения, которое можно отменить.');
    const before = caseState(c);
    Object.assign(c, structuredClone(last.before));
    logDiseaseEvent(c, at, 'correction', `Отменено изменение ${last.id}.`, before);
}
function record(value: unknown): Record<string, unknown> {
    if (!value || typeof value !== 'object' || Array.isArray(value))
        throw new Error('Некорректная структура файла.');
    return value as Record<string, unknown>;
}
function string(value: unknown, max: number, label: string): string {
    if (typeof value !== 'string' || value.length > max)
        throw new Error(`Некорректное поле «${label}».`);
    return value;
}
function integer(value: unknown, min: number, max: number, label: string): number {
    if (typeof value !== 'number' || !Number.isSafeInteger(value) || value < min || value > max)
        throw new Error(`Некорректное поле «${label}»: от ${min} до ${max}.`);
    return value;
}
function nullableTime(value: unknown): number | null { return value === null ? null : integer(value, 0, MAX_GAME_MINUTE * 2, 'Игровое время'); }
function choice<T extends string>(value: unknown, options: readonly T[]): T {
    if (!options.includes(value as T))
        throw new Error('Неизвестное значение в файле.');
    return value as T;
}
function array(value: unknown, max: number): unknown[] {
    if (!Array.isArray(value) || value.length > max)
        throw new Error(`Ожидался список длиной до ${max}.`);
    return value;
}
export function validateMechanics(value: unknown): DiseaseMechanics {
    const v = record(value);
    const dice = (x: unknown): string | null => { if (x === null)
        return null; const f = string(x, 30, 'Кубы'); rollDiseaseDice(f, () => 0); return f; };
    const m: DiseaseMechanics = {
        mode: choice(v.mode, ['manual', 'stages', 'successes', 'failures', 'scale', 'timer']),
        trigger: choice(v.trigger, ['manual', 'interval', 'rest']), intervalMinutes: v.intervalMinutes === null ? null : integer(v.intervalMinutes, 1, MAX_GAME_MINUTE, 'Интервал'),
        dc: v.dc === null ? null : integer(v.dc, 1, 100, 'Сложность'), target: integer(v.target, 1, 100, 'Порог'),
        failureHpDice: dice(v.failureHpDice), effectIntervalMinutes: v.effectIntervalMinutes === null ? null : integer(v.effectIntervalMinutes, 1, MAX_GAME_MINUTE, 'Интервал эффекта'),
        effectDice: dice(v.effectDice), effectLabel: string(v.effectLabel, 200, 'Эффект'),
    };
    if (m.trigger === 'interval' && m.intervalMinutes === null)
        throw new Error('Укажите интервал проверки.');
    if (m.mode === 'timer' && (m.trigger !== 'manual' || m.effectIntervalMinutes !== null))
        throw new Error('Для сюжетного таймера не задаются повторяющиеся проверки и эффекты.');
    return m;
}
function parseCaseState(value: unknown): CaseState {
    const v = record(value);
    return { mechanics: validateMechanics(v.mechanics), onsetAt: integer(v.onsetAt, 0, MAX_GAME_MINUTE, 'Проявление'), phase: choice(v.phase, ['incubation', 'active', 'recovered', 'closed', 'exposure']), stage: integer(v.stage, 0, 3, 'Стадия'),
        successes: integer(v.successes, 0, 1000000, 'Успехи'), failures: integer(v.failures, 0, 1000000, 'Провалы'),
        scale: integer(v.scale, -1000000, 1000000, 'Шкала'), damage: integer(v.damage, 0, 1000000, 'Урон'), hpLoss: integer(v.hpLoss, 0, 1000000, 'Максимум хитов'),
        exhaustion: integer(v.exhaustion, 0, 6, 'Истощение'), nextCheckAt: nullableTime(v.nextCheckAt), nextEffectAt: nullableTime(v.nextEffectAt),
        lastRestAt: nullableTime(v.lastRestAt), pendingRestAt: nullableTime(v.pendingRestAt) };
}
export function parseDiseaseStore(value: unknown): DiseaseWorkspaceStore {
    const v = record(value);
    if (v.schemaVersion !== 1)
        throw new Error('Неподдерживаемая версия сохранения. Текущие данные не изменены.');
    const store: DiseaseWorkspaceStore = { schemaVersion: 1, revision: integer(v.revision, 0, Number.MAX_SAFE_INTEGER, 'Редакция'),
        title: string(v.title, 120, 'Название игры'), minute: integer(v.minute, 0, MAX_GAME_MINUTE, 'Время'),
        characters: array(v.characters, 100).map(item => { const c = record(item); return { id: string(c.id, 100, 'ID'), name: string(c.name, 120, 'Имя'), notes: string(c.notes, 5000, 'Заметка') }; }),
        favorites: array(v.favorites, 312).map(id => string(id, 100, 'Избранное')), cases: [], };
    const characterIds = new Set(store.characters.map(c => c.id));
    if (characterIds.size !== store.characters.length || store.characters.some(c => !c.id || !c.name.trim()))
        throw new Error('Повторяющиеся ID или пустые имена персонажей.');
    store.cases = array(v.cases, 250).map(item => {
        const c = record(item), snapshot = record(c.snapshot), mechanics = validateMechanics(c.mechanics);
        const result: LocalDiseaseCase = { ...parseCaseState(c), id: string(c.id, 100, 'ID случая'), characterId: string(c.characterId, 100, 'Носитель'), diseaseId: string(c.diseaseId, 100, 'Болезнь'),
            snapshot: { name: string(snapshot.name, 300, 'Название'), nameEn: string(snapshot.nameEn, 300, 'Название EN'), infection: string(snapshot.infection, 10000, 'Заражение'), effects: string(snapshot.effects, 20000, 'Эффекты'), progression: string(snapshot.progression, 10000, 'Развитие'), treatment: string(snapshot.treatment, 10000, 'Лечение'), version: string(snapshot.version, 100, 'Версия механики') },
            mechanics, exposedAt: integer(c.exposedAt, 0, MAX_GAME_MINUTE, 'Воздействие'), onsetAt: integer(c.onsetAt, 0, MAX_GAME_MINUTE, 'Проявление'),
            visibility: choice(c.visibility, ['hidden', 'symptoms', 'diagnosis']), contagious: choice(c.contagious, ['unknown', 'yes', 'no']), notes: string(c.notes, 10000, 'Заметка'),
            events: array(c.events, 1000).map(item => { const e = record(item); return { id: string(e.id, 100, 'ID события'), at: integer(e.at, 0, MAX_GAME_MINUTE, 'Время события'), kind: string(e.kind, 100, 'Тип события'), text: string(e.text, 30000, 'Запись'), before: e.before === null ? null : parseCaseState(e.before) } satisfies DiseaseCaseEvent; }),
        };
        if (!characterIds.has(result.characterId))
            throw new Error('У случая отсутствует персонаж.');
        if (!result.id || !result.diseaseId || result.exposedAt > store.minute || result.onsetAt < result.exposedAt)
            throw new Error('Некорректные сроки или ID случая.');
        if (result.events.some(e => e.at > store.minute))
            throw new Error('В журнале есть события из будущего игрового времени.');
        if (result.pendingRestAt !== null && (mechanics.trigger !== 'rest' || result.pendingRestAt > store.minute))
            throw new Error('Некорректное событие отдыха.');
        if (result.phase === 'active' && result.onsetAt > store.minute)
            throw new Error('Активная болезнь не может проявляться в будущем. Исправьте фазу или срок.');
        if ([result.nextCheckAt, result.nextEffectAt, result.pendingRestAt].some(at => at !== null && at < result.onsetAt))
            throw new Error('Событие развития не может предшествовать проявлению болезни.');
        if (result.nextCheckAt !== null && (mechanics.trigger !== 'interval' || !mechanics.intervalMinutes))
            throw new Error('Не задан интервал назначенной проверки.');
        if (result.nextEffectAt !== null && !mechanics.effectIntervalMinutes)
            throw new Error('Не задан интервал назначенного эффекта.');
        if (new Set(result.events.map(e => e.id)).size !== result.events.length)
            throw new Error('Повторяющиеся ID событий.');
        return result;
    });
    if (new Set(store.cases.map(c => c.id)).size !== store.cases.length)
        throw new Error('Повторяющиеся ID случаев.');
    if (new TextEncoder().encode(JSON.stringify(store, null, 2)).length > MAX_DISEASE_EXPORT_BYTES)
        throw new Error('Игра превышает 10 МБ. Экспортируйте текущую игру и освободите место, прежде чем добавлять записи.');
    return store;
}
