import type { Background } from '../../types/background';

export const witherbloom: Background = {
  id: 'witherbloom student',
  name: 'Студент Визерблума',
  nameEn: 'Witherbloom Student',
  sourceBook: 'SCC14',
  lore: 'Вы наполнили свое детство рудиментарными алхимическими экспериментами, и все это в надежде стать студентом факультета Визерблум. Науки о жизни находятся в центре вашего внимания, включая биологию и некромантию. Приготовление странных отваров с целебными свойствами, изучение анатомии монстров и составление каталогов болотной флоры — вот те предметы, которыми вы можете заниматься в факультете Визерблум.',
  proficiencies: {
    abilityScores: {
      description: 'Либо значение одной характеристики по вашему выбору увеличивается на 2, а другой — на 1, либо значение трёх различных характеристик по вашему выбору увеличивается на 1'
    },
    feat: 'Любая черта происхождения или черта Поступивший в Стриксхейвен (Визерблум)',
    skills: {
      count: 2,
      description: '2 любых навыка'
    },
    tools: {
      description: '1 владение: ремесленный/неремесленный инструмент, набор, транспорт, музыкальный инструмент, игровой набор'
    },
    equipment: '50 зм'
 },
 spellTable: {
   name: 'Заклинания Визерблума',
   prerequisite: 'Умение «Использование заклинаний» или «Магия договора», а также черта «Поступивший в Стриксхейвен», выбрав факультет Визерблум',
   description: 'Заклинания из таблицы «Заклинания Визерблума» добавляются в список заклинаний вашего класса заклинателя (Если вы мультиклассовый персонаж с несколькими списками заклинаний, то эти заклинания добавляются в каждый из них).',
   spells: [
     { level: '1-й', spells: ['Лечение ран', 'Нанесение ран'] },
     { level: '2-й', spells: ['Малое восстановление', 'Увядание и цветение'] },
     { level: '3-й', spells: ['Возрождение', 'Прикосновение вампира'] },
     { level: '4-й', spells: ['Защита от смерти', 'Усыхание'] },
     { level: '5-й', spells: ['Высшее восстановление', 'Преграда жизни'] }
   ],
   note: 'Подумайте о том, чтобы настроить внешний вид ваших заклинаний, когда вы их накладываете. Ваши заклинания Визерблума могут основываться на материальных компонентах или магической фокусировке, извлеченных из болотной среды Визерблума, и ваши заклинания могут иметь внешний вид, напоминающий природные элементы. Спектральные формы болотных животных или растений могут формироваться среди эффектов ваших заклинаний.'
 },
 variants: {
   title: 'Безделушки Визеблума',
   description: 'Когда вы создадите своего персонажа, вы можете один раз совершить бросок по таблице Безделушки Визерблума, вместо броска по таблице Безделушки из Книги игрока, для своей стартовой безделушки.',
   table: [
     { roll: 1, result: 'Черная маска в виде птицы, отделанная светящейся зеленой нитью'},
     { roll: 2, result: 'Набор кроличьих костей'},
     { roll: 3, result: 'Пара толстых сапог высотой по колено, испачканных грязью и мхом'},
     { roll: 4, result: 'Слизистое зеленое щупальце, которое время от времени извивается'},
     { roll: 5, result: 'Блокнот с водонепроницаемой бумагой'},
     { roll: 6, result: 'Ожерелье из пяти маленьких пузырьков, каждый из которых заполнен люминесцентной белой жидкостью'}
   ]
 },
  characteristics: {
    personalityTraits: [
      { roll: 1, trait: 'Я люблю варить по новому рецепту, даже если некоторых может оттолкнуть мой выбор ингредиентов. Или конечный продукт. Или и то, и другое.'},
      { roll: 2, trait: 'Мое чувство моды похоже на мой сад: увядший, черный и странный.'},
      { roll: 3, trait: 'Я подружусь с каждым монстром в этом болоте, если это будет последнее, что я сделаю.'},
      { roll: 4, trait: 'Все в этом мире рано или поздно умирает. Вопрос в том, что вы будете делать со временем, которое у вас осталось?'},
      { roll: 5, trait: 'Я знаю, что мы только что встретились, но когда ты умрешь, можно мне твои кости? Для исследования.'},
      { roll: 6, trait: 'Не перебивай меня; Я размышляю.'}
    ],
    ideals: [
      { roll: 1, ideal: '-'}
    ],
    bonds: [
      { roll: 1, bond: '-'}
    ],
    flaws: [
      { roll: 1, flaw: '-'},
    ]
  }
};