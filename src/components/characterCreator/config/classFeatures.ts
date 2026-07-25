export const WEAPON_MASTERY_OPTIONS = [
  { id: 'battleaxe', name: 'Боевой топор', detail: 'Опрокидывание [Topple]', masteryId: 'topple', href: '/faq' },
  { id: 'blowgun', name: 'Духовая трубка', detail: 'Подавление [Vex]', masteryId: 'vex', href: '/faq' },
  { id: 'club', name: 'Дубинка', detail: 'Замедление [Slow]', masteryId: 'slow', href: '/faq' },
  { id: 'dagger', name: 'Кинжал', detail: 'Выпад [Nick]', masteryId: 'nick', href: '/faq' },
  { id: 'dart', name: 'Дротик', detail: 'Подавление [Vex]', masteryId: 'vex', href: '/faq' },
  { id: 'flail', name: 'Цеп', detail: 'Изнурение [Sap]', masteryId: 'sap', href: '/faq' },
  { id: 'glaive', name: 'Глефа', detail: 'Задевание [Graze]', masteryId: 'graze', href: '/faq' },
  { id: 'greataxe', name: 'Секира', detail: 'Прорубание [Cleave]', masteryId: 'cleave', href: '/faq' },
  { id: 'greatclub', name: 'Большая дубина', detail: 'Толкание [Push]', masteryId: 'push', href: '/faq' },
  { id: 'greatsword', name: 'Двуручный меч', detail: 'Задевание [Graze]', masteryId: 'graze', href: '/faq' },
  { id: 'halberd', name: 'Алебарда', detail: 'Прорубание [Cleave]', masteryId: 'cleave', href: '/faq' },
  { id: 'hand-crossbow', name: 'Ручной арбалет', detail: 'Подавление [Vex]', masteryId: 'vex', href: '/faq' },
  { id: 'handaxe', name: 'Ручной топор', detail: 'Подавление [Vex]', masteryId: 'vex', href: '/faq' },
  { id: 'heavy-crossbow', name: 'Тяжёлый арбалет', detail: 'Толкание [Push]', masteryId: 'push', href: '/faq' },
  { id: 'javelin', name: 'Метательное копьё', detail: 'Замедление [Slow]', masteryId: 'slow', href: '/faq' },
  { id: 'lance', name: 'Пика', detail: 'Опрокидывание [Topple]', masteryId: 'topple', href: '/faq' },
  { id: 'light-crossbow', name: 'Лёгкий арбалет', detail: 'Замедление [Slow]', masteryId: 'slow', href: '/faq' },
  { id: 'light-hammer', name: 'Лёгкий молот', detail: 'Выпад [Nick]', masteryId: 'nick', href: '/faq' },
  { id: 'longbow', name: 'Длинный лук', detail: 'Замедление [Slow]', masteryId: 'slow', href: '/faq' },
  { id: 'longsword', name: 'Длинный меч', detail: 'Изнурение [Sap]', masteryId: 'sap', href: '/faq' },
  { id: 'mace', name: 'Булава', detail: 'Изнурение [Sap]', masteryId: 'sap', href: '/faq' },
  { id: 'maul', name: 'Молот', detail: 'Опрокидывание [Topple]', masteryId: 'topple', href: '/faq' },
  { id: 'morningstar', name: 'Моргенштерн', detail: 'Изнурение [Sap]', masteryId: 'sap', href: '/faq' },
  { id: 'musket', name: 'Мушкет', detail: 'Замедление [Slow]', masteryId: 'slow', href: '/faq' },
  { id: 'pike', name: 'Длинное копьё', detail: 'Толкание [Push]', masteryId: 'push', href: '/faq' },
  { id: 'pistol', name: 'Пистолет', detail: 'Подавление [Vex]', masteryId: 'vex', href: '/faq' },
  { id: 'quarterstaff', name: 'Боевой посох', detail: 'Опрокидывание [Topple]', masteryId: 'topple', href: '/faq' },
  { id: 'rapier', name: 'Рапира', detail: 'Подавление [Vex]', masteryId: 'vex', href: '/faq' },
  { id: 'scimitar', name: 'Скимитар', detail: 'Выпад [Nick]', masteryId: 'nick', href: '/faq' },
  { id: 'shortbow', name: 'Короткий лук', detail: 'Подавление [Vex]', masteryId: 'vex', href: '/faq' },
  { id: 'shortsword', name: 'Короткий меч', detail: 'Подавление [Vex]', masteryId: 'vex', href: '/faq' },
  { id: 'sickle', name: 'Серп', detail: 'Выпад [Nick]', masteryId: 'nick', href: '/faq' },
  { id: 'sling', name: 'Праща', detail: 'Замедление [Slow]', masteryId: 'slow', href: '/faq' },
  { id: 'spear', name: 'Копьё', detail: 'Изнурение [Sap]', masteryId: 'sap', href: '/faq' },
  { id: 'trident', name: 'Трезубец', detail: 'Опрокидывание [Topple]', masteryId: 'topple', href: '/faq' },
  { id: 'war-pick', name: 'Боевой клевец', detail: 'Изнурение [Sap]', masteryId: 'sap', href: '/faq' },
  { id: 'warhammer', name: 'Боевой молот', detail: 'Толкание [Push]', masteryId: 'push', href: '/faq' },
  { id: 'whip', name: 'Кнут', detail: 'Замедление [Slow]', masteryId: 'slow', href: '/faq' }
] as const;

