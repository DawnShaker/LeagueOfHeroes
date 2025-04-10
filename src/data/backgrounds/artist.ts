import type { Background } from '../../types/background';

export const artist: Background = {
  id: 'artist',
  name: 'Артист',
  nameEn: 'Entertainer',
  sourceBook: 'PHB24',
  lore: 'Вы провели большую часть своей юности, следуя за передвижными ярмарками и карнавалами, подрабатывая музыкантом и акробатом в обмен на уроки. Возможно, вы научились ходить по канату, играть на лютне в особом стиле или декламировать поэзию с безупречной дикцией. По сей день вы наслаждаетесь аплодисментами и жаждете блистать на сцене.',
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
  variants: {
    title: 'Амплуа',
    description: 'Хороший артист обладает разнообразными номерами. Выберите от одного до трёх амплуа из приведённой таблицы, чтобы определить, чем вы развлекаете публику.',
    table: [
      { roll: 1, result: 'Акробат'},
      { roll: 2, result: 'Актер'},
      { roll: 3, result: 'Жонглер'},
      { roll: 4, result: 'Музыкант'},
      { roll: 5, result: 'Певец'},
      { roll: 6, result: 'Пожиратель огня'},
      { roll: 7, result: 'Поэт'},
      { roll: 8, result: 'Рассказчик'},
      { roll: 9, result: 'Танцор'},
      { roll: 10, result: 'Шут'},
      { roll: 11, result: 'Гладиатор'}
    ]
  },
  characteristics: {
    personalityTraits: [
      { roll: 1, trait: 'Для любой ситуации я найду подходящий рассказ.'},
      { roll: 2, trait: 'Куда бы я ни пришёл, я начинаю собирать местные слухи и распространять сплетни.'},
      { roll: 3, trait: 'Я безнадёжный романтик, всегда ищущий «кого-то особого».'},
      { roll: 4, trait: 'Никто не сердится на меня или возле меня подолгу, так как я могу разрядить любую напряжённую обстановку.'},
      { roll: 5, trait: 'Мне нравятся оскорбления, даже если они направлены на меня.'},
      { roll: 6, trait: 'Мне обидно, если я не нахожусь в центре внимания.'},
      { roll: 7, trait: 'Превыше всего я ценю совершенство.'},
      { roll: 8, trait: 'Моё настроение и намерения меняются так же быстро как ноты в музыке.'}
    ],
    ideals: [
      { roll: 1, ideal: 'Красота. Выступая, я делаю мир лучше. (Добрый)'},
      { roll: 2, ideal: 'Традиции. Рассказы, легенды и песни прошлого не должны забываться, так как они учат нас тому, кто мы такие. (Законный)'},
      { roll: 3, ideal: 'Творчество. Миру нужны новые идеи и смелые действия. (Хаотичный)'},
      { roll: 4, ideal: 'Жадность. Я занимаюсь всем этим ради денег и славы. (Злой)'},
      { roll: 5, ideal: 'Народ. Мне нравится видеть улыбки на лицах во время выступления. В этом-то всё дело. (Нейтральный)'},
      { roll: 6, ideal: 'Честность. Искусство должно отражать душу; оно должно идти изнутри и показывать, чем мы являемся. (Любой)'}
    ],
    bonds: [
      { roll: 1, bond: 'Мой инструмент — самое драгоценное, что у меня есть, и он напоминает мне о моей любви.'},
      { roll: 2, bond: 'Кто-то украл мой драгоценный инструмент, и когда-нибудь я верну его.'},
      { roll: 3, bond: 'Я хочу быть знаменитым, чего бы это ни стоило.'},
      { roll: 4, bond: 'Я боготворю героя старых рассказов, и всегда сравниваю свои поступки с его.'},
      { roll: 5, bond: 'Я всё сделаю, чтобы доказать превосходство над ненавистным конкурентом.'},
      { roll: 6, bond: 'Я сделаю что угодно для других членов моей старой труппы.'}
    ],
    flaws: [
      { roll: 1, flaw: 'Я пойду на всё ради славы и известности.'},
      { roll: 2, flaw: 'Не могу устоять перед смазливым личиком.'},
      { roll: 3, flaw: 'Я не могу вернуться домой из-за скандала. Неприятности такого рода словно преследуют меня.'},
      { roll: 4, flaw: 'Однажды я высмеял дворянина, который всё еще хочет оторвать мне голову. Это была ошибка, но я могу повторить её еще неоднократно.'},
      { roll: 5, flaw: 'Я не могу скрывать свои истинные чувства. Острый язык всегда приносит мне неприятности.'},
      { roll: 6, flaw: 'Я очень стараюсь исправиться, но друзьям не стоит на меня полагаться.'}
    ]
  }
};