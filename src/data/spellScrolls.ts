type ScrollRarity = 'Common' | 'Uncommon' | 'Rare' | 'Very Rare' | 'Legendary';

const rarityDetails: Record<ScrollRarity, { label: string; minLevel: number }> = {
  Common: { label: 'Обычный', minLevel: 1 },
  Uncommon: { label: 'Необычный', minLevel: 1 },
  Rare: { label: 'Редкий', minLevel: 5 },
  'Very Rare': { label: 'Очень редкий', minLevel: 11 },
  Legendary: { label: 'Легендарный', minLevel: 17 },
};

const scrolls: { spellLevel: number; rarity: ScrollRarity; saveDC: number; attackBonus: number }[] = [
  { spellLevel: 0, rarity: 'Common', saveDC: 13, attackBonus: 5 },
  { spellLevel: 1, rarity: 'Common', saveDC: 13, attackBonus: 5 },
  { spellLevel: 2, rarity: 'Uncommon', saveDC: 13, attackBonus: 5 },
  { spellLevel: 3, rarity: 'Uncommon', saveDC: 15, attackBonus: 7 },
  { spellLevel: 4, rarity: 'Rare', saveDC: 15, attackBonus: 7 },
  { spellLevel: 5, rarity: 'Rare', saveDC: 17, attackBonus: 9 },
  { spellLevel: 6, rarity: 'Very Rare', saveDC: 17, attackBonus: 9 },
  { spellLevel: 7, rarity: 'Very Rare', saveDC: 18, attackBonus: 10 },
  { spellLevel: 8, rarity: 'Very Rare', saveDC: 18, attackBonus: 10 },
  { spellLevel: 9, rarity: 'Legendary', saveDC: 19, attackBonus: 11 },
];

export const spellScrollParameters = scrolls.map((scroll) => {
  // Use the first full-caster level that grants the spell and permits the rarity.
  const casterLevel = Math.max(1, 2 * scroll.spellLevel - 1, rarityDetails[scroll.rarity].minLevel);
  const proficiencyBonus = 2 + Math.floor((casterLevel - 1) / 4);

  return {
    ...scroll,
    rarityLabel: rarityDetails[scroll.rarity].label,
    casterLevel,
    proficiencyBonus,
    abilityModifier: scroll.saveDC - 8 - proficiencyBonus,
  };
});

export function spellScrollParameterTable(spellLevel: number): string {
  const parameters = spellScrollParameters.find((scroll) => scroll.spellLevel === spellLevel);
  if (!parameters) throw new Error(`Unknown spell scroll level: ${spellLevel}`);

  return `<table><thead><tr><th>Сл</th><th>Бонус атаки</th><th>Мод характеристики</th></tr></thead><tbody><tr><td>${parameters.saveDC}</td><td>+${parameters.attackBonus}</td><td>+${parameters.abilityModifier}</td></tr></tbody></table><p>Если эффект заклинания зависит от модификатора заклинательной характеристики, используйте Мод из таблицы. Эти параметры фиксированы и не зависят от автора или читателя свитка. <a href="/general-rules#spell-scrolls">Правила использования свитков и расчёт Мод</a>.</p>`;
}