export const BLOOD_CURSE_OPTIONS = [
  { id: 'blood-curse-of-the-anxious', name: 'Проклятие беспокойства', description: 'Вы знаете это Проклятие крови и можете применять его с помощью способности «Проклятая кровь». Усиление проклятия расходует кость магии крови согласно правилам класса.', href: '/classes/bloodhunter#feature-проклятая-кровь-1' },
  { id: 'blood-curse-of-the-marked', name: 'Проклятие меченого', description: 'Вы знаете это Проклятие крови и можете применять его с помощью способности «Проклятая кровь». Усиление проклятия расходует кость магии крови согласно правилам класса.', href: '/classes/bloodhunter#feature-проклятая-кровь-1' },
  { id: 'blood-curse-of-the-fallen-puppet', name: 'Проклятие павшей марионетки', description: 'Вы знаете это Проклятие крови и можете применять его с помощью способности «Проклятая кровь». Усиление проклятия расходует кость магии крови согласно правилам класса.', href: '/classes/bloodhunter#feature-проклятая-кровь-1' },
  { id: 'blood-curse-of-corrosion', name: 'Проклятие распирающей агонии', description: 'В качестве бонусного действия вы проклинаете существо, которое видите в пределах 30 футов. До конца вашего следующего хода, когда цель получает урон от колющего или рубящего оружия, она также получает некротический урон, равный одному броску кости магии крови.\n\nУсиление: проклятие длится 1 минуту. В конце каждого своего хода проклятое существо может совершить спасбросок Телосложения, прекращая эффект при успехе.', href: '/classes/bloodhunter#feature-проклятая-кровь-1' },
  { id: 'blood-curse-of-the-muddled-mind', name: 'Проклятие помутнённого рассудка', description: 'Вы знаете это Проклятие крови и можете применять его с помощью способности «Проклятая кровь». Усиление проклятия расходует кость магии крови согласно правилам класса.', href: '/classes/bloodhunter#feature-проклятая-кровь-1' },
  { id: 'blood-curse-of-binding', name: 'Проклятие привязки', description: 'Вы знаете это Проклятие крови и можете применять его с помощью способности «Проклятая кровь». Усиление проклятия расходует кость магии крови согласно правилам класса.', href: '/classes/bloodhunter#feature-проклятая-кровь-1' },
  { id: 'blood-curse-of-the-eyeless', name: 'Проклятие слепоты', description: 'Вы знаете это Проклятие крови и можете применять его с помощью способности «Проклятая кровь». Усиление проклятия расходует кость магии крови согласно правилам класса.', href: '/classes/bloodhunter#feature-проклятая-кровь-1' },
  { id: 'blood-curse-of-exposure', name: 'Проклятие уязвимости', description: 'Вы знаете это Проклятие крови и можете применять его с помощью способности «Проклятая кровь». Усиление проклятия расходует кость магии крови согласно правилам класса.', href: '/classes/bloodhunter#feature-проклятая-кровь-1' }
] as const;

