import type { Species } from '../../types/species';

export const aarakokra: Species = {
  id: 'aarakokra',
  name: 'Ааракокра',
  nameEn: 'Aarakokra',
  sourceBook: 'MPMM14',
  lore: 'Крылатый народ, родом из Стихийного Плана Воздуха, ааракокра парят в небе, где бы они ни находились. Первые ааракокра служили герцогам Ветра Аакуа — могущественным воздушным существам — и были наделены определенной властью своих хозяев над ветрами. Их потомки все еще владеют отголосками этой силы.\nС земли ааракокры выглядят как большие птицы, и поэтому их иногда называют птицелюдами. Только когда они спускаются на свои насесты на ветвях или ходят по земле, раскрывается их гуманоидный облик. Стоя прямо, ааракокра может достигать 5 футов высотой. У них длинные, тонкие ноги, заканчивающиеся острыми когтями. Их тела покрывают перья — обычно красные, оранжевые, желтые, коричневые или серые.Их птичьи головы внешне напоминают гибрид попугая и орла.',
  portrait: '/images/species/aarakocra.png',
  type: 'гуманоид',
  size: 'Средний',
  speed: 30,
  abilities: [
    {
      title: 'Возраст',
      description: 'Ааракокры достигают зрелости к 3 годам. Обычно ааракокры не живут дольше 30 лет.'
    },
    {
      title: 'Полёт',
      description: 'Благодаря вашим крыльям вы обладаете скоростью полёта, равной вашей скорости ходьбы. Вы не можете использовать эту скорость полёта, если вы облачены в средние или тяжёлые доспехи.'
    },
    {
      title: 'Когти',
      description: 'У вас есть когти, которые вы можете использовать для совершения безоружных ударов. Когда вы попадаете атакой ими, удар наносит 1к6 + ваш модификатор Силы рубящего урона, вместо дробящего урона, свойственного безоружным ударам.'
    },
    {
      title: 'Зовущий ветер',
      description: 'Начиная с 3-го уровня, вы можете накладывать заклинание Порыв ветра с помощью этой особенности, без затрат материального компонента. Как только вы наложите заклинание с помощью этой особенности, вы не сможете наложить его подобным образом снова, пока не закончите продолжительный отдых. Вы также можете накладывать это заклинание, используя любые имеющиеся у вас ячейки заклинаний 2-го уровня или выше.\nИнтеллект, Мудрость или Харизма является вашей базовой характеристикой, когда вы накладываете Порыв ветра с помощью этой особенности (выберите одну из них при выборе этого вида).'
    }
  ]
};