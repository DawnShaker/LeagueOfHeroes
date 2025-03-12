import type { Background } from '../../types/background';

export const artisan: Background = {
  id: 'artisan',
  name: 'Ремесленник',
  nameEn: 'Artisan',
  sourceBook: 'PHB24',
  lore: 'Вы начали мыть полы и драить прилавки в мастерской ремесленника за несколько медяков в день, как только стали достаточно сильным, чтобы нести ведро. Когда вы, наконец, стали достаточно взрослым, чтобы стать учеником, вы научились создавать свои собственные простые поделки, а также научились умасливать требовательных клиентов. Ваша профессия также привила вам чуткость к деталям.',
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
    title: 'Специализация',
    description: 'Хороший артист обладает разнообразными номерами. Выберите от одного до трёх амплуа из приведённой таблицы, чтобы определить, чем вы развлекаете публику.',
    table: [
      { roll: 1, result: 'Алхимики и аптекари'},
      { roll: 2, result: 'Гончары и мастера керамики'},
      { roll: 3, result: 'Жестянщики, проволочники и литейщики'},
      { roll: 4, result: 'Каллиграфы, писцы и нотариусы'},
      { roll: 5, result: 'Каменщики и камнерезы'},
      { roll: 6, result: 'Картографы, землемеры и чертёжники'},
      { roll: 7, result: 'Кожевенники, меховщики и дубильщики'},
      { roll: 8, result: 'Кузнецы и бронники'},
      { roll: 9, result: 'Металлурги и мастера обработки металла'},
      { roll: 10, result: 'Пивовары и виноделы'},
      { roll: 11, result: 'Плотники, кровельщики и штукатуры'},
      { roll: 12, result: 'Повара и пекари'},
      { roll: 13, result: 'Сапожники и чеботари'},
      { roll: 14, result: 'Стеклодувы и стекольщики'},
      { roll: 15, result: 'Столяры, бондари и лучных дел мастера'},
      { roll: 16, result: 'Судостроители и парусные мастера'},
      { roll: 17, result: 'Тележники и колёсных дел мастера'},
      { roll: 18, result: 'Ткачи и красильщики'},
      { roll: 19, result: 'Художники, иллюстраторы и маляры'},
      { roll: 20, result: 'Ювелиры и огранщики'},
      { roll: 21, result: 'Купец'},
    ]
  },
  characteristics: {
    personalityTraits: [
      { roll: 1, trait: 'Я считаю, что всё, что делается, должно делаться правильно. Ничего не могу с этим поделать — я перфекционист.'},
      { roll: 2, trait: 'Я сноб, свысока смотрящий на тех, кто не может оценить изящное искусство.'},
      { roll: 3, trait: 'Мне всегда нужно знать, как всё вокруг устроено, и как нужно обращаться с другими.'},
      { roll: 4, trait: 'У меня много остроумных афоризмов и есть пословицы на любой случай.'},
      { roll: 5, trait: 'Я груб с теми, у кого нет моей тяги к честному и справедливому труду.'},
      { roll: 6, trait: 'О своей профессии я могу говорить часами.'},
      { roll: 7, trait: 'Я не могу легко расставаться с деньгами, и могу сколь угодно долго торговаться.'},
      { roll: 8, trait: 'Благодаря работе я прославился, и хочу, чтобы все это ценили. Меня всегда потрясает, когда другие говорят, что не слышали обо мне.'}
    ],
    ideals: [
      { roll: 1, ideal: 'Сообщество. Все цивилизованные народы обязаны укреплять сообщество и обеспечивать безопасность цивилизации. (Законный)'},
      { roll: 2, ideal: 'Великодушие. Талант был вручён мне, чтобы я использовал его на благо всего мира. (Добрый)'},
      { roll: 3, ideal: 'Свобода. Все должны быть свободны, чтобы жить так, как хочется им. (Хаотичный)'},
      { roll: 4, ideal: 'Жадность. Я просто занимаюсь этим из-за денег. (Злой)'},
      { roll: 5, ideal: 'Народ. Я предан своему народу, а не идеям. (Нейтральный)'},
      { roll: 6, ideal: 'Стремление. Я усердно работаю над тем, чтобы стать в своём деле лучшим.'}
      ],
    bonds: [
      { roll: 1, bond: 'Мастерская, где я учился ремеслу, для меня — самое важное место в мире.'},
      { roll: 2, bond: 'Я создал кое для кого удивительную работу, но посчитал его недостойным. Я всё еще ищу того, кто окажется достоин её.'},
      { roll: 3, bond: 'Я по гроб жизни обязан гильдии за то, что она сделала меня тем, кто я есть.'},
      { roll: 4, bond: 'Богатство мне нужно для завоевания сердца возлюбленной.'},
      { roll: 5, bond: 'Когда-нибудь я вернусь в гильдию и докажу, что я лучший из всех.'},
      { roll: 6, bond: 'Я мщу силам зла, которые уничтожили моё торговое дело и разрушили мою жизнь.'}
    ],
    flaws: [
      { roll: 1, flaw: 'Я сделаю всё что угодно, чтобы заполучить что-то редкое или очень ценное.'},
      { roll: 2, flaw: 'Мне всегда кажется, что меня пытаются обжулить.'},
      { roll: 3, flaw: 'Никто не должен знать, что я однажды украл деньги из казны гильдии.'},
      { roll: 4, flaw: 'Мне всегда мало того, что у меня есть — всегда нужно больше.'},
      { roll: 5, flaw: 'Я готов убить ради получения благородного титула.'},
      { roll: 6, flaw: 'Я ужасно завидую тем, кто может превзойти мой труд. Куда бы я ни пошёл, меня окружают конкуренты.'}
    ]
  }
};