export function buildClassFeatureOptions(fightingStyleOptions: any[]) {
  return {
  fighter: [{ id: 'fighting-style', name: 'Боевой стиль', count: 1, options: fightingStyleOptions }],
  cleric: [{
    id: 'divine-order', name: 'Божественный порядок', count: 1, href: '/classes/cleric#feature-божественный-порядок-1', options: [
      { id: 'protector', name: 'Защитник', detail: 'Владение воинским оружием и тяжёлой бронёй', href: '/classes/cleric#feature-божественный-порядок-1', effects: [{ type: 'weaponProficiency', categories: ['Воинское оружие'] }, { type: 'armorTraining', categories: ['Тяжёлая броня'] }] },
      { id: 'thaumaturge', name: 'Чудотворец', detail: 'Дополнительный заговор жреца; бонус Мудрости к Магии или Религии', href: '/classes/cleric#feature-божественный-порядок-1', effects: [{ type: 'extraCantrip', spellList: 'cleric', count: 1 }, { type: 'skillCheckBonus', skills: ['Магия', 'Религия'], ability: 'wisdom' }] }
    ]
  }],
  druid: [{
    id: 'primal-order', name: 'Первобытный порядок', count: 1, href: '/classes/druid#feature-первобытный-порядок-1', options: [
      { id: 'magician', name: 'Маг', detail: 'Дополнительный заговор друида; бонус Мудрости к Магии или Природе', href: '/classes/druid#feature-первобытный-порядок-1', effects: [{ type: 'extraCantrip', spellList: 'druid', count: 1 }, { type: 'skillCheckBonus', skills: ['Магия', 'Природа'], ability: 'wisdom' }] },
      { id: 'warden', name: 'Страж', detail: 'Владение воинским оружием и средней бронёй', href: '/classes/druid#feature-первобытный-порядок-1', effects: [{ type: 'weaponProficiency', categories: ['Воинское оружие'] }, { type: 'armorTraining', categories: ['Средняя броня'] }] }
    ]
  }],
  warlock: [{
    id: 'eldritch-invocation', name: 'Таинственное воззвание', count: 1, href: '/classes/warlock#feature-таинственные-воззвания-1', options: [
      { id: 'pact-of-the-tome', name: 'Договор гримуара', detail: 'Открывает отдельный выбор заговоров и ритуалов', effects: [{ type: 'spellSource', source: 'pact-tome' }], href: '/classes/warlock#feature-таинственные-воззвания-1' },
      { id: 'pact-of-the-blade', name: 'Договор клинка', detail: 'Создаёт или связывает оружие договора', effects: [{ type: 'pactWeapon' }], href: '/classes/warlock#feature-таинственные-воззвания-1' },
      { id: 'pact-of-the-chain', name: 'Договор цепи', detail: 'Даёт Поиск фамильяра и особые формы фамильяра', effects: [{ type: 'fixedSpell', spell: 'Поиск фамильяра' }], href: '/classes/warlock#feature-таинственные-воззвания-1' },
      { id: 'armor-of-shadows', name: 'Доспехи теней', detail: 'Доспех мага без траты ячейки', effects: [{ type: 'fixedSpell', spell: 'Доспех мага' }], href: '/classes/warlock#feature-таинственные-воззвания-1' },
      { id: 'eldritch-mind', name: 'Мистический разум', detail: 'Преимущество на спасброски Телосложения для концентрации', effects: [{ type: 'trait' }], href: '/classes/warlock#feature-таинственные-воззвания-1' }
    ]
  }]
  } as Record<string, any[]>;
}
