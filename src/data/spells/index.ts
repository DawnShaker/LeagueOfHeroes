import type { Spell } from '../../types/spell';

export const spells: Spell[] = [
  {
    id: 'acid-splash',
    name: 'Брызги кислоты',
    nameEn: 'Acid Splash',
    level: 'cantrip',
    school: 'воплощение',
    castingTime: '1 действие',
    range: '60 футов',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>Вы бросаете кислотный шарик в точку в пределах дальности, где он взрывается сферой с радиусом 5 футов. Каждое существо в этой сфере должно преуспеть в спаброске Ловкости или получить 1к6 урона кислотой.</p>

<p><strong>Улучшение заговора.</strong> Урон увеличивается на 1к6, когда вы достигаете 5 уровня (2к6), 11 уровня (3к6) и 17 уровня (4к6).</p>`,
    source: {
      book: 'PHB\'24',
      page: 239
    },
    sources: [
      { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
      { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
      { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
      { type: 'subclass', name: '<a href="/classes/cleric?subclass=knowledge">Домен Знаний</a>' },
      { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
      { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
      { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
      { type: 'subclass', name: '<a href="/classes/wizard?subclass=evoker">Воплотитель</a>' },
      { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
      { type: 'species', name: '<a href="/races/genasi/">Дженази Воды</a>' },
      { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
      { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
      { type: 'background', name: '<a href="/backgrounds/simic%20scientist/">Учёный Симиков</a>' },
      { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
      { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'mage-hand',
    name: 'Волшебная рука',
    nameEn: 'Mage Hand',
    level: 'cantrip',
    school: 'вызов',
    castingTime: '1 действие',
    range: '30 футов',
    components: {
      verbal: true,
      somatic: true
    },
    duration: '1 минута',
    description: `<p>Призрачная парящая рука появляется в точке, которую вы выбираете в пределах дистанции. Рука существует на протяжении всей длительности заклинания. Рука исчезает, если окажется дальше 30 футов от вас или если вы снова наложите это заклинание.</p>
<p>Когда вы накладываете это заклинание, вы можете использовать руку для манипуляции объектом, открытия незапертой двери или контейнера, убирания или извлечения предмета из открытого контейнера или выливания содержимого из склянки.</p>
<p>В дальнейшем, используя действие магия, вы можете снова управлять рукой. В рамках этого действия вы можете переместить руку на расстояние до 30 футов.</p>
<p>Рука не может атаковать, активировать магические предметы или переносить более 10 фунтов.</p>`,
    source: {
      book: 'PHB\'24',
      page: 293
    },
    sources: [
      { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
      { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
      { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
      { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
      { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
      { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
      { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
      { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
      { type: 'subclass', name: '<a href="/classes/ranger?subclass=swarmkeeper">Хранитель Роя</a>' },
      { type: 'subclass', name: '<a href="/classes/wizard?subclass=conjurer">Вызыватель</a>' },
      { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
      { type: 'species', name: '<a href="/races/gith/">Гит</a>' },
      { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
      { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
      { type: 'species', name: '<a href="/races/tiefling/">Тифлинг</a> Маммона' },
      { type: 'species', name: '<a href="/races/tiefling/">Тифлинг</a> Мефистофеля' },
      { type: 'background', name: '<a href="/backgrounds/dimir%20operative/">Оперативник Димиров</a>' },
      { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
      { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: '<a href="/feats/scion-of-the-outer-planes/">Наследник внешних планов</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' },
      { type: 'feat', name: '<a href="/feats/telekinetic/">Телекинетик</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'blade-ward',
    name: 'Защита от оружия',
    nameEn: 'Blade Ward',
    level: 'cantrip',
    school: 'ограждение',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Концентрация, до 1 минуты',
    description: `<p>Каждый раз, когда существо совершает атаку по вам до окончания длительности заклинания, то атакующий вычитает 1к4 из броска атаки.</p>`,
    source: {
      book: 'PHB\'24',
      page: 247
    },
    sources: [
      { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
      { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
      { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
      { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
      { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
      { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
      { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
      { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
      { type: 'subclass', name: '<a href="/classes/wizard?subclass=abjurer">Оградитель</a>' },
      { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
      { type: 'species', name: '<a href="/races/genasi/">Дженази Земли</a>' },
      { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
      { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
      { type: 'species', name: '<a href="/races/tiefling/">Тифлинг</a> Маммона' },
      { type: 'species', name: '<a href="/races/tiefling/">Тифлинг</a> Мефистофеля' },
      { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
      { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'booming-blade',
    name: 'Громовой клинок',
    nameEn: 'Booming Blade',
    level: 'cantrip',
    school: 'воплощение',
    castingTime: '1 действие',
    range: 'На себя (5-футовый радиус)',
    components: {
      somatic: true,
      material: 'рукопашное оружие стоимостью не менее 1 см'
    },
    duration: '1 раунд',
    description: `<p>Вы взмахиваете оружием, выбранным в качестве материального компонента, и совершаете им рукопашную атаку оружием против одного существа в пределах 5 футов от вас. При попадании цель подвергается обычному эффекту от атаки этим оружием и покрывается бушующей энергией до начала вашего следующего хода. Если цель добровольно перемещается на 5 футов или более до окончания действия заклинания, она получает 1к8 урона звуком, и действие заклинания заканчивается.</p>
    <p>Урон этого заклинания увеличивается, когда вы достигаете определённых уровней. На 5-м уровне рукопашная атака наносит дополнительно 1к8 урона звуком при попадании, а урон, получаемый при перемещении, увеличивается до 2к8. Оба броска урона снова увеличиваются на 1к8 на 11-м уровне (2к8 и 3к8) и на 17-м уровне (3к8 и 4к8).</p>`,
    source: {
      book: 'TCE\'14',
      page: 106
    },
    sources: [
      { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
      { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
      { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
      { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
      { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
      { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
      { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
      { type: 'subclass', name: '<a href="/classes/wizard?subclass=evoker">Воплотитель</a>' },
      { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
      { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
      { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
      { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
      { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'chill-touch',
    name: 'Леденящее прикосновение',
    nameEn: 'Chill Touch',
    level: 'cantrip',
    school: 'некромантия',
    castingTime: '1 действие',
    range: 'Касание',
    components: {
        verbal: true,
        somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>Направляя холод могилы, совершите рукопашную атаку заклинанием по цели в пределах досягаемости. При попадании цель получает 1к10 урона некротической энергией и не может восстанавливать хиты до конца вашего следующего хода.</p>
    <p><strong>Улучшение заговора.</strong> Урон увеличивается на 1к10, когда вы достигаете 5 уровня (2к10), 11 уровня (3к10) и 17 уровня (4к10).</p>`,
    source: {
      book: 'PHB\'24',
      page: 249
    },
    sources: [
      { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
      { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
      { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
      { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
      { type: 'subclass', name: '<a href="/classes/cleric?subclass=death">Домен Смерти</a>' },
      { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
      { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
      { type: 'subclass', name: '<a href="/classes/druid?subclass=spore">Круг Спор</a>' },
      { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
      { type: 'subclass', name: '<a href="/classes/wizard?subclass=necromancer">Некромант</a>' },
      { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
      { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
      { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
      { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
      { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: '<a href="/feats/scion-of-the-outer-planes/">Наследник внешних планов</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'control-flames',
    name: 'Власть над огнём',
    nameEn: 'Control Flames',
    level: 'cantrip',
    school: 'преобразование',
    castingTime: '1 действие',
    range: '60 футов',
    components: {
        somatic: true
    },
    duration: 'Мгновенная или 1 час',
    description: `<p>Вы выбираете немагическое пламя, которое вы можете видеть в пределах дистанции и которое помещается в куб с длиной ребра 5 футов. Вы можете управлять им одним из нижеперечисленных способов:</p>
    <p><ul><li>Вы можете мгновенно распространить огонь на 5 футов в одном направлении, если там присутствует дерево или другое топливо.</li>
    <li>Вы можете мгновенно потушить огонь в кубе.</li>
    <li>Вы можете увеличить или уменьшить вдвое область яркого и тусклого света, излучаемого пламенем, а также поменять его цвет. Эффект действует 1 час.</li>
    <li>Вы можете сотворить в огне изображение, которое будет отдалённо напоминать существо, предмет или место, и двигаться согласно вашим указаниям. Эффект действует 1 час.</li></ul></p>
    <p>Если вы накладываете это заклинание несколько раз, то вы не можете поддерживать более 3 длительных эффектов одновременно. Вы можете действием отменить один из действующих эффектов.</p>`,
    source: {
      book: 'PHB\'24',
      page: 249
    },
    sources: [
      { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
      { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
      { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
      { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
      { type: 'subclass', name: '<a href="/classes/cleric?subclass=death">Домен Смерти</a>' },
      { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
      { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
      { type: 'subclass', name: '<a href="/classes/druid?subclass=spore">Круг Спор</a>' },
      { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
      { type: 'subclass', name: '<a href="/classes/wizard?subclass=transmuter">Преобразователь</a>' },
      { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
      { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
      { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
      { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
      { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: '<a href="/feats/scion-of-the-outer-planes/">Наследник внешних планов</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'create-bonfire',
    name: 'Сотворение костра',
    nameEn: 'Create bonfire',
    level: 'cantrip',
    school: 'вызов',
    castingTime: '1 действие',
    range: '60 футов',
    components: {
        verbal: true,
        somatic: true
    },
    duration: 'Концентрация, вплоть до 1 минуты',
    description: `<p>Вы создаёте огонь на поверхности земли в точке, которую можете видеть в пределах дистанции. Пока заклинание действует, огонь занимает область в кубе с длиной ребра 5 футов. Все существа, оказавшиеся в этом пространстве в момент накладывания заклинания, должны преуспеть в спасброске Ловкости, иначе получат 1к8 урона огнём. Существо также должно совершать спасбросок, когда впервые за ход перемещается в область действия заклинания или заканчивает свой ход в ней. Пламя поджигает все никем не носимые и не переносимые горючие предметы.</p>
    <p>Урон заклинания увеличивается на 1к8, когда вы достигаете 5-го уровня (2к8), 11-го уровня (3к8) и 17-го уровня (4к8).</p>`,
    source: {
      book: 'XGE\'14',
      page: 152
    },
    sources: [
      { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
      { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
      { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
      { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
      { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
      { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
      { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
      { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
      { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
      { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
      { type: 'subclass', name: '<a href="/classes/wizard?subclass=conjurer">Вызыватель</a>' },
      { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
      { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
      { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
      { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
      { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
      { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'dancing-lights',
    name: 'Пляшущие огоньки',
    nameEn: 'Dancing Lights',
    level: 'cantrip',
    school: 'воплощение',
    castingTime: '1 действие',
    range: '120 футов',
    components: {
        verbal: true,
        somatic: true,
        material: 'кусочек фосфора'
    },
    duration: 'Концентрация, до 1 минуты',
    description: `<p>Вы создаёте до 4 огоньков размером с факел в пределах дистанции, делая их похожими на факелы, фонари или светящиеся сферы, парящие в воздухе. Вы можете также объединить 4 огонька в 1 светящуюся человекоподобную фигуру Среднего размера. Какую бы форму вы не выбрали, каждый огонёк излучает тусклый свет в радиусе 10 футов.</p>
    <p>Вы можете бонусным действием в свой ход переместить огоньки на 60 футов в новое место в пределах дистанции. Каждый огонёк должен находиться в пределах 20 футов от другого огонька, созданного этим заклинанием, и огонёк тухнет, если оказывается за пределами дистанции заклинания.</p>`,
    source: {
      book: 'PHB\'24',
      page: 259
    },
    sources: [
      { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
      { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
      { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
      { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
      { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
      { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
      { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
      { type: 'subclass', name: '<a href="/classes/wizard?subclass=illusionist">Иллюзионист</a>' },
      { type: 'species', name: '<a href="/races/elf/">Эльф Астральный</a>' },
      { type: 'species', name: '<a href="/races/elf/">Эльф Дроу</a>' },
      { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
      { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
      { type: 'species', name: '<a href="/races/halfelf/">Полуэльф Дроу</a>' },
      { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
      { type: 'background', name: '<a href="/backgrounds/golgari%20agent/">Агент Голгари</a>' },
      { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
      { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'word-of-radiance',
    name: 'Слово сияния',
    nameEn: 'Word of Radiance',
    level: 'cantrip',
    school: 'воплощение',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
        verbal: true,
        somatic: true,
        material: 'талисман в виде солнца'
    },
    duration: 'Мгновенная',
    description: `<p>Испепеляющее излучение вырывается от вас в 5-футовой эманации. Каждое существо на ваш выбор, которое вы видите в этой области, должно преуспеть в спасброске Телосложения, иначе получит 1к6 урона излучением.</p>
    <p><strong>Улучшение заговора.</strong> Урон увеличивается на 1к6, когда вы достигаете 5 уровня (2к6), 11 уровня (3к6) и 17 уровня (4к6).</p>`,
    source: {
      book: 'PHB\'24',
      page: 343
    },
    sources: [
      { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
      { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
      { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
      { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
      { type: 'feat', name: '<a href="/feats/blessed-warrior/">Благословлённый воин</a>' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'true-strike',
    name: 'Меткий удар',
    nameEn: 'True Strike',
    level: 'cantrip',
    school: 'прорицание',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
        verbal: true,
        somatic: true,
        material: 'оружие, которым у вас есть владение, и которое стоит 1+ зм'
    },
    duration: 'Мгновенная',
    description: `<p>Ведомый вспышкой магического прозрения, вы совершаете 1 атаку с помощью оружия, использованного при наложении заклинания. Для бросков атаки и урона вместо Силы или Ловкости используется ваша заклинательная характеристика. Если атака наносит урон, то он может быть излучением или нормальным типом урона оружия (по вашему выбору).</p>
    <p><strong>Улучшение заговора.</strong> Независимо от того, наносите ли вы урон излучением или нормальным типом урона оружия, атака наносит дополнительный урон излучением при достижении 5 уровня (1к6), 11 уровня (2к6) и 17 уровня (3к6).</p>`,
    source: {
      book: 'PHB\'24',
      page: 336
    },
    sources: [
      { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
      { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
      { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
      { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
      { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
      { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
      { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
      { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
      { type: 'subclass', name: '<a href="/classes/wizard?subclass=diviner">Прорицатель</a>' },
      { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
      { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
      { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
      { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
      { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'vicious-mockery',
    name: 'Злая насмешка',
    nameEn: 'Vicious Mockery',
    level: 'cantrip',
    school: 'очарование',
    castingTime: '1 действие',
    range: '60 футов',
    components: {
        verbal: true
    },
    duration: 'Мгновенно',
    description: `<p>Вы извергаете поток оскорблений, пропитанных тонкой магией очарования, в сторону одного существа, которое видите или слышите в пределах дистанции. Цель должна совершить спасбросок Мудрости, иначе она получит 1к6 урона психической энергией и помеху на следующий бросок атаки, который совершит до конца своего следующего хода.</p>
    <p><strong>Улучшение заговора.</strong> Урон увеличивается на 1к6, когда вы достигаете 5 уровня (2к6), 11 уровня (3к6) и 17 уровня (4к6).</p>`,
    source: {
      book: 'PHB\'24',
      page: 337
    },
    sources: [
      { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
      { type: 'background', name: '<a href="/backgrounds/rakdos%20cultist/">Культист Ракдосов</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'toll-the-dead',
    name: 'Погребальный звон',
    nameEn: 'Toll the Dead',
    level: 'cantrip',
    school: 'некромантия',
    castingTime: '1 действие',
    range: '60 футов',
    components: {
        verbal: true,
        somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>Вы указываете на одно существо, которое видите в пределах дистанции, и слышится 1 печальный звон колокола в радиусе 10 футов от цели. Цель должна преуспеть в спасброске Мудрости или получить 1к8 урона некротической энергией. Если хиты цели были не полные, то она вместо этого получает 1к12 урона некротической энергией.</p>
    <p><strong>Улучшение заговора.</strong> Урон увеличивается на 1 кость, когда вы достигаете 5 уровня (2к8 или 2к12), 11 уровня (3к8 или 3к12) и 17 уровня (4к8 или 4к12).</p>`,
    source: {
      book: 'PHB\'24',
      page: 334
    },
    sources: [
      { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
      { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
      { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
      { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
      { type: 'subclass', name: '<a href="/classes/cleric?subclass=death">Домен Смерти</a>' },
      { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
      { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
      { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
      { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
      { type: 'subclass', name: '<a href="/classes/wizard?subclass=necromancer">Некромант</a>' },
      { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
      { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
      { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
      { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
      { type: 'feat', name: '<a href="/feats/blessed-warrior/">Благословлённый воин</a>' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'thunderclap',
    name: 'Раскат грома',
    nameEn: 'Thunderclap',
    level: 'cantrip',
    school: 'воплощение',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
        somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>Каждое существо в 5-футовой эманации от вас должно преуспеть в спасброске Телосложения или получить 1к6 урона звуком. Громкий звук от заклинания слышен на расстоянии до 100 футов.</p>
    <p><strong>Улучшение заговора.</strong> Урон увеличивается на 1к6, когда вы достигаете 5 уровня (2к6), 11 уровня (3к6) и 17 уровня (4к6).</p>`,
    source: {
      book: 'PHB\'24',
      page: 333
    },
    sources: [
      { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
      { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
      { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
      { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
      { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
      { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
      { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
      { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
      { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
      { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
      { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
      { type: 'subclass', name: '<a href="/classes/wizard?subclass=evoker">Воплотитель</a>' },
      { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
      { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
      { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
      { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
      { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
      { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
      { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'thorn-whip',
    name: 'Терновый кнут',
    nameEn: 'Thorn Whip',
    level: 'cantrip',
    school: 'преобразование',
    castingTime: '1 действие',
    range: '30 футов',
    components: {
        verbal: true,
        somatic: true,
        material: 'стебель колючего растения'
    },
    duration: 'Мгновенная',
    description: `<p>Вы создаёте подобный лозе кнут, покрытый шипами, который бьёт по вашему приказу по существу в пределах досягаемости. Совершите рукопашную атаку заклинанием по цели. При попадании цель получает 1к6 колющего урона, и если она размером большая или меньше, то вы можете притянуть её к себе на расстояние до 10 футов.</p>
    <p><strong>Улучшение заговора.</strong> Урон увеличивается на 1к6, когда вы достигаете 5 уровня (2к6), 11 уровня (3к6) и 17 уровня (4к6).</p>`,
    source: {
      book: 'PHB\'24',
      page: 333
    },
    sources: [
      { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
      { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
      { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
      { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
      { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
      { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'thaumaturgy',
    name: 'Чудотворство',
    nameEn: 'Thaumaturgy',
    level: 'cantrip',
    school: 'воплощение',
    castingTime: '1 действие',
    range: '30 футов',
    components: {
        verbal: true
    },
    duration: 'До 1 минуты',
    description: `<p>Вы проявляете небольшое чудо в пределах дистанции. Вы создаёте один из нижеперечисленных эффектов. Если вы накладываете это заклинание несколько раз, то вы можете поддерживать до 3 его минутных эффектов одновременно.</p>
    <p>Изменение глаз. Вы изменяете внешний вид своих глаз на 1 минуту.</p>
    <p>Громкий голос. Ваш голос звучит в 3 раза громче обычного в течение 1 минуты. На время действия заклинания вы получаете преимущество на проверки Харизмы (Запугивание).</p>
    <p>Огонь. Вы заставляете пламя мерцать, становиться ярче, тускнеть или менять цвет в течение 1 минуты.
    <p>Невидимая рука. Вы мгновенно открываете или закрываете незапертую дверь или окно.</p>
    <p>Фантомный звук. Вы создаёте мгновенный звук в выбранной точке в пределах дистанции, например, громовой раскат, крик ворона или зловещий шёпот.</p>
    <p>Дрожь. Вы создаёте безвредные земные колебания на 1 минуту.</p>`,
    source: {
      book: 'PHB\'24',
      page: 333
    },
    sources: [
      { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
      { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
      { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
      { type: 'subclass', name: '<a href="/classes/ranger?subclass=drakewarden">Наезник на дрейке</a>' },
      { type: 'subclass', name: '<a href="/classes/barbarian?subclass=giant">Путь Великанов</a>' },
      { type: 'species', name: '<a href="/races/tiefling/">Тифлинг</a>' },
      { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
      { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
      { type: 'feat', name: '<a href="/feats/blessed-warrior/">Благословлённый воин</a>' },
      { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'sword-burst',
    name: 'Вспышка мечей',
    nameEn: 'Sword burst',
    level: 'cantrip',
    school: 'вызов',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
        verbal: true
    },
    duration: 'Мгновенная',
    description: `<p>Вы на мгновение создаёте круг из вращающихся вокруг вас призрачных лезвий в пределах 5-футовой эманации от себя. Все существа в этой области должны преуспеть в спасброске Ловкости, иначе получат 1к6 урона силовым полем.</p>
    <p>Урон этого заклинания увеличивается на 1к6, когда вы достигаете 5-го уровня (2к6), 11-го уровня (3к6) и 17-го уровня (4к6).</p>`,
    source: {
      book: 'TCE\'14',
      page: 115
    },
    sources: [
      { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
      { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
      { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
      { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
      { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
      { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
      { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
      { type: 'subclass', name: '<a href="/classes/wizard?subclass=conjurer">Вызыватель</a>' },
      { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
      { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
      { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
      { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
      { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'starry-wisp',
    name: 'Звёздный огонёк',
    nameEn: 'Starry Wisp',
    level: 'cantrip',
    school: 'воплощение',
    castingTime: '1 действие',
    range: '60 футов',
    components: {
        verbal: true,
        somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>Вы запускаете частицу света в 1 существо или предмет в пределах дистанции. Совершите дальнобойную атаку заклинанием против цели. При попадании цель получает 1к8 урона излучением и до конца вашего следующего хода излучает тусклый свет в радиусе 10 футов и не получает эффекты состояния невидимый.</p>
    <p><strong>Улучшение заговора.</strong> Урон увеличивается на 1к8, когда вы достигаете 5 уровня (2к8), 11 уровня (3к8) и 17 уровня (4к8).</p>`,
    source: {
      book: 'PHB\'24',
      page: 320
    },
    sources: [
      { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
      { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
      { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
      { type: 'subclass', name: '<a href="/classes/druid?subclass=moon">Круг Луны</a>' },
      { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
      { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
      { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
      { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'druidcraft',
  name: 'Искусство Друидов',
  nameEn: 'Druidcraft',
  level: 'cantrip',
  school: 'преобразование',
  castingTime: '1 действие',
  range: '30 футов',
  components: {
      verbal: true,
      somatic: true
  },
  duration: 'Мгновенно',
  description: `<p>Пошептавшись с духами природы, вы создаёте один из следующих эффектов в пределах дистанции.</p>
<p>Прогноз погоды. Вы можете предсказать погоду в своём местоположении на следующие 24 часа, создавая небольшой сенсорный эффект, например, золотистый шарик для ясного неба, облако для дождя или падающие снежинки для снега. Этот эффект сохраняется один раунд.</p>
<p>Цветение. Вы можете мгновенно заставить цветок расцвести, семечко прорасти или почку распуститься.</p>
  <p>Сенсорный эффект. Вы создаете безвредный сенсорный эффект, например, падающие листья, призрачных танцующих фей, лёгкий ветерок, звук животного или слабый запах скунса — этот эффект должен помещаться в куб с длиной стороны пять футов.</p>`,
  source: {
    book: 'PHB\'24',
    page: 266
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'subclass', name: '<a href="/classes/barbarian?subclass=giant">Путь Великанов</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=arcane-archer">Мистический лучник</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Лесной</a>' },
    { type: 'species', name: '<a href="/races/fairy/">Фэйри</a>' },
    { type: 'background', name: '<a href="/backgrounds/selesnya%20initiate/">Посвящённый Селезнии</a>' },
    { type: 'background', name: '<a href="/backgrounds/simic%20scientist/">Учёный Симиков</a>' },
    { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Посвящённый Стриксхейвен</a>' },
    { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'eldritch-blast',
  name: 'Мистический заряд',
  nameEn: 'Eldritch Blast',
  level: 'cantrip',
  school: 'воплощение',
  castingTime: '1 действие',
  range: '120 футов',
  components: {
      verbal: true,
      somatic: true
  },
  duration: 'Мгновенно',
  description: `<p>Вы выпускаете луч потрескивающей энергии. Совершите дальнобойную атаку заклинанием против 1 существа или объекта в пределах дистанции. При попадании цель получает 1к10 урона силовым полем.</p>
  <p><strong>Улучшение заговора.</strong>  Заклинание создаёт 2 луча на 5 уровне, 3 луча на 11 уровне и 4 луча на 17 уровне. Вы можете направить лучи на одну и ту же цель или на разные. Совершите отдельный бросок атаки для каждого луча.</p>`,
  source: {
    book: 'PHB\'24',
    page: 267
  },
  sources: [
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'elementalism',
  name: 'Элементализм',
  nameEn: 'Elementalism',
  level: 'cantrip',
  school: 'преобразование',
  castingTime: '1 действие',
  range: '30 футов',
  components: {
      verbal: true,
      somatic: true
  },
  duration: 'Мгновенно',
  description: `<p>Вы управляете стихиями, создавая один из следующих эффектов в пределах досягаемости.</p>
<p><strong>Воззвать Воздух.</strong> Вы создаёте ветерок, достаточно сильный, чтобы колыхать ткань, поднимать пыль, шевелить листья и закрывать открытые двери и ставни в пределах 5-футового куба. Двери и ставни, которые кто-то или что-то держит открытыми, не будут затронуты.</p>
<p><strong>Воззвать Землю.</strong> Вы создаёте тонкую завесу из пыли или песка, покрывающую местность в 5-футовом квадрате или заставляете одно слово появиться на песке или в грязи вашим почерком.</p>
<p><strong>Воззвать Огонь.</strong> Вы создаёте тонкое облако безвредных искр и цветного, ароматного дыма в пределах 5-футового куба. Вы выбираете цвет и запах, а искры могут зажечь свечи, факелы или лампы в этой области.</p>
<p>Запах дыма остаётся в течение 1 минуты.</p>
<p><strong>Воззвать Воду.</strong> Вы создаёте струю прохладного тумана, которая слегка увлажняет существа и предметы в пределах 5-футового куба. В качестве альтернативы, вы создаёте 1 чашку чистой воды в открытом контейнере или на поверхности, и вода испаряется через 1 минуту.</p>
<p><strong>Ваяние Стихии.</strong> Вы заставляете грязь, песок, огонь, дым, туман или воду, которые могут поместиться в 1-футовый куб, принять грубую форму (например, существа) на 1 час.</p>`,
  source: {
    book: 'PHB\'24',
    page: 267
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/monk?subclass=elements">Мастер Стихий</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
    { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
    { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
    { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
    { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'encode-thoughts',
  name: 'Зашифровать мысли',
  nameEn: 'Encode Thoughts',
  level: 'cantrip',
  school: 'очарование',
  castingTime: '1 действие',
  range: 'На себя',
  components: {
      somatic: true
  },
  duration: 'до 8 часов',
  description: `<p>Прикладывая палец к своей голове, вы извлекаете воспоминание, идею или сообщение из своего разума и трансформируете её в осязаемую ленту светящейся энергии, которую называют мысленной лентой, которая существует длительность заклинания или пока вы не наложите это заклинание снова. Мысленная лента появляется в свободном пространстве в 5 футах от вас как крошечный, невесомый полутвёрдый предмет который можно держать и нести как ленту. В остальном она неподвижна.</p>
<p>Если вы накладываете это заклинание пока концентрируетесь на заклинании или способности, позволяющей читать или манипулировать мыслями других людей (такие как обнаружение мыслей [detect thoughts]), вы можете трансформировать читаемые мысли или воспоминания в мысленную ленту.</p>
<p>Если вы накладываете это заклинание пока держите мысленную ленту, вы мгновенно получаете ту информацию, что содержит лента. (Накладывание обнаружение мыслей [detect thoughts] на ленту имеет тот же эффект).</p>`,
  source: {
    book: 'GGR\'18',
    page: 47
  },
  sources: [
    { type: 'background', name: '<a href="/backgrounds/dimir%20operative/">Оперативник Димиров</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'fire-bolt',
  name: 'Огненный снаряд',
  nameEn: 'Fire Bolt',
  level: 'cantrip',
  school: 'воплощение',
  castingTime: '1 действие',
  range: '120 футов',
  components: {
      verbal: true,
      somatic: true
  },
  duration: 'Мгновенно',
  description: `<p>Вы метаете частицу огня в существо или объект в пределах дистанции. Совершите дальнобойную атаку заклинанием против цели. В случае попадания цель получает 1к10 урона огнём. </p>
<p>Легковоспламеняющийся предмет, поражённый этим заклинанием, начинает гореть, если он не надет и не несётся</p>
<p><strong>Улучшение заговора.</strong> Урон увеличивается на 1к10, когда вы достигаете 5 уровня (2к10), 11 уровня (3к10) и 17 уровня (4к10).</p>`,
  source: {
    book: 'PHB\'24',
    page: 274
  },
  sources: [
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=evoker">Воплотитель</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
    { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
    { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
    { type: 'background', name: '<a href="/backgrounds/boros%20legionnaire/">Легионер Боросов</a>' },
    { type: 'background', name: '<a href="/backgrounds/gruul%20anarch/">Анарх Груулов</a>' },
    { type: 'background', name: '<a href="/backgrounds/rakdos%20cultist/">Культист Ракдосов</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Посвящённый Стриксхейвен</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'friends',
  name: 'Дружба',
  nameEn: 'Friends',
  level: 'cantrip',
  school: 'очарование',
  castingTime: '1 действие',
  range: '10 футов',
  components: {
      somatic: true,
  material: 'немного грима'
  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>Вы магически излучаете чувство дружелюбия к одному существу, которое видите в пределах дистанции. Цель должна преуспеть в спасброске Мудрости, иначе она получит состояние очарованный на время действия заклинания. Цель автоматически преуспеет в спасброске, если она не является гуманоидом, если вы сражаетесь с ней или если вы накладывали это заклинание на неё в течение последних 24 часов.</p>
<p>Заклинание заканчивается досрочно, если цель получает урон, если вы совершаете бросок атаки, наносите урон или заставляете кого-либо совершить спасбросок. Когда заклинание заканчивается, цель осознаёт, что была очарована вами.</p>`,
  source: {
    book: 'PHB\'24',
    page: 277
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=enchanter">Очарователь</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
    { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
    { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
    { type: 'background', name: '<a href="/backgrounds/azorius%20functionary/">Функционер Азориусов</a>' },
    { type: 'background', name: '<a href="/backgrounds/orzhov%20representative//">Представитель Орзовов</a>' },
    { type: 'background', name: '<a href="/backgrounds/selesnya%20initiate/">Посвящённый Селезнии</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'frostbite',
  name: 'Обморожение',
  nameEn: 'Frostbite',
  level: 'cantrip',
  school: 'воплощение',
  castingTime: '1 действие',
  range: '60 футов',
  components: {
  verbal: true,
      somatic: true
  },
  duration: 'Мгновенная',
  description: `<p>Сильный холод окружает одно существо, которое вы можете видеть в пределах дистанции заклинания.</p>
<p>Цель должна совершить спасбросок Телосложения. При провале цель получает 1к6 урона холодом и следующий бросок атаки оружием до конца своего следующего хода совершает с помехой.</p>
<p><strong>Улучшение заговора.</strong> Урон заклинания увеличивается на 1к6, когда вы достигаете 5 уровня (2к6), 11 уровня (3к6) и 17 уровня (4к6).</p>`,
  source: {
    book: 'XGE\'14',
    page: 156
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=evoker">Воплотитель</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
    { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
    { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
    { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
    { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
    { type: 'other', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'green-flame-blade',
  name: 'Клинок зелёного пламени',
  nameEn: 'Green-Flame Blade',
  level: 'cantrip',
  school: 'воплощение',
  castingTime: '1 действие',
  range: 'На себя, радиусом 5 футов',
  components: {
      somatic: true,
  material: 'рукопашное оружие стоимостью не менее 1 см'
  },
  duration: 'Мгновенная',
  description: `<p>Вы делаете взмах рукопашным оружием, используемым при произнесении заклинания, и совершаете им рукопашную атаку оружием против одного существа в пределах 5 футов от вас. При попадании, цель подвергается обычным эффектам атаки оружием, и вы можете заставить зеленый огонь перескочить с цели на другое существо по вашему выбору, которое вы видите в пределах 5 футов от нее. Второе существо получает урон огнем, равный вашему модификатору колдовской способности.</p>
<p><strong>Улучшение заговора.</strong> Урон этого заклинания увеличивается при достижении определенных уровней. На 5-м уровне рукопашная атака наносит дополнительно 1к8 урона огнём цели при попадании, а урон, получаемый вторым существом, увеличивается до 1к8 + модификатор вашей заклинательной характеристики.</p>
<p> Оба этих урона увеличиваются на 11-м уровне (2к8 и 2к8) и 17-м уровне (3к8 и 3к8).</p>`,
  source: {
    book: 'TCE\'14',
    page: 107
  },
  sources: [
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=evoker">Воплотитель</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=evoker">Воплотитель</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
    { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
    { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'guidance',
  name: 'Наставление',
  nameEn: 'Guidance',
  level: 'cantrip',
  school: 'прорицание',
  castingTime: '1 действие',
  range: 'Касание',
  components: {
  verbal: true,
      somatic: true
  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>Вы касаетесь согласного существа и выбираете навык. До окончания заклинания существо добавляет 1к4 к любой проверке характеристики с использованием выбранного навыка</p>`,
  source: {
    book: 'PHB\'24',
    page: 282
  },
  sources: [
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=stars">Круг Звёзд</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=spirits">Коллегия Духов</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная Душа</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'background', name: '<a href="/backgrounds/orzhov%20representative//">Представитель Орзовов</a>' },
    { type: 'feat', name: '<a href="/feats/blessed-warrior/">Благословлённый воин</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/scion-of-the-outer-planes/">Наследник внешних планов</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Посвящённый Стриксхейвен</a>' },
    { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'gust',
  name: 'Шквал',
  nameEn: 'Gust',
  level: 'cantrip',
  school: 'преобразование',
  castingTime: '1 действие',
  range: '30 футов',
  components: {
  verbal: true,
      somatic: true
  },
  duration: 'Мгновенная',
  description: `<p>Вы контролируете окружающий воздух и можете создать один из нижеперечисленных эффектов в точке, которую видите в пределах дистанции заклинания:</p>
<p> - Одно существо с размером не больше Среднего должно преуспеть в спасброске Силы, иначе его оттолкнёт на 5 футов от вас.</p>
<p> - Вы создаёте небольшой порыв ветра, способный переместить предмет массой не более 5 фунтов, который никто не несёт и который ни на кого не надет. Объект толкается на расстояние до 10 футов от вас. Этого толчка недостаточно, чтобы причинить урон.</p>
<p> - Вы создаёте безвредный эффект с использованием воздуха, например, заставляете листву шелестеть, ветром захлопнуть ставни или вашу одежду колыхаться на ветру.</p>`,
  source: {
    book: 'XGE\'14',
    page: 157
  },
  sources: [
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a> ' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=transmuter">Преобразователь</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
    { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
    { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
    { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'infestation',
  name: 'Нашествие',
  nameEn: 'Infestation',
  level: 'cantrip',
  school: 'вызов',
  castingTime: '1 действие',
  range: '30 футов',
  components: {
  verbal: true,
      somatic: true,
  material: 'живая блоха'
  },
  duration: 'Мгновенная',
  description: `<p>Вы вызываете клещей, блох и других паразитов, которые мгновенно обволакивают одно существо, которое вы можете видеть в пределах дистанции.</p>
<p>Цель должна преуспеть в спасброске Телосложения, в противном случае она получает 1к6 урона ядом и перемещается на 5 футов в случайном направлении, если она может двигаться и её скорость составляет не менее 5 футов. Бросьте к4 для определения направления: 1, север; 2, юг; 3, восток; или 4, запад.</p>
<p>Это перемещение не провоцирует атаки и, если выпавшее направление заблокировано, цель не перемещается.</p>
<p><strong>Улучшение заговора.</strong> Урон заклинания увеличивается на 1к6, когда вы достигаете 5 уровня (2к6), 11 уровня (3к6) и 17 уровня (4к6).</p>`,
  source: {
    book: 'XGE\'14',
    page: 158
  },
  sources: [
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a> ' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=conjurer">Вызыватель</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
    { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
    { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
    { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'light',
  name: 'Свет',
  nameEn: 'Light',
  level: 'cantrip',
  school: 'воплощение',
  castingTime: '1 действие',
  range: 'Касание',
  components: {
  verbal: true,
      somatic: true,
  material: 'светлячок или фосфоресцирующий мох'
  },
  duration: '1 час',
  description: `<p>Вы касаетесь 1 объекта размера большой или меньше, который не носит и не несёт кто-то другой. До окончания заклинания объект излучает яркий свет в радиусе 20 футов и тусклый свет ещё на 20 футов. Свет может быть любого цвета по вашему выбору. Закрытие объекта чем-то непрозрачным блокирует свет. Заклинание прекращается, если вы наложите его снова.</p>`,
  source: {
    book: 'PHB\'24',
    page: 292
  },
  sources: [
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=celestial">Покровитель Небожитель</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная Душа</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a> ' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=evoker">Воплотитель</a>' },
    { type: 'species', name: '<a href="/races/aasimar/">Аасимар</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Астральный</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Бледный</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
    { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
    { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/blessed-warrior/">Благословлённый воин</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Посвящённый Стриксхейвен</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'lightning-lure',
  name: 'Лассо молнии',
  nameEn: 'Lightning Lure',
  level: 'cantrip',
  school: 'воплощение',
  castingTime: '1 действие',
  range: 'На себя, 15 футовым радиусом',
  components: {
  verbal: true
  },
  duration: 'Мгновенная',
  description: `<p>Вы создаёте хлыст из молний, поражающий одно существо по вашему выбору, которое вы можете видеть в пределах 15 футов от вас. Цель должна преуспеть в спасброске Силы, иначе будет притянута на 10 футов по прямой к вам, после чего получит 1к8 урона электричеством, если окажется в пределах 5 футов от вас.</p>
<p><strong>Улучшение заговора.</strong> Урон этого заклинания увеличивается на 1к8, когда вы достигаете 5-го уровня (2к8), 11-го уровня (3к8) и 17-го уровня (4к8).</p>`,
  source: {
    book: 'TCE\'14',
    page: 107
  },
  sources: [
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=evoker">Воплотитель</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
    { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
    { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'magic-stone',
  name: 'Волшебный камень',
  nameEn: 'Magic Stone',
  level: 'cantrip',
  school: 'преобразование',
  castingTime: 'Бонусное действие',
  range: 'Касание',
  components: {
  verbal: true,
  somatic: true
  },
  duration: '1 минута',
  description: `<p>Вы касаетесь от 1 до 3 камней и наделяете их магической силой.</p>
<p>Вы или кто-либо ещё можете совершить дальнобойную атаку заклинанием, кинув один из этих камней или запустив его при помощи пращи. Дальность броска рукой составляет 60 футов. Если кто-либо другой атакует этим камнем, он использует для броска атаки ваш модификатор базовой характеристики вместо своего.</p>
<p>При попадании цель получает дробящий урон, равный 1к6 + модификатор вашей базовой характеристики.</p>
<p>Вне зависимости от того, попал камень или нет, это заклинание перестаёт на него действовать. Если вы сотворяете это заклинание ещё раз, его эффект преждевременно заканчивается на тех камнях, что были зачарованы прежде.</p>`,
  source: {
    book: 'XGE\'14',
    page: 160
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
    { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'mending',
  name: 'Починка',
  nameEn: 'Mending',
  level: 'cantrip',
  school: 'преобразование',
  castingTime: '1 минута',
  range: 'Касание',
  components: {
  verbal: true,
  somatic: true,
  material: '2 магнитных камня'
  },
  duration: 'Мгновенно',
  description: `<p>Это заклинание чинит одно повреждение или сломанный участок предмета, которого вы касаетесь, например, сломанную цепочку, 2 половинки сломанного ключа, порванный плащ или протекающий бурдюк. Если разрыв или слом не превышает 1 фута в любом измерении, то вы чините его, не оставляя следов от предыдущего повреждения.</p>
<p>Это заклинание может физически починить магический предмет, но не может вернуть ему утраченные магические свойства.</p>`,
  source: {
    book: 'PHB\'24',
    page: 297
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная Душа</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=transmuter">Преобразователь</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
    { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
    { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/blessed-warrior/">Благословлённый воин</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
    { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
    { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'message',
  name: 'Сообщение',
  nameEn: 'Message',
  level: 'cantrip',
  school: 'преобразование',
  castingTime: '1 Действие',
  range: '120 футов',
  components: {
  somatic: true,
  material: 'медная проволока'
  },
  duration: 'Раунд',
  description: `<p>Вы указываете на существо в пределах дистанции и шепчете послание. Цель (и только цель) слышит сообщение и может ответить вам шёпотом, который слышите только вы.</p>
<p>Вы можете наложить это заклинание через твёрдые объекты, если вы знакомы с целью и знаете, что она находится за преградой. Магическая тишина, 1 фут камня, металла или дерева, или тонкий лист свинца блокируют заклинание.</p>`,
  source: {
    book: 'PHB\'24',
    page: 298
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная Душа</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=transmuter">Преобразователь</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
    { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
    { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/blessed-warrior/">Благословлённый воин</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
    { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
    { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'mind-sliver',
  name: 'Расщепление разума',
  nameEn: 'Mind Sliver',
  level: 'cantrip',
  school: 'очарование',
  castingTime: '1 Действие',
  range: '60 футов',
  components: {
  verbal: true
  },
  duration: 'Раунд',
  description: `<p>Вы пытаетесь временно пошатнуть разум 1 существа, которое видите в пределах дистанции. Цель должна преуспеть в спасброске Интеллекта или получить 1к6 урона психической энергией и вычесть 1к4 из следующего спасброска, который оно совершит до конца вашего следующего хода.</p>
<p><strong>Улучшение заговора.</strong> Урон этого заклинания увеличивается на 1к6 при достижении определенных уровней: 5-го уровня (2к6), 11-го уровня (3к6) и 17-го уровня (4к6).</p>`,
  source: {
    book: 'PHB\'24',
    page: 298
  },
  sources: [
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=aberrant">Аберрантный Разум</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная Душа</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=enchanter">Очарователь</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
    { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
    { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'minor-illusion',
  name: 'Малая иллюзия',
  nameEn: 'Minor Illusion',
  level: 'cantrip',
  school: 'иллюзия',
  castingTime: '1 Действие',
  range: '30 футов',
  components: {
    somatic: true,
    material: 'кусочек шерсти'
  },
  duration: '1 минута',
  description: `<p>Вы создаёте звук или изображение предмета в пределах дистанции, которое сохраняется на время длительности заклинания. Иллюзия заканчивается, если вы снова накладываете это заклинание.</p>
<p>Если существо совершает действие поиск, чтобы изучить звук или изображение, то оно может определить, что это иллюзия, если успешно проходит проверку Интеллекта (Анализ) против Сл. спасброска вашего заклинания. Если существо распознаёт иллюзию, то она становится блеклой для него.</p>
<p><strong>Звук.</strong> Если вы создаёте звук, то его громкость может варьироваться от шёпота до крика. Это может быть ваш голос, голос другого человека, рёв льва, биение барабанов или любой другой звук, который вы выберете. Звук продолжается без перерыва на протяжении действия заклинания или вы можете создавать отдельные звуки в разное время до окончания действия заклинания.</p>
<p><strong>Изображение.</strong> Если вы создаёте изображение предмета (такого как стул, грязные следы или маленький сундук), то оно не может быть больше, чем 5-футовый куб. Изображение не может создавать звуки, свет, запахи или любые другие сенсорные эффекты. Физическое взаимодействие с изображением раскрывает его как иллюзию, так как предметы могут проходить сквозь него.</p>`,
  source: {
    book: 'PHB\'24',
    page: 298
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=illusionist">Иллюзионист</a>' },
    { type: 'subclass', name: '<a href="/classes/monk?subclass=shadow">Мастер Тени</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
    { type: 'species', name: '<a href="/races/gnome/">Гном Лесной</a>' },
    { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
    { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
    { type: 'feat', name: '<a href="/feats/scion-of-the-outer-planes/">Наследник внешних планов</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'mold-earth',
  name: 'Лепка земли',
  nameEn: 'Mold Earth',
  level: 'cantrip',
  school: 'преобразование',
  castingTime: '1 Действие',
  range: '30 футов',
  components: {
  somatic: true
  },
  duration: 'Мгновенная или 1 час',
  description: `<p>Выберите область земли или камня, видимую в пределах дистанции заклинания и помещающуюся в 5-футовый куб. Вы можете управлять ею одним из нижеперечисленных способов:</p>
<p>- Если вы нацелились на область рыхлой земли, вы можете мгновенно извлечь её и переместить на расстояние до 5 футов. Это перемещение не обладает достаточной силой, чтобы причинить урон.</p>
<p>- Вы можете создавать узоры или цвета на поверхности земли или камня для передачи слов, изображений или форм. Эффект действует 1 час.</p>
<p>- Если выбранная область находится на поверхности земли, вы можете сделать её труднопроходимой. В качестве альтернативы вы можете сделать труднопроходимую местность нормальной. Эффект действует 1 час.</p>
<p>Если вы сотворяете это заклинание несколько раз, вы можете поддерживать не более двух его немгновенных эффектов одновременно. Вы можете Действием отменить один из действующих эффектов.</p>`,
  source: {
    book: 'XGE\'14',
    page: 162
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=transmuter">Преобразователь</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
    { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
    { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
    { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'poison-spray',
  name: 'Ядовитые брызги',
  nameEn: 'Poison Spray',
  level: 'cantrip',
  school: 'некромантия',
  castingTime: '1 Действие',
  range: '30 футов',
  components: {
  verbal: true,
  somatic: true
  },
  duration: 'Мгновенно',
  description: `<p>Вы выпускаете ядовитое облако в существо в пределах дистанции. Совершите дальнобойную атаку заклинанием против цели. При попадании цель получает 1к12 урона ядом.</p>
<p><strong>Улучшение заговора.</strong> Урон увеличивается на 1к12, когда вы достигаете 5 уровня (2к12), 11 уровня (3к12) и 17 уровня (4к12).</p>`,
  source: {
    book: 'PHB\'24',
    page: 306
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=death">Домен Смерти</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=necromancer">Некромант</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
    { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
    { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
    { type: 'species', name: '<a href="/races/yuan-ti/">Юань-ти</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
    { type: 'feat', name: '<a href="/feats/spell-sniper/">Меткий заклинатель</a>' },
    { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'prestidigitation',
  name: 'Фокусы',
  nameEn: 'Prestidigitation',
  level: 'cantrip',
  school: 'преобразование',
  castingTime: '1 Действие',
  range: '10 футов',
  components: {
  verbal: true,
  somatic: true
  },
  duration: '1 час',
  description: `<p>Вы создаёте магический эффект в пределах дистанции. Выберите эффект из приведённых ниже вариантов. Если вы накладываете это заклинание несколько раз, то вы можете иметь до 3 его не мгновенных эффектов одновременно.</p>
<p><strong>Сенсорный эффект.</strong> Вы создаете мгновенный безвредный сенсорный эффект, такой как искры, дуновение ветра, слабые музыкальные ноты или странный запах.</p>
<p><strong>Огонь.</strong> Вы мгновенно зажигаете или гасите свечу, факел или небольшой костёр.</p>
<p><strong>Грязь.</strong> Вы мгновенно очищаете или загрязняете объект размером не более 1 кубического фута.</p>
<p><strong>Лёгкое воздействие.</strong> Вы охлаждаете, нагреваете или придаёте вкус до 1 кубическому футу неживого материала на 1 час.</p>
<p><strong>Магическая метка.</strong> Вы создаете небольшой знак, символ или меняете цвет на объекте или поверхности на 1 час.</p>
<p><strong>Малое создание.</strong> Вы создаёте не магическую безделушку или иллюзорное изображение, которое помещается в вашей руке. Оно существует до конца вашего следующего хода. Безделушка не может наносить урон и не имеет материальной ценности.</p>`,
  source: {
    book: 'PHB\'24',
    page: 307
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=arcane-archer">Мистический лучник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=transmuter">Преобразователь</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
    { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
    { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/сartomancer/">Картомант</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'primal-savagery',
  name: 'Первобытная дикость',
  nameEn: 'Primal Savagery',
  level: 'cantrip',
  school: 'преобразование',
  castingTime: '1 Действие',
  range: 'На себя',
  components: {
  somatic: true
  },
  duration: 'Мгновенная',
  description: `<p>Вы направляете первобытную магию, затачивающую ваши зубы или ногти, и готовитесь к агрессивной атаке.</p>
<p>Совершите рукопашную атаку заклинанием против одного существа в пределах 5 футов от вас. При попадании цель получает 1к10 урона кислотой. После того, как вы совершите атаку, ваши зубы или ногти вернутся в нормальное состояние.</p>
<p><strong>Улучшение заговора.</strong> Урон заклинания увеличивается на 1к10, когда вы достигаете 5 уровня (2к10), 11 уровня (3к10) и 17 уровня (4к10).</p>`,
  source: {
    book: 'XGE\'14',
    page: 163
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/spell-sniper/">Меткий заклинатель</a>' },
    { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'produce-flame',
  name: 'Сотворение пламени',
  nameEn: 'Produce Flame',
  level: 'cantrip',
  school: 'вызов',
  castingTime: 'Бонусное действие',
  range: 'На себя',
  components: {
  verbal: true,
  somatic: true
  },
  duration: '10 минут',
  description: `<p>Ваша рука окутывается мерцающим пламенем, которое остаётся на руке на время действия заклинания. Это пламя не выделяет тепло и ничего не поджигает, излучая яркий свет в радиусе 20 футов и тусклый свет ещё на 20 футов. Заклинание заканчивается, если вы наложите его снова.</p>
<p>До окончания действия заклинания вы можете совершить действие магия, чтобы метнуть огонь в существо или предмет на расстоянии до 60 футов от вас. Совершите дальнобойную атаку заклинанием. При попадании цель получает 1к8 урона огнём.</p>
<p><strong>Улучшение заговора.</strong> Урон увеличивается на 1к8, когда вы достигаете 5 уровня (2к8), 11 уровня (3к8) и 17 уровня (4к8).</p>`,
  source: {
    book: 'PHP\'24',
    page: 308
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Колегия Знаний</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'background', name: '<a href="/backgrounds/gruul%20anarch/">Анарх Груулов</a>' },
    { type: 'background', name: '<a href="/backgrounds/izzet%20engineer/">Инженер Иззетов</a>' },
    { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/spell-sniper/">Меткий заклинатель</a>' },
    { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'resistance',
  name: 'Сопротивление',
  nameEn: 'Resistance',
  level: 'cantrip',
  school: 'ограждение',
  castingTime: '1 Действие',
  range: 'Касание',
  components: {
  verbal: true,
  somatic: true
  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>Вы касаетесь согласного существа и выбираете тип урона: кислотный, дробящий, холодный, огненный, электрический, некротический, колющий, ядовитый, излучение, рубящий или звуковой. Когда существо получает урон выбранного типа до окончания действия заклинания, то оно уменьшает полученный урон на 1к4. Существо может получить эффект от этого заклинания только один раз за ход.</p>`,
  source: {
    book: 'PHP\'24',
    page: 312
  },
  sources: [
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Колегия Знаний</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная Душа</a>' },
    { type: 'feat', name: '<a href="/feats/blessed-warrior/">Благословлённый воин</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
    { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'sacred-flame',
  name: 'Священное пламя',
  nameEn: 'Sacred Flame',
  level: 'cantrip',
  school: 'воплощение',
  castingTime: '1 Действие',
  range: '60 футов',
  components: {
  verbal: true,
  somatic: true
  },
  duration: 'Мгновенно',
  description: `<p>Луч света, подобный пламени, нисходит на существо, которое вы можете видеть в пределах дистанции. Цель должна преуспеть в спасброске Ловкости или получить 1к8 урона излучением. Цель не получает эффекты от укрытия на половину или на три четверти для этого спасброска.</p>
<p><strong>Улучшение заговора.</strong> Урон увеличивается на 1к8, когда вы достигаете 5 уровня (2к8), 11 уровня (3к8) и 17 уровня (4к8).</p>`,
  source: {
    book: 'PHP\'24',
    page: 312
  },
  sources: [
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=celestial">Покровитель Небожитель</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Колегия Знаний</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная Душа</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Астральный</a>' },
    { type: 'background', name: '<a href="/backgrounds/boros%20legionnaire/">Легионер Боросов</a>' },
    { type: 'feat', name: '<a href="/feats/blessed-warrior/">Благословлённый воин</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/scion-of-the-outer-planes/">Наследник внешних планов</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'shape-water',
  name: 'Формование воды',
  nameEn: 'Shape Water',
  level: 'cantrip',
  school: 'преобразование',
  castingTime: '1 Действие',
  range: '30 футов',
  components: {
  somatic: true
  },
  duration: 'Мгновенная или 1 час',
  description: `<p>Выберите область воды, которую вы видите в пределах дистанции заклинания, и которая помещается в 5-футовый куб.</p>
<p>Вы можете управлять ею одним из нижеперечисленных способов:</p>
<p>- Вы мгновенно перемещаете или изменяете скорость течения потока воды на 5 футов в любом направлении. Этого воздействия недостаточно, чтобы причинить урон.</p>
<p>- Вы можете заставить воду принимать простые формы или двигаться согласно вашим указаниям. Этот эффект действует 1 час.</p>
<p>- Вы можете изменить цвет или прозрачность воды. Вся область воды должна быть одного цвета и прозрачности. Эффект действует 1 час.</p>
<p>- Вы замораживаете воду, если в ней нет никаких существ. Вода размораживается через 1 час.</p>
<p>Если вы накладываете это заклинание несколько раз, вы не можете поддерживать более 2 немгновенных эффектов одновременно. Вы можете действием отменить один из действующих эффектов.</p>`,
  source: {
    book: 'XGE\'14',
    page: 164
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=transmuter">Преобразователь</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
    { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
    { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
    { type: 'species', name: '<a href="/races/genasi/">Дженази Воды</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
    { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'shillelagh',
  name: 'Дубинка',
  nameEn: 'Shillelagh',
  level: 'cantrip',
  school: 'преобразование',
  castingTime: 'Бонусное действие',
  range: 'На себя',
  components: {
  somatic: true,
  verbal: true,
  material: 'омела'
  },
  duration: '1 минута',
  description: `<p>Дубинка или боевой посох, который вы держите, наполняется природной силой. На время действия заклинания вы можете использовать свою заклинательную характеристику вместо Силы для атаки и бросков урона рукопашными атаками с использованием этого оружия, а также кость урона оружия становится к8. Если атака наносит урон, то это может быть урон силовым полем или обычным типом урона оружия (по вашему выбору). Заклинание заканчивается досрочно, если вы наложите его снова или отпустите оружие.</p>
<p>Улучшение заговора: Кость урона изменяется на уровнях 5 (к10), 11 (к12) и 17 (2к6).</p>`,
  source: {
    book: 'PHB\'24',
    page: 316
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
    { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'shocking-grasp',
  name: 'Электрошок',
  nameEn: 'Shocking Grasp',
  level: 'cantrip',
  school: 'воплощение',
  castingTime: '1 Действие',
  range: 'Касание',
  components: {
  somatic: true,
  verbal: true
  },
  duration: 'Мгновенная',
  description: `<p>Из вас вырывается молния к существу, которого вы пытаетесь коснуться. Совершите рукопашную атаку заклинанием против цели. При попадании цель получает 1к8 урона электричеством и не может совершать провоцированные атаки до начала своего следующего хода.</p>
<p><strong>Улучшение заговора.</strong> Урон увеличивается на 1к8, когда вы достигаете 5 уровня (2к8), 11 уровня (3к8) и 17 уровня (4к8).</p>`,
  source: {
    book: 'PHB\'24',
    page: 316
  },
  sources: [
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a> (Умеренная земля)' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=evoker">Воплотитель</a>' },
    { type: 'species', name: '<a href="/races/elf/">Эльф Высший</a>' },
    { type: 'species', name: '<a href="/races/genasi/">Дженази Воздуха</a>' },
    { type: 'species', name: '<a href="/races/halfelf/">Лунный/Солнечный полуэльф</a>' },
    { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
    { type: 'species', name: '<a href="/races/genasi/">Дженази Воды</a>' },
    { type: 'background', name: '<a href="/backgrounds/izzet%20engineer/">Инженер Иззетов</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'spare-the-dying',
  name: 'Уход за умирающим',
  nameEn: 'Spare the Dying',
  level: 'cantrip',
  school: 'некромантия',
  castingTime: '1 Действие',
  range: '15 футов',
  components: {
  somatic: true,
  verbal: true
  },
  duration: 'Мгновенная',
  description: `<p>Выберите существо в пределах досягаемости, у которого 0 хитов и которое не мертво. Существо стабилизи руется.</p>
<p><strong>Улучшение заговора.</strong> Дистанция увеличивается вдвое, когда вы достигаете 5 (30 футов), 11 (60 футов) и 17 (120 футов) уровней.</p>`,
  source: {
    book: 'PHB\'24',
    page: 316
  },
  sources: [
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=death">Домен Смерти</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="warlock?subclass=undying">Покровитель Бессмертный</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a>' },
    { type: 'background', name: '<a href="/backgrounds/golgari%20agent/">Агент Голгари</a>' },
    { type: 'feat', name: '<a href="/feats/blessed-warrior/">Благословлённый воин</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/druidic-warrior/">Воин-друид</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' },
    { type: 'feat', name: '<a href="/feats/wood-elf-magic/">Магия лесных эльфов</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'sorcerous-burst',
  name: 'Чародейская вспышка',
  nameEn: 'Sorcerous Burst',
  level: 'cantrip',
  school: 'воплощение',
  castingTime: '1 Действие',
  range: '120 футов',
  components: {
  somatic: true,
  verbal: true
  },
  duration: 'Мгновенная',
  description: `<p>Вы выпускаете Чародейскую энергию в 1 существо или объект в пределах дистанции. Совершите дальнобойную атаку против цели. При попадании цель получает 1к8 урона выбранного вами типа: кислотный, холодный, огненный, электрический, ядовитый, психической энергией или звуковой.</p>
  <p>Если вы выбросите 8 на к8 для этого заклинания, то вы можете бросить ещё один к8 и добавить его к урону. Когда вы накладываете это заклинание, то максимальное количество этих к8, которые вы можете добавить к урону заклинания, равно вашему модификатору заклинательной характеристики.</p>
  <p><strong>Улучшение заговора.</strong> Урон увеличивается на 1к8, когда вы достигаете 5 уровня (2к8), 11 уровня (3к8) и 17 уровня (4к8).</p>`,
  source: {
    book: 'PHB\'24',
    page: 318
  },
  sources: [
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'species', name: '<a href="/races/kobold/">Кобольд</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'absorb-elements',
  name: 'Поглощение стихий',
  nameEn: 'Absorb elements',
  level: '1',
  school: 'ограждение',
  castingTime: '1 реакция, совершаемая вами, когда вы получаете урон звуком, кислотой, огнём, холодом или электричеством',
  range: 'На себя',
  components: {
    somatic: true
  },
  duration: '1 раунд',
  description: `<p>Заклинание поглощает часть энергии, направленной на вас, ослабляя эффект и запасая эту энергию для использования во время следующей рукопашной атаки. До начала своего следующего хода вы получаете сопротивление тому виду урона, который спровоцировал данное заклинание. Кроме того, когда вы впервые попадаете рукопашной атакой в своём следующем ходу, цель получает дополнительно 1к6 урона этого вида, после чего заклинание заканчивается.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Если вы накладываете это заклинание, используя ячейку 2-го уровня или выше, то дополнительный урон увеличивается на 1к6 за каждый уровень ячейки выше 1-го.</p>`,
  source: {
    book: 'PHB\'24',
    page: 239
  },
  sources: [
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/ranger">Следопыт</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=abjurer">Оградитель</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
  ]
},
{
  id: 'speak-with-animals',
  name: 'Разговор с животными',
  nameEn: 'Speak with Animals',
  level: '1',
  school: 'прорицание',
  castingTime: '1 действие или ритуал',
  range: 'На себя',
  components: {
    verbal: true,
    somatic: true
  },
  duration: '10 минут',
  description: `<p>На время действия заклинания вы можете понимать и вербально общаться со зверьми, а также использовать любые варианты навыков действия влияние с ними.</p>
  <p>Большинство зверей могут сказать немногое о темах, не связанных с выживанием или общением, но как минимум, зверь может предоставить вам информацию о близлежащих местах и монстрах, включая всё, что он воспринимал в течение последнего дня.</p>`,
  source: {
    book: 'PHB\'24',
    page: 318
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/ranger">Следопыт</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/paladin?subclass=ancients">Клятва Древних</a>' },
    { type: 'subclass', name: '<a href="barbarian?subclass=wild-heart">Путь Дикого Сердца</a>' },
    { type: 'background', name: '<a href="/backgrounds/gruul%20anarch/">Анарх Груулов</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/fey-touched/">Затронутый феями</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/ritual%20caster/">Ритуальный заклинатель</a>' },
    { type: 'feat', name: '<a href="/feats/rune-shaper/">Ваятель рун</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'alarm',
  name: 'Тревога',
  nameEn: 'Alarm',
  level: '1',
  school: 'ограждение',
  castingTime: '1 действие или ритуал',
  range: '30 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'колокольчик и серебряная проволочка'
  },
  duration: '8 часов',
  description: `<p>Вы устанавливаете сигнализацию на случай вторжения. Выберите дверь, окно или область в пределах дистанции не больше куба с длиной ребра 20 футов. Пока заклинание действует, оно уведомляет вас каждый раз, когда существом размером не меньше Крошечного касается охраняемой области или входит в неё. При сотворении заклинания вы можете указать существ, которые не будут вызывать срабатывание тревоги. Вы также выбираете, мысленной будет тревога или слышимой.</p>
  <p><strong>Мысленная тревога.</strong> Звон в вашем сознании предупреждает вас, если вы находитесь в пределах 1 мили от охраняемой области. Этот звон пробуждает вас, если вы спите.</p>
  <p><strong>Слышимая тревога.</strong> В течение 10 секунд сигнализация издаёт звон колокольчика, слышимый в пределах 60 футов.</p>`,
  source: {
    book: 'PHB\'24',
    page: 239
  },
  sources: [
    { type: 'class', name: '<a href="/classes/ranger">Следопыт</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=abjurer">Оградитель</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=сlockwork">Заводная душа</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/ritual%20caster/">Ритуальный заклинатель</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'animal-friendship',
  name: 'Дружба с животными',
  nameEn: 'Animal Friendship',
  level: '1',
  school: 'очарование',
  castingTime: '1 действие или ритуал',
  range: '30 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'кусочек пищи'
  },
  duration: '24 часа',
  description: `<p>Выберите Зверя, видимого вами в пределах дистанции. Цель должна преуспеть в спасброске Мудрости, иначе получит состояние Очарованный на время действия заклинания. Если вы или ваш союзник наносите цели урон, заклинание заканчивается.</p>
  <p><strong>Используя ячейку заклинания большего уровня.</strong> Вы можете нацелить заклинание на одного дополнительного Зверя за каждый уровень ячейки выше 1-го.</p>`,
  source: {
    book: 'PHB\'24',
    page: 239
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/ranger">Следопыт</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'species', name: '<a href="/races/yuan-ti/">Юань-ти</a>' },
    { type: 'background', name: '<a href="/backgrounds/selesnya%20initiate/">Посвящённый Селезнии</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/fey-touched/">Затронутый феями</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
  ]
},
{
  id: 'armor-of-agathys',
  name: 'Доспех Агатиса',
  nameEn: 'Armor of Agathys',
  level: '1',
  school: 'ограждение',
  castingTime: 'Бонусное действие',
  range: 'на себя',
  components: {
    verbal: true,
    somatic: true,
    material: 'осколок синего стекла'
  },
  duration: '1 час',
  description: `<p>Вас покрывает магический защитный иней. Вы получаете 5 Временных хитов. Когда существо попадает по вам броском рукопашной атаки, пока заклинание действует, оно получает 5 урона Холодом. Заклинание заканчивается преждевременно, если у вас не остаётся Временных хитов.</p>
  <p><strong>Используя ячейку заклинания большего уровня.</strong> И урон Холодом, и получаемые Временные хиты увеличиваются на 5 за каждый уровень ячейки выше 1-го.</p>`,
  source: {
    book: 'PHB\'24',
    page: 243
  },
  sources: [
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'subclass', name: '<a href="/classes/paladin?subclass=conquest">Клятва Завоевания</a>' },
    { type: 'species', name: '<a href="/races/tiefling/"><a href="/races/tiefling/">Тифлинг</a> Левистуса' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/rune-shaper/">Ваятель рун</a>' }
  ]
},
{
  id: 'arms-of-hadar',
  name: 'Руки Хадара',
  nameEn: 'Arms of Hadar',
  level: '1',
  school: 'вызов',
  castingTime: '1 действие',
  range: 'на себя',
  components: {
    verbal: true,
    somatic: true
  },
  duration: 'Мгновенная',
  description: `<p>Вы взываете к мощи Хадара, Тёмного Голода, и выпускаете плети тёмной энергии. Каждое существо в исходящей из вас 10-футовой Эманации должно совершить спасбросок Силы: при провале оно получает 2к6 Некротического урона и не может совершать Реакции до начала своего следующего хода, а при успехе только получает половину этого урона.</p>
  <p><strong>Используя ячейку заклинания большего уровня.</strong> Урон увеличивается на 1к6 за каждый уровень ячейки выше 1-го.</p>`,
  source: {
    book: 'PHB\'24',
    page: 243
  },
  sources: [
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=aberrant">Аберрантный Разум</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' }
  ]
},
{
  id: 'bane',
  name: 'Порча',
  nameEn: 'Bane',
  level: '1',
  school: 'очарование',
  castingTime: '1 действие',
  range: '30 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'капля крови'
  },
  duration: 'Концентрация, вплоть до 1 минуты',
  description: `<p>Выберите до трёх существ из видимых вами в пределах дистанции. Каждое из существ должно совершить спасбросок Харизмы: при провале этого спасброска цель вычитает 1к4 из всех бросков атаки и спасбросков, совершенных до окончания действия заклинания.</p>
  <p><strong>Используя ячейку заклинания большего уровня.</strong> Вы можете нацелить заклинание на одно дополнительное существо за каждый уровень ячейки выше 1-го.</p>`,
  source: {
    book: 'PHB\'24',
    page: 245
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=grave">Домен Упокоения</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=vengeance">Клятва Мести</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=undead">Покровитель Нежить</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/fey-touched/">Затронутый феями</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
  ]
},
{
  id: 'beast-bond',
  name: 'Звериные узы',
  nameEn: 'Beast Bond',
  level: '1',
  school: 'прорицание',
  castingTime: '1 действие',
  range: 'Касание',
  components: {
    verbal: true,
    somatic: true,
    material: 'кусочек меха, завёрнутого в ткань'
  },
  duration: 'Концентрация, вплоть до 10 минут',
  description: `<p>Вы устанавливаете телепатическую связь с одним Зверем, которого касаетесь, если он дружественен вам или очарован вами. Заклинание терпит неудачу, если Интеллект Зверя больше 3. Пока заклинание действует, связь активна, если вы и Зверь находитесь в пределах прямой видимости. Связь позволяет Зверю понимать ваши телепатические сообщения, и он может телепатически передавать простые эмоции и образы обратно вам. Пока связь активна, Зверь совершает с преимуществом броски атаки против любого существа в пределах 5 футов от вас, которое вы можете видеть.</p>`,
  source: {
    book: 'XGE',
    page: 150
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/ranger">Следопыт</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/fey-touched/">Затронутый феями</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
  ]
},
{
  id: 'bless',
  name: 'Благословение',
  nameEn: 'Bless',
  level: '1',
  school: 'очарование',
  castingTime: '1 действие',
  range: '30 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'святой символ стоимостью 5+ зм'
  },
  duration: 'Концентрация, вплоть до 1 минуты',
  description: `<p>Вы благословляете до трёх существ на свой выбор в пределах дистанции. Каждый раз, когда до окончания заклинания цель совершает бросок атаки или спасбросок, она может бросить к4 и добавить выпавшее число к результату.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Если вы накладываете это заклинание, используя ячейку 2-го уровня или выше, вы можете сделать целью одно дополнительное существо за каждый уровень ячейки выше 1-го.</p>`,
  source: {
    book: 'PHB\'24',
    page: 247
  },
  sources: [
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'class', name: '<a href="/classes/paladin">Паладин</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=life">Домен Жизни</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/fey-touched/">Затронутый феями</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
  ]
},
{
  id: 'burning-hands',
  name: 'Огненные ладони',
  nameEn: 'Burning Hands',
  level: '1',
  school: 'воплощение',
  castingTime: '1 действие',
  range: 'На себя',
  components: {
    verbal: true,
    somatic: true
  },
  duration: 'Мгновенная',
  description: `<p>Вы выстреливаете пламенной вуалью: каждое существо в 15-футовом Конусе должно совершить спасбросок Ловкости, получая 3к6 урона Огнём при провале или половину этого урона при успехе.</p>
  <p>Воспламеняющиеся объекты в этом Конусе начинают гореть, если их никто не несёт и не носит.</p>
  <p><strong>Используя ячейку заклинания большего уровня.</strong> Урон увеличивается на 1к6 за каждый уровень ячейки выше 1-го.</p>`,
  source: {
    book: 'PHB\'24',
    page: 248
  },
  sources: [
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=wildfire">Круг Дикого Огня</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a> (Засушливая земля)' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=evoker">Воплотитель</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=fiend">Покровитель Исчадие</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=genie">Покровитель Гений (Ифрит)</a>' },
    { type: 'subclass', name: '<a href="/classes/monk?subclass=sun-soul">Мастер Солнечной Души</a>' },
    { type: 'species', name: '<a href="/races/genasi/">Дженази Огня</a>' },
    { type: 'species', name: '<a href="/races/tiefling/">Тифлинг</a> Мефестофеля' },
    { type: 'species', name: '<a href="/races/tiefling/">Тифлинг</a> (Инфернальное Происхождение)' },
    { type: 'background', name: '<a href="/backgrounds/rakdos%20cultist/">Культист Ракдосов</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/rune-shaper/">Ваятель рун</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
  ]
},
{
  id: 'catapult',
  name: 'Катапульта',
  nameEn: 'Catapult',
  level: '1',
  school: 'преобразование',
  castingTime: '1 действие',
  range: '60 футов',
  components: {
    somatic: true
  },
  duration: 'Мгновенная',
  description: `<p>Выберите один предмет весом от 1 до 5 фунтов в пределах дистанции, который никто не несёт и не носит. Предмет пролетает до 90 футов по прямой в выбранном вами направлении, прежде чем упасть на землю, и останавливается раньше, если ударится о твёрдую поверхность. Если предмет ударяется о существо, оно должно совершить спасбросок Ловкости. При провале предмет ударяет цель и останавливается. Если предмет ударяет что-то, то и предмет и то, во что он ударился, получают 3к8 дробящего урона.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Если вы накладываете это заклинание, используя ячейку 2-го уровня или выше, максимальный вес предметов, которые вы можете использовать, увеличивается на 5 фунтов, а урон увеличивается на 1к8 за каждый уровень ячейки выше 1-го.</p>`,
  source: {
    book: 'XGE\'14',
    page: 150
  },
  sources: [
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=transmuter">Преобразователь</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
  ]
},
{
  id: 'cause-fear',
  name: 'Вызов страха',
  nameEn: 'Cause fear',
  level: '1',
  school: 'некромантия',
  castingTime: '1 действие',
  range: '60 футов',
  components: {
    verbal: true
  },
  duration: 'Концентрация, вплоть до 1 минуты',
  description: `<p>Вы пробуждаете ощущение смертности у одного существа, которое можете видеть в пределах дистанции. Конструкты или Нежить имеют иммунитет к этому эффекту. Цель должна преуспеть в спасброске Мудрости, иначе становится испуганной вами пока заклинание не окончится. Испуганное существо может повторять спасброски в конце каждого своего хода, оканчивая эффект на себе при успехе.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, вы можете сделать целью дополнительно ещё одно существо за каждый уровень ячейки выше 1-й. Выбранные существа должны находиться в пределах 30 футов друг от друга.</p>`,
  source: {
    book: 'XGE\'14',
    page: 151
  },
  sources: [
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=necromancer">Некромант</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/shadow-touched/">Затронутый тенью</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
  ]
},
{
  id: 'ceremony',
  name: 'Церемония',
  nameEn: 'Ceremony',
  level: '1',
  school: 'ограждение',
  castingTime: '1 час или ритуал',
  range: 'Касание',
  components: {
    verbal: true,
    somatic: true,
    material: 'порошок серебра стоимостью 25 зм, расходуемый заклинанием'
  },
  duration: 'Мгновенная',
  description: `<p>Вы совершаете особую религиозную церемонию, наполненную магией. Когда вы накладываете заклинание, выберите один из следующих обрядов, цель которого должна находиться в пределах 10 футов от вас во время накладывания.</p>
  <p><strong>Благословение воды.</strong>Вы прикасаетесь к одной фляге воды и делаете её святой водой.</p>
  <p><strong>Венчание.</strong>Вы касаетесь взрослых Гуманоидов, желающих связать себя узами брака. В течение следующих 7 дней каждая цель получает бонус +2 к КД пока они находятся в пределах 30 футов друг от друга. Существо может получить преимущества от этого обряда снова, только если оно овдовело.</p>
  <p><strong>Заупокойный обряд.</strong>Вы касаетесь одного трупа, и в течение следующих 7 дней цель не может стать Нежитью, кроме как с помощью заклинания исполнения желаний [wish].</p>
  <p><strong>Искупление.</strong>Вы касаетесь одного согласного существа, чьё мировоззрение было изменено, и совершаете проверку Мудрости (Проницательность) Сл 20. При успехе вы возвращаете цели её изначальное мировоззрение.</p>
  <p><strong>Посвящение.</strong>Вы касаетесь одного Гуманоида, который хочет посвятить себя служению вашему богу. На следующие 24 часа, каждый раз, когда цель совершает спасбросок, она может бросить к4 и добавить выпавшее число к результату. Существо может получить преимущества от этого обряда только единожды.</p>
  <p><strong>Становление.</strong>Вы касаетесь одного взрослого Гуманоида, который достиг совершеннолетия. На следующие 24 часа, каждый раз, когда цель совершает проверку характеристики, она может бросить к4 и добавить выпавшее число к результату. Существо может получить преимущества от этого обряда только единожды.</p>`,
  source: {
    book: 'XGE\'14',
    page: 151
  },
  sources: [
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'class', name: '<a href="/classes/paladin">Паладин</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/ritual%20caster/">Ритуальный заклинатель</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'charm-person',
  name: 'Очарование личности',
  nameEn: 'Charm Person',
  level: '1',
  school: 'очарование',
  castingTime: '1 действие',
  range: '30 футов',
  components: {
    verbal: true,
    somatic: true
  },
  duration: 'Мгновенная',
  description: `<p>Один Гуманоид, видимый вами в пределах дистанции, совершает спасбросок Мудрости. Гуманоид совершает его с Преимуществом, если вы или ваши союзники сражаетесь с ним. При провале спасброска цель получает состояние Очарованный до окончания действия заклинания или пока вы или ваш союзник не нанесёте ему урон. Очарованное этим заклинанием существо Дружелюбно к вам. Когда заклинание заканчивается, цель знает, что вы очаровывали её.</p>
  <p><strong>Используя ячейку заклинания большего уровня.</strong>Вы можете нацелить заклинание на одно дополнительное существо за каждый уровень ячейки выше 1-го.</p>`,
  source: {
    book: 'PHB\'24',
    page: 249
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=glamour">Коллегия Очарования</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=trickery">Домен Обмана</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=enchanter">Очарователь</a>' },
    { type: 'subclass', name: '<a href="/classes/ranger?subclass=fey-wanderer">Фейский странник</a>' },
    { type: 'species', name: '<a href="/races/tiefling/">Тифлинг</a> Фьерна' },
    { type: 'species', name: '<a href="/races/tiefling/">Тифлинг</a> Дьявольский язык' },
    { type: 'background', name: '<a href="/backgrounds/selesnya%20initiate/">Посвящённый Селезнии</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/fey-touched/">Затронутый феями</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
  ]
},
{
  id: 'chromatic-orb',
  name: 'Хроматический шар',
  nameEn: 'Chromatic Orb',
  level: '1',
  school: 'воплощение',
  castingTime: '1 действие',
  range: '90 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'бриллиант стоимостью не менее 50 ЗМ'
  },
  duration: 'Мгновенная',
  description: `<p>Вы метаете шар энергии в цель в пределах дистанции. Выберите тип урона: Звук, Кислота, Огонь, Холод, Электричество или Яд, затем совершите дальнобойную атаку заклинанием по цели. При попадании цель получает 3к8 урона выбранного типа.</p>
  <p>Если вы выбрасываете одинаковые числа на двух или более костях, шар перескакивает на другую цель в пределах 30 футов от предыдущей на ваш выбор. Совершите по этой цели новый бросок атаки и новый бросок урона: при этом шар не может перескочить вновь, если вы не сотворяли заклинание с ячейкой 2-го уровня или выше.</p>
  <p><strong>Используя ячейку заклинания большего уровня.</strong>Урон увеличивается на 1к8 за каждый уровень ячейки выше 1-го. Количество раз, когда шар может перескочить на новую цель, равно уровню ячейки, но каждое существо может быть выбрано целью только один раз за сотворение заклинания.</p>`,
  source: {
    book: 'PHB\'24',
    page: 249
  },
  sources: [
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=evoker">Воплотитель</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=draconic">Драконья Кровь</a>' },
    { type: 'background', name: '<a href="/backgrounds/prismari%20student/">Студент Призмари</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/rune-shaper/">Ваятель рун</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
  ]
},
{
  id: 'color-spray',
  name: 'Сверкающие брызги',
  nameEn: 'Color Spray',
  level: '1',
  school: 'иллюзия',
  castingTime: '1 действие',
  range: 'На себя',
  components: {
    verbal: true,
    somatic: true,
    material: 'щепоть цветного песка'
  },
  duration: 'Мгновенная',
  description: `<p>Вы выпускаете ослепительный веер ярких цветных огней. Каждое существо в исходящем от вас 15-футовом Конусе должно преуспеть в спасброске Телосложения, иначе получит состояние Ослеплённый до конца вашего следующего хода.</p>`,
  source: {
    book: 'PHB\'24',
    page: 251
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=illusionist">Иллюзионист</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=lunar">Лунное Чародейство</a>' },
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/shadow-touched/">Затронутый тенью</a>' },
    { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
  ]
},
{
  id: 'command',
  name: 'Приказ',
  nameEn: 'Command',
  level: '1',
  school: 'очарование',
  castingTime: '1 действие',
  range: '60 футов',
  components: {
    verbal: true
  },
  duration: 'Мгновенная',
  description: `<p>Вы отдаете приказ из одного слова видимому вами в пределах дальности существу. Цель должна преуспеть в спасброске Мудрости, иначе в свой следующий ход будет выполнять отданный приказ. Выберите приказ из этих вариантов:</p>
  <p><strong>Подойди.</strong>Цель движется к вам по кратчайшему и наиболее прямому маршруту, завершая свой ход, если оказывается в пределах 5 футов от вас.</p>
  <p><strong>Брось.</strong>Цель бросает всё, что держит, а затем заканчивает свой ход.</p>
  <p><strong>Беги.</strong>Цель проводит свой ход, удаляясь от вас самым быстрым доступным способом.</p>
  <p><strong>Падай.</strong>Цель получает состояние Опрокинутый, а затем заканчивает свой ход.</p>
  <p><strong>Замри.</strong>В свой ход цель не двигается и не совершает ни действий, ни Бонусных действий.</p>
  <p><strong>Используя ячейку заклинания большего уровня.</strong>Вы можете воздействовать на одно дополнительное существо за каждый уровень ячейки выше 1-го.</p>`,
  source: {
    book: 'PHB\'24',
    page: 251
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'class', name: '<a href="/classes/paladin">Паладин</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=glamour">Коллегия Очарования</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=draconic">Драконья Кровь</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=fiend">Покровитель Исчадие</a>' },
    { type: 'subclass', name: '<a href="/classes/paladin?subclass=conquest">Клятва Завоевания</a>' },
    { type: 'subclass', name: '<a href="/classes/paladin?subclass=crown">Клятва Короны</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=knowledge">Домен Знаний</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=order">Домен Порядка</a>' },
    { type: 'background', name: '<a href="/backgrounds/azorius%20functionary/">Функционер Азориусов</a>' },
    { type: 'background', name: '<a href="/backgrounds/orzhov%20representative//">Представитель Орзовов</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/fey-touched/">Затронутый феями</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/rune-shaper/">Ваятель рун</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
  ]
},
{
  id: 'compelled-duel',
  name: 'Вызов на дуэль',
  nameEn: 'Compelled Duel',
  level: '1',
  school: 'очарование',
  castingTime: 'Бонусное действие',
  range: '30 футов',
  components: {
    verbal: true
  },
  duration: 'Концентрация, вплоть до 1 минуты',
  description: `<p>Вы пытаетесь вызвать существо на дуэль. Одно существо, видимое вами в пределах дистанции, должно совершить спасбросок Мудрости. При провале цель совершает с Помехой броски атаки по всем существам, кроме вас, и она не может добровольно переместиться в пространство, находящееся более чем в 30 футах от вас.</p>
  <p>Заклинание оканчивается, если вы совершаете бросок атаки по отличному от цели существу, если сотворяете заклинание на отличного от цели врага, если ваш союзник наносит цели урон, или если вы заканчиваете свой ход более чем в 30 футах от цели.</p>`,
  source: {
    book: 'PHB\'24',
    page: 252
  },
  sources: [
    { type: 'class', name: '<a href="/classes/paladin">Паладин</a>' },
    { type: 'subclass', name: '<a href="/classes/paladin?subclass=crown">Клятва Короны</a>' },
    { type: 'background', name: '<a href="/backgrounds/gruul%20anarch/">Анарх Груулов</a>' },
    { type: 'feat', name: '<a href="/feats/fey-touched/">Затронутый феями</a>' },
  ]
},
{
  id: 'comprehend-languages',
  name: 'Понимание языков',
  nameEn: 'Comprehend Languages',
  level: '1',
  school: 'прорицание',
  castingTime: '1 действие или Ритуал',
  range: 'На себя',
  components: {
    verbal: true,
    somatic: true,
    material: 'щепотка сажи и соли'
  },
  duration: '1 час',
  description: `<p>Пока заклинание активно, вы понимаете буквальный смысл услышанной и увиденной жестовой речи на любом языке. Вы также понимаете письмена на любом языке, но для этого должны касаться поверхности, на которой записаны слова. Чтобы прочитать одну страницу текста, требуется около 1 минуты. Это заклинание не расшифровывает особые знаки или тайные послания.</p>`,
  source: {
    book: 'PHB\'24',
    page: 252
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=diviner">Прорицатель</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=knowledge">Домен Знаний</a>' },
    { type: 'background', name: '<a href="/backgrounds/lorehold%20student/">Студент Лорхолда</a>' },    
    { type: 'feat', name: '<a href="/feats/aberrant-dragonmark/">Искажённая метка дракона</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/fey-touched/">Затронутый феями</a>' },
    { type: 'feat', name: '<a href="/feats/initiate-of-high-sorcery/">Посвящённый в Высшее волшебство</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/ritual%20caster/">Ритуальный заклинатель</a>' },
    { type: 'feat', name: '<a href="/feats/rune-shaper/">Ваятель рун</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' },
    { type: 'other', name: 'Договор гримуара' }
  ]
},
{
  id: 'create-or-destroy-water',
  name: 'Сотворение или уничтожение воды',
  nameEn: 'Create or Destroy Water',
  level: '1',
  school: 'преобразование',
  castingTime: '1 действие',
  range: '30 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'смесь воды и песка'
  },
  duration: 'Мгновенная',
  description: `<p>Вы создаёте один из следующих эффектов:</p>
  <p><strong>Создание воды.</strong>Вы создаёте до 10 галлонов (~38 литров) чистой воды в открытом контейнере в пределах дистанции. Вы можете создать эту воду не в контейнере, а пролить её дождём в 30-футовом Кубе в пределах дистанции, погашая все незащищённые огни.</p>
  <p><strong>Уничтожение воды.</strong>Вы уничтожаете до 10 галлонов (~38 литров) воды в открытом контейнере в пределах дистанции. Вместо этого вы можете уничтожить туман в 30-футовом Кубе в пределах дистанции.</p>
  <p><strong>Используя ячейку заклинания большего уровня.</strong>За каждый уровень ячейки выше 1-го вы создаёте или уничтожаете на 10 галлонов воды больше, а длина ребра Куба увеличивается на 5 футов.</p>`,
  source: {
    book: 'PHB\'24',
    page: 258
  },
  sources: [
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=fathomless">Покровитель Бездонный</a>' },  
    { type: 'species', name: '<a href="/races/genasi/">Дженази Воды</a>' }, 
    { type: 'background', name: '<a href="/backgrounds/izzet%20engineer/">Инженер Иззетов</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
  ]
},
{
  id: 'сure-wounds',
  name: 'Лечение Ран',
  nameEn: 'Comprehend Languages',
  level: '1',
  school: 'ограждение',
  castingTime: '1 действие',
  range: 'Касание',
  components: {
    verbal: true,
    somatic: true
  },
  duration: 'Мгновенная',
  description: `<p>Существо, которого вы касаетесь, восстанавливает Хиты в количестве, равном 2к8 + ваш модификатор заклинательной характеристики.</p>
  <p><strong>Используя ячейку заклинания большего уровня.</strong>Лечение увеличивается на 2к8 за каждый уровень ячейки выше 1-го.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 259
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/paladin">Паладин</a>' },
    { type: 'class', name: '<a href="/classes/ranger">Следопыт</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=celestial">Покровитель Небожитель</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=wildfire">Круг Дикого Огня</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=moon">Круг Луны</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=life">Домен Жизни</a>' },
    { type: 'background', name: '<a href="/backgrounds/witherbloom%20student/">Студент Визерблума</a>' },
    { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
    { type: 'feat', name: '<a href="/feats/gift-of-metallic-dragon//">Дар металлического дракона</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' },
  ]
},
{
  id: 'aura-of-life',
  name: 'Аура жизни',
  nameEn: 'Aura of Life',
  level: '4',
  school: 'ограждение',
  castingTime: '1 действие',
  range: 'На себя',
  components: {
    verbal: true
  },
  duration: 'Концентрация, до 10 минут',
  description: `<p>От вас исходит аура эмананацией на 30 футов во время длительности заклинания. Пока вы и ваши   союзники находитесь в пределах ауры, то получае  те сопротивление урону некротической энергией и   максимальное количество ваших хитов не может быть   уменьшено. Если союзник с 0 хитами начинает свой   ход в пределах ауры, то он восстанавливает 1 хит.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 244
  },
  sources: [
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'class', name: '<a href="/classes/paladin">Паладин</a>' },
    { type: 'subclass', name: '<a href="warlock?subclass=undying">Покровитель Бессмертный</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=wildfire">Круг Дикого Огня</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=twilight">Домен Сумерек</a>' },
    { type: 'background', name: '<a href="/backgrounds/selesnya%20initiate/">Посвящённый Селезнии</a>' }
  ]
},
{
  id: 'aura-of-purity',
  name: 'Аура очищения',
  nameEn: 'Aura of Purity',
  level: '4',
  school: 'ограждение',
  castingTime: '1 действие',
  range: 'На себя',
  components: {
    verbal: true
  },
  duration: 'Концентрация, до 10 минут',
  description: `<p>От вас исходит аура эмананацией на 30 футов во время длительности заклинания. Пока вы и ваши союзники находитесь в пределах ауры, то получаете сопротивление к урону ядом и преимущество на спасброски для избегания или окончания эффектов, накладывающих следующие состояния ослеплённый, очарованный, оглохший, испуганный, парализованный, отравленный или ошеломлённый.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 244
  },
  sources: [
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'class', name: '<a href="/classes/paladin">Паладин</a>' },
    { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
    { type: 'subclass', name: '<a href="/classes/paladin?subclass=watchers">Клятва Смотрителей</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=peace">Домен Мира</a>' },
  ]
},
{
  id: 'mordenkainens-faithful-hound',
  name: 'Верный пёс Морденкайнена',
  nameEn: 'Mordenkainen’s Faithful Hound',
  level: '4',
  school: 'вызов',
  castingTime: '1 действие',
  range: 'На себя',
  components: {
    verbal: true,
    somatic: true,
    material: 'серебряный свисток'
  },
  duration: '8 часов',
  description: `<p>Вы вызываете фантомного сторожевого пса в свободное пространство, которое видите в пределах дистанции. Пёс остаётся на всю длительность заклинания или до тех пор, пока вы не окажетесь на расстоянии более 300 футов друг от друга.</p>
  <p>Никто, кроме вас, не может видеть пса, и он неосязаем и неуязвим. Когда существо размера маленький или больше приблизится к псу на расстояние 30 футов, не произнеся пароль, который вы указали при накладывании заклинания, то пёс начинает громко лаять. Пёс обладает истинным зрением на расстоянии 30 футов.</p>
  <p>В начале каждого вашего хода пёс пытается укусить 1 врага в пределах 5 футов от себя. Этот враг должен преуспеть в спасброске Ловкости, иначе он получит 4к8 урона силовым полем.</p>
  <p>В последующие ходы вы можете использовать действие магия, чтобы переместить пса на расстояние до 30 футов.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 300
  },
  sources: [
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=conjurer">Вызыватель</a>' },
  ]
},
{
  id: 'control-water',
  name: 'Власть над водами',
  nameEn: 'Control Water',
  level: '4',
  school: 'преобразование',
  castingTime: '1 действие',
  range: '300 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'смесь воды и песка'
  },
  duration: 'Концентрация, до 10 минут',
  description: `<p>До окончания действия заклинания вы контролируете любую воду в выбранной вами области, которая представляет собой куб со стороной до 100 футов, используя один из следующих эффектов. В качестве действия магия в ваши последующие ходы вы можете повторить тот же эффект или выбрать другой.</p>
  <p><strong>Наводнение.</strong> Вы заставляете уровень воды во всех стоячих водах в области подняться на 20 футов. Если вы выбрали область в большом водоеме, то вместо этого вы создаете волну высотой 20 футов, которая движется с одной стороны области на другую и затем разбивается. Любые транспортные средства огромного размера или меньше на пути волны переносятся на другую сторону. Любые транспортные средства огромного размера или меньше, по которым ударила волна, имеют 25% шанс перевернуться.</p> 
  <p>Уровень воды остается поднятым до окончания действия заклинания или пока вы не выберете другой эффект. Если этот эффект создал волну, она повторяется в начале вашего следующего хода, пока эффект потопа продолжается.</p>
  <p><strong>Разделение воды.</strong> Вы разделяете воду в области и создаете траншею. Траншея простирается по всей области действия заклинания, а разделенная вода образует стену по обеим сторонам. Траншея сохраняется до окончания действия заклинания или пока вы не выберете другой эффект. Вода затем медленно заполняет траншею в течение следующего раунда, пока не восстановится нормальный уровень воды.</p>
  <p><strong>Перенаправление потока.</strong> Вы заставляете текущую воду в области двигаться в выбранном вами направлении, даже если вода должна течь через препятствия, подниматься по стенам или двигаться в других мало вероятных направлениях. Вода в области движется по вашему указанию, но как только она выходит за пределы области действия заклинания, то она возобновляет течение в соответствии с рельефом. Вода продолжает двигаться в выбранном вами направлении, пока заклинание не закончится или вы не выберете другой эффект.</p>
  <p><strong>Водоворот.</strong> Вы создаете водоворот в центре области, которая должна быть не менее 50 футовым квадратом и 25 футов в глубину. Водоворот продолжается, пока вы не выберете другой эффект или заклинание не закончится. Водоворот имеет ширину 5 футов у основания, до 50 футов на вершине и 25 футов в высоту. Любое существо в воде и в пределах 25 футов от водоворота притягивается на 10 футов к нему. Когда существо попадает в водоворот впервые за ход или заканчивает свой ход там, оно совершает спасбросок Силы. При провале существо получает 2к8 дробящего урона. При успешном спасброске существо получает половину этого урона. Существо может уплыть от водоворота только если сначала предпримет действие для того, чтобы оторваться, и преуспеет в проверке Силы (Атлетика) против Сл. вашего заклинания.</p>`,
  source: {
    book: 'PHB\'24',
    page: 256
  },
  sources: [
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=sea">Круг Моря</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=transmuter">Преобразователь</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=tempest">Домен Бури</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=fathomless">Покровитель Бездонный</a>' },
    { type: 'subclass', name: '<a href="warlock?subclass=genie">Покровитель Гений (Марид)</a>' },
    { type: 'background', name: '<a href="/backgrounds/quandrix%20student/">Студент Квандрикс</a>' },
  ]
},
{
  id: 'phantasmal-killer',
  name: 'Воображаемый убийца',
  nameEn: 'Phantasmal Killer',
  level: '4',
  school: 'иллюзия',
  castingTime: '1 действие',
  range: '120 футов',
  components: {
    verbal: true,
    somatic: true
  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>Вы заглядываете в кошмары существа, которое видите в пределах дистанции, и создаёте иллюзию его глубочайших страхов, видимую только этому существу. Цель совершает спасбросок Мудрости. В случае провала цель получает 4к10 урона психической энергией и помеху на проверки характеристик и броски атаки на всю длительность заклинания. В случае успешного спасброска цель получает половину этого урона и заклинание прекращается.</p>
  <p>На протяжении действия заклинания цель совершает спасбросок Мудрости в конце каждого своего хода. В случае провала она вновь получает урон психической энергией. В случае успеха заклинание прекращается.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Урон увеличивается на 1к10 за каждый уровень ячейки выше 4.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 304
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=illusionist">Иллюзионист</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=genie">Покровитель Гений</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=hexblade">Покровитель Ведьмовского клинка</a>' }
  ]
},
{
  id: 'сonjure-цoodland-иeings',
  name: 'Вызов лесных обитателей',
  nameEn: 'Conjure Woodland Beings',
  level: '4',
  school: 'вызов',
  castingTime: '1 действие',
  range: 'На себя',
  components: {
    verbal: true,
    somatic: true
  },
  duration: 'Концентрация, до 10 минут',
  description: `<p>Вы призываете духов природы, которые порхают вокруг вас в пределах 10-футовой эманации на всё время действия заклинания. Каждый раз, когда эманация попадает в область существа, которое вы можете видеть, и каждый раз, когда существо, которое вы видите, входит в область эманации или заканчивает там свой ход, вы можете заставить это существо совершить спасбросок Мудрости. Существо получает 5к8 урона силовым полем при провале или половину этого урона при успешном. Существо совершает этот спасбросок только 1 раз за ход.</p>
  <p>Кроме того, вы можете совершить действие отход бонусным действием на время действия заклинания.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Урон увеличивается на 1к8 за каждый уровень ячейки выше 5.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 255
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/ranger">Следопыт</a>' }
  ]
},
{
  id: 'сonjure-minor-elementals',
  name: 'Вызов малых элементалей',
  nameEn: 'Conjure Minor Elementals',
  level: '4',
  school: 'вызов',
  castingTime: '1 действие',
  range: 'На себя',
  components: {
    verbal: true,
    somatic: true
  },
  duration: 'Концентрация, до 10 минут',
  description: `<p>Вы вызываете духов со Стихийных планов, которые кружат вокруг вас в радиусе 15 футов на протяжении действия заклинания. Пока заклинание активно, любая ваша атака наносит дополнительно 2к8 урона при попадании по существу, находящемуся в пределах этого радиуса. Этот урон может быть кислотой, холодом, огнём или электричеством (вы выбираете тип урона при выполнении атаки). Кроме того, земля в пределах радиуса действия заклинания становится труднопроходимой местностью для ваших врагов.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Урон увеличивается на 2к8 за каждый уровень ячейки выше 4.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 255
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=conjurer">Вызыватель</a>' },
    { type: 'background', name: '<a href="/backgrounds/selesnya%20initiate/">Посвящённый Селезнии</a>' },
    { type: 'background', name: '<a href="/backgrounds/izzet%20engineer/">Инженер Иззетов</a>' }
  ]
},
{
  id: 'greater-invisibility',
  name: 'Высшая невидимость',
  nameEn: 'Greater Invisibility',
  level: '4',
  school: 'иллюзия',
  castingTime: '1 действие',
  range: 'Касание',
  components: {
    verbal: true,
    somatic: true
  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>Существо, которого вы коснулись, получает состояние невидимый до окончания длительности заклинания.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 304
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=archfey">Покровитель Архифея</a>' },
    { type: 'subclass', name: '<a href="/classes/ranger?subclass=gloom-stalker">Сумрачных охотник</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=illusionist">Иллюзионист</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=genie">Покровитель Гений (Джин)</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=undead">Покровитель Нежить</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=twilight">Домен Сумерек</a>' }
  ]
},
{
  id: 'giant-insect',
  name: 'Гигантское насекомое',
  nameEn: 'Giant Insect',
  level: '4',
  school: 'вызов',
  castingTime: '1 действие',
  range: '60 футов',
  components: {
    verbal: true,
    somatic: true
  },
  duration: 'Концентрация, до 10 минут',
  description: `<p>Вы вызываете гигантского многоножку, паука или осу (выбирается при накладывании заклинания). Существо появляется в свободном пространстве, которое вы видите в пределах дистанции, и использует статблок Гигантского насекомого. Форма, которую вы выбираете, определяет некоторые детали его статблока. Существо исчезает, когда его хиты падают до 0 или когда заканчивается длительность заклинания.</p>
  <p>Существо является союзником вам и вашим союзникам. В бою оно делит с вами значение инициативы, но ходит сразу после вас. Оно повинуется вашим вербальным командам (не требует от вас дополнительных действий). Если вы не даёте команд, то оно совершает уклонение и использует своё перемещение, чтобы избежать вреда.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Используйте уровень ячейки для параметра «уровень заклинания» в статблоке.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 279
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'background', name: '<a href="/backgrounds/golgari%20agent/">Агент Голгари</a>' }
  ]
},
{
  id: 'ice-storm',
  name: 'Град',
  nameEn: 'Ice Storm',
  level: '4',
  school: 'воплощение',
  castingTime: '1 действие',
  range: '300 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'варежка'
  },
  duration: 'Мгновенная',
  description: `<p>Град падает в цилиндре радиусом 20 футов и высотой 40 футов, центрированном на точке в пределах дистанции. Каждое существо в цилиндре должно совершить спасбросок Ловкости. Существо получает 2к10 дробящего урона и 4к6 урона холодом при провале или половину этого урона при успехе.
  <p>Град превращает землю в цилиндре в труднопроходимую местность до конца вашего следующего хода.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Дробящий урон увеличивается на 1к10 за каждый уровень ячейки выше 4.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 289
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a> (Арктическая земля)' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=sea">Круг Моря</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=evoker">Воплотитель</a>' },
    { type: 'subclass', name: '<a href="/classes/paladin?subclass=ancients">Клятва Древних</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=tempest">Домен Бури</a>' }
  ]
},
{
  id: 'vitriolic-sphere',
  name: 'Едкий шар',
  nameEn: 'Vitriolic Sphere',
  level: '4',
  school: 'воплощение',
  castingTime: '1 действие',
  range: '150 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'капля желчи'
  },
  duration: 'Мгновенная',
  description: `<p>Вы указываете на точку в пределах дистанции и туда устремляется светящийся шар диаметром 1 фут, наполненный кислотой, который взрывается в радиусе 20 футов. Каждое существо в этой области должно совершить спасбросок Ловкости. При провале существо получает 10к4 урона кислотой и ещё 5к4 урона кислотой в конце своего следующего хода. При успешном спасброске существо получает только половину первоначального урона.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Первоначальный урон увеличивается на 2к4 за каждый уровень ячейки выше 4.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 337
  },
  sources: [
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=evoker">Воплотитель</a>' }
  ]
},
{
  id: 'death-ward',
  name: 'Защита от смерти',
  nameEn: 'Death Ward',
  level: '4',
  school: 'ограждение',
  castingTime: '1 действие',
  range: '300 футов',
  components: {
    verbal: true,
    somatic: true
  },
  duration: '8 часов',
  description: `<p>Вы касаетесь существа и наделяете его некоторой защитой от смерти. В первый раз, когда хиты цель опускаются до 0 до окончания действия заклинания, то хиты цели вместо этого опускаются до 1 и заклинание заканчивается. Если заклинание ещё действует, а цель попадает под действие эффекта, убивающего её мгновенно, не причиняя урона, то этот эффект игнорируется, и заклинание заканчивается.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 261
  },
  sources: [
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'class', name: '<a href="/classes/paladin">Паладин</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=death">Домен Смерти</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=grave">Домен Упокоения</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=life">Домен Жизни</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=lunar">Лунное Чародейство</a>' },
    { type: 'subclass', name: '<a href="warlock?subclass=undying">Покровитель Бессмертный</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=undead">Покровитель Нежить</a>' },
    { type: 'background', name: '<a href="/backgrounds/boros%20legionnaire/">Легионер Боросов</a>' },
    { type: 'background', name: '<a href="/backgrounds/orzhov%20representative//">Представитель Орзовов</a>' },
    { type: 'background', name: '<a href="/backgrounds/witherbloom%20student/">Студент Визерблума</a>' }
  ]
},
{
  id: 'Banishment',
  name: 'Изгнание',
  nameEn: 'Banishment',
  level: '4',
  school: 'ограждение',
  castingTime: '1 действие',
  range: '30 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'пентакль'
  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>1 существо, которое вы видите в пределах дистанции, должно преуспеть в спасброске Харизмы или быть перенесено в безопасный демиплан на время длительности заклинания.</p>
  <p>Находясь там, цель получает состояние недееcпособный. Когда заклинание заканчивается, цель возвращается в то пространство, которое покинула, или в ближайшее незанятое пространство, если исходное пространство занято.</p>
  <p>Если целью является существо с типом аберрация, небожитель, элементаль, фея или исчадие и заклинание длится 1 минуту, то цель не возвращается. Вместо этого цель переносится в случайное место на плане (на усмотрение Мастера), ассоциированном с её типом существа.
  <p><strong>Накладывание более высокой ячейкой.</strong> Вы можете выбрать 1 дополнительную цель за каждый уровень ячейки выше 4.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 245
  },
  sources: [
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'class', name: '<a href="/classes/paladin">Паладин</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=abjurer">Оградитель</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
    { type: 'subclass', name: '<a href="/classes/ranger?subclass=horizon-walker">Странник Горизонта</a>' },
    { type: 'subclass', name: '<a href="/classes/ranger?subclass=monster-slayer">Убийца Чудовищ</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=knowledge">Домен Знаний</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=vengeance">Клятва Мести</a>' },
    { type: 'subclass', name: '<a href="/classes/paladin?subclass=crown">Клятва Короны</a>' },
    { type: 'subclass', name: '<a href="/classes/paladin?subclass=watchers">Клятва Смотрителей</a>' }
  ]
},
{
  id: 'stone-shape',
  name: 'Изменение формы камня',
  nameEn: 'Stone Shape',
  level: '4',
  school: 'преобразование',
  castingTime: '1 действие',
  range: 'Касание',
  components: {
    verbal: true,
    somatic: true,
    material: 'мягкая глина'
  },
  duration: 'Мгновенно',
  description: `<p>Вы касаетесь каменного объекта среднего размера или меньше, либо участка камня не более 5 футов в любом измерении и придаете ему любую форму по своему желанию. Например, вы можете придать большому камню форму оружия, статуи или ларца, либо создать небольшой проход через стену толщиной до 5 футов. Также можно изменить форму каменной двери или её рамы, чтобы запечатать дверь. Объект, который вы создаёте, может содержать до 2 петель и щеколду, но более сложные механические детали невозможны.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 321
  },
  sources: [
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=genie">Покровитель Гений (Дао)</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=transmuter">Преобразователь</a>' },
    { type: 'background', name: '<a href="/backgrounds/lorehold%20student/">Студент Лорхолда</a>' }
  ]
},
{
  id: 'fount-of-moonlight',
  name: 'Источник лунного света',
  nameEn: 'Fount of Moonlight',
  level: '4',
  school: 'воплощение',
  castingTime: '1 действие',
  range: 'На себя',
  components: {
    verbal: true,
    somatic: true
  },
  duration: 'Мгновенно',
  description: `<p>Холодный свет окутывает ваше тело на время действия заклинания, излучая яркий свет в радиусе 20 футов и тусклый свет ещё на 20 футов.</p>
  <p>Пока заклинание активно, вы получаете сопротивление к урону излучением, и ваши рукопашные атаки наносят дополнительный урон излучением 2к6 при попадании.</p>
  <p>Кроме того, сразу после того, как вы получаете урон от существа, которого видите в пределах 60 футов от себя, то вы можете совершить реакцию, чтобы заставить существо совершить спасбросок Телосложения. В случае провала, существо получает состояние ослеплённый до конца вашего следующего хода.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 277
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=moon">Круг Луны</a>' }
  ]
},
{
  id: 'mordenkainens-privat-sanctum',
  name: 'Кабинет Морденкайнена',
  nameEn: 'Mordenkainen’s Private Sanctum',
  level: '4',
  school: 'ограждение',
  castingTime: '10 минут',
  range: '120 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'тонкий лист свинца'
  },
  duration: '24 часа',
  description: `<p>Вы делаете область в пределах дистанции магически защищённой. Область представляет собой куб, который может быть от 5 до 100 футов с каждой стороны. Заклинание действует в течение указанной длительности.</p>
  <p>Когда вы накладываете заклинание, то вы решаете, какой тип защиты оно предоставляет, выбирая любые из следующих свойств:</p>
  <ul>
  <li>Звук не может проходить через барьер на краю защищённой области.</li>
  <li>Барьер защищённой области выглядит тёмным и туманным, препятствуя видимости (включая тём ное зрение) через него.</li>
  <li>Сенсоры, созданные заклинаниями прорицания, не могут появляться внутри защищённой области или проходить через барьер на её границе.</li>
  <li>Существа в области не могут быть целью заклина ний прорицания.</li>
  <li>Ничто не может телепортироваться внутрь или на ружу защищённой области.</li>
  <li>Межпланарное перемещение заблокировано внутри защищённой области.</li>
  </ul>
  <p>Накладывание этого заклинания на одно и то же место каждый день в течение 365 дней делает его постоянным, пока оно не будет рассеяно.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Вы можете увеличить размер куба на 100 футов за каждый уровень ячейки выше 4.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 301
  },
  sources: [
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=abjurer">Оградитель</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' }
  ]
},
{
  id: 'stoneskin',
  name: 'Каменная кожа',
  nameEn: 'Stoneskin',
  level: '4',
  school: 'преобразование',
  castingTime: '1 действие',
  range: 'Касание',
  components: {
    verbal: true,
    somatic: true,
    material: 'алмазная пыль стоимостью 100+ зм, расходуемая заклинанием'
  },
  duration: 'Концентрация, до 1 часа',
  description: `<p>Вы касаетесь одного согласного существа и до окончания заклинания оно получает сопротивление к дробящему, колющему и рубящему урону.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 321
  },
  sources: [
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/ranger">Следопыт</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'subclass', name: '<a href="/classes/paladin?subclass=conquest">Клятва Завоевания</a>' },
    { type: 'subclass', name: '<a href="/classes/paladin?subclass=redemption">Клятва Искупления</a>' },
    { type: 'subclass', name: '<a href="/classes/paladin?subclass=ancients">Клятва Древних</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=transmuter">Преобразователь</a>' },
    { type: 'background', name: '<a href="/backgrounds/gruul%20anarch/">Анарх Груулов</a>' }
  ]
},
{
  id: 'leomunds-secret-chest',
  name: 'Леомундов потайной сундук',
  nameEn: 'Leomund’s Secret Chest',
  level: '4',
  school: 'вызов',
  castingTime: '1 действие',
  range: 'Касание',
  components: {
    verbal: true,
    somatic: true,
    material: 'сундук размером 3×2×2 фута, изготовленный из редких материалов стоимостью 5000+ зм, и крошечная реплика сундука, сделанная из тех же материалов, стоимостью 50+ зм'
  },
  duration: 'Пока не будет развеяно',
  description: `<p>Вы скрываете сундук и всё его содержимое на Эфирном плане. Вы должны коснуться сундука и его миниатюрной реплики, которые служат материальными компонентами для заклинания. Сундук может содержать до 12 кубических футов неживого материала (3×2×2 фута).</p>
  <p>Пока сундук находится на Эфирном плане, вы можете использовать действие магия и коснуться реплики, чтобы вернуть сундук. Он появляется на незанятой поверхности в пределах 5 футов от вас. Вы можете отправить сундук обратно на Эфирный план, использовав действие магия и коснувшись сундука и реплики.</p>
  <p>Через 60 дней существует кумулятивная вероятность 5 процентов в конце каждого дня, что заклинание закончится. Заклинание также заканчивается, если вы накладываете это заклинание снова или если крошечная реплика сундука будет уничтожена. Если заклинание заканчивается и большой сундук находится на Эфирном плане, то сундук остаётся там, доступный вам или кому-либо ещё, кто его найдёт.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 290
  },
  sources: [
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=conjurer">Вызыватель</a>' },
    { type: 'background', name: '<a href="/backgrounds/orzhov%20representative//">Представитель Орзовов</a>' }
  ]
},
{
  id: 'arcane-eye',
  name: 'Магический глаз',
  nameEn: 'Arcane Eye',
  level: '4',
  school: 'прорицание',
  castingTime: '1 действие',
  range: '30 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'мех летучей мыши'
  },
  duration: 'Пока не будет развеяно',
  description: `<p>Вы создаёте невидимый неуязвимый магический глаз в пределах дистанции, который парит в воздухе на время длительности. Вы мысленно воспринимаете зрительную информацию с глаза, у которого обычное зрение и тёмное зрение в пределах 30 футов. Глаз смотрит во всех направлениях.</p>
  <p>Вы можете бонусным действием переместить глаз на 30 футов в любом направлении. Глаз может удаляться от вас на любое расстояние, но не может уходить на другие планы существования. Сплошные препятствия блокируют движение глаза, но он может проходить через отверстия диаметром не менее 1 дюйма (2,5 сантиметра).</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 242
  },
  sources: [
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=magic">Домен Магии</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=knowledge">Домен Знаний</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=light">Домен Света</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=diviner">Прорицатель</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=draconic">Драконья Кровь</a>' },
    { type: 'subclass', name: '<a href="/classes/ranger?subclass=swarmkeeper">Хранитель Роя</a>' },
    { type: 'background', name: '<a href="/backgrounds/orzhov%20representative//">Представитель Орзовов</a>' },
    { type: 'other', name: 'Видения далёких королевств' }
  ]
},
{
  id: 'hallucinatory-terrain',
  name: 'Мираж',
  nameEn: 'Hallucinatory Terrain',
  level: '4',
  school: 'иллюзия',
  castingTime: '10 минут',
  range: '300 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'гриб'
  },
  duration: '24 часа',
  description: `<p>Вы изменяете природную местность в пределах 150-футового куба на другую природную местность по вашему выбору. Таким образом, поле или дорогу можно заставить выглядеть как болото, холм, расселину или другую труднопроходимую или непроходимую местность. Пруд можно сделать похожим на травянистую лужайку, обрыв — на пологий склон, а усыпанный камнями овраг — на широкую и ровную дорогу. Искусственные сооружения, снаряжение и существа в пределах области не изменяются.</p>
  <p>Тактильные характеристики местности остаются неизменными, поэтому существа, входящие в эту область, вероятно, заметят иллюзию. Если разница не очевидна на ощупь, то существо, исследующее иллюзию, может выполнить действие изучение, чтобы совершить проверку Интеллекта (Анализ) против Сл. вашего заклинания, чтобы развеять её. Если существо обнаруживает, что местность иллюзорная, то оно видит расплывчатое изображение, наложенное на реальный ландшафт.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 283
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=illusionist">Иллюзионист</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=lunar">Лунное Чародейство</a>' }
  ]
},
{
  id: 'staggering-smite',
  name: 'Оглушающая кара',
  nameEn: 'Staggering Smite',
  level: '4',
  school: 'очарование',
  castingTime: 'Бонусное действие, которое вы совершаете сразу после попадания по существу рукопашным оружием или безоружным ударом.',
  range: 'На себя',
  components: {
    verbal: true
  },
  duration: 'Мгновенная',
  description: `<p>Цель получает от этой атаки дополнительно 4к6 урона психической энергией и должна преуспеть в спасброске Мудрости, иначе получит состояние ошеломлённый до конца вашего следующего хода.</p>  
  <p><strong>Накладывание более высокой ячейкой.</strong> Дополнительный урон увеличивается на 1к6 за каждую ячейку выше 4.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 283
  },
  sources: [
    { type: 'class', name: '<a href="/classes/paladin">Паладин</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=hexblade">Покровитель Ведьмовского клинка</a>' }
  ]
},
{
  id: 'fire-shield',
  name: 'Огненный щит',
  nameEn: 'Fire Shield',
  level: '4',
  school: 'воплощение',
  castingTime: '1 действие',
  range: 'На себя',
  components: {
    verbal: true,
    somatic: true,
    material: 'кусочек фосфора или светлячок'
  },
  duration: '10 минут',
  description: `<p>Призрачное пламя окутывает ваше тело на время действия заклинания, излучая яркий свет в радиусе 10 футов и тусклый свет ещё на 10 футов.</p>
  <p>Пламя может быть тёплым или холодным щитом по вашему выбору. Тёплый щит даёт вам сопротивление к урону холодом, а холодный щит даёт вам сопротивление к урону огнём.</p>
  <p>Кроме того, всякий раз, когда существо в пределах 5 футов от вас попадает по вам рукопашной атакой, щит взрывается пламенем. Нападающий получает 2к8 урона огнём от тёплого щита или 2к8 урона холодом от холодного щита.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 274
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=wildfire">Круг Дикого Огня</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=evoker">Воплотитель</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=fiend">Покровитель Исчадие</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=genie">Покровитель Гений (Ифрит)</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=war">Домен Войны</a>' }
  ]
},
{
  id: 'otilukes-resilient-sphere',
  name: 'Отилюков упругий шар',
  nameEn: 'Otiluke’s Resilient Sphere',
  level: '4',
  school: 'ограждение',
  castingTime: '1 действие',
  range: '30 футовя',
  components: {
    verbal: true,
    somatic: true,
    material: 'стеклянная сфера'
  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>Мерцающая сфера окружает большое или меньшее существо или предмет в пределах дистанции. Несогласное существо должно преуспеть в спасброске Ловкости, иначе оно будет заключено в сферу на длительность заклинания.</p>
  <p>Ничто (ни физические объекты, ни энергия, ни эффекты других заклинаний) не может проникать через барьер ни внутрь, ни наружу, хотя существо внутри сферы может дышать. Сфера невосприимчива ко всему урону и существо или предмет внутри неё не могут быть повреждены атаками или эффектами, исходящими снаружи, так же как и существо внутри сферы не может повредить что-либо снаружи.</p>
  <p>Сфера невесома и достаточно велика, чтобы вместить существо или предмет внутри. Заключённое существо может совершить действие, чтобы толкнуть стены сферы и тем самым катить её со скоростью до половины скорости существа. Аналогично, сферу могут поднять и переместить другие существа.</p>
  <p>Заклинание Распад нацеленное на сферу разрушает её, не нанося ущерба тому, что внутри.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 303
  },
  sources: [
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=abjurer">Оградитель</a>' },
    { type: 'subclass', name: '<a href="/classes/paladin?subclass=redemption">Клятва Искупления</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=peace">Домен Мира</a>' },
    { type: 'background', name: '<a href="/backgrounds/izzet%20engineer/">Инженер Иззетов</a>' }
  ]
},
{
  id: 'charm-monster',
  name: 'Очарование монстра',
  nameEn: 'Charm Monster',
  level: '4',
  school: 'очарование',
  castingTime: '1 действие',
  range: '30 футовя',
  components: {
    verbal: true,
    somatic: true
  },
  duration: '1 час',
  description: `<p>1 существо, которое вы видите в пределах дистанции, совершает спасбросок Мудрости. Оно делает это с преимуществом, если вы или ваши союзники сражаетесь с ним. В случае провала спасброска цель получает состояние очарованный до окончания действия заклинания или до тех пор, пока вы или ваши союзники не нанесёте ей урон. Очарованное существо становится дружественным по отношению к вам. Когда заклинание заканчивается, то цель осознаёт, что была очарована вами.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Вы можете выбрать 1 дополнительное существо за каждый уровень ячейки выше 4.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 249
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=draconic">Драконья Кровь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=enchanter">Очарователь</a>' }
  ]
},
{
  id: 'dimension-door',
  name: 'Переносящая дверь',
  nameEn: 'Dimension Door',
  level: '4',
  school: 'вызов',
  castingTime: '1 действие',
  range: '500 футовя',
  components: {
    verbal: true
  },
  duration: 'Мгновенная',
  description: `<p>Вы телепортируетесь в указанное место в пределах дистанции. Вы прибываете точно в желаемую точку. Это может быть место, которое вы видите, которое вы можете представить, или которое вы можете описать, указав расстояние и направление, например, 200 футов прямо вниз или 300 футов вверх на северо-запад под углом 45 градусов.</p>
  <p>Вы также можете телепортировать 1 согласное существо. Существо должно находиться в пределах 5 футов от вас во время телепортации, и оно перемещается в пространство в пределах 5 футов от вашего места назначения.</p>
  <p>Если вы, другое существо, или оба окажетесь в пространстве, занятом существом или полностью заполненным одним или несколькими объектами, то вы и любое существо, путешествующее с вами, получаете 4к6 урона силовым полем, и телепортация не удаётся.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 262
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/ranger?subclass=fey-wanderer">Фейский странник</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=vengeance">Клятва Мести</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=trickery">Домен Обмана</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=conjurer">Вызыватель</a>' }
  ]
},
{
  id: 'dominate-beast',
  name: 'Подчинение зверя',
  nameEn: 'Dominate Beast',
  level: '4',
  school: 'очарование',
  castingTime: '1 действие',
  range: '60 футовя',
  components: {
    verbal: true,
    somatic: true
  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>1 существо с типом зверь, которое вы видите в пределах дистанции, совершает спасбросок Мудрости. Оно делает это с преимуществом, если вы или ваши союзники сражаетесь с ним. В случае провала спасброска цель получает состояние очарованный до окончания действия заклинания. Если цель получает урон, то повторяет спасбросок, заканчивая эффект заклинания на себе при успехе.</p>
  <p>У вас есть телепатическая связь с очарованной целью, пока вы оба находитесь на одном плане существования. В свой ход вы можете использовать эту связь, чтобы отдавать команды цели (действие не требуется), например, «Атакуй то существо», «Перемести сюда» или «Принеси тот предмет». Цель делает всё возможное, чтобы подчиниться в свой ход. Если она выполняет приказ и не получает от вас дальнейших указаний, то она действует и перемещается по своему усмотрению, сосредотачиваясь на собственной защите.</p>
  <p>Вы можете приказать цели совершить реакцию, но для этого вам придется использовать свою собственную реакцию.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Ваша концентрация может длиться дольше при использовании ячейки заклинаний 5 уровня (до 10 минут), 6 уровня (до 1 часа) или 7+ уровня (до 8 часов).</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 265
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/ranger">Следопыт</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=archfey">Покровитель Архифея</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'subclass', name: '<a href="/classes/paladin?subclass=conquest">Клятва Завоевания</a>' },
    { type: 'background', name: '<a href="/backgrounds/gruul%20anarch/">Анарх Груулов</a>' }
  ]
},
{
  id: 'locate-creature',
  name: 'Поиск существа',
  nameEn: 'Locate Creature',
  level: '4',
  school: 'прорицание',
  castingTime: '1 действие',
  range: 'На себя',
  components: {
    verbal: true,
    somatic: true,
    material: 'мех ищейки'
  },
  duration: 'Концентрация, до 1 часа',
  description: `<p>Опишите или назовите существо, которое вам знакомо. Вы чувствуете направление к местоположению существа, если оно находится в пределах 1000 футов от вас. Если существо движется, то вы знаете направление его движения.</p>
  <p>Заклинание может обнаружить конкретное известное вам существо или ближайшее существо определенного вида (например, человека или единорога), если вы видели такое существо вблизи (на расстоянии не более 30 футов) хотя бы 1 раз.</p>
  <p>Если описанное или названное вами существо на ходится в другой форме, например, под воздействием заклинания Окаменение или Полиморф, то это заклинание не может обнаружить существо.</p>
  <p>Это заклинание не может обнаружить существо, если слой свинца любой толщины блокирует прямой путь между вами и существом.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 292
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/paladin">Паладин</a>' },
    { type: 'class', name: '<a href="/classes/ranger">Следопыт</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=diviner">Прорицатель</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=order">Домен Порядка</a>' }
  ]
},
{
  id: 'polymorph',
  name: 'Полиморф',
  nameEn: 'Polymorph',
  level: '4',
  school: 'преобразование',
  castingTime: '1 действие',
  range: '60 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'кокон гусеницы'
  },
  duration: 'Концентрация, до 1 часа',
  description: `<p>Вы пытаетесь превратить видимое в пределах дистанции существо в зверя. Цель должна преуспеть в спасброске Мудрости или принять форму зверя на время действия заклинания. Эта форма может быть любым зверем по вашему выбору с показателем опасности, равным или меньшим, чем у цели (или уровнем цели, если у неё нет показателя опасности). Статблок цели заменяется на статблок выбранного зверя, но цель сохраняет своё мировоззрение, черты характера, тип существа, хиты и кость хитов. Смотрите приложение Б для примеров статблоков зверей.</p>
  <p>Цель получает количество временных хитов, равное количеству хитов звериной формы. Заклинание заканчивается преждевременно, если у цели не остаётся временных хитов.</p>
  <p>Цель ограничена в действиях, которые она может совершать, анатомией своей новой формы, и не может говорить или накладывать заклинания.</p>
  <p>Снаряжение цели сливается с новой формой. Существо не может использовать или получать какую-либо выгоду от этого снаряжения.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 306
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=transmuter">Преобразователь</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=trickery">Домен Обмана</a>' },
    { type: 'background', name: '<a href="/backgrounds/simic%20scientist/">Учёный Симиков</a>' }
  ]
},
{
  id: 'divination',
  name: 'Предсказание',
  nameEn: 'Divination',
  level: '4',
  school: 'прорицание',
  castingTime: '1 действие или ритуал',
  range: 'На себя',
  components: {
    verbal: true,
    somatic: true,
    material: 'ладан стоимостью 25+ зм, расходуемый заклинанием'
  },
  duration: 'Мгновенная',
  description: `<p>Это заклинание устанавливает контакт с богом или его слугой. Вы задаёте 1 вопрос о конкретной цели, событии или деятельности, которые должны произойти в течение 7 дней. Мастер даёт честный ответ, который может быть короткой фразой или загадочным стихом. Заклинание не учитывает обстоятельства, которые могут изменить ответ, такие как наложение других заклинаний.</p>
  <p>Если вы накладываете это заклинание несколько раз до завершения продолжительного отдыха, то существует накопительный шанс 25% за каждое использование, начиная со второго, что вы не получите ответ.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 264
  },
  sources: [
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=diviner">Прорицатель</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=trickery">Домен Обмана</a>' },
    { type: 'background', name: '<a href="/backgrounds/azorius%20functionary/">Функционер Азориусов</a>' },
    { type: 'background', name: '<a href="/backgrounds/izzet%20engineer/">Инженер Иззетов</a>' }
  ]
},
{
  id: 'summon-aberration',
  name: 'Призыв духа аберрации',
  nameEn: 'Summon Aberration',
  level: '4',
  school: 'вызов',
  castingTime: '1 действие',
  range: '90 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'маринованное щупальце и глазное яблоко в сосуде с платиновыми инкрустациями стоимостью 400+ зм'
  },
  duration: 'Концентрация, до 1 часа',
  description: `<p>Вы призываете дух аберрации. Он появляется в незанятом пространстве в пределах видимой дистанции и использует статблок Дух аберрации. При накладывании заклинания выберите тип: бехолдер, иллитид или слаад. Дух — это существо в виде аберрации выбранного типа, что определяет некоторые детали его статблока. Существо исчезает, когда его хиты достигают 0 или когда заклинание заканчивается.</p>
  <p>Существо является союзником для вас и ваших союзников. В бою оно действует сразу после вас, но имеет ваш порядок инициативы. Оно подчиняется вашим вербальным командам (вам не требуется тратить действия). Если вы не отдаёте команд, то оно использует действие уклонение и перемещается, чтобы избегать опасности.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Используйте уровень ячейки для параметра «уровень заклинания» в статблоке.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 322
  },
  sources: [
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=conjurer">Вызыватель</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=aberrant">Аберрантный Разум</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=great-old-one">Покровитель Великий Древний</a>' }
  ]
},
{
  id: 'summon-construct',
  name: 'Призыв духа конструкта',
  nameEn: 'Summon Construct',
  level: '4',
  school: 'вызов',
  castingTime: '1 действие',
  range: '90 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'шкатулка стоимостью 400+ зм'
  },
  duration: 'Концентрация, до 1 часа',
  description: `<p>Вы призываете дух конструкта. Он появляется в незанятом пространстве в пределах видимой дистанции и использует статблок Дух конструкта. При накладывании заклинания выберите материал: глина, металл или камень. Дух — это существо в виде оживлённой статуи (вы определяете внешний вид) из выбранного материала, что определяет некоторые детали его статблока. Существо исчезает, когда его хиты достигают 0 или когда заклинание заканчивается.</p>
  <p>Существо является союзником для вас и ваших союзников. В бою оно действует сразу после вас, но имеет ваш порядок инициативы. Оно подчиняется вашим вербальным командам (вам не требуется тратить действия). Если вы не отдаёте команд, то оно использует действие уклонение и перемещается, чтобы избегать опасности.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Используйте уровень ячейки для параметра «уровень заклинания» в статблоке.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 324
  },
  sources: [
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=conjurer">Вызыватель</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=сlockwork">Заводная душа</a>' }
  ]
},
{
  id: 'summon-elemental',
  name: 'Призыв духа элементаля',
  nameEn: 'Summon Elemental',
  level: '4',
  school: 'вызов',
  castingTime: '1 действие',
  range: '90 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'воздух, камешек, пепел и вода в инкрустированном золотом флаконе стоимостью 400+ зм'
  },
  duration: 'Концентрация, до 1 часа',
  description: `<p>Вы призываете дух элементаля. Он появляется в незанятом пространстве в пределах видимой дистанции и использует статблок Дух элементаля. При накладывании заклинания выберите элемент: воздух, земля, огонь или вода. Дух — это существо в виде двуногого создания в окружении выбранного элемента, что определяет некоторые детали его статблока. Существо исчезает, когда его хиты достигают 0 или когда заклинание заканчивается.</p>
  <p>Существо является союзником для вас и ваших союзников. В бою оно действует сразу после вас, но имеет ваш порядок инициативы. Оно подчиняется вашим вербальным командам (вам не требуется тратить действия). Если вы не отдаёте команд, то оно использует действие уклонение и перемещается, чтобы избегать опасности.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Используйте уровень ячейки для параметра «уровень заклинания» в статблоке.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 325
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/ranger">Следопыт</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=conjurer">Вызыватель</a>' }
  ]
},
{
  id: 'сompulsion',
  name: 'Принуждение',
  nameEn: 'Compulsion',
  level: '4',
  school: 'очарование',
  castingTime: '1 действие',
  range: '30 футов',
  components: {
    verbal: true,
    somatic: true
  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>Каждое существо на ваш выбор, которое вы видите в пределах дистанции, должно преуспеть в спасброске Мудрости или оказаться под воздействием состояния очарованный до окончания действия заклинания.</p>
  <p>На протяжении длительности заклинания вы можете совершать Бонусное действие, чтобы указать направление, горизонтальное вам. Каждая очарованная цель должна использовать всю свою скорость для передвижения в этом направлении в свой следующий ход, выбирая самый безопасный путь. После того как существо переместится таким образом, оно повторяет спасбросок. При успешном спасброске заклинание для этого существа заканчивается.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 252
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'subclass', name: '<a href="/classes/paladin?subclass=glory">Клятва Славы</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=order">Домен Порядка</a>' },
    { type: 'background', name: '<a href="/backgrounds/azorius%20functionary/">Функционер Азориусов</a>' },
    { type: 'background', name: '<a href="/backgrounds/silverquill%20student/">Студент Сильверквилла</a>' }
  ]
},
{
  id: 'freedom-of-movement',
  name: 'Свобода перемещения',
  nameEn: 'Freedom of Movement',
  level: '4',
  school: 'ограждение',
  castingTime: '1 действие',
  range: 'Касание',
  components: {
    verbal: true,
    somatic: true,
    material: 'кожаный ремешок'
  },
  duration: '1 час',
  description: `<p>Вы касаетесь согласного существа. На время действия заклинания передвижение цели не зависит от труднопроходимой местности, а заклинания и другие магические эффекты не могут уменьшить скорость цели или наложить на неё состояние парализованный или опутанный. Цель также получает скорость плавания, равную её обычной скорости.</p>
  <p>Кроме того, цель может потратить 5 футов перемещения, чтобы автоматически освободиться от немагических оков, такие как кандалы или состояние схваченный от другого существа.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Вы можете выбрать 1 дополнительное существо за каждый уровень ячейки выше 4.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 277
  },
  sources: [
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/ranger">Следопыт</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a> (Умеренная земля)' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=сlockwork">Заводная душа</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
    { type: 'subclass', name: '<a href="/classes/paladin?subclass=devotion">Клятва Преданности</a>' },
    { type: 'subclass', name: '<a href="/classes/paladin?subclass=glory">Клятва Славы</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=war">Домен Войны</a>' },
    { type: 'background', name: '<a href="/backgrounds/dimir%20operative/">Оперативник Димиров</a>' },
    { type: 'background', name: '<a href="/backgrounds/simic%20scientist/">Учёный Симиков</a>' },
    { type: 'background', name: '<a href="/backgrounds/prismari%20student/">Студент Призмари</a>' },
    { type: 'background', name: '<a href="/backgrounds/quandrix%20student/">Студент Квандрикса</a>' }
  ]
},
{
  id: 'wall-of-fire',
  name: 'Стена огня',
  nameEn: 'Wall of Fire',
  level: '4',
  school: 'воплощение',
  castingTime: '1 действие',
  range: '120 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'кусочек угля'
  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>Вы создаёте стену огня на твёрдой поверхности в пределах дистанции. Вы можете сделать стену длиной до 60 футов, высотой 20 футов и толщиной 1 фут, либо кольцевую стену диаметром до 20 футов, высотой 20 футов и толщиной 1 фут. Стена является непрозрачной и существует на протяжении всего времени действия заклинания.</p>
  <p>Когда стена появляется, каждое существо в её области должно совершить спасбросок Ловкости. При провале оно получает 5к8 урона огнём, при успехе – половину этого урона.</p>
  <p>1 сторона стены, выбранная вами при накладывании заклинания, наносит 5к8 урона огнём каждому существу, которое заканчивает свой ход в пределах 10 футов от этой стороны или внутри стены. Существо также получает этот урон, если впервые за ход входит в стену или заканчивает ход в её пределах. Другая сторона стены урона не наносит.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Урон увеличивается на 1к8 за каждый уровень ячейки выше 4.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 337
  },
  sources: [
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=celestial">Покровитель Небожитель</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=fiend">Покровитель Исчадие</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=forge">Домен Кузни</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=light">Домен Света</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=evoker">Воплотитель</a>' },
    { type: 'background', name: '<a href="/backgrounds/boros%20legionnaire/">Легионер Боросов</a>' },
    { type: 'background', name: '<a href="/backgrounds/rakdos%20cultist/">Культист Ракдосов</a>' },
    { type: 'background', name: '<a href="/backgrounds/prismari%20student/">Студент Призмари</a>' }
  ]
},
{
  id: 'guardian-of-faith',
  name: 'Страж веры',
  nameEn: 'Guardian of Faith',
  level: '4',
  school: 'вызов',
  castingTime: '1 действие',
  range: '30 футов',
  components: {
    verbal: true
  },
  duration: '8 часов',
  description: `<p>Большой призрачный страж появляется и парит на протяжении действия заклинания в незанятом пространстве, которое вы видите в пределах дистанции. Страж занимает это пространство и является неуязвимым, принимая форму, соответствующую вашему божеству или пантеону.</p>
  <p>Любой враг, который впервые перемещается в пространство в пределах 10 футов от стража за ход или начинает свой ход там, совершает спасбросок Ловкости, получая 20 урона излучением при провале или половину этого урона при успехе. Страж исчезает, когда нанесёт в общей сложности 60 урона.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 281
  },
  sources: [
    { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=celestial">Покровитель Небожитель</a>' },
    { type: 'subclass', name: '<a href="/classes/paladin?subclass=devotion">Клятва Преданности</a>' },
    { type: 'subclass', name: '<a href="/classes/paladin?subclass=crown">Клятва Короны</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=light">Домен Света</a>' }
  ]
},
{
  id: 'blight',
  name: 'Усыхание',
  nameEn: 'Blight',
  level: '4',
  school: 'некромантия',
  castingTime: '1 действие',
  range: '30 футов',
  components: {
    verbal: true,
    somatic: true
  },
  duration: 'Мгновенная',
  description: `<p>Существо, которое вы видите в пределах дистанции заклинания, совершает спасбросок Телосложения, получая 8к8 урона некротической энергией в случае провала или половину этого урона в случае успеха. Существа с типом растение автоматически проваливают этот спасбросок.</p>
  <p>Если цель — немагическое растение, не являющееся существом (например, дерево или куст), то оно не совершает спасбросок; а просто засыхает и умирает.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Урон увеличивается на 1к8 за каждый уровень ячейки выше 4.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 247
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=spore">Круг Спор</a>' },
    { type: 'subclass', name: '<a href="/classes/druid?subclass=land">Круг Земли</a> (Засушливая земля)' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=death">Домен Смерти</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=grave">Домен Упокоения</a>' },
    { type: 'subclass', name: '<a href="paladin?subclass=oathbreaker">Клятвопреступник</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=necromancer">Некромант</a>' },
    { type: 'background', name: '<a href="/backgrounds/orzhov%20representative//">Представитель Орзовов</a>' },
    { type: 'background', name: '<a href="/backgrounds/witherbloom%20student/">Студент Визерблума</a>' }
  ]
},
{
  id: 'grasping-vine',
  name: 'Цепкая лоза',
  nameEn: 'Grasping Vine',
  level: '4',
  school: 'вызов',
  castingTime: 'Бонусное действие',
  range: '60 футов',
  components: {
    verbal: true,
    somatic: true
  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>Вы вызываете лозу, которая вырастает из поверхности в незанятом пространстве, которое вы видите в пределах дистанции. Лоза существует на протяжении действия заклинания.</p>
  <p>Совершите рукопашную атаку заклинанием по существу в пределах 30 футов от лозы. При попадании цель получает 4к8 дробящего урона и притягивается на 30 футов к лозе; если цель огромного или меньшего размера, она получает состояние схваченный (Сл. высвобождения равна вашему Сл. спасброска заклинания). Лоза может захватить только одно существо за раз и вы можете заставить лозу отпустить схваченное существо (не требует действия).</p>
  <p>Бонусным действием на ваших последующих ходах вы можете повторить атаку по существу в пределах 30 футов от лозы.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Количество существ, которых может схватить лоза, увеличивается на одно за каждый уровень ячейки выше 4.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 280
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/ranger">Следопыт</a>' },
    { type: 'subclass', name: '<a href="/classes/cleric?subclass=nature">Домен Природы</a>' },
    { type: 'background', name: '<a href="/backgrounds/golgari%20agent/">Агент Голгари</a>' }
  ]
},
{
  id: 'evards-black-tentacles',
  name: 'Эвардовы чёрные щупальца',
  nameEn: 'Evard’s Black Tentacles',
  level: '4',
  school: 'вызов',
  castingTime: '1 действие',
  range: '90 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'щупальце'
  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>Чёрные извивающиеся щупальца заполняют квадрат на полу с длиной стороны 20 футов, который вы видите в пределах дистанции. Во время длительности заклинания эти щупальца делают местность труднопроходимой.</p>
  <p>Каждое существо в квадрате совершает спасбросок Ловкости, получая 3к6 урона ядом и состояние опутанный до окончания длительности заклинания при неудачном спасброске. Существо также должно совершить этот спасбросок, когда перемещается в область квадрата или завершает свой ход в нём. Существо совершает этот спасбросок только один раз за ход.</p>
  <p>Опутанное щупальцами существо может действием совершить проверку Силы (Атлетика) против Сл. ваших заклинаний, заканчивая состояние опутанный на себе при успехе.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 270
  },
  sources: [
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=aberrant">Аберрантный Разум</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=fathomless">Покровитель Бездонный</a>' },
    { type: 'subclass', name: '<a href="/classes/warlock?subclass=great-old-one">Покровитель Великий Древний</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=conjurer">Вызыватель</a>' }
  ]
},
{
  id: 'elemental-bane',
  name: 'Проклятие стихии',
  nameEn: 'Elemental Bane',
  level: '4',
  school: 'преобразование',
  castingTime: '1 действие',
  range: '90 футов',
  components: {
    verbal: true,
    somatic: true
  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>Выберите одно существо, которое вы можете видеть в пределах дистанции, а затем выберите один из следующих видов урона: звук, кислота, огонь, холод или электричество. Цель должна преуспеть в спасброске Телосложения, иначе будет подвержена эффекту заклинания в течение времени его действия. Когда цель впервые за ход получает урон выбранного вида, она также получает дополнительно 2к6 урона этого вида. Кроме того, цель теряет любые сопротивления урону этого вида, пока заклинание не окончится.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Если вы накладываете это заклинание, используя ячейку 5-го уровня или выше, вы можете выбрать одну дополнительную цель за каждый уровень ячейки выше 4-го. Выбранные существа должны находиться в пределах 30 футов друг от друга.</p>`,
  source: {
    book: 'XGE\'14',
    page: 155
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=transmuter">Преобразователь</a>' }
  ]
},
{
  id: 'find-greater-steed',
  name: 'Поиск высшего скакуна',
  nameEn: 'Find greater steed',
  level: '4',
  school: 'вызов',
  castingTime: '10 минут',
  range: '30 футов',
  components: {
    verbal: true,
    somatic: true
  },
  duration: 'Мгновенная',
  description: `<p>Вы призываете духа, который принимает форму верного величественного скакуна. Появляясь в свободном пространстве в пределах дистанции, дух принимает форму, которую вы выбираете: грифон [griffon], пегас [pegasus], перитон [peryton], лютый волк [dire wolf], носорог [rhinoceros] или саблезубый тигр [saber-toothed tiger].</p>
  <p>Статистика существа соответствует статистике выбранной формы, хотя на самом деле оно является Исчадием, Небожителем или Феей (по вашему выбору), а не его обычным существом. Кроме того, если его Интеллект равен 5 или меньше, его Интеллект становится равен 6, и он получает возможность понимать один язык на ваш выбор, на котором вы разговариваете.</p>
  <p>Вы контролируете скакуна в бою. Пока он находится в пределах 1 мили от вас, вы можете общаться с ним телепатически. Находясь верхом на скакуне, вы можете делать так, что наложенные вами заклинания, нацеливающиеся только на вас, будут нацелены ещё и на скакуна.</p>
  <p>Когда хиты скакуна опускаются до 0, он исчезает, не оставляя физического тела. Вы можете также в любое время отпустить скакуна действием, заставляя его исчезнуть. В любом случае, повторное использование этого заклинания призывает этого же скакуна, восстанавливая хиты до максимума и снимая с него все состояния.</p>
  <p>У вас не может быть больше одного скакуна, призванного этим заклинанием или заклинанием поиск скакуна [find steed], одновременно. Вы можете действием навсегда отпустить скакуна, освободив его от уз и заставляя исчезнуть.</p>
  <p>Каждый раз, когда скакун исчезает, он оставляет предметы, которые нёс или которые были надеты на него.</p>`,
  source: {
    book: 'XGE\'14',
    page: 156
  },
  sources: [
    { type: 'class', name: '<a href="/classes/paladin">Паладин</a>' }
  ]
},
{
  id: 'guardian-of-nature',
  name: 'Страж природы',
  nameEn: 'Guardian of nature',
  level: '4',
  school: 'преобразование',
  castingTime: 'Бонусное действие',
  range: 'На себя',
  components: {
    verbal: true
  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>Дух природы отвечает на ваш призыв и превращает вас в могущественного стража. Превращение длится до тех пор, пока заклинание не закончится. Вы выбираете одну из следующих форм: «Первобытный зверь» или «Великое древо».
  <p>Первобытный зверь. Мягкий мех покрывает ваше тело, ваши черты лица становятся дикими, и вы получаете следующие преимущества:</p>
  <li>Скорость ходьбы увеличивается на 10 футов.</li>
  <li>Вы получаете тёмное зрение в пределах 120 футов.</li>
  <li>Вы совершаете броски атаки, основанные на Силе, с преимуществом.</li>
  <li>Рукопашные атаки оружием наносят дополнительно 1к6 урона силовым полем.</li>
  <p>Великое древо. Ваша кожа покрывается корой, листья прорастают из ваших волос, и вы получаете следующие преимущества:</p>
  <ul><li>Вы получаете 10 временных хитов.</li>
  <li>Вы совершаете с преимуществом спасброски Телосложения.</li>
  <li>Вы совершаете броски атаки, основанные на Ловкости и Мудрости, с преимуществом.</li>
  <li>Земля, на которой вы находитесь, в радиусе 15 футов от вас становится труднопроходимой местностью для врагов.</li>
  </ul></p>`,
  source: {
    book: 'XGE\'14',
    page: 157
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/ranger">Следопыт</a>' }
  ]
},
{
  id: 'raulothims-psychic-lance',
  name: 'Психическое копьё Раулотима',
  nameEn: 'Raulothim’s Psychic Lance',
  level: '4',
  school: 'очарование',
  castingTime: '1 действие',
  range: '120 футов',
  components: {
    verbal: true
  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>Вы выпускаете мерцающее копьё психической силы из своего лба в существо, которое вы можете видеть в пределах дистанции. В качестве альтернативы вы можете произнести имя существа. Если названная цель находится в пределах дистанции, она становится целью заклинания, даже если вы её не видите. Если названная цель не находится в пределах дистанции, копьё исчезает без эффекта.</p>
  <p>Цель должна совершить спасбросок Интеллекта. При провале она получает 7к6 урона психической энергией и становится недееспособной до начала вашего следующего хода. При успехе она получает половину этого урона и остаётся дееспособной.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Если вы накладываете это заклинание, используя ячейку 5-го уровня или выше, урон увеличивается на 1к6 за каждый уровень ячейки выше 4-го.</p>`,
  source: {
    book: 'FTD\'14',
    page: 21
  },
  sources: [
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'class', name: '<a href="/classes/bard">Бард</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=enchanter">Очарователь</a>' }
  ]
},
{
  id: 'shadow-of-moil',
  name: 'Облачение тени',
  nameEn: 'Shadow of Moil',
  level: '4',
  school: 'некромантия',
  castingTime: '1 действие',
  range: 'На себя',
  components: {
    verbal: true,
    somatic: true,
    material: 'глазное яблоко Нежити, заключенное в драгоценный камень стоимостью не менее 150 зм'
  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>Пламевидные тени окутывают ваше тело на всё время действия заклинания, в результате чего вы становитесь сильно заслонённым для других. Тени превращают тусклый свет в пределах 10 футов от вас в темноту, а яркий свет в той же области — в тусклый свет.</p>
  <p>Вы получаете сопротивление урону излучением до окончания действия заклинания. Кроме того, всякий раз, когда существо, находящееся в пределах 10 футов от вас, попадает по вам рукопашной атакой, тени атакуют его, причиняя 2к8 урона некротической энергией.</p>`,
  source: {
    book: 'XGE\'14',
    page: 164
  },
  sources: [
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' }
  ]
},
{
  id: 'sickening-radiance',
  name: 'Болезненное сияние',
  nameEn: 'Sickening radiance',
  level: '4',
  school: 'воплощение',
  castingTime: '1 действие',
  range: 'На себя',
  components: {
    verbal: true,
    somatic: true
  },
  duration: 'Концентрация, до 10 минут',
  description: `<p>Из точки, выбранной вами в пределах дистанции, распространяется сфера тусклого зеленоватого света с радиусом 30 футов. Свет огибает углы и существует до тех пор, пока заклинание не закончится.</p>
  <p>Если существо впервые за раунд входит в область заклинания или начинает в ней свой ход, оно должно преуспеть в спасброске Телосложения, иначе получит 4к10 урона излучением, одну степень истощения и само начинает испускать тусклый зеленоватый свет в радиусе 5 футов. Этот свет делает невозможным получение преимуществ от невидимости. Свет и любые степени истощения, вызванные этим заклинанием, проходят, когда заклинание оканчивается.</p>`,
  source: {
    book: 'XGE\'14',
    page: 164
  },
  sources: [
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=evoker">Воплотитель</a>' }
  ]
},
{
  id: 'spirit-of-death',
  name: 'Дух смерти',
  nameEn: 'Spirit of Death',
  level: '4',
  school: 'некромантия',
  castingTime: '1 действие',
  range: '60 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'позолоченная игральная карта с изображением аватара смерти стоимостью 400+ зм'
  },
  duration: 'Концентрация, до 1 часа',
  description: `<p>Вы вызываете дух, воплощающий саму смерть. Дух проявляется в свободном пространстве, которое вы можете видеть в пределах дистанции. Дух использует блок статистики духа жнеца [reaper spirit]. Дух исчезает, когда его хиты опускаются до 0 или когда заклинание заканчивается.</p>
  <p>Дух жнеца — дружественен к вам и вашим спутникам. В бою дух получает вашу инициативу и ходит сразу же после вас. Он подчиняется вашим вербальным командам (никаких действий от вас не требуется). Если вы не отдаете духу никаких команд, он совершает действие Уклонение и использует своё движение, чтобы избежать опасности.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Когда вы накладываете это заклинание, используя ячейку заклинаний 5-го уровня или выше, характеристики призываемого существа изменяются в соответствии с описанием в блоке статистики.</p>`,
  source: {
    book: 'BMT\'14',
    page: 50
  },
  sources: [
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=necromancer">Некромант</a>' }
  ]
},
{
  id: 'storm-sphere',
  name: 'Сфера бури',
  nameEn: 'Storm sphere',
  level: '4',
  school: 'воплощение',
  castingTime: '1 действие',
  range: '150 футов',
  components: {
    verbal: true,
    somatic: true
  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>В указанной вами точке в пределах дистанции заклинания возникает сфера завихряющегося воздуха радиусом 20 футов. Сфера существует, пока действует заклинание. Все существа, оказавшиеся внутри сферы в момент появления или оканчивающие свой ход внутри сферы, должны совершить спасбросок Силы, иначе получат 2к6 дробящего урона. Пространство сферы считается труднопроходимой местностью.</p>
  <p>Пока действует заклинание, вы можете бонусным действием вызвать разряд молнии, который устремится из центра сферы к выбранному вами существу в пределах 60 футов от центра сферы. Совершите дальнобойную атаку заклинанием. Атака совершается с преимуществом, если цель находится внутри сферы. При попадании цель получает 4к6 урона электричеством.</p>
  <p>Существа в пределах 30 футов от сферы совершают с помехой проверки Мудрости (Восприятие), связанные со слухом.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Если вы накладываете это заклинание, используя ячейку 5-го уровня или выше, то урон каждого эффекта увеличивается на 1к6 за каждый уровень ячейки выше 4-го.</p>`,
  source: {
    book: 'XGE\'14',
    page: 166
  },
  sources: [
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=evoker">Воплотитель</a>' }
  ]
},
{
  id: 'summon-greater-demon',
  name: 'Призыв высшего демона',
  nameEn: 'Summon greater demon',
  level: '4',
  school: 'вызов',
  castingTime: '1 действие',
  range: '60 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'сосуд с кровью Гуманоида, убитого за последние 24 часа'
  },
  duration: 'Концентрация, до 1 часа',
  description: `<p>Вы произносите инфернальные слова, призывая одного демона из хаоса Бездны. Вы выбираете тип демона, показатель опасности которого равен 5 или ниже, например, теневой демон [shadow demon] или барлгура [barlgura]. Он появляется в свободном пространстве, которое вы можете видеть в пределах дистанции. Демон исчезает, когда его хиты опускаются до 0 или когда заклинание заканчивается.</p>
  <p>Совершите бросок инициативы за демона, который будет совершать свои собственные ходы. Когда вы призываете его и в каждый свой ход после этого, вы можете дать вербальную команду (действий не требуется), сообщая ему, что он должен делать в свой следующий ход. Если вы не даёте никаких команд, демон тратит свой ход, атакуя любое существо в пределах досягаемости, которое атаковало его.</p>
  <p>В конце каждого своего хода демон совершает спасбросок Харизмы. Он совершает этот спасбросок с помехой, если вы назовёте его истинное имя. В случае провала демон продолжает подчиняться вам.</p>
  <p>При успехе, демон освобождается из-под вашего контроля на всё оставшееся время и тратит свои последующие ходы, преследуя и атакуя ближайших не-демонов в меру своих способностей. Если вы перестанете удерживать концентрацию на заклинании до того, как оно подойдёт к концу своей длительности, неконтролируемый демон не исчезнет в течение 1к6 раундов, если его хиты ещё не равны 0.</p>
  <p>Частью заклинания вы можете начертить на земле круг кровью, используемой в качестве материального компонента. Круг должен быть достаточного размера, чтобы описать занимаемое вами пространство. Пока заклинание длится, призванный демон не может пересечь круг или разрушить его, и он не может атаковать никого в нём. Если материальный компонент использован подобным образом, он расходуется при окончании заклинания.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Если вы накладываете это заклинание, используя ячейку заклинания 5-го уровня или выше, показатель опасности увеличивается на 1 за каждый уровень ячейки выше четвёртого.</p>`,
  source: {
    book: 'XGE\'14',
    page: 166
  },
  sources: [
    { type: 'class', name: '<a href="/classes/warlock">Колдун</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=conjurer">Вызыватель</a>' }
  ]
},
{
  id: 'watery-sphere',
  name: 'Водяная сфера',
  nameEn: 'Watery sphere',
  level: '4',
  school: 'вызов',
  castingTime: '1 действие',
  range: '90 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'капля воды'
  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>Вы создаёте сферу воды с радиусом 5 футов в указанной точке в пределах дистанции. Сфера может парить в воздухе, однако не выше, чем в 10 футах над землёй. Сфера существует до тех пор, пока действует заклинание.</p>
  <p>Все существа, оказавшиеся внутри сферы, должны совершить спасбросок Силы. В случае успеха существо выталкивается из сферы в ближайшее свободное пространство по выбору существа. Существа как минимум Огромного размера автоматически преуспевают в этом спасброске, а существа меньшего размера могут добровольно провалить спасбросок. При провале существо становится опутанным сферой и погружённым в воду. В конце каждого своего хода опутанная цель может повторять спасбросок, оканчивая на себе эффект заклинания при успехе.</p>
  <p>Сфера может опутать до четырёх существ Среднего или меньшего размера или одно Большое существо. Если сфера опутывает существо, превышая при этом данное ограничение, то случайное из уже захваченных существ выпадает из сферы и падает ничком в 5 футах от неё.</p>
  <p>Вы можете действием переместить сферу на расстояние до 30 футов по прямой. Если на её пути оказывается яма, обрыв или другой провал, она безопасно спускается до тех пор, пока не достигнет высоты в 10 футов над полом. Все захваченные существа перемещаются вместе со сферой. Вы можете направить сферу в существ, заставляя их совершить спасбросок.</p>
  <p>Когда заклинание заканчивается, сфера падает на землю и гасит все источники огня немагического происхождения в пределах 30 футов. Все существа, которые находились в ней, ничком падают на землю. После этого вода исчезает.</p>`,
  source: {
    book: 'XGE\'14',
    page: 166
  },
  sources: [
    { type: 'class', name: '<a href="/classes/druid">Друид</a>' },
    { type: 'class', name: '<a href="/classes/sorcerer">Чародей</a>' },
    { type: 'class', name: '<a href="/classes/wizard">Волшебник</a>' },
    { type: 'subclass', name: '<a href="/classes/rogue?subclass=arcane-trickster">Мистический ловкач</a>' },
    { type: 'subclass', name: '<a href="/classes/fighter?subclass=eldritch-knight">Мистический рыцарь</a>' },
    { type: 'subclass', name: '<a href="/classes/wizard?subclass=conjurer">Вызыватель</a>' }
  ]
},
{
  id: 'swift-quiver',
  name: 'Быстрый колчан',
  nameEn: 'Swift Quiver',
  level: '5',
  school: 'преобразование',
  castingTime: 'Бонусное действие',
  range: 'на себя',
  components: {
    verbal: true,
    somatic: true,
    material: 'колчан стоимостью 1+ зм'

  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>Когда вы накладываете это заклинание и бонусным действием до его окончания, вы можете совершить 2 атаки из оружия, стреляющего стрелами или болтами, такого как длинный лук или лёгкий арбалет. Заклинание магически создаёт боеприпасы для каждой атаки. Каждая стрела или болт, созданные заклинанием, наносят урон, как немагический боеприпас своего типа, и исчезают сразу после попадания или промаха.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 329
  },
  sources: [
    { type: 'class', name: 'Следопыт' }
  ]
},
{
  id: 'power-word-fortify',
  name: 'Слово силы: укрепление',
  nameEn: 'Power Word Fortify',
  level: '7',
  school: 'очарование',
  castingTime: '1 действие',
  range: '60 футов',
  components: {
    verbal: true

  },
  duration: 'Мгновенная',
  description: `<p>Вы укрепляете до 6 существ, которых видите в пределах дистанции. Заклинание дарует 120 временных хитов, которые вы распределяете между получателями заклинания.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 306
  },
  sources: [
    { type: 'class', name: 'Бард' },
    { type: 'class', name: 'Жрец' },
    { type: 'subclass', name: 'Божественная душа' },
  ]
},
{
  id: 'plane-shift',
  name: 'Уход в иной план',
  nameEn: 'Plane Shift',
  level: '7',
  school: 'вызов',
  castingTime: '1 действие',
  range: 'Касание',
  components: {
    verbal: true,
    somatic: true,
    material: 'раздвоенный металлический стержень стоимостью 250+ зм, настроенный на план существования'

  },
  duration: 'Мгновенная',
  description: `<p>Вы и до 8 согласных существ, которые держатся за руки в круге, перемещаетесь на другой план. Вы можете указать место назначения в общих чертах, например, Медный город на Плане огня или дворец Диспатера на 2 уровне Девяти преисподних, и вы появитесь в этом месте или рядом с ним, по усмотрению Мастера. Кроме того, если вы знаете последовательность знаков телепортационного круга на другом плане бытия, то это заклинание может переместить вас в этот круг. Если телепортационный круг слишком мал, чтобы вместить всех существ, которых вы перемещаете, то они появляются в ближайшем свободном месте рядом с кругом.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 305
  },
  sources: [
    { type: 'class', name: 'Волшебник' },
    { type: 'class', name: 'Жрец' },
    { type: 'class', name: 'Друид' },
    { type: 'class', name: 'Колдун' },
    { type: 'class', name: 'Чародей' },
    { type: 'subclass', name: 'Божественная душа' },
    { type: 'subclass', name: 'Домен Магии' },
    { type: 'subclass', name: 'Вызыватель' }
  ]
},
{
  id: 'delayed-blast-fireball',
  name: 'Замедленный огненный шар',
  nameEn: 'Delayed Blast Fireball',
  level: '7',
  school: 'воплощение',
  castingTime: '1 действие',
  range: '150 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'шарик из гуано летучей мыши и серы'

  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>Луч жёлтого света вырывается из вас и затем концентрируется в выбранной точке в пределах дистанции в виде светящегося шарика на время действия заклинания. Когда заклинание заканчивается, шарик взрывается, и каждое существо в радиусе 20 футов от точки, выбранной центром сферы, совершает спасбросок Ловкости. Существо получает урон огнём, равный накопленному урону при провале спасброска или половину этого урона при успешном. Базовый урон заклинания составляет 12к6, и урон увеличивается на 1к6 в конце каждого вашего хода, если заклинание не завершилось. Если существо касается светящегося шарика до окончания действия заклинания, то оно должно совершить спасбросок Ловкости. В случае провала заклинание заканчивается, вызывая взрыв шарика. В случае успешного спасброска существо может бросить шарик на расстояние до 40 футов. Если брошенный шарик попадает в пространство другого существа или сталкивается с твёрдым объектом, то заклинание заканчивается и шарик взрывается. Когда шарик взрывается, то горючие предметы, находящиеся в зоне взрыва и не надетые или носимые, загораются.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Базовый урон увеличивается на 1к6 за каждый уровень ячейки выше 7.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 261
  },
  sources: [
    { type: 'class', name: 'Волшебник' },
    { type: 'class', name: 'Чародей' },
    { type: 'subclass', name: 'Домен магии' },
    { type: 'subclass', name: 'Воплотитель' },
  ]
},
{
  id: 'conjure-celestial',
  name: 'Вызов небожителя',
  nameEn: 'Conjure Celestial',
  level: '7',
  school: 'вызов',
  castingTime: '1 минута',
  range: '90 футов',
  components: {
    verbal: true,
    somatic: true

  },
  duration: 'Концентрация, до 1 часа',
  description: `<p>Вы вызываете дух с Верхних планов, который проявляется в виде столба света в цилиндре радиусом 10 футов и высотой 40 футов с центром на точке в пределах дистанции. Для каждого существа, которое вы видите в цилиндре, выберите, какой свет из указанных ниже освещает его: Исцеляющий свет. Цель восстанавливает хиты в количестве, равном 4к12 плюс ваш модификатор характеристики заклинания. Жгучий свет. Цель совершает спасбросок Ловкости, получая 6к12 урона излучением при провале или половину этого урона при успешном спасброске. Пока заклинание активно, яркий свет наполняет цилиндр, и когда вы перемещаетесь в свой ход, то вы также можете переместить цилиндр на расстояние до 30 футов. Когда цилиндр перемещается в пространство существа, которое вы видите, или когда существо, которое вы видите, входит в цилиндр или заканчивает свой ход там, то вы можете осветить его одним из светов. Существо может быть затронуто этим заклинанием только 1 раз за ход.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Восстановление хитов и урон увеличиваются на 1к12 за каждый уровень ячейки выше 7.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 306
  },
  sources: [
    { type: 'class', name: 'Бард' },
    { type: 'class', name: 'Жрец' },
    { type: 'subclass', name: 'Божественная душа' },
  ]
},
{
  id: 'fires-storm',
  name: 'Огненная буря',
  nameEn: 'Fire Storm',
  level: '7',
  school: 'воплощение',
  castingTime: '1 действие',
  range: '150 футов',
  components: {
    verbal: true,
    somatic: true

  },
  duration: 'Мгновенная',
  description: `<p>В пределах дистанции начинается огненная буря. Область бури состоит из 10 10-футовых кубов, которые вы можете расположить по своему усмотрению. Каждый куб должен соприкасаться хотя бы с одним другим кубом. Каждое существо в этой области совершает спасбросок Ловкости, получая 7к10 урона огнём при провале или половину этого урона при успехе. Легковоспламеняющиеся предметы в этой области, которые не носят и не держат, начинают гореть.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 275
  },
  sources: [
    { type: 'class', name: 'Жрец' },
    { type: 'class', name: 'Чародей' },
    { type: 'class', name: 'Друид' },
    { type: 'subclass', name: 'Божественная душа' },
  ]
},
{
  id: 'etherealness',
  name: 'Эфирность',
  nameEn: 'Etherealness',
  level: '7',
  school: 'вызов',
  castingTime: '1 действие',
  range: 'На себя',
  components: {
    verbal: true,
    somatic: true

  },
  duration: 'До 8 часов',
  description: `<p>Вы вступаете в пограничные окрестности Эфирного плана, в которых он пересекается с вашим текущим планом. Вы остаётесь в Пограничном эфире, пока активно заклинание или пока вы не окончите его действием. Всё это время вы можете перемещаться в любом направлении. Если вы перемещаетесь вверх или вниз, то каждый фут перемещения стоит 1 дополнительный фут. Вы можете воспринимать план, который покинули, но он выглядит серым, и вы не можете видеть там ничего на расстоянии более 60 футов. Находясь на Эфирном Плане, вы можете воздействовать и быть подвержены воздействию только существ, объектов и эффектов на этом плане. Существа, не находящиеся на Эфирном плане, не могут воспринимать вас и взаимодействовать с вами, если только у них нет особого умения или магии, позволяющей делать это. Когда заклинание заканчивается, вы возвращаетесь на план, который покинули, в точку, соответствующую вашему положению в Пограничном эфире. Если вы появляетесь в занятом пространстве, то вы смещаетесь в ближайшее незанятое пространство и получаете урон силовым полем, равный двойному количеству футов, на которое вы были перемещены. Это заклинание мгновенно заканчивается, если вы сотворите его, находясь на Эфирном плане или на плане, который не граничит с ним, например, на одном из Внешних планов.</p>
  <p><strong>Накладывание более высокой ячейкой.</strong> Вы можете нацелить до 3 добровольных существ, включая себя, за каждый уровень ячейки выше 7. Эти существа должны находиться в пределах 10 футов от вас в момент сотворения заклинания.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 269
  },
  sources: [
    { type: 'class', name: 'Бард' },
    { type: 'class', name: 'Жрец' },
    { type: 'class', name: 'Чародей' },
    { type: 'class', name: 'Волшебник' },
    { type: 'class', name: 'Колдун' },
    { type: 'subclass', name: 'Божественная душа' },
    { type: 'subclass', name: 'Домен магии' },
    { type: 'subclass', name: 'Вызыватель' }
  ]
},
{
  id: 'finger-of-death',
  name: 'Перст смерти',
  nameEn: 'Finger of Death',
  level: '7',
  school: 'некромантия',
  castingTime: '1 действие',
  range: '60 футов',
  components: {
    verbal: true,
    somatic: true

  },
  duration: 'Мгновенная',
  description: `<p>Вы высвобождаете негативную энергию в сторону существа, которое видите в пределах дистанции. Цель совершает спасбросок Телосложения, получая 7к8 + 30 урона некротической энергией при провале или половину этого урона при успешном спасброске. Гуманоид, убитый этим заклинанием, восстаёт в начале вашего следующего хода как зомби, который подчиняется вашим вербальным приказам.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 273
  },
  sources: [
    { type: 'class', name: 'Чародей' },
    { type: 'class', name: 'Волшебник' },
    { type: 'class', name: 'Колдун' },
    { type: 'subclass', name: 'Домен магии' },
    { type: 'subclass', name: 'Некромант' }
  ]
},
{
  id: 'mordenkainens-magnificent-mansion',
  name: 'Великолепный особняк Морденкайнена',
  nameEn: 'Mordenkainen’s Magnificent Mansion',
  level: '7',
  school: 'вызов',
  castingTime: '1 минута',
  range: '300 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'миниатюрная дверь стоимостью 15+ зм'

  },
  duration: '24 часа',
  description: `<p>Вы вызываете мерцающую дверь в пределах дистанции, которая существует на протяжении всей длительности заклинания. Дверь ведет в межпространственное жилище и имеет размеры 5 футов в ширину и 10 футов в высоту. Вы и любые существа, которых вы укажете при наложении заклинания, можете входить в это межпространственное жилище, пока дверь остается открытой. Вы можете открыть или закрыть её ,не требуя действия,, если находитесь в пределах 30 футов от неё. В закрытом состоянии дверь невидима. За дверью находится великолепный вестибюль с множеством комнат. Атмосфера в жилище чистая, свежая и теплая. Вы можете создать любой план помещения по своему желанию, но его площадь не может превышать 50 смежных 10-футовых кубов. Помещение обставлено и декорировано по вашему вкусу. В нём достаточно еды, чтобы накормить до 100 человек с 9 переменами блюд. Мебель и другие объекты, созданные этим заклинанием, исчезают в дым, если вынести их из жилища. Штат из 100 полупрозрачных слуг обслуживает всех, кто входит. Вы определяете внешний вид этих слуг и их одежду. Они неуязвимы и подчиняются вашим приказам. Каждый слуга может выполнять задачи, которые мог бы выполнить человек, но они не могут атаковатьили предпринимать действия, которые могут напрямую навредить другому существу. Таким образом, слуги могут приносить вещи, убирать, чинить, складывать одежду, разжигать огонь, подавать еду, наливать вино и так далее. Слуги не могут покидать жилище. Когда заклинание заканчивается, то любые существа или предметы, оставшиеся внутри межпространственного жилища, изгоняются в незанятые пространства рядом с входом.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 300
  },
  sources: [
    { type: 'class', name: 'Бард' },
    { type: 'class', name: 'Волшебник' },
    { type: 'subclass', name: 'Домен магии' },
    { type: 'subclass', name: 'Вызыватель' }
  ]
},
{
  id: 'forcecage',
  name: 'Силовая клетка',
  nameEn: 'Forcecage',
  level: '7',
  school: 'воплощение',
  castingTime: '1 действие',
  range: '100 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'порошок рубина стоимостью 1500+ зм, расходуемый заклинанием'
  },
  duration: 'концентрация, до 1 часа',
  description: `<p>Неподвижная, невидимая, кубообразная тюрьма, состоящая из магической силы, возникает в выбранной вами области в пределах дистанции. Тюрьма может быть клеткой или сплошным ящиком, по вашему выбору. Тюрьма в форме клетки может быть до 20 футов с каждой стороны и состоит из прутьев диаметром 1/2 дюйма, расположенных на расстоянии 1/2 дюйма друг от друга. Тюрьма в форме ящика может быть с длиной ребра до 10 футов, создавая сплошной барьер, который предотвращает прохождение любого вещества сквозь него и блокирует любые заклинания, накладываемые внутрь или наружу из области. Когда вы накладываете заклинание, любое существо, полностью находящееся внутри области клетки, оказывается в ловушке. Существа, находящиеся частично в области или слишком большие, чтобы поместиться в неё, выталкиваются от центра области, пока полностью не окажутся за её пределами. Существо внутри клетки не может покинуть её немагическими способами. Если существо попытается использовать телепортацию или межпланарное перемещение для выхода, то оно должно сначала совершить спасбросок Харизмы. При успехе существо может использовать эту магию для выхода из клетки. При провале существо остаётся в клетке и теряет заклинание или эффект. Клетка также простирается на Эфирный план, блокируя эфирное перемещение. Это заклинание не может быть рассеяно при помощи заклинания Рассеивание магии.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 276
  },
  sources: [
    { type: 'class', name: 'Бард' },
    { type: 'class', name: 'Волшебник' },
    { type: 'class', name: 'Колдун' },
    { type: 'subclass', name: 'Воплотитель' },
    { type: 'subclass', name: 'Домен магии' },
  ]
},
{
  id: 'reverse-gravity',
  name: 'Изменение тяготения',
  nameEn: 'Reverse Gravity',
  level: '7',
  school: 'преобразование',
  castingTime: '1 действие',
  range: '100 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'магнит и железные опилки'
  },
  duration: 'концентрация, до 1 минуты',
  description: `<p>Это заклинание обращает гравитацию в в цилиндре с радиусом 50 футов и высотой 100 футов с центром в точке в пределах дистанции. Все существа и объекты в этой области, не закреплённые на земле, падают вверх и достигают вершины цилиндра. Существо может совершить спасбросок Ловкости, чтобы схватиться за неподвижный объект, до которого оно может дотянуться, и таким образом избежать падения вверх. Если на пути этого подъёма вверх встречается потолок или закреплённый объект, то существа и объекты сталкиваются с ним, как если бы они падали вниз. Если затронутое существо или объект достигает вершины цилиндра, не ударившись ни обо что, то оно зависает там на время длительности заклинания. Когда заклинание заканчивается, затронутые объекты и существа падают вниз.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 312
  },
  sources: [
    { type: 'class', name: 'Друид' },
    { type: 'class', name: 'Волшебник' },
    { type: 'class', name: 'Чародей' },
    { type: 'subclass', name: 'Домен магии' },
    { type: 'subclass', name: 'Преобразователь' }
  ]
},
{
  id: 'project-image',
  name: 'Проекция',
  nameEn: 'Project Image',
  level: '7',
  school: 'иллюзия',
  castingTime: '1 действие',
  range: '500 миль',
  components: {
    verbal: true,
    somatic: true,
    material: 'изображающая вас статуэтка стоимостью 5+ зм'
  },
  duration: 'концентрация, до 1 дня',
  description: `<p>Вы создаёте иллюзорную копию себя, которая существует в течение длительности заклинания. Копия может появиться в любом месте в пределах дистанции, которое вы ранее видели, независимо от преград. Иллюзия выглядит и звучит как вы, но она нематериальна. Если иллюзия получает урон, то она исчезает и заклинание заканчивается. Вы можете видеть через глаза иллюзии и слышать через её уши, как будто вы находитесь в её пространстве. Действием магия вы можете переместить её на 60 футов и заставить её жестикулировать, говорить и вести себя так, как вы хотите. Она идеально копирует ваши манеры. Физическое взаимодействие с копией показывает, что это иллюзия, так как вещи могут проходить через неё. Существо, использующее действие изучение для анализа образа, может определить, что это иллюзия, совершив успешную проверку Интеллекта, Анализ, против вашего Сл. спасброска заклинания. Если существо распознает иллюзию, то оно может видеть через образ, а любой звук, который она издаёт, кажется ему приглушённым.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 309
  },
  sources: [
    { type: 'class', name: 'Бард' },
    { type: 'class', name: 'Волшебник' },
    { type: 'subclass', name: 'Иллюзионист' },
    { type: 'subclass', name: 'Домен магии' },
  ]
},
{
  id: 'simulacrum',
  name: 'Подобие',
  nameEn: 'Simulacrum',
  level: '7',
  school: 'иллюзия',
  castingTime: '12 часов',
  range: 'Касание',
  components: {
    verbal: true,
    somatic: true,
    material: 'порошок рубина стоимостью 1 500+ зм, расходуемый заклинанием'
  },
  duration: 'До рассеивания',
  description: `<p>Вы создаёте подобие 1 зверя или гуманоида, который находится в пределах 10 футов от вас на протяжении всего времени накладывания заклинания. Вы завершаете наложение, касаясь как существа, так и кучи льда или снега, которая равна по размеру этому существу, и куча превращается в подобие, который является существом. Он использует статблок оригинального существа на момент наложения, за исключением того, что он является конструктом, его максимальные хиты составляют половину от оригинала и он не может накладывать это заклинание. Подобие является дружественным по отношению к вам и существам, которых вы выбираете. Он подчиняется вашим командам и действует в ваш ход в бою. Подобие не может получать уровни и не может совершать короткие или продолжительные отдыхи. Если подобие получает урон, то единственный способ восстановить его хиты это отремонтировать его во время вашего продолжительного отдыха, в течение которого вы тратите компоненты стоимостью 100 зм за каждый восстанавливаемый хит. Подобие должен оставаться в пределах 5 футов от вас для ремонта. Подобие существует, пока его хиты не упадут до 0, после чего он превращается в снег и тает. Если вы снова накладываете это заклинание, то любое подобие, созданное вами ранее с помощью этого заклинания, мгновенно уничтожается.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 317
  },
  sources: [
    { type: 'class', name: 'Бард' },
    { type: 'class', name: 'Волшебник' },
    { type: 'subclass', name: 'Иллюзионист' },
    { type: 'subclass', name: 'Домен магии' },
  ]
},
{
  id: 'mirage-arcane',
  name: 'Таинственный мираж',
  nameEn: 'Mirage Arcane',
  level: '7',
  school: 'иллюзия',
  castingTime: '10 минут',
  range: 'В пределах видимости',
  components: {
    verbal: true,
    somatic: true
  },
  duration: '10 дней',
  description: `<p>Вы изменяете ландшафт на площади до 1 квадратной мили, заставляя его выглядеть, звучать, пахнуть и даже ощущаться как другой вид местности. Открытые поля или дорогу можно заставить походить на болото, холм, ущелье или другой сложнопроходимый или непроходимый ландшафт. Пруд может выглядеть как травянистая лужайка, обрыв как пологий склон, а покрытый камнями овраг как широкая и гладкая дорога. Аналогично, вы можете изменить внешний вид строений или добавить их там, где их нет. Заклинание не скрывает, не маскирует и не добавляет существ. Иллюзия включает аудиальные, визуальные, тактильные и обонятельные элементы, поэтому она может превратить открытую местность в труднопроходимую ,или наоборот, или иным образом затруднить передвижение по территории. Любой элемент иллюзорного ландшафта ,например, камень или палка,, который будет удалён из зоны действия заклинания, немедленно исчезает. Существа с истинным зрением видят сквозь иллюзию истинную форму местности; однако все остальные элементы иллюзии остаются, поэтому, хотя существо осведомлено о присутствии иллюзии, оно всё равно может физически взаимодействовать с ней.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 299
  },
  sources: [
    { type: 'class', name: 'Бард' },
    { type: 'class', name: 'Волшебник' },
    { type: 'class', name: 'Друид' },
    { type: 'subclass', name: 'Иллюзионист' },
    { type: 'subclass', name: 'Домен магии' },
  ]
},
{
  id: 'resurrection',
  name: 'Высшее воскрешение',
  nameEn: 'Resurrection',
  level: '7',
  school: 'некромантия',
  castingTime: '1 часов',
  range: 'Касание',
  components: {
    verbal: true,
    somatic: true,
    material: 'алмаз стоимостью 1000+ зм, расходуемый заклинанием'
  },
  duration: 'Мгновенная',
  description: `<p>Вы касаетесь мёртвого существа, которое умерло не более века назад, не скончалось от старости и не являлось нежитью в момент смерти. Существо возвращается к жизни с полным количеством хитов. Это заклинание также нейтрализует любые яды, воздействовавшие на существо в момент его смерти. Заклинание закрывает все смертельные раны и восстанавливает любые утраченные части тела. Возвращение из мёртвых - тяжёлое испытание. Цель получает штраф -4 ко всем Тестам к20. Каждый раз, когда цель завершает продолжительный отдых, то штраф уменьшается на 1, пока не станет равен 0. Наложение этого заклинания на существо, которое умерло 365 дней назад или более, сильно истощает вас. Пока вы не завершите продолжительный отдых, вы не можете накладывать заклинания и получаете помеху на Тесты к20.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 312
  },
  sources: [
    { type: 'class', name: 'Бард' },
    { type: 'class', name: 'Жрец' },
    { type: 'subclass', name: 'Божественная душа' },
  ]
},
{
  id: 'regenerate',
  name: 'Регенерация',
  nameEn: 'Regenerate',
  level: '7',
  school: 'преобразование',
  castingTime: '1 минута',
  range: 'Касание',
  components: {
    verbal: true,
    somatic: true,
    material: 'молитвенное колесо'
  },
  duration: '1 час',
  description: `<p>Существо, которого вы касаетесь, восстанавливает 4к8 + 15 хитов. На протяжении действия заклинания цель восстанавливает 1 хит в начале каждого своего хода и любые отрубленные части тела отрастают через 2 минуты.</p>`,
  
  source: {
    book: 'PHB\'24',
    page: 311
  },
  sources: [
    { type: 'class', name: 'Бард' },
    { type: 'class', name: 'Жрец' },
    { type: 'class', name: 'Друид' },
    { type: 'subclass', name: 'Божественная душа' },
  ]
},
{
  id: 'sequester',
  name: 'Изоляция',
  nameEn: 'Sequester',
  level: '7',
  school: 'преобразование',
  castingTime: '1 действие',
  range: 'Касание',
  components: {
    verbal: true,
    somatic: true,
    material: 'порошок из драгоценных камней стоимостью 5000+ зм, расходуемый заклинанием'
  },
  duration: 'До рассеивания',
  description: `<p>Касанием вы магическим образом сокрываете объект или согласное существо. На время действия цель получает состояние невидимый и не может быть целью заклинаний прорицания, обнаружена магией или видима удалённо с помощью магии. Если цель является существом, то оно входит в состояние приостановленной жизнедеятельности, оно получает состояние бессознательный, не стареет и не нуждается в пище, воде или воздухе. Вы можете установить условие для досрочного окончания заклинания. Условие может быть любым, но оно должно произойти или быть видимым в пределах 1 мили от цели. Примеры включают «через 1000 лет» или «когда проснется тараск». Это заклинание также заканчивается, если цель получает любой урон. </p>`,
  
  source: {
    book: 'PHB\'24',
    page: 315
  },
  sources: [
    { type: 'class', name: 'Волшебник' },
    { type: 'subclass', name: 'Домен магии' },
    { type: 'subclass', name: 'Преобразователь' }
  ]
},
{
  id: 'mordenkainens-sword',
  name: 'Меч Морденкайнена',
  nameEn: 'Mordenkainen’s Sword',
  level: '7',
  school: 'воплощение',
  castingTime: '1 действие',
  range: '90 футов',
  components: {
    verbal: true,
    somatic: true,
    material: 'миниатюрный меч стоимостью 250+ зм'
  },
  duration: 'Концентрация, до 1 минуты',
  description: `<p>Вы создаёте призрачный меч, который парит в пределах дистанции. Он существует в течение длительности заклинания. Когда меч появляется, то вы совершаете рукопашную атаку заклинанием по цели в пределах 5 футов от меча. При попадании цель получает урон силовым полем, равный 4к12 + ваш модификатор заклинательной характеристики. В последующих ходах вы можете бонусным действием переместить меч на 30 футов в видимое место и повторить атаку по той же цели или другой. </p>`,
  
  source: {
    book: 'PHB\'24',
    page: 302
  },
  sources: [
    { type: 'class', name: 'Бард' },
    { type: 'class', name: 'Волшебник' },
    { type: 'subclass', name: 'Домен магии' },
    { type: 'subclass', name: 'Воплотитель' },
  ]
},
{
  id: 'divine-word',
  name: 'Божественное слово',
  nameEn: 'Divine Word',
  level: '7',
  school: 'воплощение',
  castingTime: '1 бонусное действие',
  range: '30 футов',
  components: {
    verbal: true
  },
  duration: 'Мгновенная',
  description: `<p>Вы произносите слово, наполненное силой Верхних планов. Каждое выбранное вами существо в пределах дистанции совершает спасбросок Харизмы. При провале цель, имеющая 50 или меньше хитов, подвергается воздействию, в зависимости от её текущих хитов, как указано в таблице «Эффекты божественного слова». Независимо от количества хитов, небожитель, элементаль, фея или исчадие, провалившее спасбросок, возвращается на свой родной план ,если оно уже не там, и не может вернуться на текущий план в течение 24 часов любыми способами, кроме заклинания Желание.</p>
  <p>0-20 Цель погибает</p>
  <p>21-30 Цель получает состояния ослеплённый, оглохший и ошеломлённый на 1 час</p>
  <p>31-40 Цель получает состояния ослеплённый и оглохший на 10 минут</p>
  <p>41-50 Цель получает состояние оглохший на 1 минуту</p>`,
  source: {
    book: 'PHB\'24',
    page: 265
  },
  sources: [
    { type: 'class', name: 'Жрец' },
    { type: 'subclass', name: 'Божественная душа' },
  ]
},
{
  id: 'prismatic-spray',
  name: 'Радужные брызги',
  nameEn: 'Prismatic Spray',
  level: '7',
  school: 'воплощение',
  castingTime: '1 действие',
  range: 'На себя',
  components: {
    verbal: true,
    somatic: true
  },
  duration: 'Мгновенная',
  description: `<p>8 лучей света вырываются из вас в 60-футовом конусе. Каждое существо в конусе совершает спасбросок Ловкости. Для каждой цели бросьте 1к8, чтобы определить, какой цвет луча воздействует на него, используя таблицу «Радужные лучи»</p>
  <p>1 Красный. Неудача: 12к6 урона огнём. Успех: половина этого урона.</p>
  <p>2 Оранжевый. Неудача: 12к6 урона кислотой. Успех: половина этого урона.</p>
  <p>3 Желтый. Неудача: 12к6 урона электричеством. Успех: половина этого урона.</p>
  <p>4 Зелёный. Неудача: 12к6 урона ядом. Успех: половина этого урона.</p>
  <p>5 Голубой. Неудача: 12к6 урона холодом. Успех: половина этого урона.</p>
  <p>6 Синий. Цель получает состояние опутанный и делает спасбросок Телосложения в конце каждого своего хода. Если она успешно проходит 3 спасброска, то состояние заканчивается. Если она проваливает 3 спасброска, то получает состояние окаменевший, пока не будет освобождена эффектом, подобным заклинанию Высшее восстановление. Успешные и неудачные спасброски не обязательно должны быть последовательными, ведите учет обоих до тех пор, пока цель не наберет 3 одинаковых результата.</p>
  <p>7 Фиолетовый. Цель получает состояние ослеплённый и делает спасбросок Мудрости в начале своего своего хода. При успехе состояние заканчивается на цели. При пропали состояние заканчивается и существо телепортируется на другой план ,на выбор Мастера,.</p>
  <p>8 Особенность. По цели попадают два луча. Бросьте ещё два раза по таблице «Призматические лучи», перебрасывая выпавшую 8.</p>`,
  source: {
    book: 'PHB\'24',
    page: 307
  },
  sources: [
    { type: 'class', name: 'Чародей' },
    { type: 'class', name: 'Бард' },
    { type: 'class', name: 'Волшебник' },
    { type: 'subclass', name: 'Домен магии' },
    { type: 'subclass', name: 'Воплотитель' },
  ]
},
{
  id: 'symbol',
  name: 'Знак',
  nameEn: 'Symbol',
  level: '7',
  school: 'ограждение',
  castingTime: '1 минута',
  range: 'Касание',
  components: {
    verbal: true,
    somatic: true
  },
  duration: 'До рассеивания или активациия',
  description: `<p>Вы рисуете губительный знак на поверхности ,например, на участке пола или стены, или внутри предмета, который можно закрыть ,например, книги или сундука,. Знак может покрывать площадь не более 10 футов в диаметре. Если вы выбираете предмет, то его нельзя перемещать, если он будет перемещён более чем на 10 футов от места наложения заклинания, то знак разрушается и заклинание заканчивается, не будучи активированным. Знак почти незаметен и требует успешной проверки Внимательности ,Мудрость, против Сл. спасброска вашего заклинания, чтобы его заметить. Когда вы чертите знак, вы устанавливаете условие его активации и выбираете, какой эффект символ несёт: смерть, разногласие, страх, боль, сон или ошеломление. Каждый эффект описан ниже. Условие активации. Вы решаете, что активирует знак, когда накладываете заклинание. Для знаков, начерченных на поверхности, распространёнными условиями активации являются прикосновение к знаку, наступание на него, удаление предмета, покрывающего его, или приближение на определённое расстояние. Для знаков, начерченных внутри предмета, распространённые условия активации включают открытие предмета или видимость знака. Вы можете уточнить условие активации, чтобы только существа определённых типов могли его активировать ,например, знак можно настроить на воздействие только на аберрации,. Вы также можете установить условия, при которых существа не активируют знак, например, если они произнесут определённый пароль. После активации знак светится, заполняя сферу радиусом 60 футов тусклым светом на 10 минут, после чего заклинание заканчивается. Существо становится целью эффекта знака при его активации, когда впервые за ход входит в сферу или заканчивает свой ход в ней. Существо может стать целью только один раз за ход.</p>
  <p> Смерть. Каждая цель совершает спасбросок Телосложения, получая 10к10 урона некротической энергией при провале или половину этого урона при успехе. </p>
  <p> Разногласие. Каждая цель совершает спасбросок Мудрости. При провале цель спорит с другими существами в течение 1 минуты. В это время она не способна вести осмысленные разговоры и имеет помеху на броски атаки и проверки характеристик.</p>
  <p> Страх. Каждая цель должна преуспеть в спасброске Мудрости или получить состояние испуганный на 1 минуту. Пока цель испугана, она должна удаляться на 30 футов от знака в каждый свой ход, если это возможно. </p>
  <p> Боль. Каждая цель должна преуспеть в спасброске Телосложения или получить состояние недееспособный на 1 минуту</p>
  <p> Сон. Каждая цель должна преуспеть в спасброске Мудрости или получить состояние бессознательный на 10 минут. Существо пробуждается, если получает урон или если кто-то совершит действие, чтобы разбудить его.</p>
  <p> Ошеломление. Каждая цель должна преуспеть в спасброске Мудрости или получить состояние ошеломлённый на 1 минуту.</p>`,
  source: {
    book: 'PHB\'24',
    page: 329
  },
  sources: [
    { type: 'class', name: 'Жрец' },
    { type: 'class', name: 'Бард' },
    { type: 'class', name: 'Друид' },
    { type: 'class', name: 'Волшебник' },
    { type: 'subclass', name: 'Божественная душа' },
    { type: 'subclass', name: 'Оградитель' },
    { type: 'subclass', name: 'Домен магии' },
  ]
}
];