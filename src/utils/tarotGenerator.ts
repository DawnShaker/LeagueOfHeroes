import cardData from '../data/tarotCards.json' with { type: 'json' };
import referenceData from '../data/tarotReferences.json' with { type: 'json' };

export const meaningLabels = { person: 'Персонаж', creature: 'Существо или ловушка', place: 'Место', treasure: 'Сокровище', situation: 'Ситуация' } as const;
export type Meaning = keyof typeof meaningLabels;
export type Deck = 'all' | 'classic' | 'locations' | 'features' | 'story';
export interface CardMeaning { text: string; referenceIds: string[] }
export interface TarotCard {
  id: string; name: string; nameEn: string; description: string; page: number;
  classic: boolean; dungeonDeck: 'locations' | 'features' | 'story' | null;
  image: string; artist: string; upright: Record<Meaning, CardMeaning>; reversed: Record<Meaning, CardMeaning>; referenceIds: string[];
}
export const tarotCards = cardData as TarotCard[];
export const tarotReferences = referenceData;
export const cardsById = new Map(tarotCards.map(card => [card.id, card]));
export interface SpreadOptions { mode: 'adventure' | 'dungeon'; deck: 'all' | 'classic'; challenges: number; reversals: boolean; prologue: boolean }
export interface SpreadCard {
  key: string; title: string; hint: string; group: string; pool: Deck;
  cardId: string; reversed: boolean; meaning: Meaning; literal: boolean; notes: string;
}
export interface TarotSpread { version: 1; options: SpreadOptions; title: string; cards: SpreadCard[] }
export const defaultSpreadOptions: SpreadOptions = { mode: 'adventure', deck: 'all', challenges: 3, reversals: true, prologue: true };
export const tarotImportLimit = 1_000_000;

export function deckCards(deck: Deck): TarotCard[] {
  return tarotCards.filter(card => deck === 'all' || (deck === 'classic' ? card.classic : card.dungeonDeck === deck));
}

export function validateSpreadOptions(value: unknown): SpreadOptions {
  if (!value || typeof value !== 'object') throw new Error('Не заданы параметры расклада.');
  const o = value as SpreadOptions;
  if (!['adventure', 'dungeon'].includes(o.mode) || !['all', 'classic'].includes(o.deck)
    || !Number.isInteger(o.challenges) || o.challenges < 1 || o.challenges > 6
    || typeof o.reversals !== 'boolean' || typeof o.prologue !== 'boolean') throw new Error('Некорректные параметры расклада.');
  return { mode: o.mode, deck: o.deck, challenges: o.challenges, reversals: o.reversals, prologue: o.prologue };
}

function positions(options: SpreadOptions): Omit<SpreadCard, 'cardId' | 'reversed' | 'notes'>[] {
  const dungeon = options.mode === 'dungeon';
  const result: Omit<SpreadCard, 'cardId' | 'reversed' | 'notes'>[] = [];
  function add(key: string, title: string, hint: string, group: string, meaning: Meaning, pool?: Deck) {
    const source = pool ?? (dungeon ? 'story' : options.deck);
    result.push({ key, title, hint, group, meaning, pool: source, literal: source === 'locations' || source === 'features' });
  }
  if (!dungeon || options.prologue) {
    add('gather', '1 · Сбор группы', 'Где, с кем и при каких обстоятельствах герои встречаются до начала приключения.', 'opening', 'place');
    add('begin', '2 · Завязка', 'Событие, заказчик или нападение, побуждающее героев действовать.', 'opening', 'situation');
    add('journey', '3 · Путь', 'Переход от завязки к месту приключения: встреченный человек, существо или место.', 'journey', 'situation');
  }
  add('entrance', '4 · Вход', 'Порог места приключения: облик входа или его охрана.', 'entrance', 'place', dungeon ? 'locations' : undefined);
  if (dungeon) add('entrance-feature', '4 · Особенность входа', 'Содержимое или обитатель входной области.', 'entrance', 'creature', 'features');
  for (let i = 0; i < options.challenges; i++) {
    const title = `${5 + i} · Испытание ${i + 1}`;
    if (dungeon) add(`challenge-place-${i}`, `${title}: место`, 'Помещение или участок подземелья, где проходит испытание.', `challenge-${i}`, 'place', 'locations');
    add(`challenge-${i}`, title, 'Существо, персонаж или обстоятельства, с которыми предстоит справиться.', `challenge-${i}`, 'creature', dungeon ? 'features' : undefined);
  }
  const next = 5 + options.challenges;
  add('treasure', `${next} · Сокровище`, 'Конечная цель или награда приключения: ценность, искусство или магический предмет.', 'ending', 'treasure', dungeon ? 'features' : undefined);
  if (dungeon) add('guardian-place', `${next + 1} · Место финала`, 'Где находятся сокровище и его страж.', 'ending', 'place', 'locations');
  add('guardian', `${next + 1} · Страж`, 'Последняя преграда перед наградой: обычно существо, иногда ситуация.', 'ending', 'creature', dungeon ? 'features' : undefined);
  return result;
}

