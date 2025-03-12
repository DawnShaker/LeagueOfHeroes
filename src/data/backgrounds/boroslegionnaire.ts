import type { Background } from '../../types/background';

export const boroslegionnaire: Background = {
  id: 'boros legionnaire',
  name: 'Легионер Боросов',
  nameEn: 'Boros Legionnaire',
  sourceBook: 'GGR14',
  lore: 'Как член Легиона Боросов ваша жизнь посвящена служению ангелам и работе по установлению справедливости и мира на улицах Равники. Вы можете быть истинно верующим, вдохновленным примером ангелов, тронутым тяжелым положением угнетенных и преданным делу справедливости. Или вы могли быть циником в рядах, возможно, потому, что вы неохотно пошли по стопам родителя-Бороса, поддались убеждению возвышенных обещаний харизматичного вербовщика или были',
  proficiencies: {
    abilityScores: {
      description: 'Либо значение одной характеристики по вашему выбору увеличивается на 2, а другой — на 1, либо значение трёх различных характеристик по вашему выбору увеличивается на 1'
    },
    feat: 'Любая черта происхождения',
    skills: {
      count: 2,
      description: '2 любых навыка'
    },
    tools: {
      description: '1 владение: ремесленный инструмент, набор, транспорт, музыкальный инструмент, игровой набор'
    },
    equipment: '50 зм'
 },
 spellTable: {
   name: 'Заклинания Гильдии Боросов',
   prerequisite: 'Умение «Использование заклинаний» или «Магия договора»',
   description: 'Для вас заклинания из списка заклинаний Гильдии Боросов добавляются в список заклинаний вашего класса заклинателя. (Если у вас есть уровни в нескольких классах с разными списками заклинаний, эти заклинания добавляются во все списки.)',
   spells: [
     { level: 'Заговоры', spells: ['Огненный снаряд', 'Священное пламя'] },
     { level: '1-й', spells: ['Направляющий снаряд', 'Героизм'] },
     { level: '2-й', spells: ['Подмога', 'Палящий луч'] },
     { level: '3-й', spells: ['Маяк надежды', 'Ослепляющая кара'] },
     { level: '4-й', spells: ['Защита от смерти', 'Огненная стена'] },
     { level: '5-й', spells: ['Небесный огонь'] }
   ],
   note: 'Ваша магия часто включает драматические вспышки пламени или сияния. Когда вы накладываете на своих союзников благотворные заклинания, они на мгновение появляются в окружении ореолов яркого огня.'
 },
  characteristics: {
    personalityTraits: [
      { roll: 1, trait: 'Я подхожу к каждой задаче с такой же высокой военной точностью.'},
      { roll: 2, trait: 'Я всегда первый в драке.'},
      { roll: 3, trait: 'Я стоически переношу любое ранение или унижение.'},
      { roll: 4, trait: 'Мой праведный гнев легко воспламеняется малейшим беззаконием.'},
      { roll: 5, trait: 'Моя честь важнее для меня, чем моя жизнь.'},
      { roll: 6, trait: 'Опасную работу лучше всего выполнять организованной группой, работающей с общей целью.'},
      { roll: 7, trait: 'Я с благоговением отношусь к моему оружию, мундиру и знакам различия, ибо они дары ангелов.'},
      { roll: 8, trait: 'Я хожу взад и вперед, когда стою, и постоянно ерзаю, когда меня заставляют сидеть.'},
    ],
    ideals: [
      { roll: 1, ideal: 'Гильдия. Моя гильдия — это все, что действительно имеет значение. (Любой)'},
      { roll: 2, ideal: 'Справедливость. Достижение справедливости требует установления честных, равноправных и основанных на сострадании отношений внутри сообщества. (Законный)'},
      { roll: 3, ideal: 'Защита. Невинным не подобает страдать из-за высокомерия сильных мира сего. (Законный)'},
      { roll: 4, ideal: 'Солидарность. Крайне важно действовать с единой волей, шагая бок о бок в совершенном согласии. (Законный)'},
      { roll: 5, ideal: 'Приказ. Общество функционирует только тогда, когда люди выполняют свой долг и уважают субординацию. (Законный)'},
      { roll: 6, ideal: 'Осуждение. Всё, что стоит делать, стоит делать всем сердцем. (Законный)'}
    ],
    bonds: [
      { roll: 1, bond: 'Я отдал бы свою жизнь за Аурелию и ангелов.'},
      { roll: 2, bond: 'Я обязан своей жизнью капитану Боросов, который принял меня, когда я жил на улице.'},
      { roll: 3, bond: 'Мои товарищи-легионеры — моя семья.'},
      { roll: 4, bond: 'Я владею тем же оружием Боросов, что и мой дедушка и бабушка, во имя чести нашей семьи.'},
      { roll: 5, bond: 'В юности я бежал с Ракдосами и стремлюсь искупить свои прошлые проступки.'},
      { roll: 6, bond: 'Я делаю все возможное, чтобы выручить супругу товарища, погибшего в бою.'}
    ],
    flaws: [
      { roll: 1, flaw: 'Я действую смело, когда нахожусь в группе, но я трус, когда я один.'},
      { roll: 2, flaw: 'Я вижу все в четком черно-белом цвете.'},
      { roll: 3, flaw: 'Я просто немного очарован поведением Груулов.'},
      { roll: 4, flaw: 'Я доверяю цепочке подчинения больше всего на свете, даже больше, чем своим самым близким друзьям.'},
      { roll: 5, flaw: 'Я медленно доверяю членам других гильдий.'},
      { roll: 6, flaw: 'Известно, что я закрывал глаза на несправедливость с помощью скромной взятки.'},
    ]
  }
};