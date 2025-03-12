import type { Background } from '../../types/background';

export const azoriusfunctionary: Background = {
  id: 'azorius functionary',
  name: 'Функционер Азориусов',
  nameEn: 'Azorius Functionary',
  sourceBook: 'GGR14',
  lore: 'Дикари у ворот, хаос нарастает, и единственное, что стоит на пути катастрофы — опора закона и порядка, воплощённая в Сенате Азориусов. Вы — гордый член гильдии Азориусов, которая одновременно вводит законы и следит за их соблюдением, чтобы общество Равники функционировало налажено и сохранно.',
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
   name: 'Заклинания Гильдии Азориусов',
   prerequisite: 'Умение «Использование заклинаний» или «Магия договора»',
   description: 'Для вас заклинания из списка заклинаний Гильдии Азориусов добавляются в список заклинаний вашего класса заклинателя. (Если у вас есть уровни в нескольких классах с разными списками заклинаний, эти заклинания добавляются во все списки.)',
   spells: [
     { level: 'Заговоры', spells: ['Дружба', 'Сообщение'] },
     { level: '1-й', spells: ['Приказ', 'Опутывающий удар'] },
     { level: '2-й', spells: ['Волшебный замок', 'Умиротворение', 'Удержание личности'] },
     { level: '3-й', spells: ['Подсматривание', 'Контрзаклинание'] },
     { level: '4-й', spells: ['Принуждение', 'Предсказание'] },
     { level: '5-й', spells: ['Подчинение личности'] }
   ],
   note: 'Ваша магия обычно принимает вид синих или золотых рун, светящихся и парящих в воздухе кругами, или мерцающих лазурных барьеров из магической энергии. Например, когда вы сотворяете опутывающий удар, лозы, созданные заклинанием, могут выглядеть как исписанные рунами светящиеся ленты, обвивающие цель и удерживающие её на месте.'
 },
  characteristics: {
    personalityTraits: [
      { roll: 1, trait: 'Я стараюсь никогда не позволять моим эмоциям влиять на правосудие.' },
      { roll: 2, trait: 'Мне приходится каждый день иметь дело с болванами и грубиянами, так что у меня бесконечное терпение.' },
      { roll: 3, trait: 'Я ожидаю исполнения моих приказов.' },
      { roll: 4, trait: 'Я хочу, чтобы всё было аккуратно, организованно и чисто.' },
      { roll: 5, trait: 'Никакое правонарушение не останется незамеченным мной.' },
      { roll: 6, trait: 'Я всегда говорю то, что пытаюсь донести, неважно, сколько слов потребуется, чтобы передать тонкости.' },
      { roll: 7, trait: 'Я выражаюсь буквально и не понимаю метафор и сарказма.' },
      { roll: 8, trait: 'Я не передумаю, когда уже принял решение.' },
    ],
    ideals: [
      { roll: 1, ideal: 'Гильдия. Только моя гильдия имеет значение (Любой)' },
      { roll: 2, ideal: 'Порядок. Закон нужен для того, чтобы все шестерёнки общества двигались тихо и ладно. (Законный)' },
      { roll: 3, ideal: 'Мир. Конечная цель законов – искоренить жестокость и насилие. (Добрый)' },
      { roll: 4, ideal: 'Послушание. Принуждение – хороший способ заставить соблюдать законы. (Законный)' },
      { roll: 5, ideal: 'Законы. Закон воплощает совершенство в своей точности и подробности. (Законный)' },
      { roll: 6, ideal: 'Наказание. Публичная демонстрация последствий нарушения закона – прекрасный способ устрашения других преступников. (Злой)' }
    ],
    bonds: [
      { roll: 1, bond: 'Я обязан функционеру Азориусов, который схватил убийцу моих родителей и спас меня от их участи.' },
      { roll: 2, bond: 'Однажды я надеюсь писать законы, а не просто следить за их исполнением.' },
      { roll: 3, bond: 'Я попытался предотвратить убийство и потерпел неудачу. После этого я поклялся найти и арестовать преступника.' },
      { roll: 4, bond: 'Я предотвратил убийство, и несостоявшийся убийца хочет меня прикончить.' },
      { roll: 5, bond: 'Один из моих родителей был видным членом гильдии, и мне не нравится, что меня с ним постоянно сравнивают.' },
      { roll: 6, bond: 'Я спланировал свою карьеру по примеру уважаемого функционера, но боюсь, что он может быть замешан в чём-то незаконном.' }
    ],
    flaws: [
      { roll: 1, flaw: 'Я не вижу разницы между буквой и духом закона.' },
      { roll: 2, flaw: 'Кажется, что я сужу других строго, но строже всех я сужу себя.' },
      { roll: 3, flaw: 'У меня есть тайный, незаконный порок.' },
      { roll: 4, flaw: 'В детстве я стал свидетелем преступления, и это травмировало меня.' },
      { roll: 5, flaw: 'Я не способен на обман.' },
      { roll: 6, flaw: 'Я хотел бы присоединиться к Боросам, но боюсь, что они не приняли бы меня.' },
    ]
  }
};