function randomIndex(length: number, random: () => number) {
  const value = random();
  if (value < 0 || value >= 1 || !Number.isFinite(value)) throw new Error('Ошибка источника случайности.');
  return Math.floor(value * length);
}

export function createTarotSpread(input: SpreadOptions, random = Math.random): TarotSpread {
  const options = validateSpreadOptions(input);
  const used = new Set<string>();
  const cards = positions(options).map(position => {
    const available = deckCards(position.pool).filter(card => !used.has(card.id));
    if (!available.length) throw new Error('В колоде недостаточно карт.');
    const card = available[randomIndex(available.length, random)];
    used.add(card.id);
    return { ...position, cardId: card.id, reversed: !position.literal && options.reversals && random() < .5, notes: '' };
  });
  return { version: 1, options, title: '', cards };
}

export function replacementCards(spread: TarotSpread, key: string) {
  const position = spread.cards.find(card => card.key === key);
  if (!position) throw new Error('Позиция расклада не найдена.');
  const used = new Set(spread.cards.filter(card => card.key !== key).map(card => card.cardId));
  return deckCards(position.pool).filter(card => !used.has(card.id));
}

export function replaceSpreadCard(spread: TarotSpread, key: string, cardId?: string, random = Math.random): TarotSpread {
  const current = spread.cards.find(card => card.key === key);
  if (!current) throw new Error('Позиция расклада не найдена.');
  const available = replacementCards(spread, key).filter(card => cardId ? card.id === cardId : card.id !== current.cardId);
  if (!available.length) throw new Error('Эта карта недоступна для выбранной позиции.');
  const next = available[randomIndex(available.length, random)];
  return { ...spread, cards: spread.cards.map(card => card.key === key
    ? { ...card, cardId: next.id, reversed: !card.literal && spread.options.reversals && random() < .5, notes: '' } : card) };
}

