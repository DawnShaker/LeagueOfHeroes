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
  }
];