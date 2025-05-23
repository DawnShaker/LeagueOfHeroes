import type { Species } from '../../types/species';

export const simikhybrid: Species = {
  id: 'simikhybrid',
  name: 'Гибрид симиков',
  nameEn: 'Simik hybrid',
  sourceBook: 'GGR14',
  lore: 'Гибриды Симиков переняли многие характеристики своей оригинальной расы, включая свою базовую физическую форму.\nГибриды-люди — самые универсальные, они могут играть множество ролей. Ловкие гибриды-эльфы сохраняют способность видеть в темноте, что делает их идеальными шпионами, разведчиками и убийцами.\nВедалкены-гибриды наследуют тот же расчётливый интеллект, что и сами ведалкены, что делает их непревзойденными тактиками, стратегами и заклинателями.\nБиологические усовершенствования гибридов Симиков могут существенно изменить их внешность. Все гибриды наследуют некоторые физические характеристики животных, в основном водных или ящероподобных существ.\nВ это число входят клешни крабов, щупальца кальмаров, крылья, которые выглядят как гребные плавники, полупрозрачную или камуфляжную кожу, или пасть, похожую на акулью, в которой скрывают острейшие зубы.\nГибриды — это творения магии Симиков. Однако у гибрида есть шанс покинуть Объединение Симиков и присоединиться к другой гильдии. Такие гибриды будут считаться дезертирами. Поэтому новая гильдия может никогда не принять его в качестве своего, так как может считать его шпионом Симиков.',
  portrait: '/images/species/simikhybrid.jpg',
  type: 'гуманоид',
  size: 'Средний',
  speed: 30,
  abilities: [
    {
      title: 'Возраст',
      description: 'Гибриды начинают свою жизнь в качестве совершеннолетнего человека, эльфа или ведалкена. Они проявляют признаки незначительного ускорения старения, поэтому их максимальный возраст немного снижен.'
    },
    {
      title: 'Тёмное зрение',
      description: 'У вас есть тёмное зрение в пределах 60 футов.'
    },
    {
      title: 'Животное усиление',
      description: 'Ваше тело изменилось для того, чтобы придать ему некоторые характеристики животного. На 1-м уровне у вас есть возможность выбрать одну из следующих особенностей:'
    },
    {
      title: '',
      description: '• Мантия ската. Ваши скатообразные (плоские) крылья могут замедлить ваше падение и позволяют вам планировать. Когда вы падаете и дееспособны, вы можете вычесть до 100 футов падения для определения урона от падения. Вы также можете переместиться на 2 фута горизонтально за каждый 1 фут падения.\n\n• Проворный скалолаз. Скорость лазанья равна вашей скорости ходьбы.\n\n• Подводная адаптация. Вы можете дышать как воздухом, так и водой, а ваша скорость плаванья равна вашей скорости ходьбы.'
    },
    {
      title: '',
      description: 'На 5-м уровне вы можете выбрать одну из описанных ниже особенностей или взять еще одну из предложенных на 1-м уровне:'
    },
    {
      title: '',
      description: '• Хватательные придатки. У вас есть два дополнительных придатка, которые растут вместе с вашими руками. Вы можете выбрать их вид (клешни или щупальца). Действием вы можете использовать один из придатков, чтобы попытаться схватить существо. Каждый из этих придатков является природным рукопашным оружием, которое вы можете использовать для совершения безоружной атаки. Если вы попадаете им, то цель получает дробящий урон в размере 1к6 + ваш модификатор Силы вместо обычного дробящего урона от безоружной атаки. Сразу же после попадания вы можете попытаться схватить цель бонусным действием. Эти придатки не могут с чем-то взаимодействовать или держать оружие, магические предметы и другое специальное снаряжение.\n\n• Панцирь. Ваша кожа покрыта прочным панцирем. Вы получаете +1 к КД пока не носите тяжёлый доспех.\n\n• Кислотный плевок. Действием вы можете выплеснуть струю кислоты из своих гланд, нацелившись на одно существо находящееся на расстоянии 30 футов. Цель получает 2к10 урона кислотой при провале спасброска Ловкости (Сл 8 + ваш модификатор Телосложения + ваш бонус мастерства). Этот урон увеличивается на 1к10 на 11 (3к10) и 17 (4к10) уровнях. Вы можете использовать эту особенность количество раз, равное вашему модификатору Телосложения (минимум один раз). Вы восстанавливаете данную особенность после окончания продолжительного отдыха.'
    }
  ]
};