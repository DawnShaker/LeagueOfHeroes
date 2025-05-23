import type { Species } from '../../types/species';

export const vedalken: Species = {
  id: 'vedalken',
  name: 'Ведалкен',
  nameEn: 'Vedalken',
  sourceBook: 'GGR14',
  lore: 'Ничто не идеально. Ведалкены верят в это и восхваляют это. Каждое несовершенство —это шанс на улучшение, и не важно, что это —закон или наука.\nПрогресс —это бесконечный поход в сторону совершенства, которого мы можем никогда не достичь. Оно побуждает ведалкенов выполнять свою работу с невероятным энтузиазмом, никогда не останавливаясь после неудачи и восхищаясь каждой возможностью для улучшения.',
  portrait: '/images/species/vedalken.jpg',
  type: 'гуманоид',
  size: 'Средний',
  speed: 30,
  abilities: [
    {
      title: 'Возраст',
      description: 'Ведалкены взрослеют также, как и люди. Большинство из них оседает для взрослой жизни в районе 40 лет. Их время жизни составляет около 350 – 500 лет.'
    },
    {
      title: 'Бесстрастие ведалкенов',
      description: 'Вы совершаете с преимуществом спасброски Интеллекта, Мудрости и Харизмы.'
    },
    {
      title: 'Неустанная скрупулёзность',
      description: 'Вы получаете владение одним из перечисленных навыков: Выступление, История, Ловкость рук, Магия, Медицина или Расследование. Вы также получаете владение одним инструментом по вашему выбору. Каждый раз, когда вы совершаете проверку характеристики, используя выбранный навык или инструмент, добавьте к4 к результату'
    },
    {
      title: 'Частично амфибия',
      description: 'Поглощая кислород через кожу, вы можете дышать под водой до 1 часа. Как только вы достигли этого предела, вы не сможете воспользоваться этой особенностью снова, пока не закончите продолжительный отдых.'
    }
  ]
};