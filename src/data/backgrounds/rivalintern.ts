import type { Background } from '../../types/background';

export const rivalintern: Background = {
  id: 'rivalintern',
  name: 'Стажёр конкурента',
  nameEn: 'Rival Intern',
  sourceBook: 'PHB24',
  lore: 'Вы были стажёром в конкурирующей компании Acquisitions Incorporated и она завоевала ваше здоровое уважение не только своей работой и за возможности франчайзинга, но и за безжалостный и эффективный способ, которым Acquisitions Incorporated занимается своим делом. Зачем заниматься остальными, когда можно работать на лучшее? Возможно, соперник относился к вам не так хорошо, как вы надеялись, или вы вылетели из этой организации. Возможно, вы надеетесь использовать полученные там знания для получения преимущества в Acquisitions Incorporated. В любом случае, теперь вы привносите свои таланты в компанию, готовые применить свои навыки на практике.',
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
  characteristics: {
    personalityTraits: [
      { roll: 1, trait: 'Мой предыдущий работодатель не уважал меня, и теперь я сделаю все возможное, чтобы добиться уважения.' },
      { roll: 2, trait: 'Работа важна, но отношения, которые я налаживаю с коллегами, еще важнее.' },
      { roll: 3, trait: 'Работа для меня все. Кому нужны отдых, хобби и социальная жизнь?' },
      { roll: 4, trait: 'Я знаю, что я не самый лучший и умный, но если я приложу все усилия, я смогу преодолеть все.' },
      { roll: 5, trait: 'Мой бывший босс был идиотом. Так было с моим боссом до этого. И до этого. Я уверен, что все это были совпадения.' },
      { roll: 6, trait: 'Эта компания намного лучше, чем моя предыдущая. Она будет лучшей, пока мне продолжают платить.' },
      { roll: 7, trait: 'Я знаю, что этот кинжал принадлежит компании, но я уверен, что они не будут скучать по нему. Или по этой фляге. Или этому доспеху.' },
      { roll: 8, trait: 'Это только вопрос времени, когда я стану высшим руководством. Мне просто нужно подлизываться к начальству и пинать тех, кто ниже меня.' }
    ],
    ideals: [
      { roll: 1, ideal: 'Продвижение. Деньги и власть легче получить внутри организации. Я планирую получить как можно больше. (Злой)' },
      { roll: 2, ideal: 'Структура. Жизнь идет гораздо более гладко, когда вы следуете правилам и работаете в рамках системы. (Законный)' },
      { roll: 3, ideal: 'Неопределенность. Чем больше хаоса крутится вокруг меня, тем больше возможностей я могу найти для получения прибыли. (Хаотичный)' },
      { roll: 4, ideal: 'Справедливость. Терпеть не могу, когда с людьми обращаются несправедливо. Я делаю все возможное, чтобы остановить несправедливость и тех, кто нарушает закон. (Законный)' },
      { roll: 5, ideal: 'Удовольствие. Какой смысл упорно трудиться и зарабатывать деньги, если вы не можете наслаждаться прекрасными вещами в жизни? (Любой)' },
      { roll: 6, ideal: 'Сила. Деньги — это хорошо, но настоящая власть означает, что вам никогда не придется извиняться. (Злой)' }
    ],
    bonds: [
      { roll: 1, bond: 'У меня есть нуждающийся член семьи. Я учитываю его во всём, что делаю.' },
      { roll: 2, bond: 'Мои сверстники не дают мне задирать нос.' },
      { roll: 3, bond: 'Мои прошлые ошибки дорого обошлись кому-то другому. Я должен исправить это.' },
      { roll: 4, bond: 'Наставник детства направил меня на мой нынешний путь. Если мне это удастся, я хочу как-то отплатить этому наставнику.' },
      { roll: 5, bond: 'Я ценю клятву верности, которую я дал группе друзей, больше всего на свете.' },
      { roll: 6, bond: 'Хотя я плохо лажу с людьми, мой питомец для меня - целый мир.' }
    ],
    flaws: [
      { roll: 1, flaw: 'Я знаю, что лучше. Поверьте мне.' },
      { roll: 2, flaw: 'Недостатки? У меня нет недостатков. Я идеален.' },
      { roll: 3, flaw: 'Мои привязанности... изменчивы.' },
      { roll: 4, flaw: 'Если что-то пойдет не так, это должна быть чья-то ещё вина. Позвольте мне объяснить это подробно.' },
      { roll: 5, flaw: 'Есть правильное и неправильное, и между ними нет серой зоны.' },
      { roll: 6, flaw: 'Нашему начальству может не понравиться то, что вы делаете. Я собираюсь указать это в своём отчете.' }
    ]
  }
};