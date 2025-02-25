import type { Species } from '../../types/species';

export const genasi: Species = {
  id: 'genasi',
  name: 'Дженази',
  nameEn: 'Genasi',
  sourceBook: 'MPMM14',
  lore: 'Ведущие свою родословную от гениев Стихийных Планов, каждый дженази может использовать силу одной из стихий. Воздух, земля, огонь и вода — это четыре столпа Материального плана и четыре типа дженази. Некоторые дженази являются прямыми потомками гениев, в то время как другие родились у родителей, не являющихся дженази, которые жили недалеко от мест, наполненных магией гения.',
  portrait: '/images/species/genasi.jpg',
  type: 'гуманоид',
  size: 'Маленький или Средний',
  speed: 30,
  abilities: [
    {
      title: 'Тёмное зрение',
      description: 'У вас есть тёмное зрение в пределах 60 футов.'
    }
  ],
    variants: [
      {
        name: 'Дженази Воздуха',
        nameEn: 'Air Genasi',
        sourceBook: 'MPMM14',
        lore: 'Воздушные дженази произошли от джиннов, гениев Стихийного плана Воздуха. Воплощая многие воздушные черты своих инопланарных предков, воздушные дженази могут использовать свою связь с ветрами.\nЦвет кожи воздушных дженази включают в себя множество оттенков синего, наряду со всеми цветами человеческой кожи, но с голубоватыми или пепельными оттенками. Иногда на коже воздушных дженази присутствуют линии, кажущиеся трещинами, из которых струится голубовато-белая энергия. Волосы воздушного дженази могут развеваться на призрачном ветру или быть полностью сотканы из облаков или пара.',
        abilities: [
        {
          title: 'Тёмное зрение',
          description: 'У вас есть тёмное зрение в пределах 60 футов.'
        },
        {
          title: 'Скорость',
          description: 'Ваша базовая скорость ходьбы — 35 футов.'
        },
        {
          title: 'Бесконечное дыхание',
          description: 'Пока вы дееспособны, вы можете задерживать дыхание на неопределённое время.'
        },
        {
          title: 'Сопротивление электричеству',
          description: 'Вы обладаете сопротивлением урону электричеством.'
        },
        {
          title: 'Общение с ветром',
          description: 'Начиная с 3-го уровня, вы можете накладывать заклинание Падение пёрышком с помощью этой особенности. Начиная с 5-го уровня, вы также можете накладывать заклинание Левитация, без использования материальных компонентов, с помощью этой особенности. После накладывания одного из этих заклинаний с помощью особенности вы должны закончить продолжительный отдых, прежде чем сможете вновь наложить его таким образом. Вы также можете накладывать эти заклинания, используя ячейки заклинаний подходящего уровня.\nКроме того, вы знаете заговор Электрошок. Интеллект, Мудрость или Харизма является вашей базовой характеристикой для этих заклинаний (выберите одну из них при выборе этой расы).'
        }
      ],
      replacesAbilities: ['Тёмное зрение', 'Тёмное зрение', 'Тёмное зрение', 'Тёмное зрение', 'Тёмное зрение']
    },
        {
        name: 'Дженази Земли',
        nameEn: 'Earth Genasi',
        sourceBook: 'MPMM14',
        lore: 'Ведущие свою родословную от дао, гениев Стихийного плана Земли, земляные дженази наследуют непоколебимую силу дао и контроль над землей.\nКожа земляного дженази может быть цвета камня и земли или оттенка человеческой кожи со сверкающими искорками, похожими на пыль драгоценных камней. У некоторых земляных дженази на коже присутствуют линии, похожие на трещины, которые либо демонстрируют мерцающие вены, похожие на драгоценные камни, либо испускающие тусклое желтоватое свечение. Волосы земляного дженази могут казаться вырезанными из камня или кристаллов, или напоминать пряди закрученного металла.',
        abilities: [
        {
          title: 'Тёмное зрение',
          description: 'У вас есть тёмное зрение в пределах 60 футов.'
        },
        {
          title: 'Хождение по земле',
          description: 'Вы можете перемещаться по труднопроходимой местности, не затрачивая дополнительное движение, если перемещаетесь по земле или полу.'
        },
        {
          title: 'Слияние с камнем',
          description: 'Вам известен заговор Защита от оружия. Вы можете накладывать его как обычно, а также можете наложить его бонусным действием количество раз, равное вашему бонусу мастерства. Вы восстанавливаете все потраченные использования по окончании продолжительного отдыха.\nНачиная с 5-го уровня, вы также можете наложить заклинание Бесследное передвижение, без использования материальных компонентов. Как только вы накладываете это заклинание подобным образом, вам необходимо закончить продолжительный отдых, чтобы наложить это заклинание подобным образом вновь. Вы также можете наложить его, используя любые имеющиеся у вас ячейки заклинаний 2-го уровня или выше.\nИнтеллект, Мудрость или Харизма является вашей базовой характеристикой для этих заклинаний (выберите одну из них при выборе этой расы).'
        }
      ],
      replacesAbilities: ['Тёмное зрение', 'Тёмное зрение', 'Тёмное зрение']
      },
        {
        name: 'Дженази Огня',
        nameEn: 'Fire Genasi',
        sourceBook: 'MPMM14',
        lore: 'Происходящие от ифритов, гениев Стихийного плана Огня, огненные дженази используют яркую и часто разрушительную природу пламени. Их наследие проявляется в оттенках кожи, которые могут варьироваться от темно-угольного до оттенков красного и оранжевого. Некоторые имеют типичный оттенок кожи, свойственный людям, но с огненными отметинами, такими как медленно вращающиеся огни под их кожей, которые напоминают тлеющие угли, или светящиеся красные линии, проходящие по их телам, как трещины. Волосы огненного дженази могут напоминать огненные пряди или копоти дыма.',
        abilities: [
        {
          title: 'Тёмное зрение',
          description: 'У вас есть тёмное зрение в пределах 60 футов.'
        },
        {
          title: 'Скорость',
          description: 'Ваша базовая скорость ходьбы — 35 футов.'
        },
        {
          title: 'У вас есть сопротивление урону огнём.',
          description: 'Начиная с 3-го уровня, вы можете накладывать заклинание Огненные ладони с помощью этой особенности. Начиная с 5-го уровня, вы также можете накладывать заклинание Горящий клинок, без использования материальных компонентов с помощью этой особенности. После накладывания одного из этих заклинаний с помощью особенности вы должны закончить продолжительный отдых, прежде чем сможете вновь наложить его таким образом. Вы также можете накладывать эти заклинания, используя ячейки заклинаний подходящего уровня.\nКроме того, вы знаете заговор Сотворение пламени. Интеллект, Мудрость или Харизма является вашей базовой характеристикой для этих заклинаний (выберите одну из них при выборе этой расы).'
        }
      ],
      replacesAbilities: ['Тёмное зрение', 'Тёмное зрение', 'Тёмное зрение']
      },
        {
        name: 'Дженази Воды',
        nameEn: 'Water Genasi',
        sourceBook: 'MPMM14',
        lore: 'Водные дженази происходят от маридов, водных гениев со Стихийного плана Воды. Водные дженази идеально подходят для жизни под водой и несут в себе силу волн.\nИх кожа часто имеет оттенки синего или зеленого, иногда представляя смесь обоих. Если они имеют оттенок человеческой кожи, то имеют глянцевую текстуру, которая отражает свет, как капли воды или почти невидимая рыбья чешуя. Их волосы могут напоминать морские водоросли, колышущиеся, как будто в течении или даже могут быть похожи на саму воду.',
        abilities: [
        {
          title: 'Тёмное зрение',
          description: 'У вас есть тёмное зрение в пределах 60 футов.'
        },
        {
          title: 'Скорость',
          description: 'Ваша базовая скорость ходьбы — 30 футов и вы обладаете скоростью плавания, равной вашей скорости ходьбы.'
        },
        {
          title: 'Сопротивление кислоте',
          description: 'Вы обладаете сопротивлением урону кислотой.'
        },
        {
          title: 'Амфибия',
          description: 'Вы можете дышать на суше и под водой.'
        },
        {
          title: 'Призыв волны',
          description: 'Начиная с 3-го уровня, вы можете накладывать заклинание Сотворение или уничтожение воды с помощью этой особенности. Начиная с 5-го уровня, вы также можете накладывать заклинание Хождение по воде, без использования материальных компонентов с помощью этой особенности. После накладывания одного из этих заклинаний с помощью особенности вы должны закончить продолжительный отдых, прежде чем сможете вновь наложить его таким образом. Вы также можете накладывать эти заклинания, используя ячейки заклинаний подходящего уровня.\nКроме того, вы знаете заговор Брызги кислоты. Интеллект, Мудрость или Харизма является вашей базовой характеристикой для этих заклинаний (выберите одну из них при выборе этой расы).'
        }
      ],
      replacesAbilities: ['Тёмное зрение', 'Тёмное зрение', 'Тёмное зрение', 'Тёмное зрение', 'Тёмное зрение']
      }
    ]
};