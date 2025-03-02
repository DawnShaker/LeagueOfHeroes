import type { Background } from '../../types/background';

export const charlatan: Background = {
  id: 'charlatan',
  name: 'Шарлатан',
  nameEn: 'Charlatan',
  sourceBook: 'PHB24',
  lore: 'С тех пор как вы достигли возраста, чтобы вам продали эль, у вас уже была любимая табуретка в каждой таверне в пределах 10 миль от того места, где вы родились. Путешествуя от одного питейного заведения к другому, вы научились наживаться на несчастных, которые искали утешительную ложь. Возможно, поддельное зелье или сфабрикованная родословная.',
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
    title: 'Излюбленные махинации',
    description: 'У каждого шарлатана есть свой излюбленный подход к совершению афер.',
    table: [
      { roll: 1, result: 'Я мухлюю в азартных играх.' },
      { roll: 2, result: 'Я подделываю монеты или документы.' },
      { roll: 3, result: 'Я втираюсь к людям в доверие, чтобы потом играть на их слабостях и наживаться за их счёт.' },
      { roll: 4, result: 'Я меняю личности как перчатки.' },
      { roll: 5, result: 'Я занимаюсь уличным жульничеством с помощью ловкости рук.' },
      { roll: 6, result: 'Я убеждаю людей, что эта бесполезная куча хлама стоит их кровно заработанных денег.' },
    ]
  },
  characteristics: {
    personalityTraits: [
      { roll: 1, trait: 'Я легко начинаю и разрываю романтические отношения, и постоянно нахожусь в поиске новой пассии.' },
      { roll: 2, trait: 'У меня припасены шуточки на все случаи жизни, особенно на те, где юмор вообще неуместен.' },
      { roll: 3, trait: 'Лесть — мой излюбленный способ добиться желаемого.' },
      { roll: 4, trait: 'Я прирождённый игрок, и не могу удержаться от риска, если на кону стоит что-то стоящее.' },
      { roll: 5, trait: 'Я постоянно вру, зачастую даже без малейшей на то причины.' },
      { roll: 6, trait: 'Сарказм и оскорбления — мои излюбленные приёмы.' },
      { roll: 7, trait: 'Я ношу с собой различные святые символы, и взываю к тем божествам, что лучше подходят для каждого конкретного случая.' },
      { roll: 8, trait: 'Я тащу в карман всё, что плохо лежит и имеет хоть какую-то ценность.' }
    ],
    ideals: [
      { roll: 1, ideal: 'Независимость. У меня свободолюбивая натура — никто не смеет указывать мне, что делать. (Хаотичный)' },
      { roll: 2, ideal: 'Честность. Я никогда не выберу своей жертвой людей, которые находятся в бедственном положении. (Законный)' },
      { roll: 3, ideal: 'Милосердие. Я распределяю добытые деньги между людьми, которые в них действительно нуждаются. (Добрый)' },
      { roll: 4, ideal: 'Креативность. Я никогда не иду проторённой дорожкой. (Хаотичный)' },
      { roll: 5, ideal: 'Дружба. Материальные блага приходят и уходят, а друзья остаются. (Добрый)' },
      { roll: 6, ideal: 'Стремление. Я собираюсь стать кем-то значимым в этой жизни. (Любой)' }
    ],
    bonds: [
      { roll: 1, bond: 'Я перешёл дорожку не тому человеку, и должен постоянно заботиться о том, чтобы мне и моим близким не навредили.' },
      { roll: 2, bond: 'Я всем обязан своему наставнику — ужасному человеку, который, вполне вероятно, гниёт сейчас в какой-нибудь тюрьме.' },
      { roll: 3, bond: 'Где-то живёт мой ребёнок, который не знает обо мне. И для него я пытаюсь сделать этот мир лучше.' },
      { roll: 4, bond: 'Я отпрыск благородного рода, и когда-нибудь заберу свои земли и титул у тех, кто их украл.' },
      { roll: 5, bond: 'Влиятельный враг убил дорогого мне человека. И однажды я отомщу.' },
      { roll: 6, bond: 'Я пустил по миру человека, который того не заслуживал. Я стремлюсь искупить свой проступок, но скорее всего никогда себя не прощу.' }
    ],
    flaws: [
      { roll: 1, flaw: 'Я не могу устоять перед смазливой мордашкой.' },
      { roll: 2, flaw: 'Я постоянно в долгах. Я трачу свои нечестно нажитые деньги быстрее, чем их добываю.' },
      { roll: 3, flaw: 'Я убеждён в том, что никто не сможет одурачить меня так, как я одурачиваю других.' },
      { roll: 4, flaw: 'Я слишком жаден до золота. И не могу противиться риску, если в этом замешаны деньги.' },
      { roll: 5, flaw: 'Я не могу устоять и не облапошить людей, стоящих гораздо выше, чем я.' },
      { roll: 6, flaw: 'Я ненавижу себя за это, но я сбегу, чтобы спасти свою собственную шкуру, если вдруг запахнет жареным.' }
    ]
  }
};