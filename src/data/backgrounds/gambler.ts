import type { Background } from '../../types/background';

export const gambler: Background = {
  id: 'gambler',
  name: 'Азартный игрок',
  nameEn: 'Gambler',
  sourceBook: 'AI14',
  lore: 'Всё, что вам нужно, чтобы заработать много золота, это немного золота. За исключением тех случаев, когда все, что вам нужно, чтобы совсем не иметь золота, — это немного золота. Хороший вы игрок, или плохой - не имеет значения, потому что никто не может предугадать прихоти Госпожи Удачи. Иногда ты наверху, иногда ты внизу. Но особенность азартных игр в том, что кто-то всегда готов сделать ставку.',
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
      description: '1 владение: ремесленный/неремесленный инструмент, набор, транспорт, музыкальный инструмент, игровой набор'
    },
    equipment: '50 зм'
  },
  characteristics: {
    personalityTraits: [
      { roll: 1, trait: 'Я планирую все непредвиденные обстоятельства. Ничего не оставляйте на волю случая!'},
      { roll: 2, trait: 'Я слежу за друзьями, как если бы они были слепыми котятами.'},
      { roll: 3, trait: 'Я один из любимцев Госпожи Удачи. Всё, что я пробую, обречено на успех.'},
      { roll: 4, trait: 'Я так много проиграл в азартные игры, что больше отказываюсь тратить деньги на что-либо.'},
      { roll: 5, trait: 'Нет ничего определенного. Планирование — это трусость.'},
      { roll: 6, trait: 'Я не могу быть уверен, кого я обвёл вокруг пальца, обманул или победил, поэтому на публике я держусь в тени.'},
      { roll: 7, trait: 'Идеальная ставка где-то рядом. Мне просто нужно держать глаза открытыми.'},
      { roll: 8, trait: 'Я победил свою зависимость, но достаточно одного момента слабости, и я снова вернусь за карточный стол.'}
    ],
    ideals: [
      { roll: 1, ideal: 'Знание. Знание — сила, а знание того, на какую лошадь ставить, — ключ к успеху. (Любой)'},
      { roll: 2, ideal: 'Судьба. Все, что происходит, предопределено судьбой, независимо от каких-либо планов или стремлений. (Законный)'},
      { roll: 3, ideal: 'Храбрость. Если вы хотите добиться успеха, вы должны рисковать. (Хаотичный)'},
      { roll: 4, ideal: 'Выживание. Ты не можешь победить, если ты мертв. Живи, чтобы сразиться на другой день - когда шансы могут быть больше в вашу пользу. (Любой)'},
      { roll: 5, ideal: 'Надежность. Когда я нуждался, я мог положиться на других. Теперь я хочу быть тем, на кого полагаются другие. (Добрый)'},
      { roll: 6, ideal: 'Победа. Победа - это реальная мера человека. В конце концов, единственное, что имеет значение, это табло. (Злой)'}
    ],
    bonds: [
      { roll: 1, bond: 'В частности, один человек должен мне много денег, и мне нужно сохранить ему жизнь, если я хочу вернуть своё.'},
      { roll: 2, bond: 'Я верен другу или члену семьи, который научил меня играть в азартные игры.'},
      { roll: 3, bond: 'Человек, который спас меня от игровой зависимости, - единственная причина, по которой я сегодня жив.'},
      { roll: 4, bond: 'Однажды покровитель дал мне деньги в обмен на процент от моего выигрыша. Я должен выказать ему признательность. И много денег'},
      { roll: 5, bond: 'Преступный синдикат, для которого я когда-то играл, недоволен тем, что я вышел из игры, и его силовики разыскивают меня.'},
      { roll: 6, bond: 'Беспризорники однажды помогли мне найти жертв для моих игр. Теперь я должен помочь им покинуть улицы.'}
    ],
    flaws: [
      { roll: 1, flaw: 'Я не знаю, когда бросить. Особенно, когда все остальные говорят мне об этом.'},
      { roll: 2, flaw: 'Я сочувствую только своим друзьям, а друзей у меня нет.'},
      { roll: 3, flaw: 'Думаешь, у нас сейчас проблемы? Позвольте мне рассказать вам, насколько хуже всё может стать!'},
      { roll: 4, flaw: 'Ты можешь одолжить мне немного, верно? У меня есть верное дело. Я удвою твои деньги, гарантированно.'},
      { roll: 5, flaw: 'Я тайно считаю, что было бы хорошо стать тираном, правящим землями.На любые неурядицы я почти всегда отвечаю насилием.'},
      { roll: 6, flaw: 'Не думайте, что я буду спасать тех, кто не может сам о себе позаботиться. Сильные должны процветать, а слабые погибают, и это нормально.'}
    ]
  }
};