const literalImages: Record<string, string> = {
  aberration: 'Аберрация или след её присутствия.', beast: 'Зверь.', book: 'Книга, свиток или иной письменный текст.',
  campfire: 'Костёр или место привала.', celestial: 'Небожитель.', construct: 'Конструкт или оживлённый предмет.', corpse: 'Мёртвое тело.',
  door: 'Дверь или проход.', dragon: 'Дракон.', elemental: 'Элементаль.', euryale: 'Медуза или связанная с ней особенность.',
  expert: 'Умелый специалист.', fey: 'Фея.', fiend: 'Исчадие.', fool: 'Наивный человек.', gem: 'Самоцветы.', giant: 'Великан.',
  humanoid: 'Гуманоид.', jester: 'Шут или комический образ.', key: 'Ключ или запертый механизм.', knight: 'Рыцарь.', lance: 'Копьё или другое оружие.',
  mage: 'Пользователь тайной магии.', map: 'Карта.', monstrosity: 'Монстр.', ooze: 'Слизь.', pit: 'Яма или провал.', plant: 'Растение или растительное существо.',
  priest: 'Жрец.', prisoner: 'Пленник.', puzzle: 'Загадка или головоломка.', ring: 'Кольцо.', rogue: 'Плут.', sage: 'Мудрец.', shield: 'Щит.', skull: 'Череп или скелетный образ.',
  staff: 'Посох.', stairway: 'Лестница.', statue: 'Статуя.', throne: 'Трон или место правителя.', tree: 'Дерево.', undead: 'Нежить.', warrior: 'Воин.', well: 'Колодец.',
  bridge: 'Мост.', cavern: 'Пещера.', crossroads: 'Перекрёсток.', donjon: 'Темница.', maze: 'Лабиринт.', path: 'Тропа или дорога.',
  ruin: 'Руины.', tavern: 'Таверна.', temple: 'Храм.', tomb: 'Гробница.', tower: 'Башня.',
};

export function spreadMeaning(position: SpreadCard): string {
  const card = cardsById.get(position.cardId)!;
  return position.literal ? literalImages[card.id] || card.name : card[position.reversed ? 'reversed' : 'upright'][position.meaning].text;
}

/** Rebuild trusted structure and bound editable fields; stored markup is never rendered as HTML. */
export function parseTarotSpread(value: unknown): TarotSpread {
  if (!value || typeof value !== 'object') throw new Error('Файл не содержит расклада.');
  const data = value as Partial<TarotSpread>;
  if (data.version !== 1 || !Array.isArray(data.cards) || typeof data.title !== 'string' || data.title.length > 180) throw new Error('Неизвестный формат расклада.');
  const options = validateSpreadOptions(data.options);
  const expected = positions(options);
  if (data.cards.length !== expected.length) throw new Error('Число позиций не соответствует параметрам.');
  const used = new Set<string>();
  const cards = expected.map((position, i) => {
    const saved = data.cards![i];
    if (!saved || saved.key !== position.key || !deckCards(position.pool).some(card => card.id === saved.cardId)
      || used.has(saved.cardId) || typeof saved.reversed !== 'boolean' || typeof saved.meaning !== 'string' || !Object.hasOwn(meaningLabels, saved.meaning)
      || typeof saved.notes !== 'string' || saved.notes.length > 5000
      || (saved.reversed && (position.literal || !options.reversals))) throw new Error('Некорректная карта в раскладе.');
    used.add(saved.cardId);
    return { ...position, cardId: saved.cardId, reversed: saved.reversed, meaning: saved.meaning, notes: saved.notes };
  });
  return { version: 1, options, title: data.title, cards };
}

export function exportTarotText(spread: TarotSpread): string {
  const lines = [spread.title || 'Приключение по картам', spread.options.mode === 'adventure' ? 'Расклад приключения' : 'Расклад подземелья', ''];
  for (const position of spread.cards) {
    const card = cardsById.get(position.cardId)!;
    lines.push(`## ${position.title}`, `${card.name} (${card.nameEn}) · ${position.literal ? 'буквальный образ' : position.reversed ? 'перевёрнутая' : 'прямая'}`,
      position.literal ? spreadMeaning(position) : `${meaningLabels[position.meaning]}: ${spreadMeaning(position)}`);
    if (position.notes) lines.push(`Замысел мастера: ${position.notes}`);
    lines.push('');
  }
  lines.push('Источник: The Deck of Many Things: Card Reference Guide (2023), с. 8–13, 14–80. Русская сокращённая адаптация толкований.',
    'https://5e.tools/book.html#dmtcrg,2', 'Это сюжетный расклад; магические эффекты предмета «Колода многих вещей» здесь не применяются.');
  return lines.join('\n');
}
