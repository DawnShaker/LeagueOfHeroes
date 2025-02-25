import type { Species } from '../../types/species';

export const kobold: Species = {
  id: 'kobold',
  name: 'Кобольд',
  nameEn: 'Kobold',
  sourceBook: 'MPMM14',
  lore: 'Будучи одними из самых маленьких драконоподобных существ, кобольды отражают своё драконье наследие на своих телах в виде чешуек, а также в виде своих рыков и криков. Легенды гласят о первых кобольдах, появившихся из Подземья недалеко от логова самых первых драконов. В некоторых землях кобольды служат цветным или металлическим драконам. Они могут даже поклоняться им, принимая за божественных существ. В других местах кобольды не понаслышке знают о том, насколько опасны могут быть такие драконы. Поэтому они могут помогать другим защищаться от разрушительной силы драконов. \nКакое бы ни было родство с драконами, чешуя кобольдов обретает цвет ржавого железа, однако иногда цвет чешуи этого народа бывает очень схож с цветом металлических или цветных драконов. Рык кобольдов выражает целый спектр эмоций: гнев, решимость, восторг, страх и другие эмоции. Независимо от эмоции, которую испытывает кобольд, крик будет выражаться в виде силы дракона.',
  portrait: '/images/species/kobold.jpg',
  type: 'Гуманоид',
  size: 'Маленький',
  speed: 30,
  abilities: [
    {
      title: 'Тёмное зрение',
      description: 'У вас есть тёмное зрение в пределах 60 футов.'
    },
    {
      title: 'Рёв дракона',
      description: 'Бонусным действием вы испускаете драконоподобный рёв во врагов, находящихся в пределах 10 футов от вас. До конца вашего следующего хода вы и ваши союзники получаете преимущество на броски атаки против тех противников, кто мог услышать этот рёв. Вы можете использовать эту особенность количество раз, равное вашему бонусу мастерства, и вы восстановите все израсходованные использования после окончания продолжительного отдыха.'
    },
    {
      title: 'Наследие кобольдов',
      description: 'Связь кобольдов с драконами может проявляться непредсказуемым образом в каждом кобольде по-своему. Выберите одно из наследий ниже при выборе этой расы:'
    },
    {
      title: '',
      description: '• Хитрость. Вы получаете владение одним из следующих навыков по вашему выбору - Магия, Расследование, Медицина, Ловкость рук или Выживание.\n\n• Неповиновение.Вы с преимуществом совершаете спасброски для того чтобы избежать или окончить на себе состояние испуган.\n\n• Драконье чародейство.Вы узнаете один заговор на ваш выбор из списка заклинаний чародея. Интеллект, Мудрость или Харизма является вашей базовой характеристикой для этого заговора (выберите одну из них при выборе расы).'
    }
  ]
};