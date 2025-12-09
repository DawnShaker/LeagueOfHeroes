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
  name: 'Искусство друидов',
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
    { type: 'feat', name: '<a href="/feats/light-bringer/">Несущий свет</a>' },
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
    { type: 'feat', name: '<a href="/feats/vampire-touched/">Затронутый вампиром</a>' },
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
    { type: 'feat', name: '<a href="/feats/vampire-touched/">Затронутый вампиром</a>' },
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
    { type: 'feat', name: '<a href="/feats/vampire-touched/">Затронутый вампиром</a>' },
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
    { type: 'feat', name: '<a href="/feats/treacherous-allure/">Обманчивая привлекательность</a>' },
    { type: 'feat', name: '<a href="/feats/vampire-touched/">Затронутый вампиром</a>' },
    { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
    { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
  ]
},
{
  id: 'chromatic-orb',
  name: 'Цветной шарик',
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
    { type: 'feat', name: '<a href="/feats/vampire-touched/">Затронутый вампиром</a>' },
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
    { type: 'feat', name: '<a href="/feats/vampire-touched/">Затронутый вампиром</a>' },
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
    { type: 'feat', name: '<a href="/feats/vampire-touched/">Затронутый вампиром</a>' }
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
  name: 'Лечение ран',
  nameEn: 'Cure wounds',
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
},
{
    id: 'animate-dead',
    name: 'Поднятие мертвеца',
    nameEn: 'Animate Dead',
    level: '3',
    school: 'некромантия',
    castingTime: '1 минута',
    range: '10 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'капля крови, кусочек плоти и щепотка костной пыли'
    },
    duration: 'Мгновенная',
    description: `<p>Выберите кучу костей или труп Гуманоида Среднего или Маленького размера в пределах дистанции. Цель становится Нежитью: скелетом, если вы выбирали кости, или зомби, если вы выбрали труп.</p>
    <p>В каждый ваш ход вы можете Бонусным действием мысленно отдать приказ созданному вами этим заклинанием существу, если оно находится в пределах 60 футов от вас (если вы контролируете несколько существ, вы можете отдать один и тот же приказ одновременно любому количеству из них ). Вы решаете, какое действие совершит это существо, и куда оно переместится в следующем ходу, или вы можете отдать общий приказ — например, охранять комнату или коридор. Если вы не отдадите команду, существо будет совершать действие Уклонение и перемещаться только для того, чтобы избежать вреда. Получив приказ, существо продолжает его выполнять, пока задача не будет выполнена.</p>
    <p>Существо находится под вашим контролем 24 часа, после чего перестаёт исполнять отданные вами приказы. Чтобы продлить контроль ещё на 24 часа, вы должны до окончания текущего 24-часового периода снова сотворить на него это заклинание. Такое использование заклинания не оживляет новое существо, а продлевает контроль над уже созданными существами, количеством не более четырёх.</p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong> Вы оживляете или продлеваете контроль над двумя дополнительными Нежитями за каждый уровень ячейки выше 3-го. Для каждого создаваемого существа требуется отдельная куча костей или труп.</p>`,
    source: {
      book: 'PHB\'24',
      page: 240
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Круг спор' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Домен Смерти' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Клятвопреступник' },
      { type: 'background', name: 'Агент Голгари' }
    ]
  },
  {
    id: 'antagonize',
    name: 'Враждебность',
    nameEn: 'Antagonize',
    level: '3',
    school: 'очарование',
    castingTime: '1 действие',
    range: '30 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'игральная карта с изображением плута'
    },
    duration: 'Мгновенная',
    description: `<p>Вы шепчете магические слова, вызывающие враждебность у одного существа по вашему выбору в пределах дистанции. Цель должна преуспеть в спасброске Мудрости. При провале цель получает 4к4 урона психической энергией и должна немедленно реакцией совершить рукопашную атаку по другому существу по вашему выбору, которое вы можете видеть. Если цель не может совершить эту атаку (например, если в пределах её досягаемости никого нет или у неё не осталось реакций), цель совершает следующий бросок атаки до начала вашего следующего хода с помехой. При успехе цель получает только половину урона.</p>
    <p><strong>Накладывание более высокой ячейкой.</strong> Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, урон увеличивается на 1к4 за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'BMT',
      page: 50
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' }
    ]
  },
  {
    id: 'ashardalons-stride',
    name: 'Ашардалонова поступь',
    nameEn: 'Ashardalon’s Stride',
    level: '3',
    school: 'преобразование',
    castingTime: '1 бонусное действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Концентрация, вплоть до 1 минуты',
    description: `<p>Из-под ваших ног вырывается бушующее драконье пламя, дарующее вам взрывное ускорение. Пока заклинание активно, ваша скорость ходьбы увеличивается на 20 футов, и ваше движение не вызывает провоцированных атак.</p>
    <p>Когда вы перемещаетесь в пределах 5 футов от существа или предмета, который не несут и не носят, оно получает 1к6 урона огнём от вашего пылающего следа. Существо или предмет может получить этот урон только один раз за ход.</p>
    <p><strong>Накладывание более высокой ячейкой.</strong> Если вы накладываете это заклинание, используя ячейку 4-го уровня или выше, скорость увеличивается на 5 футов за каждый уровень ячейки выше третьего. Урон огнём увеличивается на 1к6 за каждый уровень ячейки выше третьего.</p>`,
    source: {
      book: 'FTD',
      page: 19
    },
    sources: [
      { type: 'class', name: 'Следопыт' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' }
    ]
  },
  {
    id: 'aura-of-vitality',
    name: 'Аура живучести',
    nameEn: 'Aura of Vitality',
    level: '3',
    school: 'ограждение',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true
    },
    duration: 'Концентрация, вплоть до 1 минуты',
    description: `<p>Пока заклинание действует, вы излучаете ауру Эманацией радиусом 30 футов. Когда вы создаёте этот эффект и в начале каждого вашего хода, пока аура действует, вы можете восстановить 2к6 Хитов одному находящемуся в ней существу.</p>`,
    source: {
      book: 'PHB\'24',
      page: 244
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Паладин' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Клятва Короны' },
      { type: 'subclass', name: 'Домен Сумерек' }
    ]
  },
  {
    id: 'beacon-of-hope',
    name: 'Маяк надежды',
    nameEn: 'Beacon of Hope',
    level: '3',
    school: 'ограждение',
    castingTime: '1 действие',
    range: '30 футов',
    components: {
      verbal: true
    },
    duration: 'Концентрация, вплоть до 1 минуты',
    description: `<p>Выберите любое количество существ в пределах дистанции. Пока заклинание активно, все цели совершают с Преимуществом спасброски Мудрости и спасброски от Смерти, а также восстанавливают максимально возможное количество Хитов от любого лечения.</p>`,
    source: {
      book: 'PHB\'24',
      page: 245
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Домен Жизни' },
      { type: 'subclass', name: 'Клятва Короны' },
      { type: 'subclass', name: 'Клятва Преданности' },
      { type: 'subclass', name: 'Домен Мира' }
    ]
  },
  {
    id: 'bestow-curse',
    name: 'Проклятие',
    nameEn: 'Bestow Curse',
    level: '3',
    school: 'ограждение',
    castingTime: '1 действие',
    range: 'Касание',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Концентрация, вплоть до 1 минуты',
    description: `<p>Вы касаетесь существа, и оно должно преуспеть в спасброске Мудрости, иначе будет проклято на время действия заклинания. При сотворении заклинания выберите его эффект, он длится, пока действует проклятие:</p>
    <p><ul><li>Выберите одну характеристику. Цель совершает с Помехой проверки и спасброски этой характеристики.</li>
    <li>Цель совершает с Помехой броски атаки против вас.</li>
    <li>В сражении цель должна в начале каждого своего хода совершать спасбросок Мудрости, при провале она вынуждена в этот ход совершить действие Уклонение.</li>
    <li>Если вы наносите цели урон броском атаки или заклинанием, она получает 1к8 дополнительного Некротического урона.</li></ul></p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong>При сотворении заклинания c ячейкой 4-го уровня вы можете поддерживать Концентрацию вплоть 10 минут, с ячейкой заклинаний 5-го уровня или выше заклинание не требует Концентрации, а длительность становится равна 8 часам (с ячейкой 5-го или 6-го уровня) или 24 часам (с ячейкой 7-го или 8-го уровня), с ячейкой 9-го уровня заклинание действует, пока не будет рассеяно.</p>`,
    source: {
      book: 'PHB\'24',
      page: 246
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Клятва Завоевания' }
    ]
  },
  {
    id: 'blinding-smite',
    name: 'Ослепляющая кара',
    nameEn: 'Blinding Smite',
    level: '3',
    school: 'воплощение',
    castingTime: 'Бонусное действие, совершаемое вами немедленно после попадания по цели Рукопашным оружием или Безоружным ударом',
    range: 'На себя',
    components: {
      verbal: true
    },
    duration: '1 минута',
    description: `<p>Цель этой атаки получает 3к8 дополнительного урона Излучением и состояние Ослеплённый на время действия заклинания. В конце каждого своего хода цель с этим состоянием совершает спасбросок Телосложения, при успехе оканчивая на себе это заклинание.</p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong>Дополнительный урон увеличивается на 1к8 за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'PHB\'24',
      page: 247
    },
    sources: [
      { type: 'class', name: 'Паладин' },
      { type: 'background', name: 'Легионер Боросов' }
    ]
  },
  {
    id: 'call-lightning',
    name: 'Призыв молнии',
    nameEn: 'Call Lightning',
    level: '3',
    school: 'вызов',
    castingTime: '1 действие',
    range: '120 футов',
    components: {
      verbal: true
    },
    duration: 'Концентрация, вплоть до 10 минут',
    description: `<p>В видимой вами над вашей головой точке в пределах дистанции появляется туча, принимающая форму Цилиндра высотой 10 футов и радиусом 60 футов.</p>
    <p>Сотворив это заклинание, выберите видимую вами точку под тучей, из тучи в эту точку бьёт разряд молнии. Каждое существо в пределах 5 футов от этой точки должно совершить спасброски Ловкости, получая 3к10 урона Электричеством при провале или половину этого урона при успехе.</p>
    <p>Пока заклинание действует, в каждый ваш ход вы можете действием Магия вызывать из тучи новый разряд молнии, в ту же или другую точку.</p>
    <p>Если в момент сотворения заклинания вы находитесь под открытым небом во время грозы, заклинание не создаёт новую тучу, а даёт вам контроль над этой грозой. В такой ситуации урон от заклинания увеличивается на 1к10.</p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong>Урон увеличивается на 1к10 за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'PHB\'24',
      page: 248
    },
    sources: [
      { type: 'class', name: 'Друид' },
      { type: 'subclass', name: 'Круг Земли' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Домен Бури' },
      { type: 'background', name: 'Иззетский Инженер' }
    ]
  },
  {
    id: 'clairvoyance',
    name: 'Подсматривание',
    nameEn: 'Clairvoyance',
    level: '3',
    school: 'прорицание',
    castingTime: '10 минут',
    range: '1 миля',
    components: {
      verbal: true,
      somatic: true,
      material: 'фокусировка стоимостью не менее 100 ЗМ: либо украшенный камнями рог для подслушивания, либо стеклянный глаз для подсматривания'
    },
    duration: 'Концентрация, вплоть до 10 минут',
    description: `<p>Вы создаёте Невидимый сенсор в пределах дистанции в известном вам месте (месте, которое вы уже видели или посещали) или очевидном месте, незнакомом вам (например, за дверью, за углом, или в роще деревьев). Этот неосязаемый, неуязвимый сенсор существует там, пока действует заклинание.</p>
    <p>При сотворении заклинания, вы выбираете зрение или слух. Вы можете использовать выбранное чувство через сенсор, как если бы вы находились в его пространстве. Бонусным действием вы можете переключаться между зрением и слухом.</p>
    <p>Существо, способное увидеть сенсор (например, имеющее преимущества Видения невидимого или Истинного зрения), видит светящийся шар размером с ваш кулак.</p>`,
    source: {
      book: 'PHB\'24',
      page: 250
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Прорицатель' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Покровитель Великий древний' },
      { type: 'background', name: 'Функционер Азориусов' }
    ]
  },
  {
    id: 'conjure-animals',
    name: 'Призыв животных',
    nameEn: 'Conjure Animals',
    level: '3',
    school: 'вызов',
    castingTime: '1 действие',
    range: '60 футов',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Концентрация, вплоть до 10 минут',
    description: `<p>Вы призываете духов природы, появляющихся в виде Большой стаи неосязаемых призрачных животных в видимом вами в пределах дистанции незанятом пространстве. Стая присутствует в течение длительности заклинания, вы выбираете животную форму духов: например, волки, змеи или птицы.</p>
    <p>Пока вы находитесь в пределах 5 футов от стаи, вы совершаете с Преимуществом спасброски Силы, когда в свой ход вы перемещаетесь, можете также переместить стаю на расстояние до 30 футов в видимое вами незанятое пространство.</p>
    <p>Всякий раз, когда стая перемещается в пределах 10 футов от видимого вами существа, и всякий раз, когда видимое вами существо входит в пространство в пределах 10 футов от стаи или заканчивает там свой ход, вы можете заставить это существо сделать спасбросок Ловкости. При провале спасброска существо получает 3к10 Рубящего урона. Существо совершает этот спасбросок только один раз за ход.</p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong>Урон увеличивается на 1к10 за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'PHB\'24',
      page: 254
    },
    sources: [
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Следопыт' },
      { type: 'subclass', name: 'Круг Луны' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'background', name: 'Анарх Груулов' }
    ]
  },
  {
    id: 'сonjure-barrage',
    name: 'Призыв шквала снарядов',
    nameEn: 'Conjure Barrage',
    level: '3',
    school: 'вызов',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true,
      material: 'Рукопашное или Дальнобойное оружие стоимостью не менее 1 ММ'
    },
    duration: 'Мгновенная',
    description: `<p>Вы взмахиваете оружием, используемым для сотворения заклинания, и призываете оружие такого же вида (или боеприпасы, подходящие этому оружию), летящее вперёд и затем исчезающее. Выберите видимых вами существ в 60-футовом Конусе. Каждое выбранное существо должно совершить спасбросок Ловкости, получая 5к8 Силового урона при провале или половину этого урона при успехе.</p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong>Урон увеличивается на 1к8 за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'PHB\'24',
      page: 254
    },
    sources: [
      { type: 'class', name: 'Следопыт' },
      { type: 'background', name: 'Анарх Груулов' }
    ]
  },
  {
    id: 'counterspell',
    name: 'Контрзаклинание',
    nameEn: 'Counterspell',
    level: '3',
    school: 'ограждение',
    castingTime: 'Реакция когда вы видите в пределах 60 футов от вас существо, сотворяющее заклинание с Вербальным, Соматическим или Материальным компонентами',
    range: '60 футов',
    components: {
      somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>Вы пытаетесь прервать процесс сотворения существом заклинания. Существо должно совершить спасбросок Телосложения. При провале сотворяемое заклинание рассеивается и не оказывает никакого эффекта, а действие, Бонусное действие или Реакция, использованные для его сотворения, тратятся впустую, если оно сотворялось с ячейкой заклинаний, ячейка не тратится.</p>`,
    source: {
      book: 'PHB\'24',
      page: 258
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Оградитель' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Клятва Искупления' },
      { type: 'subclass', name: 'Клятва Смотрителей' },
      { type: 'background', name: 'Анарх Груулов' },
      { type: 'background', name: 'Функционер Азориусов' }
    ]
  },
  {
    id: 'crusaders-mantle',
    name: 'Мантия крестоносца',
    nameEn: 'Crusader’s Mantle',
    level: '3',
    school: 'воплощение',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true
    },
    duration: 'Концентрация, вплоть до 1 минуты',
    description: `<p>Вы излучаете магическую ауру Эманацией радиусом 30 футов. Находясь в этой ауре, вы и ваши союзники наносите 1к4 дополнительного урона Излучением при попадании оружием или Безоружным ударом.</p>`,
    source: {
      book: 'PHB\'24',
      page: 259
    },
    sources: [
      { type: 'class', name: 'Паладин' },
      { type: 'subclass', name: 'Домен Войны' }
    ]
  },
  {
    id: 'daylight',
    name: 'Дневной свет',
    nameEn: 'Daylight',
    level: '3',
    school: 'воплощение',
    castingTime: '1 действие',
    range: '60 футов',
    components: {
      verbal: true,
      somatic: true
    },
    duration: '1 час',
    description: `<p>Пока заклинание действует, из точки, выбранной вами в пределах дистанции, исходит солнечный свет, заполняя Сферу радиусом 60 футов. Область этой Сферы — Яркий свет, и от неё исходит Тусклый свет ещё на 60 футов.</p>
    <p>Вы также можете сотворить заклинание не на точку, а на объект, если его никто не носит и не несёт. В таком случае солнечный свет заполняет 60-футовую Эманацию с центром на этом объекте. Что-нибудь непрозрачное, например, чаша или шлем, может перекрывать распространение этого света.</p>
    <p>Если область действия этого заклинания пересекается с областью Темноты, созданной заклинанием 3-го уровня или ниже, то заклинание, создавшее Темноту, рассеивается.</p>`,
    source: {
      book: 'PHB\'24',
      page: 260
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Паладин' },
      { type: 'class', name: 'Следопыт' },
      { type: 'class', name: 'Чародей' },
      { type: 'subclass', name: 'Покровитель Небожитель' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Домен света' },
      { type: 'background', name: 'Студент Сильверквилла' }
    ]
  },
  {
    id: 'enemies-abound',
    name: 'Изобилие врагов',
    nameEn: 'Enemies Abound',
    level: '3',
    school: 'очарование',
    castingTime: '1 действие',
    range: '120 футов',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Концентрация, вплоть до 1 минуты',
    description: `<p>Вы достигаете сознания одного существа, которое вы можете видеть, и заставляете его совершить спасбросок Интеллекта. Существо автоматически преуспевает, если оно имеет иммунитет к испугу. При провале цель теряет способность отличать друзей от врагов, относясь ко всем существам, которых она может видеть, как к врагам, пока заклинание активно. Каждый раз, когда цель получает урон, она может повторить спасбросок, окончив эффект на себе при успехе.</p>
    <p>Каждый раз, когда существо под действием заклинания выбирает другое существо в качестве цели, оно должно выбирать цель случайным образом среди существ, которых она может видеть в пределах досягаемости атаки, дистанции заклинания или других умений, которые она использует. Если враг провоцирует атаку от существа под действием заклинания, существо должно совершить эту атаку, если это возможно.</p>`,
    source: {
      book: 'XGE',
      page: 155
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' }
    ]
  },
  {
    id: 'erupting-earth',
    name: 'Извержение земли',
    nameEn: 'Erupting Earth',
    level: '3',
    school: 'преобразование',
    castingTime: '1 действие',
    range: '120 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'кусочек обсидиана'
    },
    duration: 'Мгновенная',
    description: `<p>Выберите точку на поверхности земли, видимую в пределах дистанции. В этой точке из поверхности вырывается фонтан земли и камня. Все существа в кубе с длиной ребра 20 футов с центром на этой точке должны совершить спасбросок Ловкости. При провале существо получает 3к12 дробящего урона, а при успехе — половину этого урона. Кроме того, земля в области действия заклинания становится труднопроходимой местностью, пока её не расчистят. Расчистка квадрата с длиной стороны 5 футов вручную займёт не менее 1 минуты.</p>
    <p><strong>Накладывание более высокой ячейкой.</strong>Если вы накладываете это заклинание, используя ячейку 4-го уровня или выше, то урон увеличивается на 1к12 за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'XGE',
      page: 155
    },
    sources: [
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' }

    ]
  },
  {
    id: 'fear',
    name: 'Ужас',
    nameEn: 'Fear',
    level: '3',
    school: 'иллюзия',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true,
      material: 'белое перо'
    },
    duration: 'Концентрация, вплоть до 1 минуты',
    description: `<p>Каждое существо в 30-футовом Конусе должно преуспеть в спасброске Мудрости, иначе бросит всё, что держит в руках, и получит состояние Испуганный на время действия заклинания.</p>
    <p>Существо с этим состоянием должно каждый свой ход совершать действие Рывок и перемещаться прочь от вас по самому безопасному маршруту, пока у неё есть, куда перемещаться. Если существо оканчивает ход в месте, откуда у него нет линии обзора до вас, оно может совершить спасбросок Мудрости. При успехе заклинание на этом существе заканчивается.</p>`,
    source: {
      book: 'PHB\'24',
      page: 271
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Драконья кровь' },
      { type: 'subclass', name: 'Сумрачный охотник' },
      { type: 'subclass', name: 'Клятва Завоевания' },
      { type: 'background', name: 'Культист Ракдосов' }
    ]
  },
  {
    id: 'feign-death',
    name: 'Притворная смерть',
    nameEn: 'Feign Death',
    level: '3',
    school: 'некромантия',
    castingTime: '1 действие или ритуал',
    range: 'Касание',
    components: {
      verbal: true,
      somatic: true,
      material: 'щепотка кладбищенской земли'
    },
    duration: '1 час',
    description: `<p>Вы касаетесь согласного существа и погружаете его в каталептическое состояние, неотличимое от смерти.</p>
    <p>СПока заклинание действует, цель выглядит мёртвой для любого обследования и заклинаний, определяющих состояние цели. Цель имеет состояния Ослеплённый и Недееспособный, а её Скорость равна 0.</p>
    <p>Кроме того, цель обладает Сопротивлением всем типам урона, кроме Психического, и Иммунитетом к состоянию Отравленный.</p>`,
    source: {
      book: 'PHB\'24',
      page: 271
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Покровитель Нежить' }
    ]
  },
  {
    id: 'fireball',
    name: 'Огненный шар',
    nameEn: 'Fireball',
    level: '3',
    school: 'воплощение',
    castingTime: '1 действие',
    range: '150 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'комок из гуано летучей мыши и серы'
    },
    duration: 'Мгновенная',
    description: `<p>Яркая вспышка летит от вас в точку в пределах дистанции по вашему выбору, взрываясь там с гулким рёвом 20-футовой Сферой. Каждое существо, находящееся в этой области, должно совершить спасбросок Ловкости, получая 8к6 урона Огнём при провале или половину этого урона при успехе.</p>
    <p>Находящиеся в области Сферы воспламеняющиеся объекты, которые никто не несёт и не носит, начинают гореть.</p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong>Урон увеличивается на 1к6 за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'PHB\'24',
      page: 274
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Круг Земли' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Домен Света' },
      { type: 'subclass', name: 'Покровитель Исчадие' },
      { type: 'subclass', name: 'Покровитель Гений (ифрит)' }
    ]
  },
  {
    id: 'gaseous-form',
    name: 'Газообразная форма',
    nameEn: 'Gaseous Form',
    level: '3',
    school: 'преобразование',
    castingTime: '1 действие',
    range: 'Касание',
    components: {
      verbal: true,
      somatic: true,
      material: 'кусок газовой ткани'
    },
    duration: 'Концентрация, вплоть до 1 часа',
    description: `<p>Cогласное существо, которого вы касаетесь, вместе со всем, что оно несёт и носит, перевоплощается в туманное облако на время действия заклинания. Заклинание оканчивается, если Хиты цели опускаются до 0 или если цель действием Магия окончит его на себе. </p>
    <p>Единственным способом перемещения существа в этой форме становится Скорость полёта 10 футов (может парить). Цель может входить в пространство других существ и оставаться там. Цель получает Сопротивление Дробящему, Колющему и Рубящему урону и Иммунитет состоянию Опрокинутый. Цель совершает с Преимуществом спасброски Силы, Ловкости и Телосложения. Цель может проходить через небольшие отверстия и узкие щели, но жидкости для неё считаются твёрдыми поверхностями.</p>
    <p>Цель не может говорить и манипулировать объектами, и все объекты, которые она несла или носила, нельзя уронить, использовать и вообще как-либо с ними взаимодействовать. Цель не может атаковать и сотворять заклинания.</p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong>Вы можете нацелить заклинание на одно дополнительное существо за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'PHB\'24',
      page: 277
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Круг Спор' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Хранитель роя' },
      { type: 'background', name: 'Оперативник Димиров' },
      { type: 'background', name: 'Учёный Симиков' }
    ]
  },
  {
    id: 'detect-evil-and-good',
    name: 'Обнаружение добра и зла',
    nameEn: 'Detect Evil and Good',
    level: '1',
    school: 'прорицание',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Концентрация, до 10 минут',
    description: `<p>На время действия заклинания вы ощущаете местоположение любой аберрации, небожителя, элементаля, феи, исчадия или нежити в радиусе 30 футов от себя. Вы также ощущаете, действует ли в этом месте заклинание Святилище, и если да, то где именно.</p>
  <p>Заклинание блокируется 1 футом камня, земли или дерева; 1 дюймом металла или тонким листом свинца.</p>`,
    source: {
      book: 'PHB\'24',
      page: 261
    },
    sources: [
      { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
      { type: 'class', name: '<a href="/classes/paladin">Паладин</a>' },
      { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
      { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
      { type: 'subclass', name: 'Покровитель Гений' },
      { type: 'feat', name: 'Затронутый феями' },
      { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' },
    ]
  },
  {
    id: 'detect-magic',
    name: 'Обнаружение магии',
    nameEn: 'Detect Magic',
    level: '1',
    school: 'прорицание',
    castingTime: '1 действие или ритуал',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Концентрация, до 10 минут',
    description: `<p>На протяжении действия заклинания вы чувствуете присутствие магических эффектов в пределах 30 футов от вас. Если вы ощущаете такие эффекты, то вы можете выполнить действие магия, чтобы увидеть слабое свечение вокруг любого видимого существа или предмета в этой области, на которые наложена магия, и если эффект был создан заклинанием, то вы узнаёте школу магии этого заклинания.</p>
<p>Заклинание блокируется 1 футом камня, земли или дерева; 1 дюймом металла или тонким листом свинца.</p>`,
    source: {
      book: 'PHB\'24',
      page: 262
    },
    sources: [
      { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
      { type: 'class', name: '<a href="/classes/paladin">Паладин</a>' },
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Следопыт' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
      { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
      { type: 'subclass', name: 'Домен Магии' },
      { type: 'subclass', name: 'Мистический плут' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Прорицатель' },
      { type: 'subclass', name: 'Домен Знаний' },
      { type: 'subclass', name: 'Клятва Смотрителей' },
      { type: 'species', name: 'Эльф Высший' },
      { type: 'species', name: 'Фирболг' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Высшая магия дроу' },
      { type: 'feat', name: 'Затронутый феями' },
      { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
      { type: 'feat', name: 'Ритуальный заклинатель' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'detect-poison-and-disease',
    name: 'Обнаружение болезней и яда',
    nameEn: 'Detect Poison and Disease',
    level: '1',
    school: 'прорицание',
    castingTime: '1 действие или ритуал',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Концентрация, до 10 минут',
    description: `<p>На время длительности заклинания вы ощущаете местонахождение ядов, ядовитых существ и магических заражений в пределах 30 футов от вас. Вы определяете вид яда, существа или заражения в каждом случае. Заклинание блокируется 1 футом камня, земли или дерева; 1 дюймом металла или тонким листом свинца.</p>`,
    source: {
      book: 'PHB\'24',
      page: 262
    },
    sources: [
      { type: 'class', name: '<a href="/classes/cleric">Жрец</a>' },
      { type: 'class', name: '<a href="/classes/paladin">Паладин</a>' },
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Следопыт' },
      { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
      { type: 'subclass', name: '<a href="/classes/sorcerer?subclass=divine-soul">Божественная душа</a>' },
      { type: 'background', name: 'Учёный Симиков' },
      { type: 'feat', name: 'Затронутый феями' },
      { type: 'feat', name: '<a href="/feats/divinely-favored/">Любимец богов</a>' },
      { type: 'feat', name: 'Ритуальный заклинатель' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'disguise-self',
    name: 'Маскировка',
    nameEn: 'Disguise Self',
    level: '1',
    school: 'иллюзия',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true
    },
    duration: '1 час',
    description: `<p>Вы изменяете свой внешний вид, включая одежду, доспехи, оружие и другие предметы, находящиеся при вас, до окончания длительности заклинания. Вы можете казаться на 1 фут ниже или выше, а также выглядеть тяжелее или легче. Вы должны принять форму, которая имеет ту же основную структуру конечностей, что и у вас. В остальном, степень иллюзии зависит от вас.</p>
<p>Изменения, произведённые этим заклинанием, не выдерживают проверку физическим исследованием. Например, если вы используете это заклинание, чтобы добавить шляпу к своему наряду, то предметы будут проходить сквозь шляпу, и любой, кто её коснется, не почувствует ничего.</p>
<p>Чтобы разоблачить вашу маскировку, существо должно совершить действие поиск для изучения вашего внешнего вида и успешно совершить проверку Интеллект (Анализ) против Сл. вашего заклинания.</p>`,
    
    source: {
      book: 'PHB\'24',
      page: 262
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: '<a href="/classes/bard?subclass=lore">Коллегия Знания</a>' },
      { type: 'subclass', name: 'Мистический плут' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Сумрачный охотоник' },
      { type: 'subclass', name: 'Иллюзионист' },
      { type: 'subclass', name: 'Домен Обмана' },
      { type: 'species', name: 'Губинный гном' },
      { type: 'species', name: 'Фирболг' },
      { type: 'species', name: 'Ведьмовская кровь' },
      { type: 'species', name: 'Тифлинг Диспатера' },
      { type: 'species', name: 'Тифлинг Гласии' },
      { type: 'background', name: 'Оперативник Димиров' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: 'Затронутый тенью' },
      { type: 'feat', name: '<a href="/feats/vampire-touched/">Затронутый вампиром</a>' },
      { type: 'feat', name: 'Магия свирфнеблинов' },
      { type: 'feat', name: 'Ваятель рун' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' },
      { type: 'other', name: 'Маска многих лиц' }
    ]
  },
  {
    id: 'dissonant-whispers',
    name: 'Диссонирующий шёпот',
    nameEn: 'Dissonant Whispers',
    level: '1',
    school: 'очарование',
    castingTime: '1 действие',
    range: '60 футов',
    components: {
      verbal: true
    },
    duration: 'Мгновенная',
    description: `<p>1 существо по вашему выбору в пределах дистанции слышит нестройную мелодию в своём сознании. Цель совершает спасбросок Мудрости. При провале она получает урон психической энергией 3к6 и должна немедленно использовать свою реакцию, если она доступна, чтобы переместиться прочь от вас настолько далеко, насколько она может, используя самый безопасный путь. При успехе цель только получает половину урона.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Урон увеличивается на 1к6 за каждый уровень ячейки выше 1.</p>`,
    
    source: {
      book: 'PHB\'24',
      page: 264
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'subclass', name: 'Аберрантный разум' },
      { type: 'subclass', name: 'Покровитель Великий Древний' },
      { type: 'background', name: 'Кильтист Ракдосов' },
      { type: 'background', name: 'Студент Сильверквилла' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: 'Затронутый феями' },
      { type: 'feat', name: '<a href="/feats/vampire-touched/">Затронутый вампиром</a>' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
    ]
  },
  {
    id: 'divine-favor',
    name: 'Божественное благоволение',
    nameEn: 'Divine Favor',
    level: '1',
    school: 'преобразование',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true
    },
    duration: '1 час',
    description: `<p>До окончания действия заклинания ваши атаки оружием наносят дополнительные 1к4 урона излучение при попадании.</p>`,
    
    source: {
      book: 'PHB\'24',
      page: 265
    },
    sources: [
      { type: 'class', name: 'Паладин' },
      { type: 'subclass', name: 'Домен Войны' }
    ]
  },
  {
    id: 'divine-smite',
    name: 'Божественная кара',
    nameEn: 'Divine Smite',
    level: '1',
    school: 'воплощение',
    castingTime: 'Бонусное действие, которое вы совершаете сразу после попадания по существу рукопашным оружием или безоружным ударом.',
    range: 'На себя',
    components: {
      verbal: true
    },
    duration: 'Мгновенная',
    description: `<p>Цель получает дополнительно от этой атаки 2к8 урона излучением. Урон увеличивается на 1к8, если целявляется исчадием или нежитью.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Урон увеличивается на 1к8 за каждый уровень ячейки заклинания выше 1.</p>`,
    
    source: {
      book: 'PHB\'24',
      page: 265
    },
    sources: [
      { type: 'class', name: '<a href="/classes/paladin">Паладин</a>' }
    ]
  },
  {
    id: 'ensnaring-strike',
    name: 'Опутывающий удар',
    nameEn: 'Ensnaring Strike',
    level: '1',
    school: 'вызов',
    castingTime: 'Бонусное действие, которое вы совершаете сразу после попадания по существу оружием',
    range: 'На себя',
    components: {
      verbal: true
    },
    duration: 'Концентрация, до 1 минуты',
    description: `<p>Когда вы попадаете по цели, то на ней появляются цепкие лозы и она совершает спасбросок Силы. Существо размера большой или больше получает преимущество на этот спасбросок. При провале на цель накладывается состояние опутанный до окончания действия заклинания. При успешном спасброске лозы увядают, и заклинание заканчивается.</p>
<p>Пока цель в состоянии опутанный, она получает 1к6 колющего урона в начале каждого своего хода. Цель или существо, находящееся в пределах досягаемости, могут совершить действие, чтобы выполнить проверку Силы (Атлетика) против Сл. вашего заклинания. При успехе заклинание заканчивается.</p>
<p>Накладывание более высокой ячейкой. Урон увеличивается на 1к6 за каждый уровень ячейки выше 1.</p>`,
    source: {
      book: 'PHB\'24',
      page: 268
    },
    sources: [
      { type: 'class', name: 'Следопыт' },
      { type: 'subclass', name: 'Клятва Древних' },
      { type: 'background', name: 'Функционер Азориусов' }
    ]
  },
  {
    id: 'entangle',
    name: 'Опутывание',
    nameEn: 'Entangle',
    level: '1',
    school: 'вызов',
    castingTime: '1 действие',
    range: '90 футов',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Концентрация, до 1 минуты',
    description: `<p>Из земли в пределах дистанции на площади квадрата с длиной стороны в 20 футов вырастают хваткие растения. На время действия заклинания эти растения превращают землю в указанной области в труднопроходимую местность. Они исчезают, когда действие заклинания заканчивается.</p>
    <p>Каждое существо (кроме вас) в указанной области при наложении заклинания должно успешно совершить спасбросок Силы, иначе оно получает состояние опутанный до окончания действия заклинания. Опутанное существо может совершить действие, чтобы выполнить проверку Силы (Атлетика) против сложности спасброска вашего заклинания. В случае успеха оно освобождается от хватки растений и больше не находится под состоянием опутанный.</p>`,
    source: {
      book: 'PHB\'24',
      page: 268
    },
    sources: [
      { type: 'class', name: 'Следопыт' },
      { type: 'class', name: 'Друид' },
      { type: 'subclass', name: 'Коллягия Знания' },
      { type: 'background', name: 'Агент Голгари' },
      { type: 'background', name: 'Студент Квандрикса' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Ваятель рун' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
    ]
  },
  {
    id: 'expeditious-retreat',
    name: 'Поспешное отступление',
    nameEn: 'Expeditious Retreat',
    level: '1',
    school: 'преобразование',
    castingTime: 'Бонусное действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Концентрация, до 10 минут',
    description: `<p>Вы совершаете действие рывок и до окончания действия заклинания вы можете совершить это действие снова бонусным действием.</p>`,
    source: {
      book: 'PHB\'24',
      page: 268
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'class', name: 'Колдун' },
      { type: 'subclass', name: 'Коллягия Знания' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Преобразователь' },
      { type: 'background', name: 'Учёный Симиков' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
    ]
  },
  {
    id: 'faerie-fire',
    name: 'Огонь фей',
    nameEn: 'Faerie Fire',
    level: '1',
    school: 'воплощение',
    castingTime: 'Бонусное действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Концентрация, до 10 минут',
    description: `<p>Объекты в пределах 20-футового куба в пределах дистанции выделяются синим, зелёным или фиолетовым светом (на ваш выбор). Каждое существо в кубе также выделяется, если не проходит спасбросок Ловкости. В течение длительности объекты и поражённые существа излучают тусклый свет в радиусе 10 футов и не могут воспользоваться состоянием невидимый. Броски атаки по затронутым существам или объектам совершаются с преимуществом, если атакующий может их видеть.</p>`,
    source: {
      book: 'PHB\'24',
      page: 268
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'class', name: 'Колдун' },
      { type: 'subclass', name: 'Коллягия Знания' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Воплотитель' },
      { type: 'background', name: 'Учёный Симиков' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
    ]
  },
  {
    id: 'false-life',
    name: 'Псевдожизнь',
    nameEn: 'False Life',
    level: '1',
    school: 'некромантия',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true,
      material: 'капля спирта'
    },
    duration: 'Мгновенная',
    description: `<p>Вы получаете 2к4 + 4 временных хита.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Вы получаете 5 дополнительных временных хитов за каждый уровень ячейки выше 1.</p>`,
    source: {
      book: 'PHB\'24',
      page: 271
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Коллягия Знания' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Домен Смерти' },
      { type: 'subclass', name: 'Домен Упокоения' },
      { type: 'subclass', name: 'Покровитель Бессмертный' },
      { type: 'subclass', name: 'Покровитель Нежить' },
      { type: 'subclass', name: 'Некромант' },
      { type: 'background', name: 'Учёный Симиков' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: 'Затронутый тенью' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' },
      { type: 'other', name: 'Мощь исчадия' },
    ]
  },
  {
    id: 'feather-fall',
    name: 'Падение пёрышком',
    nameEn: 'Feather Fall',
    level: '1',
    school: 'преобразование',
    castingTime: '1 реакция, совершаемая вами, когда вы или существо в пределах 60 футов от вас начинаете падать',
    range: '60 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'небольшое перо или кусочек пуха'
    },
    duration: '1 минута',
    description: `<p>Выберите до 5 существ, находящихся в падении и в пределах досягаемости. Скорость падения выбранного существа замедляется до 60 футов в раунд, пока заклинание не закончится. Если существо приземлится до окончания действия заклинания, то оно не получает урона от падения, и заклинание заканчивается для этого существа.</p>`,
    source: {
      book: 'PHB\'24',
      page: 271
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Коллягия Знания' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Преобразователь' },
      { type: 'species', name: 'Дженази Воздуха' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
    ]
  },
  {
    id: 'find-familiar',
    name: 'Поиск фамильяра',
    nameEn: 'Find Familiar',
    level: '1',
    school: 'вызов',
    castingTime: '1 час или ритуал',
    range: '10 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'горящий ладан стоимостью 10+ зм, расходуемый заклинанием'
    },
    duration: 'Мгновенная',
    description: `<p>Вы получаете в услужение фамильяра — духа, который принимает форму животного по вашему выбору: летучая мышь, кошка, лягушка, ястреб, ящерица, осьминог, сова, крыса, ворон, паук, куница или другой зверь, который имеет показатель опасности 0. Появляясь в незанятом пространстве в пределах дистанции, фамильяр имеет статблок выбранной формы, однако является небожителем, феей или исчадием (на ваш выбор), а не зверем. Ваш фамильяр действует независимо от вас, но подчиняется вашим приказам.</p>
<p><strong>Телепатическая связь.</strong> Пока ваш фамильяр находится в пределах 100 футов от вас, вы можете общаться с ним телепатически. Кроме того, бонусным действием вы можете видеть глазами фамильяра и слышать то, что он слышит, до начала вашего следующего хода, получая эффекты любых его особых чувств. Наконец, когда вы накладываете заклинание с дистанцией касание, то ваш фамильяр может передавать касание. Ваш фамильяр должен находиться в пределах 100 футов от вас и он должен использовать свою реакцию, чтобы передать касание при наложении вами заклинания.</p>
<p><strong>Бой.</strong> Фамильяр является союзником вам и вашим союзникам. Он бросает свою инициативу и действует в свой собственный ход. Фамильяр не может атаковать, но может выполнять другие действия, как обычно. Исчезновение фамильяра. Когда хиты фамильяра опускаются до 0 хитов, он исчезает. Он снова появляется после того, как вы снова наложите это заклинание. Действием магия вы можете временно отправить фамильяра в карманное измерение. В качестве альтернативы, вы можете навсегда отправить его туда. Действием магия, пока он временно отправлен, вы можете вызвать его появление на незанятом пространстве в пределах 30 футов от вас. Каждый раз, когда хиты фамильяра опускаются до 0 хитов или фамильяр исчезает в карманное измерение, он оставляет в своём пространстве всё, что носил или нёс.</p>
<p><strong>Только один фамильяр.</strong> Вы не можете иметь более 1 фамильяра одновременно. Если вы накладываете это заклинание, имея фамильяра, то вы вместо этого заставляете его принять новую допустимую форму.</p>`,
    source: {
      book: 'PHB\'24',
      page: 271
    },
    sources: [
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Коллягия Знания' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Призыватель' },
      { type: 'feat', name: 'Риутальный заклинатель' },
      { type: 'feat', name: 'Талисман Стриксхейвена' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' },
      { type: 'other', name: 'Договор гримуара' },
      { type: 'other', name: 'Договор цепи' }
    ]
  },
  {
    id: 'fog-cloud',
    name: 'Туманное облако',
    nameEn: 'Fog Cloud',
    level: '1',
    school: 'вызов',
    castingTime: '1 действие',
    range: '120 футов',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Концентрация, до 1 часа',
    description: `<p>Вы создаёте сферу тумана с 20-футовым радиусом с центром в точке в пределах дистанции. Сфера является сильно заслонённой местностью. Она существует в течение длительности заклинания или до тех пор, пока сильный ветер (например, созданный заклинанием Порыв ветра) не развеет её.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Радиус тумана увеличивается на 20 футов за каждый уровень ячейки выше 1.</p>`,
    source: {
      book: 'PHB\'24',
      page: 276
    },
    sources: [
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Следопыт' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Коллягия Знания' },
      { type: 'subclass', name: 'Круг Моря' },
      { type: 'subclass', name: 'Домен Бури' },
      { type: 'subclass', name: 'Покровитель Гений (Марид)' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Призыватель' },
      { type: 'species', name: 'Тритон' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Ползучий туман' },
      { type: 'feat', name: 'Ваятель рун' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
    ]
  },
  {
    id: 'goodberry',
    name: 'Чудо-ягоды',
    nameEn: 'Goodberry',
    level: '1',
    school: 'вызов',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true,
      material: 'веточка омелы'
    },
    duration: '24 часа',
    description: `<p>10 ягод появляются у вас в руке и наполняются магией на время действия заклинания. Существо может бонусным действием съесть одну ягоду. Съеденная ягода восстанавливает 1 хит и обеспечивает существо достаточным питанием на 1 день. Несъеденные ягоды исчезают, когда длительность заклинания заканчивается.</p>`,
    source: {
      book: 'PHB\'24',
      page: 280
    },
    sources: [
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Следопыт' },
      { type: 'subclass', name: 'Коллягия Знания' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Ваятель рун' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
    ]
  },
  {
    id: 'grease',
    name: 'Скольжение',
    nameEn: 'Grease',
    level: '1',
    school: 'вызов',
    castingTime: '1 действие',
    range: '120 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'кусочек свиного сала или масл'
    },
    duration: '1 минута',
    description: `<p>Несгораемый жир покрывает землю в 10-футовом квадрате с центром в точке в пределах дистанции, и превращает её в труднопроходимую местность на время действия.</p>
<p>Когда жир появляется, все существа стоящие в этой области, должны преуспеть в спасброске Ловкости или получить состояние лежащий ничком. Существо, входящее в область или заканчивающее свой ход в ней, также должно преуспеть в этом спасброске или упасть ничком.</p>`,
    source: {
      book: 'PHB\'24',
      page: 280
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Коллягия Знания' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Призыватель' },
      { type: 'species', name: 'Тритон' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
    ]
  },
  {
    id: 'guiding-bolt',
    name: 'Направляющий снаряд',
    nameEn: 'Guiding Bolt',
    level: '1',
    school: 'воплощение',
    castingTime: '1 действие',
    range: '120 футов',
    components: {
      verbal: true,
      somatic: true
    },
    duration: '1 минута',
    description: `<p>Вы метаете снаряд из света в существо в пределах дистанции. Совершите дальнобойную атаку заклинанием против цели. При попадании цель получает 4к6 урона излучением и следующий бросок атаки по ней до конца вашего следующего хода совершается с преимуществом.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Урон увеличивается на 1к6 за каждый уровень ячейки выше 1.</p>`,
    source: {
      book: 'PHB\'24',
      page: 280
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'subclass', name: 'Коллягия Знания' },
      { type: 'subclass', name: 'Божественая душа' },
      { type: 'subclass', name: 'Покровитель Небожитель' },
      { type: 'subclass', name: 'Круг Звёзд' },
      { type: 'subclass', name: 'Клятва Славы' },
      { type: 'subclass', name: 'Домен Войны' },
      { type: 'background', name: 'Легионер Боросов' },
      { type: 'background', name: 'Студент Квандрикса' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
    ]
  },
  {
    id: 'hail-of-thorns',
    name: 'Град шипов',
    nameEn: 'Hail of Thorns',
    level: '1',
    school: 'вызов',
    castingTime: 'Бонусное действие, которое вы совершаете сразу после попадания по существу дальнобойным оружием',
    range: 'На себя',
    components: {
      verbal: true
    },
    duration: 'Мгновенно',
    description: `<p>Когда вы попадаете по существу, то это заклинание создаёт дождь из шипов, который выпускается из вашего дальнобойного оружия или боеприпасов. Цель атаки и каждое существо в пределах 5 футов от неё совершают спасбросок Ловкости, получая 1к10 колющего урона при провале или половину этого урона при успехе.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Урон увеличивается на 1к10 за каждый уровень ячейки выше 1.</p>`,
    source: {
      book: 'PHB\'24',
      page: 283
    },
    sources: [
      { type: 'class', name: 'Следопыт' }
    ]
  },
  {
    id: 'healing-word',
    name: 'Лечащее слово',
    nameEn: 'Healing Word',
    level: '1',
    school: 'ограждение',
    castingTime: 'Бонусное действие',
    range: '60 футов',
    components: {
      verbal: true
    },
    duration: 'Мгновенная',
    description: `<p>Существо на ваш выбор, которое вы видите в пределах дистанции, восстанавливает хиты в количестве 2к4 + ваш модификатор заклинательной характеристики.</p>
<p>Накладывание более высокой ячейкой. Лечение увеличивается на 2к4 за каждый уровень ячейки выше 1.</p>`,
    source: {
      book: 'PHB\'24',
      page: 284
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Друид' },
      { type: 'subclass', name: 'Коллягия Знания' },
      { type: 'subclass', name: 'Божественая душа' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: '<a href="/feats/strixhaven-initiate/">Поступивший в Стриксхейвен</a>' }
    ]
  },
  {
    id: 'hellish-rebuke',
    name: 'Адское возмездие',
    nameEn: 'Hellish Rebuke',
    level: '1',
    school: 'воплощение',
    castingTime: 'Реакция, которую вы используете в ответ на получение урона от существа, которое вы видите в пределах 60 футов от себя',
    range: '60 футов',
    components: {
      verbal: true
    },
    duration: 'Мгновенная',
    description: `<p>Существо, наносящее вам урон, на мгновение оказывается окружено зелёными огнями. Оно должно совершить спасбросок Ловкости, получая 2к10 урона огнём при провале или половину этого урона при успехе.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Урон увеличивается на 1к10 за каждый уровень ячейки заклинаний выше 1.</p>`,
    source: {
      book: 'PHB\'24',
      page: 284
    },
    sources: [
      { type: 'class', name: 'Колдун' },
      { type: 'subclass', name: 'Клятвопреступник' },
      { type: 'subclass', name: 'Божественая душа' },
      { type: 'species', name: 'Тифлинг Асмодея' },
      { type: 'background', name: 'Культист Ракдосов' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' }
    ]
  },
  {
    id: 'heroism',
    name: 'Героизм',
    nameEn: 'Heroism',
    level: '1',
    school: 'очарование',
    castingTime: '1 действие',
    range: 'Касание',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Концентрация, до 1 минуты',
    description: `<p>Существо по вашему выбору, которого вы касаетесь, наполняется смелостью. Пока заклинание действует, существо становится невосприимчивым к состоянию испуганный и получает временные хиты, равные вашему модификатору заклинательной характеристики, в начале каждого своего хода.</p>
<p><strong>Накладывание более высокой ячейкой.<strong> Вы можете выбрать одно дополнительное существо за каждый уровень ячейки заклинаний выше 1.</p>`,
    source: {
      book: 'PHB\'24',
      page: 285
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Паладин' },
      { type: 'subclass', name: 'Клятва Славы' },
      { type: 'subclass', name: 'Домен Порядка' },
      { type: 'subclass', name: 'Домен Мира' },
      { type: 'species', name: 'Тифлинг Асмодея' },
      { type: 'background', name: 'Легионер Боросов' },
      { type: 'feat', name: 'Затронутый феями' },
      { type: 'feat', name: '<a href="/feats/vampire-touched/">Затронутый вампиром</a>' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' }
    ]
  },
  {
    id: 'hex',
    name: 'Сглаз',
    nameEn: 'Hex',
    level: '1',
    school: 'очарование',
    castingTime: 'Бонусное действие',
    range: '90 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'окаменевший глаз тритона'
    },
    duration: 'Концентрация, до 1 часа',
    description: `<p>Вы накладываете проклятье на существо, которое видите в пределах дистанции. Пока заклинание не закончится, вы наносите цели дополнительно 1к6 урона некротической энергией каждый раз, когда попадаете по ней атакой. Также, выберите одну характеристику при накладывании заклинания. Цель будет совершать проверки выбранной характеристики с помехой.</p>
<p>Если количество Хитов цели падает до 0 до окончания заклинания, то вы можете бонусным действием в следующий ход проклясть другое существо.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Ваша Концентрация может продлиться дольше, если использовать ячейку 2 уровня (до 4 часов), 3-4 уровней (до 8 часов) или 5+ уровня (до 24 часов).</p>`,
    source: {
      book: 'PHB\'24',
      page: 285
    },
    sources: [
      { type: 'class', name: 'Колдун' },
      { type: 'subclass', name: 'Покровитель Великий Древний' },
      { type: 'species', name: 'Ведьмовская кровь' },
      { type: 'background', name: 'Легионер Боросов' },
      { type: 'feat', name: 'Затронутый феями' },
      { type: 'feat', name: '<a href="/feats/vampire-touched/">Затронутый вампиром</a>' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' }
    ]
  },
  {
    id: 'hunters-mark',
    name: 'Метка охотника',
    nameEn: 'Hunter’s Mark',
    level: '1',
    school: 'прорицание',
    castingTime: 'Бонусное действие',
    range: '90 футов',
    components: {
      verbal: true
    },
    duration: 'Концентрация, до 1 часа',
    description: `<p>Вы магически отмечаете 1 существо, которое видите в пределах дистанции, как свою добычу. До окончания действия заклинания вы наносите цели дополнительно 1к6 урона силовым полем каждый раз, когда попадаете по ней атакой. Вы также получаете преимущество на любую проверку Мудрости (Внимательность или Выживание), которую совершаете, чтобы найти её.</p>
<p>Если хиты цели падают до 0 хитов до окончания заклинания, то вы можете бонусным действием переместить метку на другое существо, которое видите в пределах дистанции.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Ваша концентрация может длиться дольше при использовании ячейки заклинаний 3-4 уровня (до 8 часов) или 5+ уровня (до 24 часов).</p>`,
    source: {
      book: 'PHB\'24',
      page: 287
    },
    sources: [
      { type: 'class', name: 'Следопыт' },
      { type: 'subclass', name: 'Клятва Мести' },
      { type: 'feat', name: 'Затронутый феями' }
    ]
  },
  {
    id: 'ice-knife',
    name: 'Ледяной кинжал',
    nameEn: 'Ice Knife',
    level: '1',
    school: 'вызов',
    castingTime: '1 действие',
    range: '60 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'капля воды или кусочек льд'
    },
    duration: 'Мгновенная',
    description: `<p>Вы создаёте осколок льда и бросаете его в одно существо в пределах дистанции. Совершите дальнобойную атаку заклинанием против цели. При попадании цель получает 1к10 колющего урона. После этого, вне зависимости от попадания или промаха, осколок взрывается. Цель и каждое существо в пределах 5 футов от неё должны совершить спасбросок Ловкости, иначе получат 2к6 урона холодом.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Урон холодом увеличивается на 1к6 за каждый уровень ячейки выше 1.</p>`,
    source: {
      book: 'PHB\'24',
      page: 287
    },
    sources: [
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Призыватель' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' }
    ]
  },
  {
    id: 'identify',
    name: 'Опознание',
    nameEn: 'Identify',
    level: '1',
    school: 'прорицание',
    castingTime: '1 минута или ритуал',
    range: 'Касание',
    components: {
      verbal: true,
      somatic: true,
      material: 'жемчужина стоимостью 100+ зм'
    },
    duration: 'Мгновенная',
    description: `<p>Вы касаетесь объекта на протяжении всего времени накладывания заклинания. Если объект является магическим предметом или иным магическим объектом, то вы узнаёте его свойства, как его использовать, требуется ли настройка и сколько у него зарядов, если таковые имеются. Вы узнаёте, есть ли на предмете наложенные заклинания и какие именно. Если предмет был создан при помощи заклинания, то вы узнаёте название этого заклинания.</p>
<p>Если вместо этого вы касаетесь существа на протяжении времени наложения заклинания, то вы узнаёте, какие наложенные заклинания, если таковые есть, действуют на него в данный момент.</p>`,
    source: {
      book: 'PHB\'24',
      page: 287
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Прорицатель' },
      { type: 'subclass', name: 'Домен Кузни' },
      { type: 'subclass', name: 'Домен Знаний' },
      { type: 'feat', name: 'Затронутый феями' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' }
    ]
  },
  {
    id: 'illusory-script',
    name: 'Иллюзорные письмена',
    nameEn: 'Illusory Script',
    level: '1',
    school: 'иллюзия',
    castingTime: '1 минута или ритуал',
    range: 'Касание',
    components: {
      verbal: true,
      somatic: true,
      material: 'чернила стоимостью 10+ зм, расходуемые заклинанием'
    },
    duration: '10 дней',
    description: `<p>Вы пишете на пергаменте, бумаге или другом подходящем материале и наделяете текст иллюзией, которая длится весь срок действия заклинания. Для вас и существ, которых вы назначаете при наложении заклинания, текст выглядит нормальным, как будто написан вашим почерком и передаёт задуманное вами сообщение. Для всех остальных текст выглядит так, как будто написан на неизвестном или магическом языке, и его невозможно понять. В качестве альтернативы иллюзия может изменить значение, почерк и язык текста, при этом язык должен быть вам известен. Если заклинание будет рассеяно, то исходный текст и иллюзия исчезнут. Существо, обладающее истинным зрением, может прочитать скрытое сообщение.</p>`,
    source: {
      book: 'PHB\'24',
      page: 288
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Иллюзионист' },
      { type: 'feat', name: 'Затронутый тенью' },
      { type: 'feat', name: '<a href="/feats/vampire-touched/">Затронутый вампиром</a>' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Ритуальный заклинатель' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'inflict-wounds',
    name: 'Нанесение ран',
    nameEn: 'Inflict Wounds',
    level: '1',
    school: 'некромантия',
    castingTime: '1 действие',
    range: 'Касание',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>Существо, к которому вы прикасаетесь, совершает спасбросок Телосложения. При провале оно получает 2к10 урона некротической энергией, а при успешном спасброске — половину этого урона.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Урон увеличивается на 1к10 за каждый уровень ячейки выше 1.</p>`,
    source: {
      book: 'PHB\'24',
      page: 288
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Клятвопреступник' },
      { type: 'background', name: 'Студент Визурблума' },
      { type: 'feat', name: 'Затронутый тенью' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Ваятель рун' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' }
    ]
  },
  {
    id: 'jump',
    name: 'Прыжок',
    nameEn: 'Jump',
    level: '1',
    school: 'преобразование',
    castingTime: 'Бонусное действие',
    range: 'Касание',
    components: {
      verbal: true,
      somatic: true,
      material: 'задняя лапка кузнечика'
    },
    duration: '1 минута',
    description: `<p>Вы касаетесь согласного существа. Один раз в каждый свой ход до окончания действия заклинания это существо может прыгнуть на расстояние до 30 футов, потратив 10 футов перемещения.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Вы можете выбрать одну дополнительную цель за каждый уровень ячейки заклинания выше 1.</p>`,
    source: {
      book: 'PHB\'24',
      page: 290
    },
    sources: [
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Следопыт' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'background', name: 'Учёный Симиков' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'other', name: 'Потусторонний прыжок' }
    ]
  },
  {
    id: 'longstrider',
    name: 'Скороход',
    nameEn: 'Longstrider',
    level: '1',
    school: 'преобразование',
    castingTime: '1 действие',
    range: 'Касание',
    components: {
      verbal: true,
      somatic: true,
      material: 'щепотка земли'
    },
    duration: '1 час',
    description: `<p>Вы касаетесь существа. Скорость цели увеличивается на 10 футов до окончания длительности заклинания.</p>
<p>Накладывание более высокой ячейкой. Вы можете выбрать одну дополнительную цель за каждый уровень ячейки заклинаний выше 1.</p>`,
    source: {
      book: 'PHB\'24',
      page: 293
    },
    sources: [
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Следопыт' },
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Преобразователь' },
      { type: 'species', name: 'Эльф Высший' },
      { type: 'feat', name: 'Ваятель рун' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: 'Магия лесных эльфов' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' }
    ]
  },
  {
    id: 'Mage Armor',
    name: 'Доспехи мага',
    nameEn: 'Mage Armor',
    level: '1',
    school: 'ограждение',
    castingTime: '1 действие',
    range: 'Касание',
    components: {
      verbal: true,
      somatic: true,
      material: 'кусок выделанной кожи'
    },
    duration: '8 часов',
    description: `<p>Вы касаетесь согласного существа, не носящего доспехи. Пока заклинание активно, базовый КД цели становится 13 + модификатор Ловкости цели. Заклинание оканчивается, если цель надевает доспехи.</p>`,
    source: {
      book: 'PHB\'24',
      page: 293
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Оградитель' },
      { type: 'species', name: 'Эльф Высший' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'other', name: 'Доспех теней' },
    ]
  },
  {
    id: 'magic-missile',
    name: 'Волшебная стрела',
    nameEn: 'Magic Missile',
    level: '1',
    school: 'воплощение',
    castingTime: '1 действие',
    range: '120 футов',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>Вы создаёте 3 светящихся дротика из магической силы. Каждый дротик поражает существо на ваш выбор, которое вы видите в пределах дистанции. Дротик наносит цели 1к4 + 1 урона силовым полем. Все дротики поражают одновременно и вы можете направить их в одно существо или в несколько.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Заклинание создаёт 1 дополнительный дротик за каждый уровень ячейки заклинаний выше 1.</p>`,
    source: {
      book: 'PHB\'24',
      page: 295
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Воплотитель' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' }
    ]
  },
  {
    id: 'protection-from-evil-and-good',
    name: 'Защита от зла и добра',
    nameEn: 'Protection from Evil and Good',
    level: '1',
    school: 'ограждение',
    castingTime: '1 действие',
    range: 'Касание',
    components: {
      verbal: true,
      somatic: true,
      material: 'фляга святой воды стоимостью 25+ зм, расходуемая заклинанием'
    },
    duration: 'Концентрация, до 10 минут',
    description: `<p>Вы касаетесь одного согласного существа и оно до окончания длительности заклинания защищено от существ с типом: аберрация, небожитель, элементаль, фея, исчадие или нежить.</p>
<p>Защита предоставляет несколько эффектов. Существа этих типов совершают атаки по цели с помехой. Цель также не может быть одержима и получать состояния очарованный или испуганный от таких существ. Если цель уже одержима, очарована или испугана таким существом, то она получает преимущество на любые новые спасброски против соответствующего эффекта.</p>`,
    source: {
      book: 'PHB\'24',
      page: 295
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Паладин' },
      { type: 'class', name: 'Кодун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Оградитель' },
      { type: 'subclass', name: 'Заводная душа' },
      { type: 'subclass', name: 'Коллягия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Странник горизонта' },
      { type: 'subclass', name: 'Убийца чудовищ' },
      { type: 'subclass', name: 'Клятва Преданности' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' }
    ]
  },
  {
    id: 'purify-food-and-drink',
    name: 'Очищение пищи и питья',
    nameEn: 'Purify Food and Drink',
    level: '1',
    school: 'преобразование',
    castingTime: '1 действие или ритуал',
    range: '10 футов',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>Вы очищаете немагическую пищу и питьё в сфере с радиусом 5 футов с центром в пределах дистанции от яда и гнили.</p>`,
    source: {
      book: 'PHB\'24',
      page: 310
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Паладин' },
      { type: 'subclass', name: 'Коллягия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: 'Ваятель рун' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'ray-of-sickness',
    name: 'Луч болезни',
    nameEn: 'Ray of Sickness',
    level: '1',
    school: 'некромантия',
    castingTime: '1 действие',
    range: '60 футов',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>Вы выпускаете зеленоватый луч в существо в пределах дистанции. Совершите дальнобойную атаку заклинанием против цели. При попадании цель получает 2к8 урона ядом и получает состояние отравленный до конца вашего следующего хода.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Урон увеличивается на 1к8 за каждый уровень ячейки выше 1.</p>`,
    source: {
      book: 'PHB\'24',
      page: 311
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Круг Земли (Тропическая земля)' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Домен Смерти' },
      { type: 'subclass', name: 'Лунное чародейство' },
      { type: 'subclass', name: 'Покровитель Бессмертный' },
      { type: 'species', name: 'Тифлинг Вельзевула' },
      { type: 'background', name: 'Агент Голгари' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'searing-smite',
    name: 'Палящая кара',
    nameEn: 'Searing Smite',
    level: '1',
    school: 'воплощение',
    castingTime: 'Бонусное действие, которое вы совершаете сразу после попадания по существу рукопашным оружием или безоружным ударом.',
    range: 'На себя',
    components: {
      verbal: true
    },
    duration: '1 минута',
    description: `<p>Когда вы попадаете по цели, то она получает от этой атаки дополнительные 1к6 урона огнём. В начале каждого своего хода до окончания действия заклинания цель получает 1к6 урона огнём и затем совершает спасбросок Телосложения.</p>
<p>При провале заклинание продолжается. При успехе действие заклинания заканчивается.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Каждый урон увеличивается на 1к6 за каждый уровень ячейки выше 1.</p>`,
    source: {
      book: 'PHB\'24',
      page: 314
    },
    sources: [
      { type: 'class', name: 'Паладин' },
      { type: 'subclass', name: 'Домен Кузни' },
      { type: 'species', name: 'Тифлинг Зариэль' }
    ]
  },
  {
    id: 'shield',
    name: 'Щит',
    nameEn: 'Shield',
    level: '1',
    school: 'ограждение',
    castingTime: 'Реакция, которую вы совершаете, когда по вам попадают броском атаки или вы становитесь целью заклинания Волшебная стрела',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true
    },
    duration: '1 раунд',
    description: `<p>Незаметный барьер из магической силы защищает вас. До начала вашего следующего хода у вас есть бонус +5 к КД, в том числе против атаки, которая спровоцировала эту реакцию, и вы не получаете урон от заклинания Волшебная стрела.</p>`,
    source: {
      book: 'PHB\'24',
      page: 316
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Лунное чародейство' },
      { type: 'subclass', name: 'Покровитель Ведьмовской клинок' },
      { type: 'subclass', name: 'Оградитель' },
      { type: 'species', name: 'Гитцераи' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' }
    ]
  },
  {
    id: 'shield-of-faith',
    name: 'Щит веры',
    nameEn: 'Shield of Faith',
    level: '1',
    school: 'ограждение',
    castingTime: 'Бонусное действие',
    range: '60 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'свиток с молитвой'
    },
    duration: 'Концентрация, до 10 минут',
    description: `<p>Мерцающее поле окружает существо на ваш выбор в пределах дистанции, предоставляя ему бонус +2 к КД на время длительности.</p>`,
    source: {
      book: 'PHB\'24',
      page: 316
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Паладин' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Клятва Преданности' },
      { type: 'subclass', name: 'Домен Войны' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' }
    ]
  },
  {
    id: 'silent-image',
    name: 'Безмолвный образ',
    nameEn: 'Silent Image',
    level: '1',
    school: 'иллюзия',
    castingTime: '1 действие',
    range: '60 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'кусочек флиса'
    },
    duration: 'Концентрация, до 10 минут',
    description: `<p>Вы создаёте изображение объекта, существа или другого видимого явления, размером не больше, чем 15-футовый куб. Изображение появляется в выбранной вами точке в пределах дистанции и существует на протяжении всей длительности заклинания. Оно является исключительно визуальным, без звука, запаха или других сенсорных эффектов.</p>
<p>Вы можете использовать действие магия, чтобы переместить изображение в любую другую точку в пределах дистанции. При перемещении изображения вы можете изменять его внешний вид, чтобы его движения казались естественными. Например, если вы создали изображение существа и перемещаете его, то вы можете изменить изображение, чтобы оно казалось идущим.</p>
<p>Физическое взаимодействие с изображением выявляет его как иллюзию, поскольку сквозь него можно проходить. Существо, которое использует действие поиск для изучения изображения, может определить, что это иллюзия, если успешно выполнит проверку Интеллекта (Анализ) против Сл. спасброска вашего заклинания. Если существо разоблачит иллюзию, то оно может видеть сквозь неё.</p>`,
    source: {
      book: 'PHB\'24',
      page: 317
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Иллюзионист' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Затронутый тенью' },
      { type: 'feat', name: '<a href="/feats/vampire-touched/">Затронутый вампиром</a>' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'other', name: 'Туманные видения' }
    ]
  },
  {
    id: 'sleep',
    name: 'Усыпление',
    nameEn: 'Sleep',
    level: '1',
    school: 'очарование',
    castingTime: '1 действие',
    range: '60 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'щепотка песка или лепестки розы'
    },
    duration: 'Концентрация, до 1 минуты',
    description: `<p>Каждое выбранное вами существо в радиусе 5 футов от точки в пределах дистанции должно преуспеть в спасброске Мудрости, иначе получит состояние недееспособный до конца своего следующего хода, после чего оно должно повторить спасбросок. Если цель не преуспевает во втором спасброске, то она становится бессознательной на время действия заклинания. Заклинание прекращается для цели, если она получает урон или если кто-то в пределах 5 футов от неё использует действие, чтобы вывести её из-под воздействия заклинания. Существа, которые не спят, например, эльфы, или имеющие иммунитет к состоянию истощённый, автоматически преуспевают в спасбросках против этого заклинания.</p>`,
    source: {
      book: 'PHB\'24',
      page: 317
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Покровитель Архифея' },
      { type: 'subclass', name: 'Круг Земли (Умеренная земля)' },
      { type: 'subclass', name: 'Очарователь' },
      { type: 'subclass', name: 'Клятва Искупления' },
      { type: 'subclass', name: 'Домен Сумерек' },
      { type: 'species', name: 'Эльф Бледный' },
      { type: 'background', name: 'Оперативник Димиров' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Затронутый феями' },
      { type: 'feat', name: '<a href="/feats/vampire-touched/">Затронутый вампиром</a>' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' }
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
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Следопыт' },
      { type: 'class', name: 'Колдун' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Домен Природы' },
      { type: 'subclass', name: 'Клятва Древних' },
      { type: 'subclass', name: 'Путь Дикиго Сердца' },
      { type: 'background', name: 'Анарх Груулов' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Затронутый феями' },
      { type: 'feat', name: 'Ритуальный заклинатель' },
      { type: 'feat', name: 'Ваятель рун' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'tashas-hideous-laughter',
    name: 'Жуткий смех Таши',
    nameEn: 'Tasha’s Hideous Laughter',
    level: '1',
    school: 'очарование',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true,
      material: 'пирог и перо'
    },
    duration: 'Концентрация, до 1 минуты',
    description: `<p>1 существо на ваш выбор, которое вы видите в пределах дистанции, должно совершить спасбросок Мудрости. В случае провала оно получает состояния лежащий ничком и недееспособный на всё время действия заклинания. В этот период оно безудержно смеётся, если способно смеяться, и не может избавиться от состояния лежащий ничком.</p>
<p>В конце каждого своего хода и каждый раз, когдаоно получает урон, цель совершает новый спасбросок Мудрости. Цель получает преимущество на этот спасбросок, если он вызван получением урона. В случае успешного спасброска заклинание заканчивается.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Вы можете выбрать 1 дополнительное существо за каждый уровень ячейки выше 1.</p>`,
    source: {
      book: 'PHB\'24',
      page: 331
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Волшебник' },
      { type: 'class', name: 'Колдун' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Домен Природы' },
      { type: 'subclass', name: 'Очарователь' },
      { type: 'subclass', name: 'Покровитель Великий Древний' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Затронутый феями' },
      { type: 'feat', name: '<a href="/feats/vampire-touched/">Затронутый вампиром</a>' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' }
    ]
  },
  {
    id: 'tensers-floating-disk',
    name: 'Тензеров парящий диск',
    nameEn: 'Tenser’s Floating Disk',
    level: '1',
    school: 'вызов',
    castingTime: '1 действие или ритуал',
    range: '30 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'капля ртути'
    },
    duration: '1 час',
    description: `<p>Это заклинание создаёт круглую горизонтальную плоскость силового поля диаметром 3 фута и толщиной в 1 дюйм, которая парит на высоте 3 футов над землёй в незанятом пространстве по вашему выбору, видимом в пределах дистанции. Диск остаётся на месте на протяжении длительности заклинания и может выдержать до 500 фунтов. Если на него помещается больший вес, то заклинание оканчивается, и всё, что находилось на диске, падает на землю.</p>
<p>Диск остаётся неподвижным, если вы находитесь на расстоянии до 20 футов от него. Если вы переместитесь более чем на 20 футов, то диск последует за вами, чтобы оставаться в пределах 20 футов. Он может перемещаться по неровной поверхности, подниматься или спускаться по ступеням, склонам и подобным препятствиям, но не может преодолевать изменения высоты более 10 футов. Например, диск не сможет пересечь яму глубиной 10 футов или покинуть такую яму, если был создан на её дне.</p>
<p>Если вы отдалитесь от диска на более чем 100 футов (обычно из-за того, что он не может обойти препятствие, чтобы следовать за вами), то заклинание оканчивается.</p>`,
    source: {
      book: 'PHB\'24',
      page: 332
    },
    sources: [
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Вызыватель' },
      { type: 'background', name: 'Анарх Груулов' },
      { type: 'feat', name: 'Ритуальный заклинатель' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'thunderous-smite',
    name: 'Громовая кара',
    nameEn: 'Thunderous Smite',
    level: '1',
    school: 'воплощение',
    castingTime: 'Бонусное действие, которое вы совершаете сразу после попадания по существу рукопашным оружием или безоружным ударом.',
    range: 'На себя',
    components: {
      verbal: true
    },
    duration: 'Мгновенная',
    description: `<p>Ваш удар сопровождается громом, слышимым в радиусе 300 футов от вас, и цель получает от этой атаки дополнительно 2к6 урона звуком. Кроме того, если цель — существо, оно должно преуспеть в спасброске Силы, иначе оно будет отброшено на 10 футов от вас и получает состояние лежащий ничком.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Урон увеличивается на 1к6 за каждый уровень ячейки выше 1.</p>`,
    source: {
      book: 'PHB\'24',
      page: 334
    },
    sources: [
      { type: 'class', name: 'Паладин' }
    ]
  },
  {
    id: 'thunderwave',
    name: 'Волна грома',
    nameEn: 'Thunderwave',
    level: '1',
    school: 'воплощение',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>Вы выпускаете волну громовой энергии. Каждое существо в кубе с ребром 15 футов, исходящем от вас, совершает спасбросок Телосложения. При провале существо получает 2к8 урона звуком и отбрасывается на 10 футов от вас. При успешном спасброске существо получает половину урона и не отбрасывается. Кроме того, не закреплённые объекты, находящиеся полностью в пределах куба, отбрасываются на 10 футов от вас, а громовой раскат слышен на расстоянии 300 футов.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Урон увеличивается на 1к8 за каждый уровень ячейки заклинания выше 1.</p>`,
    source: {
      book: 'PHB\'24',
      page: 334
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Воплотитель' },
      { type: 'subclass', name: 'Круг Моря' },
      { type: 'subclass', name: 'Домен Бури' },
      { type: 'subclass', name: 'Покровитель Бездонный' },
      { type: 'subclass', name: 'Покровитель Гений (Джин)' },
      { type: 'background', name: 'Анарх Груулов' },
      { type: 'background', name: 'Студент Призмари' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Ваятель рун' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'unseen-servant',
    name: 'Невидимый слуга',
    nameEn: 'Unseen Servant',
    level: '1',
    school: 'вызов',
    castingTime: '1 действие или ритуал',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true,
      material: 'кусочек верёвки и дерева'
    },
    duration: '1 час',
    description: `<p>Это заклинание создаёт невидимую, безмысленную и бесформенную силу среднего размера, которая выполняет простые задачи по вашему приказу, пока заклинание не завершится. Слуга появляется в свободном пространстве на земле в пределах дистанции. У него 10 КД, 1 хит и Сила 2, он не может атаковать. Если его хиты опускаются до 0, то заклинание завершается.</p>
<p>1 раз в каждый из ваших ходов бонусным действием вы можете мысленно приказать слуге переместиться на расстояние до 15 футов и взаимодействовать с объектом. Слуга может выполнять простые задачи, которые мог бы сделать человек, такие как приносить вещи, убирать, чинить, складывать одежду, разжигать огонь, подавать еду и наливать напитки. После того как вы отдали приказ, слуга выполняет задание по мере своих сил, а затем ждёт вашего следующего приказа.</p>
<p>Если вы приказываете слуге выполнить задачу, которая переместит его на расстояние более чем 60 футов от вас, то заклинание завершается.</p>`,
    source: {
      book: 'PHB\'24',
      page: 336
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Вызыватель' },
      { type: 'background', name: 'Инженер Иззетов' },
      { type: 'feat', name: 'Ритуальный заклинатель' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' },
      { type: 'feat', name: 'Договор гримуара' }
    ]
  },
  {
    id: 'witch-bolt',
    name: 'Ведьмин снаряд',
    nameEn: 'Witch Bolt',
    level: '1',
    school: 'воплощение',
    castingTime: '1 действие',
    range: '60 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'ветка, поражённая молнией'
    },
    duration: 'Концентрация, до 1 минуты',
    description: `<p>уч трескучей энергии устремляется к существу в пределах дистанции, формируя постоянную дугу молнии между вами и целью. Совершите дальнобойную атаку заклинанием против цели. При попадании цель получает 2к12 урона электричеством.</p>
<p>В каждый ваш последующий ход вы можете бонусным действием нанести 1к12 урона электричеством цели автоматически, даже если первая атака промахнулась.</p>
<p>Заклинание заканчивается, если цель окажется вне радиуса действия заклинания или если она окажется за полным укрытием.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Начальный урон увеличивается на 1к12 за каждую ячейку заклинания выше 1.</p>`,
    source: {
      book: 'PHB\'24',
      page: 336
    },
    sources: [
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Воплотитель' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' }
    ]
  },
  {
    id: 'wrathful-smite',
    name: 'Гневная кара',
    nameEn: 'Wrathful Smite',
    level: '1',
    school: 'некромантия',
    castingTime: 'Бонусное действие, которое вы совершаете сразу после попадания по существу рукопашным оружием или безоружным ударом.',
    range: 'На себя',
    components: {
      verbal: true
    },
    duration: '1 минута',
    description: `<p>Цель получает от этой атаки дополнительно 1к6 урона некротической энергией и должна совершить успешный спасбросок Мудрости, иначе она получает состояние испуганный, пока заклинание не закончится. В конце каждого своего хода испуганная цель повторяет спасбросок, при успехе заклинание заканчивается для неё.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Урон увеличивается на 1к6 за каждый уровень ячейки выше 1.</p>`,
    source: {
      book: 'PHB\'24',
      page: 343
    },
    sources: [
      { type: 'class', name: 'Паладин' },
      { type: 'subclass', name: 'Покровитель Ведьмовской клинок' },
      { type: 'feat', name: 'Затронутый тенью' }
    ]
  },
  {
    id: 'earth-tremor',
    name: 'Дрожь земли',
    nameEn: 'Earth Tremor',
    level: '1',
    school: 'воплощение',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>Вы сотрясаете землю в пределах дистанции. Все существа, кроме вас, в этой области должны совершить спасбросок Ловкости. При провале существо получает 1к6 дробящего урона и сбивается с ног. Если поверхность представляет собой рыхлую землю или камень, то область воздействия становится труднопроходимой местностью до тех пор, пока её не расчистят. Каждая область диаметром 5 футов требует как минимум 1 минуту на расчистку вручную.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Если вы накладываете это заклинание, используя ячейку 2-го уровня или выше, то урон увеличивается на 1к6 за каждый уровень ячейки выше 1-го.</p>`,
    source: {
      book: 'XGE\'14',
      page: 155
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Воплотитель' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Посвящённый в магию' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' }
    ]
  },
  {
    id: 'frost-fingers',
    name: 'Ледяные пальцы',
    nameEn: 'Frost Fingers',
    level: '1',
    school: 'воплощение',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>Из ваших пальцев в 15-футовом конусе вырывается леденящий холод. Каждое существо в этой области должно совершить спасбросок Телосложения, получая 2к8 урона холодом при провале и половину этого урона при успехе.</p>
<p>В области воздействия холод замораживает немагические жидкости, которые никто не несёт и не носит.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Если вы накладываете это заклинание, используя ячейку 2-го уровня или выше, урон увеличивается на 1к8 за каждый уровень ячейки выше первого.</p>`,
    source: {
      book: 'IDRotF\'14',
      page: 318
    },
    sources: [
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Воплотитель' },
      { type: 'feat', name: 'Посвящённый в магию' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' }
    ]
  },
  {
    id: 'jims-magic-missile',
    name: 'Волшебная стрела Джима',
    nameEn: 'Jims Magic Missile',
    level: '1',
    school: 'воплощение',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true,
      material: 'авторские отчисления в размере 1 зм, расходуемые заклинанием'
    },
    duration: 'Мгновенная',
    description: `<p>Вы создаете три вращающихся свистящих гипоаллергенных безглютеновых дротика из магической силы. Каждый нацелен на существо по вашему выбору, которое вы можете видеть в пределах дистанции. Совершите дальнобойную атаку заклинанием для каждого дротика. При попадании дротик наносит своей цели урон силовым полем 2к4.</p>
<p>Если бросок атаки критический, то цель этого дротика получает урон силовым полем 5к4 вместо того, чтобы вам дважды бросать урон за критический удар.</p>
<p>Если бросок атаки для любого из дротиков равен 1, то все дротики промахиваются мимо своих целей и взрываются у вас перед носом, нанося вам 1 урон силовым полем за каждый дротик.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Если вы накладываете это заклинание, используя ячейку 2-го уровня или выше, заклинание создает по одному дополнительному дротику за каждый уровень ячейки выше первого. Также увеличивается стоимость на 1 зм, за каждую ячейку выше первого уровня.</p>
<p>Многие заклинатели пытались уклониться от компонента авторских отчислений, ни один из них никогда в этом не преуспевал в полной мере. Тем не менее, говорят, что персонаж может попытаться совершить проверку Интеллекта Сл 15 (Магия), во время накладывания заклинание с компонентом авторских отчислений. При успешной проверке платеж взимается у случайного существа в пределах 10 футов от заклинателя без ведома этого существа.</p>`,
    source: {
      book: 'AI\'14',
      page: 76
    },
    sources: [
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Воплотитель' },
      { type: 'feat', name: 'Посвящённый в магию' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' }
    ]
  },
  {
    id: 'silvery-barbs',
    name: 'Искусная острота',
    nameEn: 'Silvery Barbs',
    level: '1',
    school: 'очарование',
    castingTime: '1 реакция, совершаемая вами, когда видимое вами в пределах 60 футов от вас существо преуспевает в броске атаки, проверке характеристики или спасброске',
    range: 'На себя',
    components: {
      verbal: true
    },
    duration: 'Мгновенная',
    description: `<p>Вы магическим образом отвлекаете спровоцировавшее реакцию существо и превращаете его секундное замешательство в ободрение другого существа. Спровоцировавшее вас существо должно повторно совершить бросок к20 и использовать меньшее значение.</p>
<p>После этого вы можете выбрать другое существо, которое видите в пределах дистанции (вы можете выбрать себя). Выбранное существо совершит с преимуществом следующий бросок атаки, проверку характеристики или спасбросок, который оно совершит в течение 1 минуты. Существо может иметь на себе лишь одно усиление от этого заклинания за раз.</p>`,
    source: {
      book: 'SCC\'14',
      page: 38
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Очарователь' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Затронутый феями' },
      { type: 'feat', name: '<a href="/feats/vampire-touched/">Затронутый вампиром</a>' },
      { type: 'feat', name: 'Посвящённый в магию' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' }
    ]
  },
  {
    id: 'snare',
    name: 'Силок',
    nameEn: 'Snare',
    level: '1',
    school: 'ограждение',
    castingTime: '1 минута',
    range: 'Касание',
    components: {
      verbal: true,
      somatic: true,
      material: '25 футов верёвки, расходуемые заклинанием'
    },
    duration: '8 часов',
    description: `<p>Когда вы накладываете это заклинание, вы используете верёвку, чтобы создать круг с радиусом 5 футов на земле или на полу. По завершении этого процесса верёвка исчезает, и круг становится волшебной ловушкой.</p>
<p>Эта ловушка почти невидима. Чтобы её заметить, требуется совершить успешную проверку Интеллекта (Расследование) против Сл вашего заклинания.</p>
<p>Ловушка срабатывает, когда Маленькое, Среднее или Большое существо перемещается по земле или полу в зоне действия заклинания. Это существо должно преуспеть в спасброске Ловкости, иначе будет волшебным образом поднято в воздух и останется висеть вверх ногами на высоте 3 фута над землёй или полом. Существо опутано на этом месте, пока заклинание не окончится.</p>
<p>Опутанное существо может совершать спасбросок Ловкости в конце каждого своего хода, оканчивая на себе эффект при успехе. В качестве альтернативы существо или кто-то другой, кто может дотянуться до него, может действием совершить проверку Интеллекта (Магия) против Сл вашего заклинания. При успехе удерживающий эффект оканчивается.</p>
<p>После срабатывания ловушки заклинание заканчивается, если никакое существо им больше не удерживается.</p>`,
    source: {
      book: 'XGE\'14',
      page: 165
    },
    sources: [
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Следопыт' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Оградитель' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Посвящённый в магию' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' }
    ]
  },
  {
    id: 'snare',
    name: 'Едкое варево Таши',
    nameEn: 'Tasha’s Caustic Brew',
    level: '1',
    school: 'воплощение',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true,
      material: 'немного тухлой пищи'
    },
    duration: 'Концентрация, до 1 минуты',
    description: `<p>Вы испускаете струю кислоты вдоль линии длиной 30 футов и шириной 5 футов в выбранном вами направлении. Каждое существо, находящееся на этой линии должно преуспеть в спасброске Ловкости, иначе станет покрыто кислотой на время действия заклинания или до тех пор, пока кто-то действием не соскребёт или смоет кислоту с себя или другого существа. Существо, покрытое кислотой, получает 2к4 урона кислотой в начале каждого своего хода.</p>
<p><strong>Накладывание более высокой ячейкой.</strong> Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, урон увеличивается на 2к4 за каждый уровень ячейки выше первого.</p>`,
    source: {
      book: 'TCE\'14',
      page: 115
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Оградитель' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Посвящённый в магию' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' }
    ]
  },
  {
    id: 'zephyr-strike',
    name: 'Удар Зефира',
    nameEn: 'Zephyr Strike',
    level: '1',
    school: 'преобразование',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true
    },
    duration: 'Концентрация, до 1 минуты',
    description: `<p>Вы движетесь подобно ветру. Пока действует заклинание, ваше движение не вызывает провоцированных атак.</p>
<p>Единожды до окончания действия заклинания вы можете получить преимущество на одну атаку оружием в свой ход. Эта атака наносит дополнительно 1к8 урона силовым полем при попадании. Вне зависимости от того, попали вы или промахнулись, ваша скорость ходьбы увеличивается на 30 футов до конца этого хода.</p>`,
    source: {
      book: 'XGE\'14',
      page: 171
    },
    sources: [
      { type: 'class', name: 'Следопыт' }
    ]
  },
  {
    id: 'ray-of-frost',
    name: 'Луч холода',
    nameEn: 'Ray of Frost',
    level: 'cantrip',
    school: 'воплощение',
    castingTime: '1 действие',
    range: '60 футов',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>Луч синевато-белого света направляется к существу в пределах дистанции. Совершите дальнобойную атаку заклинанием против цели. При попадании цель получает 1к8 урона холодом, и её скорость уменьшается на 10 футов до начала вашего следующего хода.</p>
    <p><strong>Улучшение заговора.</strong> Урон увеличивается на 1к8, когда вы достигаете 5 уровня (2к8), 11 уровня (3к8) и 17 уровня (4к8).</p>`,
    source: {
      book: 'PHB\'24',
      page: 311
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Домен Магии' },
      { type: 'subclass', name: 'Круг Земли (Арктическая земля)' },
      { type: 'subclass', name: 'Круг Моря' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Воплотитель' },
      { type: 'species', name: 'Эльф Высший' },
      { type: 'species', name: 'Полуэльф Лунный/Солнечный' },
      { type: 'species', name: 'Кобольд' },
      { type: 'species', name: 'Тифлинг Левистуса' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Посвящённый в магию' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' }
    ]
  },
  {
    id: 'hunger-of-hadar',
    name: 'Голод Хадара',
    nameEn: 'Hunger of Hadar',
    level: '3',
    school: 'вызов',
    castingTime: '1 действие',
    range: '150 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'маринованное щупальце'
    },
    duration: 'Концентрация, вплоть до 1 минуты',
    description: `<p>Вы открываете врата в Дальний Предел, населённое неописуемыми кошмарами место: появляется 20-футовая Сфера с центром на точке в пределах дистанции, полная Темнотой и существующая, пока действует заклинание. Эта область — Труднопроходимая область, полная какофонией неясных шёпотов и хлюпающих шумов, слышимых в пределах 30 футов от Сферы. Свет, магический или немагический, не может осветить эту область, и существа, полностью находящиеся в ней, имеют состояние Ослеплённый. </p>
    <p>Каждое существо, начинающее ход в этой области, получает 2к6 урона Холодом. Каждое существо, заканчивающее ход в этой области, должно преуспеть в спасброске Ловкости или получить 2к6 урона Кислотой от потусторонних щупалец.</p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong>Урон Холодом или урон Кислотой (на ваш выбор) увеличивается на 1к6 за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'PHB\'24',
      page: 286
    },
    sources: [
      { type: 'class', name: 'Колдун' },
      { type: 'subclass', name: 'Аберрантный разум' },
      { type: 'subclass', name: 'Покровитель Великий древний' }
    ]
  },
  {
    id: 'hypnotic-pattern',
    name: 'Гипнотический узор',
    nameEn: 'Hypnotic Pattern',
    level: '3',
    school: 'иллюзия',
    castingTime: '1 действие',
    range: '120 футов',
    components: {
      somatic: true,
      material: 'щепоть конфетти'
    },
    duration: 'Концентрация, вплоть до 1 минуты',
    description: `<p>Вы создаете хитрый разноцветный узор в 30-футовом Кубе в пределах дистанции. Узор появляется на краткий миг и исчезает. Каждое находящееся в этой области существо, если оно может видеть узор, должно преуспеть в спасброске Мудрости или получить состояние Очарованный на время действия заклинания. Существо с таким состоянием имеет также состояние Недееспособный, а его Скорость равна 0. </p>
    <p>Заклинание заканчивается на существе, если оно получает урон или если кто-то другой действием потрясёт его, выводя из ступора.</p>`,
    source: {
      book: 'PHB\'24',
      page: 287
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Иллюзионист' },
      { type: 'subclass', name: 'Клятва Искупления' },
      { type: 'subclass', name: 'Домен Обмана' }
    ]
  },
  {
    id: 'leomunds-tiny-hut',
    name: 'Леомундова хижина',
    nameEn: 'Leomund’s Tiny Hut',
    level: '3',
    school: 'воплощение',
    castingTime: '1 минута или Ритуал',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true,
      material: 'кристаллическая бусина'
    },
    duration: '8 часов',
    description: `<p>10-футовая Эманация возникает вокруг вас и остаётся неподвижной на время действия заклинания. Заклинание проваливается, если при его сотворении Эманация не может полностью охватить всех существ в её области. </p>
    <p>Существа и объекты, находящиеся внутри Эманации в момент сотворения заклинания, могут свободно проходить сквозь неё. Все остальные существа и объекты не могут пересекать её границу. Заклинания 3-го уровня или ниже не могут быть наложены через неё, и эффекты таких заклинаний не распространяются на её область.</p>
    <p>Атмосфера внутри Эманации комфортная и сухая, какая бы погода ни была снаружи. Пока заклинание действует, вы можете приказать, чтобы в области был Тусклый свет или Темнота (действий не требуется). Эманация снаружи непрозрачна и может быть любого цвета на ваш выбор, но изнутри она прозрачная.</p>
    <p>Заклинание заканчивается досрочно, если вы покидаете Эманацию или сотворяете это заклинание снова.</p>`,
    source: {
      book: 'PHB\'24',
      page: 291
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Воплотитель' },
      { type: 'subclass', name: 'Домен Сумерек' }
    ]
  },
  {
    id: 'life-transference',
    name: 'Передача жизни',
    nameEn: 'Life transference',
    level: '3',
    school: 'некромантия',
    castingTime: '1 действие',
    range: '30 футов',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>Вы жертвуете своим здоровьем, чтобы излечить травмы другого существа. Вы получаете 4к8 урона некротической энергией, который никак нельзя уменьшить, и одно существо по вашему выбору, которое вы видите в пределах дистанции, восстанавливает хиты в количестве, равном удвоенному полученному вами урону.</p>
    <p><strong>На больших уровнях.</strong>Если вы накладываете это заклинание, используя ячейку заклинания 4-го уровня или выше, урон увеличивается на 1к8 для каждого уровня ячейки выше 3-го.</p>`,
    source: {
      book: 'XGE',
      page: 160
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Некромант' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Мистический рыцарь' }
    ]
  },
  {
    id: 'lightning-arrow',
    name: 'Молниевая стрела',
    nameEn: 'Lightning Arrow',
    level: '3',
    school: 'преобразование',
    castingTime: 'Бонусное действие, которое вы совершаете немедленно после попадания или промаха дальнобойной атакой с использованием оружия',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>Когда вы попадаете или промахиваетесь этой атакой, используемое вами оружие или боеприпас превращаются в разряд молнии. Цель атаки не получает урон или иных эффектов от этой атаки, вместо этого цель получает 4к8 урона Электричеством при попадании или половину этого урона при промахе. После этого каждое существо в пределах 10 футов от цели должно совершить спасбросок Ловкости, получая 2к8 урона Электричеством при провале или половину этого урона при успехе.</p>
    <p>После этого используемое оружие или боеприпас вновь принимает обычную форму.</p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong>Урон обоих эффектов заклинания увеличивается на 1к8 за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'PHB\'24',
      page: 292
    },
    sources: [
      { type: 'class', name: 'Следопыт' }
    ]
  },
  {
    id: 'lightning-arrow',
    name: 'Молниевая стрела',
    nameEn: 'Lightning Bolt',
    level: '3',
    school: 'преобразование',
    castingTime: 'Бонусное действие, которое вы совершаете немедленно после попадания или промаха дальнобойной атакой с использованием оружия',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>Когда вы попадаете или промахиваетесь этой атакой, используемое вами оружие или боеприпас превращаются в разряд молнии. Цель атаки не получает урон или иных эффектов от этой атаки, вместо этого цель получает 4к8 урона Электричеством при попадании или половину этого урона при промахе. После этого каждое существо в пределах 10 футов от цели должно совершить спасбросок Ловкости, получая 2к8 урона Электричеством при провале или половину этого урона при успехе.</p>
    <p>После этого используемое оружие или боеприпас вновь принимает обычную форму.</p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong>Урон обоих эффектов заклинания увеличивается на 1к8 за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'PHB\'24',
      page: 292
    },
    sources: [
      { type: 'class', name: 'Следопыт' }
    ]
  },
  {
    id: 'lightning-bolt',
    name: 'Молния',
    nameEn: 'Lightning Bolt',
    level: '3',
    school: 'воплощение',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true,
      material: 'кусок шерсти и хрустальная палочка'
    },
    duration: 'Мгновенная',
    description: `<p>Разряд молнии ударяет в Линии длиной 100 футов и шириной 5 футов, исходящей от вас в выбранном вами направлении. Каждое существо в Линии должно совершить спасбросок Ловкости, получая 8к6 урона Электричеством при провале или половину этого урона при успехе.</p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong> Урон увеличивается на 1к6 за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'PHB\'24',
      page: 292
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Воплотитель' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Покровитель Бездонный' },
      { type: 'subclass', name: 'Мистический рыцарь' }
    ]
  },
  {
    id: 'magic-circle',
    name: 'Магический круг',
    nameEn: 'Magic Circle',
    level: '3',
    school: 'ограждение',
    castingTime: '1 минута',
    range: '10 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'соль и порошок серебра стоимостью не менее 100 ЗМ, расходуемые заклинанием'
    },
    duration: 'Мгновенная',
    description: `<p>Вы создаёте из магической энергии Цилиндр радиусом 10 футов и высотой 20 футов с центром на точке на полу, видимой вами в пределах дистанции. Там, где Цилиндр пересекается с полом или другой поверхностью, появляются светящиеся руны.</p>
    <p>Выберите один или несколько типов существ из следующего списка: Исчадия, Небожители, Нежить, Феи или Элементали. Круг действует на существ выбранных типов следующим образом:</p>
    <p><ul><li>Существа не могут добровольно войти в Цилиндр немагическими средствами. Если существо пытается использовать телепортацию или межпланарное перемещение, чтобы попасть в Цилиндр, оно должно вначале преуспеть в спасброске Харизмы.</li>
    <li>Существо совершает с Помехой броски атаки по целям, находящимся в Цилиндре.</li>
    <li>Находящиеся в Цилиндре цели не могут быть одержимы или получить от существа состояние Испуганный или Очарованный.</li></ul></p>
    <p>При сотворении этого заклинания вы можете обратить его магию: в таком случае существа выбранных типов не смогут покинуть Цилиндр, а защищены будут цели, находящиеся снаружи.</p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong>Длительность увеличивается на 1 час за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'PHB\'24',
      page: 293
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Паладин' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Оградитель' },
      { type: 'subclass', name: 'Домен Магии' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Убийца Чудовищ' },
      { type: 'subclass', name: 'Мистический рыцарь' }
    ]
  },
  {
    id: 'major-image',
    name: 'Образ',
    nameEn: 'Major Image',
    level: '3',
    school: 'иллюзия',
    castingTime: '1 действие',
    range: '120 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'кусок флиса'
    },
    duration: 'Концентрация, вплоть до 10 минут',
    description: `<p>Вы создаёте образ объекта, существа или другого видимого явления, размерами не выходящий за рамки 20-футового Куба. Образ появляется в точке, которую вы видите в пределах дистанции, и существует, пока действует заклинание. Образ выглядит настоящим, включая звук, запах и температуру, соответствующие образу, но не может наносить урон или накладывать состояния.</p>
    <p>Пока расстояние между вами и образом не превышает дистанцию, вы можете действием Магия заставить образ переместиться в любое другое место в пределах дистанции. Пока образ меняет местоположение, вы можете изменять его вид, чтобы перемещение выглядело естественным. Например, если вы создаёте образ существа и перемещаете его, вы можете изменять образ, чтобы казалось, что оно идёт. Точно так же вы можете заставить иллюзию издавать в разное время различные звуки — например, таким образом иллюзия может даже принимать участие в беседе.</p>
    <p>Физическое взаимодействие с образом даёт понять, что это иллюзия, потому что сквозь него всё проходит. Существо, исследующее образ действием Изучение, может определить, что это иллюзия, преуспев в проверке Интеллекта (Расследование) против вашей Сл спасброска заклинаний. Если существо распознаёт иллюзию, оно может видеть сквозь неё, как и все прочие сенсорные эффекты иллюзии для этого существа тоже притупляются.</p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong>Заклинание не требует Концентрации и длится, пока не будет рассеяно, при использовании ячейки 4-го уровня или выше.</p>`,
    source: {
      book: 'PHB\'24',
      page: 295
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Иллюзионист' }
    ]
  },
  {
    id: 'mass-healing-word',
    name: 'Множественное лечащее слово',
    nameEn: 'Mass Healing Word',
    level: '3',
    school: 'ограждение',
    castingTime: '1 бонусное действие',
    range: '60 футов',
    components: {
      verbal: true
    },
    duration: 'Мгновенная',
    description: `<p>Выберите до шести существ, видимых вами в пределах дистанции, каждое из этих существ восстанавливает Хиты в количестве, равном 2к4 + ваш модификатор заклинательной характеристики.</p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong>Лечение увеличивается на 1к4 за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'PHB\'24',
      page: 296
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Жрец' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Домен Жизни' },
      { type: 'subclass', name: 'Домен Порядка' }
    ]
  },
  {
    id: 'meld-into-stone',
    name: 'Слияние с камнем',
    nameEn: 'Meld into Stone',
    level: '3',
    school: 'преобразование',
    castingTime: '1 действие или Ритуал',
    range: 'Касание',
    components: {
      verbal: true,
      somatic: true
    },
    duration: '8 часов',
    description: `<p>Вы входите в каменный объект или поверхность, достаточно большую, чтобы там поместилось ваше тело, и сливаетесь с камнем вместе со всем снаряжением на время действия заклинания. Вы должны касаться этого камня. Ваше присутствие абсолютно незаметно, и без помощи магии обнаружить вас невозможно.</p>
    <p>Слившись с камнем, вы не можете видеть, что происходит вокруг, а все проверки Мудрости (Восприятие) для слуха совершаются с Помехой, вы осознаёте ход времени и можете сотворять на себя заклинания. Вы можете потратить 5 футов перемещения, чтобы выйти из камня в том месте, где вы входили, что оканчивает это заклинание. Иным способом вы перемещаться не можете.</p>
    <p>Небольшие физические повреждения камня не причиняют вам вреда, но частичное разрушение или изменение его формы (приводящие к тому, что вы больше не помещаетесь внутри) выталкивают вас и наносят 6к6 Силового урона. Полное разрушение камня (или превращение его в другую субстанцию) выталкивает вас и наносит 50 Силового урона. При выталкивании вы падаете Распластанным в незанятом пространстве, ближайшем к месту, в котором вы входили в камень.</p>`,
    source: {
      book: 'PHB\'24',
      page: 296
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Следопыт' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Покровитель Гений (дао)' }
    ]
  },
  {
    id: 'melfs-minute-meteors',
    name: 'Мельфовы маленькие метеоры',
    nameEn: 'Melf’s Minute Meteors',
    level: '3',
    school: 'воплощение',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true,
      material: 'селитра, сера и шарик сосновой смолы'
    },
    duration: 'Концентрация, вплоть до 10 минут',
    description: `<p>Вы создаёте вокруг себя шесть маленьких метеоров. Они парят в воздухе и вращаются вокруг вас, пока действует заклинание. Когда вы накладываете заклинание (а также в следующих ходах бонусным действием) вы можете отправить один или два метеора в точки, выбранные в пределах 120 футов. Долетев до цели или столкнувшись с твёрдой поверхностью, метеор взрывается. Все существа в пределах 5 футов от точки взрыва должны совершить спасбросок Ловкости. При провале существо получает 2к6 урона огнём, а при успехе — половину урона.</p>
    <p><strong>На больших уровнях.</strong>Если вы накладываете это заклинание, используя ячейку 4-го уровня или выше, число призываемых метеоров увеличивается на 2 за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'XGE',
      page: 161
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Воплотитель' }
    ]
  },
  {
    id: 'nondetection',
    name: 'Необнаружимость',
    nameEn: 'Nondetection',
    level: '3',
    school: 'ограждение',
    castingTime: '1 действие',
    range: 'Касание',
    components: {
      verbal: true,
      somatic: true,
      material: 'щепоть алмазной пыли стоимостью не менее 25 ЗМ, расходуемая заклинанием'
    },
    duration: '8 часов',
    description: `<p>Пока заклинание активно, цель, которой вы коснулись, сокрыта от заклинаний школы Прорицания. Целью может быть согласное существо, место или объект, не превышающий 10 футов ни по одному из линейных размеров. Цель не может стать целью заклинаний школы Прорицания, и её не воспринимают магические наблюдательные сенсоры.</p>`,
    source: {
      book: 'PHB\'24',
      page: 302
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Следопыт' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Оградитель' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Домен Знаний' },
      { type: 'subclass', name: 'Клятва Смотрителей' },
      { type: 'subclass', name: 'Домен Обмана' },
      { type: 'background', name: 'Оперативник Димиров' }
    ]
  },
  {
    id: 'phantom-steed',
    name: 'Призрачный скакун',
    nameEn: 'Phantom Steed',
    level: '3',
    school: 'иллюзия',
    castingTime: '1 минута или Ритуал',
    range: '30 футов',
    components: {
      verbal: true,
      somatic: true
    },
    duration: '1 час',
    description: `<p>На полу в незанятом пространстве в пределах дистанции на ваш выбор появляется Большое полуреальное похожее на лошадь существо. Вы определяете его внешность, у него есть седло, удила и уздечка. Всё снаряжение, созданное этим заклинанием, исчезает в клубах дыма, если окажется дальше 10 футов от скакуна.</p>
    <p>Пока заклинание действует, вы или выбранное вами существо можете ехать на скакуне верхом. Используется статистика Ездовой лошади, за исключением того, что Скорость существа — 100 футов, и оно может проскакать 13 миль за час. Когда заклинание оканчивается, скакун медленно исчезает, давая ездоку 1 минуту на спешивание. Заклинание оканчивается, если скакун получит урон.</p>`,
    source: {
      book: 'PHB\'24',
      page: 304
    },
    sources: [
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Иллюзионист' },
      { type: 'subclass', name: 'Лунное чародейство' },
      { type: 'subclass', name: 'Покровитель Нежить' }
    ]
  },
  {
    id: 'plant-growth',
    name: 'Рост растений',
    nameEn: 'Plant Growth',
    level: '3',
    school: 'преобразование',
    castingTime: 'Действие (Буйный рост) или 8 часов (Удобрение)',
    range: '150 футов',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>Это заклинание вливает жизненные силы в растения. Вы выбираете время сотворения заклинания и применяете соответствующий эффект.</p>
    <p><strong>Буйный рост.</strong> Выберите точку в пределах дистанции. Все обычные растения в пределах Сферы радиусом 100 футов с центром в этой точке становятся густыми и рослыми. Существо, перемещающееся по этой местности, должно потратить 4 фута перемещения за каждый 1 пройдённый фут. Вы можете исключить из области воздействия любое количество зон любого размера.</p>
    <p><strong>Удобрение.</strong> Все растения в радиусе полумили с центром в точке в пределах дистанции становятся удобренными на 365 дней. Эти растения приносят удвоенный урожай. Они могут получить эффект Роста растений только раз в год.</p>`,
    source: {
      book: 'PHB\'24',
      page: 304
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Следопыт' },
      { type: 'subclass', name: 'Покровитель Архифея' },
      { type: 'subclass', name: 'Круг Дикого Огня' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Домен Природы' },
      { type: 'subclass', name: 'Клятва Древних' },
      { type: 'background', name: 'Агент Голгари' },
      { type: 'background', name: 'Посвящённый Селезнии' }
    ]
  },
  {
    id: 'remove-curse',
    name: 'Снятие проклятия',
    nameEn: 'Remove Curse',
    level: '3',
    school: 'ограждение',
    castingTime: '1 действие',
    range: 'Касание',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>С вашим касанием все проклятия, действующие на одно существо или объект, заканчиваются. Если объект — проклятый магический предмет, то проклятие предмета сохраняется, но заклинание разрывает Настройку владельца на него, так что предмет можно снять или выбросить.</p>`,
    source: {
      book: 'PHB\'24',
      page: 312
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Паладин' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Оградитель' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Мистический рыцарь' }
    ]
  },
  {
    id: 'sending',
    name: 'Послание',
    nameEn: 'Sending',
    level: '3',
    school: 'прорицание',
    castingTime: '1 действие',
    range: 'Неограниченная',
    components: {
      verbal: true,
      somatic: true,
      material: 'медная проволока'
    },
    duration: 'Мгновенная',
    description: `<p>Вы отправляете короткое послание (не больше 25 слов) существу, которое вы встречали или которое описано вам кем-то, кто встречал его. Это существо слышит послание в своём сознании, распознает вас как отправителя, если оно вас знает, и может тут же ответить аналогичным образом. Это заклинание позволяет цели послания понимать его смысл.</p>
    <p>Вы можете передать послание на любое расстояние, и даже на другие планы бытия, но если вы с целью находитесь на разных планах, с шансом 5% послание не будет доставлено. Вы знаете, если доставка послания провалилась.</p>
    <p>При получении послания существо может блокировать вашу возможность связаться с ним на следующие 8 часов. Если в течение этого времени вы снова пытаетесь послать существу послание, вы узнаёте, что послание блокируется, и заклинание проваливается.</p>`,
    source: {
      book: 'PHB\'24',
      page: 314
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Аберрантный разум' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Прорицатель' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Домен Мира' },
      { type: 'subclass', name: 'Покровитель Великий древний' }
    ]
  },
  {
    id: 'sleet-storm',
    name: 'Метель',
    nameEn: 'Sleet Storm',
    level: '3',
    school: 'вызов',
    castingTime: '1 действие',
    range: '150 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'миниатюрный зонтик'
    },
    duration: 'Концентрация, вплоть до 1 минуты',
    description: `<p>Пока заклинание действует, в области Цилиндра высотой 40 футов и радиусом 20 футов с центром в выбранной вами точке в пределах дистанции идёт мокрый снег. Эта область Сильно заслонена, и все незащищённые источники огня в этой области гаснут.</p>
    <p>Земля в области Цилиндра — Труднопроходимая местность. Когда существо входит в область Цилиндра в первый раз за ход или начинает в ней свой ход, оно должно преуспеть в спасброске Ловкости, иначе получит состояние Опрокинутый и потеряет Концентрацию.</p>`,
    source: {
      book: 'PHB\'24',
      page: 317
    },
    sources: [
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Круг Земли' },
      { type: 'subclass', name: 'Вызыватель' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Домен Бури' },
      { type: 'subclass', name: 'Покровитель Бездонный' },
      { type: 'subclass', name: 'Покровитель Гений (Марид)' }
    ]
  },
  {
    id: 'slow',
    name: 'Замедление',
    nameEn: 'Slow',
    level: '3',
    school: 'преобразование',
    castingTime: '1 действие',
    range: '120 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'капля патоки'
    },
    duration: 'Концентрация, вплоть до 1 минуты',
    description: `<p>Вы изменяете время для шести существ по вашему выбору, находящихся в 40-футовом Кубе в пределах дистанции. Каждая цель должна преуспеть в спасброске Мудрости, иначе попадёт под действие заклинания на время его действия.</p>
    <p>Скорость попавшего под действие существа уменьшается вдвое, оно получает штраф -2 к КЗ и спасброскам Ловкости, и оно не может совершать Реакции. В свой ход оно может использовать либо действие, либо Бонусное действие, но не то и другое, если оно применяет действие Атака, то может совершить только одну атаку, если оно сотворяет заклинание с Соматическим компонентом, то с шансом 25% заклинание проваливается из-за слишком медленно выполняемых жестов.</p>
    <p>Находящееся под действием этого заклинания существо повторяет спасбросок в конце каждого своего хода, при успехе оканчивая на себе это заклинание.</p>`,
    source: {
      book: 'PHB\'24',
      page: 318
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Преобразователь' },
      { type: 'subclass', name: 'Круг Земли' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Домен Порядка' }
    ]
  },
  {
    id: 'speak-with-dead',
    name: 'Разговор с мёртвыми',
    nameEn: 'Speak with Dead',
    level: '3',
    school: 'некромантия',
    castingTime: '1 действие',
    range: '10 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'горящее благовоние'
    },
    duration: '10 минут',
    description: `<p>Выберите труп в пределах дистанции, вы даёте ему подобие жизни, что позволит ему отвечать на задаваемые вами вопросы. У трупа должен быть рот, и заклинание проваливается, если в момент смерти он был Нежитью. Заклинание также проваливается, если выбранный труп был целью этого заклинания в течение последних 10 дней.</p>
    <p>Пока заклинание не окончится, вы можете задать трупу вплоть до пяти вопросов. Труп знает только то, что знал при жизни, включая известные языки. Ответы обычно короткие, загадочные или скучные, и труп не обязан давать правдивый ответ, если вы враждебны к нему или он распознает в вас врага. Это заклинание не возвращает душу в тело существа, а только оживляет дух. Таким образом, труп не может узнавать новую информацию, не осознаёт того, что происходило после его смерти, и не может размышлять о будущих событиях.</p>`,
    source: {
      book: 'PHB\'24',
      page: 318
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Некромант' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Домен Знаний' },
      { type: 'subclass', name: 'Покровитель Нежить' },
      { type: 'subclass', name: 'Покровитель Бессмертный' },
      { type: 'background', name: 'Студент Лорхолда' },
      { type: 'background', name: 'Представитель Орзовов' }
    ]
  },
  {
    id: 'speak-with-plants',
    name: 'Разговор с растениями',
    nameEn: 'Speak with Plants',
    level: '3',
    school: 'преобразование',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true
    },
    duration: '10 минут',
    description: `<p>В пределах неподвижной 30-футовой Эманации вы наделяете растения ограниченным разумом и способностью двигаться, позволяя им общаться с вами и выполнять ваши простые приказы. Вы можете расспросить растения о событиях, случившихся в области заклинания за последний день, получить сведения о существах, которые проходили тут, о погоде и прочих обстоятельствах.</p>
    <p>Кроме того, вы можете на время действия превратить Труднопроходимую местность, созданную растениями (вроде густых кустов и подлеска), в обычную, или превратить обычную местность с растениями в Труднопроходимую местность.</p>
    <p>Заклинание не позволяет растениям извлекать корни из земли и перемещаться, но они могут свободно двигать ветвями, побегами и стеблями.</p>
    <p>Если в области находится существо типа Растение, вы можете общаться с ним, как будто вы оба знаете какой-либо язык.</p>`,
    source: {
      book: 'PHB\'24',
      page: 319
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Следопыт' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'background', name: 'Посвящённый Селезнии' }
    ]
  },
  {
    id: 'spirit-guardians',
    name: 'Духовные стражи',
    nameEn: 'Spirit Guardians',
    level: '3',
    school: 'вызов',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true,
      material: 'свиток с молитвой'
    },
    duration: 'Концентрация, вплоть до 10 минут',
    description: `<p>Пока действует заклинание, охранные духи кружатся вокруг вас 15-футовой Эманацией. Если ваше мировоззрение Доброе или Нейтральное, духи выглядят как ангелы или феи (на ваш выбор), если ваше мировоззрение Злое, они выглядят исчадиями.</p>
    <p>При сотворении заклинания вы определяете, на каких существ оно не будет действовать. Скорость всех прочих существ в этой Эманации снижена вдвое, и когда Эманация перемещается на пространство существа или когда существо входит в Эманацию или когда существо заканчивает в ней свой ход, это существо должно совершить спасбросок Мудрости. При провале существо получает 3к8 урона Излучением (если ваше мировоззрение Доброе или Нейтральное) или 3к8 Некротического урона (если ваше мировоззрение Злое). При успехе существо получает только половину этого урона. Существо может совершать этот спасбросок только раз за ход.</p>
    <p>Заклинание не позволяет растениям извлекать корни из земли и перемещаться, но они могут свободно двигать ветвями, побегами и стеблями.</p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong> Урон увеличивается на 1к8 за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'PHB\'24',
      page: 319
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Клятва Короны' },
      { type: 'subclass', name: 'Домен Войны' },
      { type: 'background', name: 'Студент Лорхолда' },
      { type: 'background', name: 'Представитель Орзовов' }
    ]
  },
  {
    id: 'spirit-shroud',
    name: 'Покров духа',
    nameEn: 'Spirit Shroud',
    level: '3',
    school: 'некромантия',
    castingTime: '1 бонусное действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Концентрация, вплоть до 1 минуты',
    description: `<p>Вы взываете к духам умерших, и они окружают вас на протяжении длительности заклинания. Духи неосязаемы и неуязвимы.</p>
    <p>До окончания действия заклинания любая ваша атака наносит дополнительно 1к8 урона, если вы атакуете существо в пределах 10 футов от вас. Вы выбираете вид урона в момент накладывания этого заклинания из следующих вариантов: излучение, некротическая энергия или холод. Любое существо, получившее этот урон, не сможет восстанавливать хиты до начала вашего следующего хода.</p>
    <p>Также скорость каждого видимого вами существа по вашему выбору, начинающего ход в пределах 10 футов от вас, будет уменьшена на 10 футов до начала вашего следующего хода.</p>
    <p><strong>На больших уровнях.</strong> Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, дополнительный урон увеличивается на 1к8 за каждые два уровня ячейки выше третьего.</p>`,
    source: {
      book: 'TCE',
      page: 108
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Паладин' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Некромант' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Мистический рыцарь' }
    ]
  },
  {
    id: 'stinking-cloud',
    name: 'Зловонное облако',
    nameEn: 'Stinking Cloud',
    level: '3',
    school: 'вызов',
    castingTime: '1 действие',
    range: '90 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'тухлое яйцо'
    },
    duration: 'Концентрация, вплоть до 1 минуты',
    description: `<p>Вы создаёте 20-футовую Сферу жёлтого тошнотворного газа с центром на точке в пределах дистанции. Эта область — Сильно заслонённая местность. Облако держится в воздухе, пока действует заклинание или пока сильный ветер (например, как созданный заклинанием Порыв ветра) не развеет его.</p>
    <p>Каждое существо, начинающее свой ход в Сфере, должно совершить спасбросок Телосложения, при провале получая состояние Отравленный до конца текущего хода. Существо с этим состоянием не может совершать действий или Бонусных действий.</p>`,
    source: {
      book: 'PHB\'24',
      page: 321
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Круг Земли' },
      { type: 'subclass', name: 'Вызыватель' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Покровитель Исчадие' }
    ]
  },
  {
    id: 'summon-fey',
    name: 'Вызов феи',
    nameEn: 'Summon Fey',
    level: '3',
    school: 'вызов',
    castingTime: '1 действие',
    range: '90 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'позолоченный цветок стоимостью не менее 300 ЗМ'
    },
    duration: 'Концентрация, вплоть до 1 часа',
    description: `<p>Вы призываете духа феи. Он появляется в видимом вами в пределах дистанции незанятом пространстве и использует блок статистики Духа феи. При сотворении заклинания выберите настроение: Сердитое, Довольное или Игривое. Дух принимает облик существа-Феи на ваш выбор и имеет отчётливые проявления выбранного настроения. Настроение определяет некоторые особенности духа, описанные в блоке статистики. Существо исчезает, когда его Хиты опускаются до 0 или когда заклинание заканчивается.</p>
    <p>Это существо — союзник вам и вашим союзникам. В бою оно имеет то же значение Инициативы, что и вы, и ходит сразу после вас. Оно подчиняется вашим словесным командам (от вас действий не требуется). Если вы ничего не приказываете, оно применяет действие Уклонение и перемещается так, чтобы избегать опасности.</p>`,
    source: {
      book: 'PHB\'24',
      page: 326
    },
    sources: [
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Следопыт' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Фейский странник' },
      { type: 'subclass', name: 'Вызыватель' }
    ]
  },
  {
    id: 'summon-lesser-demons',
    name: 'Призыв низших демонов',
    nameEn: 'Summon Lesser Demons',
    level: '3',
    school: 'вызов',
    castingTime: '1 действие',
    range: '60 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'сосуд с кровью Гуманоида, убитого за последние 24 часа'
    },
    duration: 'Концентрация, вплоть до 1 часа',
    description: `<p>Вы произносите инфернальные слова, призывая демонов из хаоса Бездны. Бросьте к6, чтобы определить, что именно появится.</p>
    p><ul><li>Выберите одну характеристику. Цель совершает с Помехой проверки и спасброски этой характеристики.</li>
    <li>1-2 — 2 демона с показателем опасности 1 или меньше.</li>
    <li>3-4 — 4 демона с показателем опасности 1/2 или меньше.</li>
    <li>5-6 — 8 демонов с показателем опасности 1/4 или меньше.</li></ul></p>
    <p>Мастер выбирает демонов, таких как мэйны [manes] или дретчи [dretch], а вы выбираете незанятые пространства, которые вы можете видеть в пределах дистанции, где появятся демоны. Призванный демон исчезает, когда его хиты опускаются до 0 или когда заклинание заканчивается.</p>
    <p>Демоны враждебны ко всем существам, включая вас. Совершите бросок инициативы за призванных демонов как за одну группу, и они будут совершать свои собственные ходы. Демоны преследуют и атакуют ближайших не-демонов в меру своих способностей.</p>
    <p>Частью заклинания вы можете начертить на земле круг кровью, используемой в качестве материального компонента. Круг должен быть достаточного размера, чтобы описать занимаемое вами пространство. Пока заклинание длится, призванные демоны не могут пересечь круг или разрушить его, и они не могут атаковать никого в нём. Если материальный компонент использован подобным образом, он расходуется при окончании заклинания.</p>
    <p><strong>На больших уровнях.</strong>Когда вы накладываете это заклинание, используя ячейку 6-го или 7-го уровня, вы вызываете в два раза больше демонов. Если вы накладываете его с помощью ячейки заклинания 8-го или 9-го уровня, вы вызываете в три раза больше демонов.</p>`,
    source: {
      book: 'XGE',
      page: 167
    },
    sources: [
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Вызыватель' },
      { type: 'subclass', name: 'Мистический рыцарь' }
    ]
  },
  {
    id: 'summon-shadowspawn',
    name: 'Призыв духа тени',
    nameEn: 'Summon Shadowspawn',
    level: '3',
    school: 'вызов',
    castingTime: '1 действие',
    range: '90 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'слезы внутри драгоценного камня стоимостью не менее 300 зм'
    },
    duration: 'Концентрация, вплоть до 1 часа',
    description: `<p>Вы призываете духа тени [shadow spirit]. Он проявляется в свободном пространстве, которое вы можете видеть в пределах дистанции. Воплощённая форма духа использует блок статистики духа тени [shadow spirit]. Когда вы накладываете заклинание, выберите эмоцию: ярость, уныние или страх. Существо принимает форму бесформенного двуногого с отчётливыми проявлениями выбранной эмоции, которая определяет особенности существа, описанные в блоке статистики. Существо исчезает, когда его хиты опускаются до 0 или когда заклинание заканчивается.</p>
    <p>Это существо дружелюбно к вам и вашим товарищам. В бою существо получает вашу инициативу и ходит сразу же после вас. Оно подчиняется вашим вербальным командам (никаких действий от вас не требуется). Если вы ничего не приказываете, то оно применяет действие Уклонение и перемещается, избегая опасностей.</p>
    <p><strong>На больших уровнях.</strong>Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, характеристики призываемого существа изменяются в соответствии с описанием в блоке статистики</p>`,
    source: {
      book: 'TCE',
      page: 113
    },
    sources: [
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Следопыт' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Фейский странник' },
      { type: 'subclass', name: 'Вызыватель' }
    ]
  },
  {
    id: 'summon-undead',
    name: 'Вызов нежити',
    nameEn: 'Summon Undead',
    level: '3',
    school: 'некромантия',
    castingTime: '1 действие',
    range: '90 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'позолоченный череп стоимостью не менее 300 ЗМ'
    },
    duration: 'Концентрация, вплоть до 1 часа',
    description: `<p>Вы призываете духа нежити. Он появляется в видимом вами в пределах дистанции незанятом пространстве и использует блок статистики Духа нежити. При сотворении заклинания выберите форму: дух может быть Гнилостным, Скелетным или Призрачным. Дух принимает облик существа-Нежити выбранной формы, форма определяет некоторые особенности духа, описанные в блоке статистики. Существо исчезает, когда его Хиты опускаются до 0 или когда заклинание заканчивается.</p>
    <p>Это существо дружелюбно к вам и вашим товарищам. В бою существо получает вашу инициативу и ходит сразу же после вас. Оно подчиняется вашим вербальным командам (никаких действий от вас не требуется). Если вы ничего не приказываете, то оно применяет действие Уклонение и перемещается, избегая опасностей.</p>
    <p><strong>На больших уровнях.</strong>Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, характеристики призываемого существа изменяются в соответствии с описанием в блоке статистики.</p>`,
    source: {
      book: 'PHB\'24',
      page: 328
    },
    sources: [
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Некромант' }
    ]
  },
  {
    id: 'thunder-step',
    name: 'Громовой шаг',
    nameEn: 'Thunder Step',
    level: '3',
    school: 'вызов',
    castingTime: '1 действие',
    range: '90 футов',
    components: {
      verbal: true
    },
    duration: 'Мгновенная',
    description: `<p>Вы телепортируете себя в свободное пространство, которое вы можете видеть в пределах дистанции. Сразу после того, как вы исчезли, раздается раскат грома, и каждое существо в радиусе 10 футов от покинутого пространства должно совершить спасбросок Телосложения, получив 3к10 урона звуком при провале или половину этого урона при успехе. Гром слышен на расстоянии до 300 футов.</p>
    <p>Вы можете взять с собой предметы, если их вес не превышает ваш максимальный переносимый вес. Вы также можете взять с собой одно согласное существо, с размером не больше вашего, которое тоже может нести дозволенный вес предметов. При накладывании заклинания существо должно находиться в пределах 5 футов от вас, также должно быть свободное пространство в пределах 5 футов от вашей точки назначения, где существо должно появиться, в противном случае существо не телепортируется.</p>
    <p><strong>На больших уровнях.</strong> Если вы накладываете это заклинание, используя ячейку 4-го уровня или выше, урон увеличивается на 1к10 за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'XGE',
      page: 168
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Вызыватель' }
    ]
  },
  {
    id: 'tidal-wave',
    name: 'Приливная волна',
    nameEn: 'Tidal Wave',
    level: '3',
    school: 'вызов',
    castingTime: '1 действие',
    range: '120 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'капля воды'
    },
    duration: 'Мгновенная',
    description: `<p>Вы призываете волну, которая обрушивается на выбранную вами область в пределах дистанции. Эта область может быть до 30 футов длиной, до 10 футов шириной и до 10 футов высотой. Все существа в этой области должны совершить спасбросок Ловкости. При провале существо получает 4к8 дробящего урона и сбивается с ног. При успехе оно получает половину урона и не сбивается с ног. После этого вода разливается во все стороны по земле, гася любые незащищённые источники огня в области действия заклинания и в пределах 30 футов от неё, после чего исчезает.</p>`,
    source: {
      book: 'XGE',
      page: 168
    },
    sources: [
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Вызыватель' }
    ]
  },
  {
    id: 'tongues',
    name: 'Языки',
    nameEn: 'Tongues',
    level: '3',
    school: 'прорицание',
    castingTime: '1 действие',
    range: 'Касание',
    components: {
      verbal: true,
      material: 'миниатюрный зиккурат'
    },
    duration: '1 час',
    description: `<p>Это заклинание дарует существу, которого вы касаетесь, способность понимать все речевые и жестовые языки, которые оно слышит или видит. Более того, когда цель говорит или использует жестовый язык, все существа, знающие хотя бы один язык, и слышащие речь или видящие жесты цели, понимают, что она сказала.</p>`,
    source: {
      book: 'PHB\'24',
      page: 334
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Прорицатель' },
      { type: 'subclass', name: 'Домен Магии' },
      { type: 'subclass', name: 'Мистический рыцарь' }
    ]
  },
  {
    id: 'vampiric-touch',
    name: 'Прикосновение вампира',
    nameEn: 'Vampiric Touch',
    level: '3',
    school: 'некромантия',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Концентрация, вплоть до 1 минуты',
    description: `<p>Касание вашей окутанной тенями руки может вытягивать жизненные силы у других, залечивая ваши раны. Совершите рукопашную атаку заклинанием по существу в пределах вашей досягаемости. При попадании цель получает 3к6 Некротического урона, а вы восстанавливаете Хиты в количестве, равном половине нанесённого Некротического урона.</p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong>Урон увеличивается на 1к6 за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'PHB\'24',
      page: 337
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Домен Смерти' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Домен Упокоения' },
      { type: 'subclass', name: 'Лунное чародейство' },
      { type: 'background', name: 'Студент Визерблума' }
    ]
  },
  {
    id: 'wall-of-sand',
    name: 'Песчаная стена',
    nameEn: 'Wall of Sand',
    level: '3',
    school: 'воплощение',
    castingTime: '1 действие',
    range: '90 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'горсть песка'
    },
    duration: 'Концентрация, вплоть до 10 минут',
    description: `<p>Вы создаёте стену из кружащегося песка в видимой точке на земле в пределах дистанции. Точка должна располагаться на поверхности. Стена может быть длиной до 30 футов, высотой до 10 футов и толщиной до 10 футов. Она существует до тех пор, пока действует заклинание. Стена блокирует линию обзора, но не блокирует движение. Находясь внутри стены, существо считается ослеплённым, и тратит 3 фута перемещения за каждый пройденный фут.</p>`,
    source: {
      book: 'XGE',
      page: 170
    },
    sources: [
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Воплотитель' },
    ]
  },
  {
    id: 'wall-of-water',
    name: 'Водяная стена',
    nameEn: 'Wall of Water',
    level: '3',
    school: 'воплощение',
    castingTime: '1 действие',
    range: '60 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'капля воды'
    },
    duration: 'Концентрация, вплоть до 10 минут',
    description: `<p>Вы создаёте стену воды в точке, которую можете видеть, в пределах дистанции. Точка должна располагаться на земле. Стена может быть длиной до 30 футов, высотой до 10 футов и толщиной до 1 фута. В качестве альтернативы, вы можете создать кольцо диаметром до 20 футов, высотой до 20 футов и толщиной до 1 фута. Стена существует, пока действует заклинание. Стена считается труднопроходимой местностью.</p>
    <p>Все атаки дальнобойным оружием, траектория которых проходит через пространство стены, совершаются с помехой. Огненный урон от эффектов, которые прошли через стену, уменьшается вдвое. Заклинания, которые причиняют урон холодом, при прохождении через стену замораживают ту область стены, сквозь которую прошли (минимум секция площадью 5×5 футов). Каждая замёрзшая секция площадью 5×5 футов имеет КД 5 и 15 хитов. Если хиты секции уменьшаются до 0, она разрушается. Разрушенные секции стены не заполняются водой повторно.</p>`,
    source: {
      book: 'XGE',
      page: 170
    },
    sources: [
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Воплотитель' },
      { type: 'species', name: 'Тритон' }
    ]
  },
  {
    id: 'wind-wall',
    name: 'Стена ветров',
    nameEn: 'Wind Wall',
    level: '3',
    school: 'воплощение',
    castingTime: '1 действие',
    range: '120 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'веер и перо'
    },
    duration: 'Концентрация, вплоть до 1 минуты',
    description: `<p>От точки на земле, выбранной вами в пределах дистанции, начинает дуть сильный ветер в виде стены. Вы можете сделать стену длиной до 50 футов, высотой до 15 футов и толщиной до 1 фута. Вы можете как угодно изгибать стену, лишь бы основание стены на земле было непрерывно. Стена существует, пока заклинание действует.</p>
    <p>Когда стена появляется, каждое существо в её области должно совершить спасбросок Силы, получая 4к8 Дробящего урона при провале или половину этого урона при успехе.</p>
    <p>Сильный ветер отгоняет туман, дым и прочие газы. Летающие существа и предметы Маленького размера и меньше не могут пройти через эту стену. Лёгкие, сыпучие материалы, оказавшиеся в стене, взлетают вверх. Стрелы, болты и прочие обычные боеприпасы, выпущенные в цели, находящиеся за стеной, отклоняются вверх и автоматически промахиваются (валуны, брошенные Великанами и осадными машинами, а также подобные боеприпасы, не отклоняются). Существа в газообразной форме не могут пройти через стену.</p>`,
    source: {
      book: 'PHB\'24',
      page: 341
    },
    sources: [
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Следопыт' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Домен Природы' },
      { type: 'subclass', name: 'Покровитель Гений (джинн)'},
      { type: 'background', name: 'Учёный Симиков' }
    ]
  },
  {
    id: 'water-breathing',
    name: 'Подводное дыхание',
    nameEn: 'Water Breathing',
    level: '3',
    school: 'преобразование',
    castingTime: '1 действие или ритуал',
    range: '30 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'короткий тростник'
    },
    duration: '24 часа',
    description: `<p>Это заклинание даёт до 10 существам по вашему выбору в пределах дистанции способность дышать под водой до окончания действия заклинания. Затронутые существа сохраняют свой обычный способ дыхания.</p>`,
    source: {
      book: 'PHB\'24',
      page: 340
    },
    sources: [
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Следопыт' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Круг Моря' },
      { type: 'background', name: 'Учёный Симиков' },
      { type: 'other', name: 'Дар глубин' }
    ]
  },
  {
    id: 'sanctuary',
    name: 'Убежище',
    nameEn: 'Sanctuary',
    level: '1',
    school: 'ограждение',
    castingTime: 'Бонусное действие',
    range: '30 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'осколок зеркального стекла'
    },
    duration: '1 минута',
    description: `<p>Вы защищаете существо в пределах дистанции. Во время длительности заклинания, любое существо, которое пытается атаковать защищаемое существо или наложить на него заклинание, наносящее урон, должно преуспеть в спасброске Мудрости или выбрать новую цель, либо потерять атаку или заклинание. Это заклинание не защищает от эффектов, влияющих на область.</p>
    <p>Заклинание заканчивается, если защищаемое существо совершает атаку, накладывает заклинание или наносит урон.</p>`,
    source: {
      book: 'PHB\'24',
      page: 334
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Клятва Искупления' },
      { type: 'subclass', name: 'Домен Мира' },
      { type: 'subclass', name: 'Покровитель Гений (Дао)' },
      { type: 'feat', name: 'Ваятель рун' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: '<a href="/feats/magic-initiate/">Посвящённый в магию</a>' }
    ]
  },
  {
    id: 'dispel-magic',
    name: 'Рассеивание магии',
    nameEn: 'Dispel Magic',
    level: '3',
    school: 'ограждение',
    castingTime: '1 действие',
    range: '120 футов',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>Выберите одно существо, объект или магический эффект в пределах дистанции. Все действующие заклинания 3-го уровня или ниже на цели оканчиваются. Для каждого заклинания 4-го уровня или выше совершите проверку вашей заклинательной характеристики (Сл равна 10 + уровень этого заклинания), при успехе это заклинание оканчивается.</p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong>Вы автоматически оканчиваете на цели эффекты заклинаний, уровень которых не выше уровня использованной ячейки.</p>`,
    source: {
      book: 'PHB\'24',
      page: 264
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Паладин' },
      { type: 'class', name: 'Следопыт' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Оградитель' },
      { type: 'subclass', name: 'Домен Магии' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Заводная душа' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Фейский странник' },
      { type: 'subclass', name: 'Лунное чародейство' },
      { type: 'subclass', name: 'Клятва Преданности' },
      { type: 'feat', name: 'Высшая магия дроу' }
    ]
  },
  {
    id: 'protection-from-energy',
    name: 'Защита от энергии',
    nameEn: 'Protection from Energy',
    level: '3',
    school: 'ограждение',
    castingTime: '1 действие',
    range: 'Касание',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Концентрация, вплоть до 1 часа',
    description: `<p>Пока заклинание активно, согласное существо, которого вы коснулись, получает Сопротивление урону одного типа по вашему выбору: Звук, Кислота, Огонь, Холод или Электричество.</p>`,
    source: {
      book: 'PHB\'24',
      page: 309
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Следопыт' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Оградитель' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Заводная душа' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Домен Кузни' },
      { type: 'subclass', name: 'Клятва Славы' },
      { type: 'subclass', name: 'Клятва Мести' },
      { type: 'subclass', name: 'Клятва Древних' }
    ]
  },
  {
    id: 'elemental-weapon',
    name: 'Стихийное оружие',
    nameEn: 'Elemental Weapon',
    level: '3',
    school: 'преобразование',
    castingTime: '1 действие',
    range: 'Касание',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Концентрация, вплоть до 1 часа',
    description: `<p>Немагическое оружие, которого вы касаетесь, становится магическим. Выберите один из следующих видов урона: Звук, Кислота, Огонь, Холод или Электричество. Пока заклинание действует, оружие получает бонус +1 к броскам атаки и при попадании наносит 1к4 дополнительного урона выбранного типа.</p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong>При использовании ячейки 5-го или 6-го уровней бонус к броскам атаки увеличивается до +2, а дополнительный урон — до 2к4. При использовании ячейки 7-го уровня или выше бонус к броскам атаки увеличивается до +3, а дополнительный урон — до 3к4.</p>`,
    source: {
      book: 'PHB\'24',
      page: 309
    },
    sources: [
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Паладин' },
      { type: 'class', name: 'Следопыт' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Домен Кузни' },
      { type: 'subclass', name: 'Покровитель' },
      { type: 'subclass', name: 'Клятва Мести' },
      { type: 'subclass', name: 'Клятва Ведьмовского клинки' }
    ]
  },
  {
    id: 'revivify',
    name: 'Возрождение',
    nameEn: 'Revivify',
    level: '3',
    school: 'некромантия',
    castingTime: '1 действие',
    range: 'Касание',
    components: {
      verbal: true,
      somatic: true,
      material: 'бриллиант стоимостью не менее 300 ЗМ, расходуемый заклинанием'
    },
    duration: 'Мгновенная',
    description: `<p>Вы касаетесь существа, мёртвого не больше минуты. Это существо возвращается к жизни с 1 Хитом. Это заклинание не может оживить существ, умерших от старости, а также не восстанавливает отсутствующие части тела.</p>`,
    source: {
      book: 'PHB\'24',
      page: 312
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Паладин' },
      { type: 'class', name: 'Следопыт' },
      { type: 'subclass', name: 'Круг Дикого Огня' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Домен Упокоения' },
      { type: 'subclass', name: 'Домен Жизни' },
      { type: 'background', name: 'Студент Визерблума' }
    ]
  },
  {
    id: 'blink',
    name: 'Мерцание',
    nameEn: 'Blink',
    level: '3',
    school: 'преобразование',
    castingTime: '1 действие',
    range: 'На себя',
    components: {
      verbal: true,
      somatic: true
    },
    duration: '1 минута',
    description: `<p>Пока заклинание действует, в конце каждого вашего хода бросайте 1к6, если выпадет «4» или выше, вы исчезаете с текущего плана бытия и появляетесь на Эфирном плане (заклинание немедленно заканчивается, если вы уже находитесь на этом плане). Находясь на Эфирном плане, вы можете видеть и слышать происходящее на плане, с которого пришли, видя всё в оттенках серого и не видя того, что происходит дальше 60 футов. Вы можете воздействовать только на находящихся на Эфирном плане существ, и только находящиеся на Эфирном плане существа могут воздействовать на вас. Существа, не находящиеся там, не могут вас воспринимать, если у них нет умений или особенностей, позволяющих это делать.</p>
    <p>Вы возвращаетесь на план, с которого исчезли, в начале вашего следующего хода, а также если заклинание закончится, пока вы на Эфирном плане.</p>
    <p>Вы возвращаетесь в незанятое пространство, видимое вами в пределах 10 футов от места, из которого исчезли, на ваш выбор. Если в этих пределах нет такого пространства, вы появляетесь в ближайшем незанятом пространстве.</p>`,
    source: {
      book: 'PHB\'24',
      page: 248
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Преобразователь' },
      { type: 'subclass', name: 'Покровитель Архифея' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Клятва Ведьмовского клинки' }
    ]
  },
  {
    id: 'create-food-and-water',
    name: 'Сотворение пищи и воды',
    nameEn: 'Create Food and Water',
    level: '3',
    school: 'вызов',
    castingTime: '1 действие',
    range: '30 футов',
    components: {
      verbal: true,
      somatic: true
    },
    duration: 'Мгновенная',
    description: `<p>Вы создаёте 45 фунтов еды и 30 галлонов (100 литров) воды на земле или в контейнерах в пределах дистанции, еда и вода могут помочь предотвратить недоедание и обезвоживание. Вода чистая. Еда безвкусная, но сытная, вы выбираете, как выглядит эта еда. Не съеденная через 24 часа еда портится.</p>`,
    source: {
      book: 'PHB\'24',
      page: 258
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Паладин' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Покровитель Гений' }
    ]
  },
  {
    id: 'haste',
    name: 'Ускорение',
    nameEn: 'Haste',
    level: '3',
    school: 'преобразование',
    castingTime: '1 действие',
    range: '30 футов',
    components: {
      verbal: true,
      somatic: true,
      material: 'стружка корня лакрицы'
    },
    duration: 'Концентрация, вплоть до 1 минуты',
    description: `<p>Выберите согласное существо, видимое в пределах дистанции. Пока заклинание действует, Скорость цели удваивается, она получает бонус +2 к Классу защиты, она совершает с Преимуществом спасброски Ловкости и в каждом своём ходу может совершать дополнительное действие. Этим действием может быть только Атака (только одна атака), Затаивание, Использование, Отход или Рывок.</p>
    <p>Когда заклинание оканчивается, неодолимая вялость окутывает цель: до конца её следующего хода цель получает состояние Недееспособный, а её Скорость становится равна 0.</p>`,
    source: {
      book: 'PHB\'24',
      page: 284
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Странник Горизонта' },
      { type: 'subclass', name: 'Клятва Славы' },
      { type: 'subclass', name: 'Клятва Мести' },
      { type: 'background', name: 'Студент Призмари' },
      { type: 'background', name: 'Студент Квандрикса' },
      { type: 'background', name: 'Культист Ракдосов' }
    ]
  },
  {
    id: 'fly',
    name: 'Полёт',
    nameEn: 'Fly',
    level: '3',
    school: 'преобразование',
    castingTime: '1 действие',
    range: 'Касание',
    components: {
      verbal: true,
      somatic: true,
      material: 'перо'
    },
    duration: 'Концентрация, вплоть до 10 минут',
    description: `<p>Вы касаетесь согласного существа. Пока заклинание действует, цель обладает Скоростью полёта 60 футов и может парить. Когда заклинание заканчивается, цель падает, если ещё находится в полёте и не может остановить падение.</p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong>Вы можете нацелить заклинание на одно дополнительное существо за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'PHB\'24',
      page: 276
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Драконья кровь' },
      { type: 'subclass', name: 'Мистический рыцарь' }
    ]
  },
  {
    id: 'catnap',
    name: 'Дрёма',
    nameEn: 'Catnap',
    level: '3',
    school: 'очарование',
    castingTime: '1 действие',
    range: '30 футов',
    components: {
      somatic: true,
      material: 'щепотка песка'
    },
    duration: '10 минут',
    description: `<p>Вы делаете успокаивающий жест, и до трёх согласных существ по вашему выбору, которых вы можете видеть в пределах дистанции, падают без сознания на время действия заклинания. Заклинание оканчивается на цели раньше, если она получает урон или если кто-то действием потрясёт её или даст пощёчину. Если цель остается без сознания в течение всего времени действия заклинания, она получает все преимущества короткого отдыха и не может быть подвержена этому заклинанию снова, пока не закончит продолжительный отдых.</p>
    <p><strong>На больших уровнях.</strong>Если вы накладываете это заклинание, используя ячейку 4-го уровня или выше, вы можете сделать целью дополнительно ещё одно существо за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'XGE',
      page: 151
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' }
    ]
  },
  {
    id: 'flame-arrows',
    name: 'Пылающие стрелы',
    nameEn: 'Flame Arrows',
    level: '3',
    school: 'преобразование',
    castingTime: '1 действие',
    range: 'касание',
    components: {
      verbal: true,
      somatic: true
    },
    duration: '10 минут',
    description: `<p>Вы касаетесь колчана, в котором находятся стрелы или болты. Когда дальнобойная атака оружием с использованием боеприпаса, вынутого из этого колчана, попадает по цели, цель получает дополнительно 1к6 урона огнём. Действие магии на боеприпасе заканчивается после попадания или промаха. Заклинание заканчивается, когда из колчана было извлечено 12 боеприпасов.</p>
    <p><strong>На больших уровнях.</strong>Если вы накладываете это заклинание, используя ячейку 4-го уровня или выше, количество боеприпасов, на которые действует заклинание, увеличивается на 2 за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'XGE',
      page: 156
    },
    sources: [
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Следопыт' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Преобразователь' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' }
    ]
  },
  {
    id: 'glyph-of-warding',
    name: 'Охранная руна',
    nameEn: 'Glyph of Warding',
    level: '3',
    school: 'ограждение',
    castingTime: '1 час',
    range: 'Касание',
    components: {
      verbal: true,
      somatic: true,
      material: 'порошок алмаза стоимостью не менее 200 ЗМ, расходуемый заклинанием'
    },
    duration: '1Пока не рассеяно или не сработает',
    description: `<p>Вы начертали руну, впоследствии она высвободит магический эффект. Руну можно начертать либо на поверхности (такой как стол или часть пола), либо внутри объекта, который можно закрыть (как книга, свиток или сундук), спрятав руну. Руна может покрывать площадь диаметром не больше 10 футов. Если этот объект или поверхность окажется более чем в 10 футах от места, где вы сотворили заклинание, магия руны нарушается, и заклинание заканчивается, не срабатывая.</p>
    <p>Руну практически нельзя заметить, и для её обнаружения требуется успешная проверка Интеллекта (Расследование) против вашей Сл спасброска заклинаний.</p>
    <p>При начертании руны вы определяете условие срабатывания руны, и будет это взрывная руна или руна заклинания (см. ниже).</p>
    <p><strong>Условие срабатывания.</strong>Вы решаете, что вызовет срабатывание руны, когда сотворяете это заклинание. Руны, написанные на поверхности, обычно срабатывают при касании, вставании на неё, снимании стоящего на руне объекта или приближении к ней на определённое расстояние. Руна, начертанная внутри объекта, зачастую срабатывает при открывании этого объекта, приближении на определённое расстояние или когда руну увидят. После того, как руна сработает, заклинание оканчивается.</p>
    <p>Вы можете уточнить условия, чтобы руну могли активировать только определённые типы существа (например, руна срабатывает только на Аберраций).</p>
    <p>Вы можете также определить, какие существа не будут активировать руну — например, существа, сказавшие заданный пароль.</p>
    <p><strong>Взрывная руна.</strong>Когда эта руна срабатывает, она испускает магическую энергию 20-футовой Сферой с центром на руне. Каждое существо в этой области должно совершить спасбросок Ловкости, получая 5к8 урона Звуком, Кислотой, Огнём, Холодом или Электричеством при провале или половину этого урона при успехе (вы выбираете тип урона при начертании руны).</p>
    <p><strong>Руна заклинания.</strong>Вы можете сохранить в руне подготовленное вами заклинание 3-го уровня или ниже, сотворяя его в процессе начертания руны. Заклинание должно нацеливаться на одно существо или область. Эффект этого сохранённого заклинания, сотворённого таким образом, не вступает в силу немедленно.</p>
    <p>Эффект сохранённого заклинания вступает в силу, когда срабатывает руна. Если заклинание нацеливается на существо, то целью становится существо, вызвавшее срабатывание руны. Если заклинание воздействует на область, то центр этой области будет на этом существе. Если заклинание призывает Враждебных существ или создает вредоносные объекты или ловушки, они появляются как можно ближе к нарушителю и атакуют его. Если заклинание требует Концентрации, оно длится до максимума своей длительности.</p>
    <p><strong>Используя ячейку заклинания большего уровня.</strong>Урон взрывной руны увеличивается на 1к8 за каждый уровень ячейки выше 3-го. Если вы создаёте руну заклинания, вы можете сохранить в ней заклинание, уровнем не превышающее уровень ячейки, использованной для сотворения Охранной руны.</p>`,
    source: {
      book: 'PHB\'24',
      page: 156
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Оградитель' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'background', name: 'Иззетский Инженер' }
    ]
  },
  {
    id: 'intellect-fortress',
    name: 'Крепость интеллекта',
    nameEn: 'Intellect Fortress',
    level: '3',
    school: 'ограждение',
    castingTime: '1 действие',
    range: '30 футов',
    components: {
      verbal: true
    },
    duration: 'Концентрация, вплоть до 1 часа',
    description: `<p>ВВ течение длительности заклинания вы или одно согласное существо, которое вы можете видеть в пределах дистанции, имеете сопротивление урону психической энергией, а также совершаете с преимуществом спасброски Интеллекта, Мудрости и Харизмы.</p>
    <p><strong>На больших уровнях.</strong>Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, вы можете сделать целью заклинания дополнительных существ, по одному за каждый уровень ячейки выше третьего. Все цели заклинания должны быть в пределах 30 футов друг от друга во время накладывания заклинания.</p>`,
    source: {
      book: 'TCE',
      page: 107
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Оградитель' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' }
    ]
  },
  {
    id: 'tiny-servant',
    name: 'Крошечный слуга',
    nameEn: 'Tiny Servant',
    level: '3',
    school: 'преобразование',
    castingTime: '1 минута',
    range: '30 футов',
    components: {
      verbal: true,
      somatic: true
    },
    duration: '8 часов',
    description: `<p>Вы прикасаетесь к одному Крошечному немагическому объекту, который не прикреплен к другому объекту или поверхности и не переносится другим существом.</p>
    <p>Цель оживает и отращивает маленькие ручки и ножки, превращаясь в существо, которое находится под вашим контролем, пока заклинание не закончится или пока хиты существа не упадут до 0. Его статистика приведена в блоке статистики ниже.</p>,
    <p>Бонусным действием вы можете мысленно давать существу команды, если оно находится в пределах 120 футов от вас (если вы управляете несколькими существами с помощью этого заклинания, вы можете одновременно командовать любым из них или сразу всеми, давая одну и ту же команду каждому из существ). Вы определяете, какое действие совершит существо и как оно будет двигаться в течение следующего хода, или вы можете дать простую общую команду, например, достать ключ, стоять и наблюдать или собрать несколько книг. Если вы не даёте никаких команд, слуга не делает ничего, кроме защиты себя от враждебных существ. После получения приказа слуга продолжает следовать ему, пока его задача не будет выполнена.</p>
    <p>Когда хиты существа опускаются до 0, оно возвращается к своему изначальному облику, и весь излишний урон переносится на этот облик.</p>
    <p><strong>На больших уровнях.</strong>Если вы накладываете это заклинание, используя ячейку 4-го уровня или выше, вы можете оживить два дополнительных объекта за каждый уровень ячейки выше 3-го.</p>`,
    source: {
      book: 'XGE',
      page: 168
    },
    sources: [
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Преобразователь' }
    ]
  }
];