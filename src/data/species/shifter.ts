import type { Species } from '../../types/species';

export const shifter: Species = {
  id: 'shifter',
  name: 'Шифтер',
  nameEn: 'Shifter',
  sourceBook: 'MPMM14',
  lore: 'Шифтеров иногда называют ликантропами, поскольку они являются потомками людей, которые были заражены полной или частичной ликантропией. Гуманоиды со звериным обликом, шифтеры не могут полностью изменять форму, но они могут временно усилить свои животные черты, войдя в состояние, которое они называют Смена формы. Шифтеры похожи на людей по росту и телосложению, но, как правило, более стройные и гибкие. Их черты лица имеют звериные нотки, часто с большими глазами и заостренными ушами; у большинства шифтеров также есть выступающие клыки. У них растут похожие на мех волосы почти на каждой части тела. Пусть внешний вид шифтера и может выдать в них животного, они все равно остаются шифтерами даже в своем самом диком облике. Большинство шифтеров напоминают определенный вид ликантропов. Вы можете выбрать вид ликантропа из вашего прошлого или вы можете определить его случайным образом, совершив бросок по таблице «Ликантроп предок». В таблице также содержится предложение относительно варианта Смены формы, который может быть у вас в результате вашей родословной.',
  portrait: '/images/species/shifter.jpg',
  type: 'гуманоид',
  size: 'Средний',
  speed: 30,
  abilities: [
    {
      title: 'Возраст',
      description: 'Шифтеры очень быстро взрослеют как физически, так и эмоционально, достигая совершеннолетия в 10 лет. Они очень редко доживают до 70 лет.'
    },
    {
      title: 'Тёмное зрение',
      description: 'У вас есть тёмное зрение в пределах 60 футов.'
    },
    {
      title: 'Смена формы',
      description: 'Бонусным действием вы можете принять около звериный вид. Эта трансформация длится 1 минуту, до тех пор, пока вы не умрёте, или пока вы не решите вернуться в изначальное состояние бонусным действием. Когда вы трансформируетесь, вы получаете временные хиты, равные 2 х ваш бонус мастерства. Вы можете изменять свою форму количество раз, равное вашему бонусу мастерства. Вы восстанавливаете все потраченные использования по окончании продолжительного отдыха.\nВсякий раз, когда вы изменяете форму, вы получаете дополнительные преимущества, основанное на одном из следующих вариантов (выберите одно, при выборе этой расы):'
    },
    {
      title: '',
      description: '• Зверошкур. Вы дополнительно получаете 1к6 временных хитов. Пока вы находитесь в изменённой форме, вы также получаете +1 к КД.\n\n• Длиннозуб. Когда вы изменяете форму и во время других ваших ходов, пока вы в изменённой форме, бонусным действием вы можете использовать свои длинные клыки для совершения безоружного удара. Если вы попадаете атакой клыками, то вы наносите 1к6 + ваш модификатор Силы колющего урона, вместо дробящего урона, свойственного безоружным ударам.\n\n• Быстроног. Пока вы находитесь в изменённой форме, ваша скорость ходьбы увеличивается на 10 футов. Кроме того, вы можете реакцией переместиться на расстояние до 10 футов, когда существо заканчивает свой ход в пределах 5 футов от вас. Это передвижение не провоцирует атак.\n\n• Дикий охотник. Пока вы находитесь в изменённой форме, вы совершаете проверки Мудрости с преимуществом и ни одно существо в пределах 30 футов от вас не может с преимуществом совершать бросок атаки против вас, пока вы дееспособны.'
    }
  ]
};