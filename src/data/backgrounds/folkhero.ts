import type { Background } from '../../types/background';

export const folkhero: Background = {
  id: 'folk hero',
  name: 'Народный герой',
  nameEn: 'Folk hero',
  sourceBook: 'PHB24',
  lore: 'У вас было низкое социальное положение, но судьбой было уготовано большее. Жители вашей родной деревни уже считают вас своим героем, но вам предначертано сражаться с тиранами и чудовищами, угрожающими другим.',
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
  variants: {
    title: 'Определяющее событие',
    description: 'Вы занимались обычным делом для деревенщины. Возможно, вы возделывали землю, трудились в шахте, прислуживали дворянину, пасли скот, рубили деревья или копали могилы. Но потом произошло нечто, втянувшее вас в великие события. Выберите или определите случайно определяющее событие, сделавшее вас героем среди своего народа.',
    table: [
      { roll: 1, result: 'Я дал отпор прислужникам тирана.'},
      { roll: 2, result: 'Я спас народ от природного катаклизма.'},
      { roll: 3, result: 'Я сразился один на один с ужасным чудищем.'},
      { roll: 4, result: 'Я обокрал продажного торговца, чтобы помочь бедным.'},
      { roll: 5, result: 'Я возглавил ополчение, отбросившее врага.'},
      { roll: 6, result: 'Я вломился в замок тирана и украл оружие для своего народа.'},
      { roll: 7, result: 'Я учил крестьян, как использовать обычные инструменты в качестве оружия против солдат тирана.'},
      { roll: 8, result: 'Лорд отменил непопулярный закон после того как я выступил с акцией протеста.'},
      { roll: 9, result: 'Небожитель, фея или другое подобное существо благословило меня или открыло тайну моего рождения.'},
      { roll: 10, result: 'Вступив в армию лорда, я получил хорошее звание и заслужил благодарности.'},
    ]
  },
  characteristics: {
    personalityTraits: [
      { roll: 1, trait: 'Я сужу других по поступкам, а не словам.'},
      { roll: 2, trait: 'Если кто-то в беде, я всегда готов прийти на помощь.'},
      { roll: 3, trait: 'Задумав что-то, я прямолинейно иду к цели, невзирая на помехи.'},
      { roll: 4, trait: 'У меня обострённое чувство справедливости, и в споре я всегда ищу самого честного решения.'},
      { roll: 5, trait: 'Я уверен в своих способностях, и стараюсь внушить такую же уверенность в других.'},
      { roll: 6, trait: 'Пусть думают другие. Я предпочитаю действовать.'},
      { roll: 7, trait: 'Я неправильно произношу длинные слова, когда пытаюсь выглядеть умнее.'},
      { roll: 8, trait: 'Я быстро устаю. Когда уже я найду свою судьбу?'}
    ],
    ideals: [
      { roll: 1, ideal: 'Уважение. Нужно относиться друг к другу с достоинством и уважением. (Добрый)'},
      { roll: 2, ideal: 'Справедливость. Закон не должен делать ни для кого исключений, и никто не может стать выше закона. (Законный)'},
      { roll: 3, ideal: 'Свобода. Тираны не должны угнетать народ. (Хаотичный)'},
      { roll: 4, ideal: 'Мощь. Если я стану сильным, я смогу брать то, что захочу — и я это заслуживаю. (Злой)'},
      { roll: 5, ideal: 'Искренность. Нет ничего хорошего в том, что ты притворяешься тем, кем не являешься. (Нейтральный)'},
      { roll: 6, ideal: 'Судьба. Никто и ничто не собьёт меня с пути к высшему призванию. (Любое)'}
    ],
    bonds: [
      { roll: 1, bond: 'У меня есть семья, но я не знаю, где она. Надеюсь, когда-нибудь я увижу их вновь.'},
      { roll: 2, bond: 'Я работал на земле, я люблю землю, и я буду защищать землю.'},
      { roll: 3, bond: 'Один благородный меня дико поколотил, и я вымещаю свой гнев на всех встреченных задирах.'},
      { roll: 4, bond: 'Мои инструменты — символ моей былой жизни, и я ношу их, чтобы не забывать корни.'},
      { roll: 5, bond: 'Я защищаю тех, кто не может защитить себя сам.'},
      { roll: 6, bond: 'Хотел бы я, чтобы та, кого я любил в детстве, разделила со мной судьбу.'}
    ],
    flaws: [
      { roll: 1, flaw: 'Тиран, правящий моими землями, ни перед чем не остановится, лишь бы убить меня.'},
      { roll: 2, flaw: 'Я слепо верю в своё предназначение, и не замечаю ни своих недостатков, ни смертельных опасностей.'},
      { roll: 3, flaw: 'Те, кто знают меня молодым, знают и мою самую постыдную тайну, так что я никогда не вернусь домой.'},
      { roll: 4, flaw: 'Я беззащитен перед пороками большого города, особенно перед пьянством.'},
      { roll: 5, flaw: 'Я тайно считаю, что было бы хорошо стать тираном, правящим землями.'},
      { roll: 6, flaw: 'Я не доверяю союзникам.'}
    ]
  }
};