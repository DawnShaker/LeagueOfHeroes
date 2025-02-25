import type { Species } from '../../types/species';

export const satyr: Species = {
  id: 'satyr',
  name: 'Сатир',
  nameEn: 'Satyr',
  sourceBook: 'MPMM14',
  lore: 'Родом из Страны Фей — царства чистых эмоций - сатиры живут за счет энергии веселья. Они похожи на эльфов, но имеют козлиные ноги, раздвоенные копыта и бараньи или козлиные рога. Магия Страны Фей наделила их врожденной способностью выступать, радоваться и сопротивляться магическому вторжению. Обычно их можно встретить в Стране Фей, но в действительности сатиры блуждают по многим планам существования, чаще всего по Материальному плану. Там они стремятся привнести частичку блеска своего родного плана в другие миры.',
  portrait: '/images/species/satyr.jpg',
  type: 'Фея',
  size: 'Средний',
  speed: 35,
  abilities: [
    {
      title: 'Таран',
      description: 'Вы можете использовать свою голову и рога, для нанесения безоружных ударов. Когда вы атакуете ими, вы наносите 1к6 + ваш модификатор Силы дробящего урона, вместо обычного для безоружного удара количества дробящего урона.'
    },
    {
      title: 'Сопротивление магии',
      description: 'Вы с преимуществом совершаете спасброски от заклинаний.'
    },
    {
      title: 'Зрелищные прыжки',
      description: 'Каждый раз, когда вы совершаете прыжок в длину или высоту, вы можете бросить к8 и прибавить выпавшее число к количеству футов, которое вы можете преодолеть прыжком, даже если прыгаете с места. Это дополнительное расстояние стоит передвижение, как и обычное.'
    },
    {
      title: 'Гуляка',
      description: 'Как воплощение веселья, вы получаете владение навыками Выступление и Убеждение, а также получаете владение одним музыкальным инструментом по вашему выбору.'
    }
  ]
};