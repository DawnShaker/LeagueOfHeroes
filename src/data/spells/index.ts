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

<p>Улучшение заговора. Урон увеличивается на 1к6, когда вы достигаете 5 уровня (2к6), 11 уровня (3к6) и 17 уровня (4к6).</p>`,
    source: {
      book: 'PHB\'24',
      page: 239
    },
    sources: [
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Круг земли' },
      { type: 'subclass', name: 'Домен Знаний' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знания' },
      { type: 'subclass', name: 'Мистический Рыцарь' },
      { type: 'subclass', name: 'Воплотитель' },
      { type: 'species', name: 'Высший эльф' },
      { type: 'species', name: 'Дженази воды' },
      { type: 'species', name: 'Лунный/Солнечный полуэльф' },
      { type: 'species', name: 'Кобольд' },
      { type: 'background', name: 'Учёный Симиков' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: 'Посвящённый в магию' },
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
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Домен Магии' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знаний' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Хранитель роя' },
      { type: 'species', name: 'Высший эльф' },
      { type: 'species', name: 'Гит' },
      { type: 'species', name: 'Лунный/Солнечный полуэльф' },
      { type: 'species', name: 'Кобольд' },
      { type: 'species', name: 'Тифлинг Маммона' },
      { type: 'species', name: 'Тифлинг Мефистофеля' },
      { type: 'background', name: 'Оперативник Димиров' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: 'Посвящённый в магию' },
      { type: 'feat', name: 'Наследник внешних планов' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: 'Телекинетик' },
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
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Домен Магии' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знаний' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Оградитель' },
      { type: 'species', name: 'Высший эльф' },
      { type: 'species', name: 'Дженази земли' },
      { type: 'species', name: 'Лунный/Солнечный полуэльф' },
      { type: 'species', name: 'Кобольд' },
      { type: 'species', name: 'Тифлинг Маммона' },
      { type: 'species', name: 'Тифлинг Мефистофеля' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: 'Посвящённый в магию' },
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
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Домен Магии' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знаний' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Воплотитель' },
      { type: 'species', name: 'Высший эльф' },
      { type: 'species', name: 'Лунный/Солнечный полуэльф' },
      { type: 'species', name: 'Кобольд' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: 'Посвящённый в магию' },
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
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Домен Магии' },
      { type: 'subclass', name: 'Домен Смерти' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знаний' },
      { type: 'subclass', name: 'Круг спор' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Воплотитель' },
      { type: 'species', name: 'Высший эльф' },
      { type: 'species', name: 'Лунный/Солнечный полуэльф' },
      { type: 'species', name: 'Кобольд' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: 'Посвящённый в магию' },
      { type: 'feat', name: 'Наследник внешних планов' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
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
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Домен Магии' },
      { type: 'subclass', name: 'Домен Смерти' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знаний' },
      { type: 'subclass', name: 'Круг спор' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Воплотитель' },
      { type: 'species', name: 'Высший эльф' },
      { type: 'species', name: 'Лунный/Солнечный полуэльф' },
      { type: 'species', name: 'Кобольд' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: 'Посвящённый в магию' },
      { type: 'feat', name: 'Наследник внешних планов' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
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
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Домен Магии' },
      { type: 'subclass', name: 'Домен Природы' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знаний' },
      { type: 'subclass', name: 'Круг земли' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'species', name: 'Высший эльф' },
      { type: 'species', name: 'Лунный/Солнечный полуэльф' },
      { type: 'species', name: 'Кобольд' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: 'Посвящённый в магию' },
      { type: 'feat', name: 'Магия лесных эльфов' },
      { type: 'feat', name: 'Воин-друид' },
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
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Домен Магии' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знаний' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Иллюзионист' },
      { type: 'species', name: 'Астральный эльф' },
      { type: 'species', name: 'Дроу эльф' },
      { type: 'species', name: 'Высший эльф' },
      { type: 'species', name: 'Лунный/Солнечный полуэльф' },
      { type: 'species', name: 'Дроу полуэльф' },
      { type: 'species', name: 'Кобольд' },
      { type: 'background', name: 'Агент Голгари' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: 'Посвящённый в магию' },
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
    <p>Улучшение заговора. Урон увеличивается на 1к6, когда вы достигаете 5 уровня (2к6), 11 уровня (3к6) и 17 уровня (4к6).</p>`,
    source: {
      book: 'PHB\'24',
      page: 343
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'subclass', name: 'Коллегия Знаний' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Благословлённый воин' },
      { type: 'feat', name: 'Посвящённый в магию' },
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
    <p>Улучшение заговора. Независимо от того, наносите ли вы урон излучением или нормальным типом урона оружия, атака наносит дополнительный урон излучением при достижении 5 уровня (1к6), 11 уровня (2к6) и 17 уровня (3к6).</p>`,
    source: {
      book: 'PHB\'24',
      page: 336
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Домен Магии' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знаний' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'subclass', name: 'Прорицатель' },
      { type: 'species', name: 'Высший эльф' },
      { type: 'species', name: 'Лунный/Солнечный полуэльф' },
      { type: 'species', name: 'Кобольд' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: 'Посвящённый в магию' },
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
    <p>Улучшение заговора. Урон увеличивается на 1к6, когда вы достигаете 5 уровня (2к6), 11 уровня (3к6) и 17 уровня (4к6).</p>`,
    source: {
      book: 'PHB\'24',
      page: 337
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'background', name: 'Культист Ракдосов' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: 'Посвящённый в магию' },
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
    <p>Улучшение заговора. Урон увеличивается на 1 кость, когда вы достигаете 5 уровня (2к8 или 2к12), 11 уровня (3к8 или 3к12) и 17 уровня (4к8 или 4к12).</p>`,
    source: {
      book: 'PHB\'24',
      page: 334
    },
    sources: [
      { type: 'class', name: 'Жрец' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Домен Магии' },
      { type: 'subclass', name: 'Домен Смерти' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знаний' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'species', name: 'Высший эльф' },
      { type: 'species', name: 'Лунный/Солнечный полуэльф' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: 'Благословлённый воин' },
      { type: 'feat', name: 'Посвящённый в магию' },
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
    <p>Улучшение заговора. Урон увеличивается на 1к6, когда вы достигаете 5 уровня (2к6), 11 уровня (3к6) и 17 уровня (4к6).</p>`,
    source: {
      book: 'PHB\'24',
      page: 333
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Друид' },
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Домен Магии' },
      { type: 'subclass', name: 'Домен Природы' },
      { type: 'subclass', name: 'Круг земли' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знаний' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'species', name: 'Высший эльф' },
      { type: 'species', name: 'Лунный/Солнечный полуэльф' },
      { type: 'species', name: 'Кобольд' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: 'Воин-друид' },
      { type: 'feat', name: 'Магия лесных эльфов' },
      { type: 'feat', name: 'Посвящённый в магию' },
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
    <p>Улучшение заговора. Урон увеличивается на 1к6, когда вы достигаете 5 уровня (2к6), 11 уровня (3к6) и 17 уровня (4к6).</p>`,
    source: {
      book: 'PHB\'24',
      page: 333
    },
    sources: [
      { type: 'class', name: 'Друид' },
      { type: 'subclass', name: 'Домен Природы' },
      { type: 'subclass', name: 'Круг земли' },
      { type: 'subclass', name: 'Коллегия Знаний' },
      { type: 'feat', name: 'Воин-друид' },
      { type: 'feat', name: 'Магия лесных эльфов' },
      { type: 'feat', name: 'Посвящённый в магию' },
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
      { type: 'class', name: 'Жрец' },
      { type: 'subclass', name: 'Коллегия Знаний' },
      { type: 'subclass', name: 'Божественная душа' },
      { type: 'subclass', name: 'Наезник на дрейке' },
      { type: 'subclass', name: 'Путь великанов' },
      { type: 'species', name: 'Тифлинг' },
      { type: 'species', name: 'Лунный/Солнечный полуэльф' },
      { type: 'species', name: 'Кобольд' },
      { type: 'feat', name: 'Благословлённый воин' },
      { type: 'feat', name: 'Любимец богов' },
      { type: 'feat', name: 'Поступивший в Стриксхейвен' },
      { type: 'feat', name: 'Посвящённый в магию' },
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
      { type: 'class', name: 'Чародей' },
      { type: 'class', name: 'Колдун' },
      { type: 'class', name: 'Волшебник' },
      { type: 'subclass', name: 'Домен Магии' },
      { type: 'subclass', name: 'Мистический ловкач' },
      { type: 'subclass', name: 'Коллегия Знаний' },
      { type: 'subclass', name: 'Мистический рыцарь' },
      { type: 'species', name: 'Высший эльф' },
      { type: 'species', name: 'Лунный/Солнечный полуэльф' },
      { type: 'species', name: 'Кобольд' },
      { type: 'feat', name: 'Искажённая метка дракона' },
      { type: 'feat', name: 'Посвящённый в Высшее волшебство' },
      { type: 'feat', name: 'Посвящённый в магию' },
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
    <p>Улучшение заговора. Урон увеличивается на 1к8, когда вы достигаете 5 уровня (2к8), 11 уровня (3к8) и 17 уровня (4к8).</p>`,
    source: {
      book: 'PHB\'24',
      page: 320
    },
    sources: [
      { type: 'class', name: 'Бард' },
      { type: 'class', name: 'Друид' },
      { type: 'subclass', name: 'Круг земли' },
      { type: 'subclass', name: 'Круг луны' },
      { type: 'subclass', name: 'Коллегия Знаний' },
      { type: 'subclass', name: 'Домен Природы' },
      { type: 'feat', name: 'Воин-друид' },
      { type: 'feat', name: 'Магия лесный эльфов' },
      { type: 'feat', name: 'Посвящённый в магию' },
      { type: 'other', name: 'Договор гримуара' }
    ]
  }
];