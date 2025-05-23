import type { Species } from '../../types/species';

export const elf: Species = {
  id: 'elf',
  name: 'Эльф',
  nameEn: 'Elf',
  sourceBook: 'PHB24',
  variants: [
    {
      name: 'Астральный эльф',
      nameEn: 'Astral elf',
      sourceBook: 'SAS14',
      lore: 'Много лет назад группа эльфов покинула Страну Фей и направилась на Астральный план, чтобы быть ближе к своим богам. Жизнь в Серебряной Пустоте наделила их души частичкой божественного света. Этот свет выглядит как звездные отблески в глазах астрального эльфа.\nПо причине того, что никто не стареет на Астральном плане, возраст астральных эльфов достигает нескольких тысяч лет, а их долголетие подарило им необычный взгляд на само время. Некоторые из них погружены в меланхолию, когда как другие выражают полное отсутствие чувств. Многие ищут креативные способы занять себя. Не важно, выбрали ли они тихое созерцание или рвутся исследовать границы мультивселенной, они склонны видеть вещи через призму времени. С таким подходом почти все либо мало значит для них, либо вовсе не имеет значения.\nАстральные эльфы, не обитающие на Астральном плане, могут жить больше 750 лет.',
      abilities: [
        {
          title: 'Астральное пламя',
          description: 'Вы знаете один из следующих заговоров по вашему выбору: Пляшущие огоньки, Свет или Священное пламя. Вашей базовой характеристикой для этих заговоров является Интеллект, Мудрость или Харизма (выберите одну из них при выборе вида).'
        },
        {
          title: 'Звёздный шаг',
          description: 'Бонусным действием вы можете волшебным образом телепортироваться на расстояние до 30 футов в свободное пространство, которое вы видите. Вы можете использовать эту особенность количество раз, равное вашему бонусу мастерства, и вы восстанавливаете все потраченные использования, когда заканчиваете продолжительный отдых.'
        },
        {
          title: 'Астральный транс',
          description: 'Вам не нужно спать, и вас нельзя магически усыпить. Вы можете закончить продолжительный отдых за 4 часа, если проведёте это время в трансовой медитации, во время которой остаётесь в сознании.\nКаждый раз, когда вы выходите из этого транса, вы получаете владение одним навыком по вашему выбору и одним оружием или инструментом, выбранным из «Книги игрока». Вы мистическим образом приобретаете эти владения, извлекая их из общей эльфийской памяти и переживаний сущностей на Астральном плане и сохраняете их, пока не закончите свой следующий продолжительный отдых.'
        }
      ],
      replacesAbilities: ['Происхождения эльфов', 'Происхождения эльфов (таблица)', 'Транс']
    },
    {
      name: 'Морской эльф',
      nameEn: 'Sea Elf',
      sourceBook: 'MPMM14',
      lore: 'Морские эльфы влюбились в дикую красоту океана в первые дни существования мультивселенной. В то время как другие эльфы путешествовали из царства в царство, морские эльфы бороздили течения и исследовали воды многих миров. Сегодня этих эльфов можно найти везде, где существуют океаны, а также на Стихийном Плане Воды.',
      abilities: [
        {
          title: 'Дитя морей',
          description: 'Вы можете дышать как воздухом, так и под водой, и вы обладаете сопротивлением урону холодом.'
        },
        {
          title: 'Друг морей',
          description: 'Водные животные имеют необычайную близость с вашим народом. Вы можете донести простые идеи до любого Зверя, у которого есть скорость плавания. Они могут понимать значение ваших слов, хотя у вас нет никакой специальной способности понять их в ответ.'
        }
      ],
      replacesAbilities: ['Происхождения эльфов', 'Происхождения эльфов (таблица)']
    },
    {
      name: 'Шадар-кай',
      nameEn: 'Shadar-Kai',
      sourceBook: 'MPMM14',
      lore: 'Шадар-каи - эльфы Царства Теней, изначально увлечённые в это ужасное царство Королевой Воронов. На протяжении веков некоторые из них продолжали служить ей, в то время как иные отважились отправиться на Материальный план, чтобы вершить свои собственные судьбы.\nКогда-то шадар-каи были Феями, как и остальные их эльфийские сородичи; теперь они существуют в состоянии между жизнью и смертью, благодаря трансформации зловещей энергией Царства Теней.\nУ Шадар-каев пепельный оттенок кожи, и пока они находятся в Царстве Теней, они также становятся иссохшими, отражая зловещую природу этого мрачного плана.',
      abilities: [
        {
          title: 'Благословение Королевы воронов',
          description: 'Бонусным действием вы можете магическим образом телепортироваться в свободное пространство на расстояние до 30 футов вашей видимости. Вы можете использовать эту особенность количество раз, равное вашему бонусу мастерства. Вы восстанавливаете все потраченные использования по окончании продолжительного отдыха.\nНачиная с 3-го уровня, при телепортации с помощью этой особенности, вы также получаете сопротивление всему урону. Сопротивление длится до начала вашего следующего хода. В течение этого времени, ваш облик становится призрачным и полупрозрачным.'
        },
        {
          title: 'Некротическое сопротивление',
          description: 'Вы получаете сопротивление урону некротической энергией.'
        },
        {
          title: 'Транс',
          description: 'Вам нет необходимости спать, и вас невозможно магически усыпить. Вы можете закончить продолжительный отдых за 4 часа, если проводите это время в медитации, подобной трансу, во время которой вы сохраняете сознание.\nВсякий раз, когда вы заканчиваете этот транс, вы можете получить два владения, которых у вас нет, каждое из которых должно быть оружием или инструментом по вашему выбору, выбранным из «Книги игрока». Вы мистическим образом приобретаете эти владения, извлекая их из общей эльфийской памяти, и сохраняете их до тех пор, пока не закончите свой следующий продолжительный отдых.'
        }
      ],
      replacesAbilities: ['Происхождения эльфов', 'Происхождения эльфов (таблица)', 'Транс']
    },
    {
      name: 'Бледный',
      nameEn: 'Pallid',
      sourceBook: 'EGTW14',
      lore: 'Бледные эльфы — это мистический и проницательный народ с кожей такой же бледной, как поверхность самой большой луны Экзандрии. В этом столетии они вышли из Бледной Рощи и бродят по миру с детским любопытством.',
      abilities: [
        {
          title: 'Острый ум',
          description: 'Вы совершаете с преимуществом проверки Интеллекта (Расследование) и Мудрости (Проницательность).'
        },
        {
          title: 'Благословение Лунного ткача',
          description: 'Начиная с 3-го уровня, вы можете накладывать заклинание Усыпление с помощью этой особенности. Начиная с 5-го уровня, вы также можете накладывать заклинание Невидимость (нацеленное только на себя) с помощью этой особенности. После накладывания одного из этих заклинаний с помощью особенности вы должны закончить продолжительный отдых, прежде чем сможете вновь наложить его таким образом.\nКроме того, вы знаете заговор Cвет. Базовой характеристикой для этих заклинаний является Мудрость. Заклинания, накладываемые с помощью данной особенности, не требуют материальных компонентов.'
        }
      ],
      replacesAbilities: ['Происхождения эльфов', 'Происхождения эльфов (таблица)', 'Транс']
    }
  ],
  lore: 'Созданные богом Кореллоном, первые эльфы могли менять свои формы по своему желанию. Они утратили эту способность, когда Кореллон проклял их за сговор с божеством Лолс, которая пыталась, но не смогла узурпировать власть Кореллона. Когда Лолс была низвергнута в Бездну, большинство эльфов отвергли её и заслужили прощение Кореллона, но то, что Кореллон у них отнял, было утрачено навсегда. Потеряв способность изменять форму по своему желанию, эльфы отступили в Страну фей, где их печаль только усилилась под влиянием этого плана. Со временем любопытство привело многих из них к исследованию других измерений, включая миры Материального плана. Эльфы обладают заострёнными ушами и не имеют растительности на лице и теле. Они живут около 750 лет и не спят, а вместо этого входят в транс, когда нуждаются в отдыхе. В этом состоянии они остаются осведомлёнными о своём окружении, погружаясь в воспоминания и медитации. Окружающая среда постепенно трансформирует эльфов, если они живут в ней более тысячи лет, и наделяет их определённой магией. Дроу, высшие эльфы и лесные эльфы — примеры эльфов, подвергшихся таким изменениям.',
  portrait: '/images/species/elf.jpg',
  type: 'гуманоид',
  size: 'Средний (около 5–6 футов)',
  speed: 30,
  abilities: [
    {
      title: 'Возраст',
      description: 'Несмотря на то, что физически эльфы взрослеют в том же возрасте, что и люди, их понимание о взрослении выходит за рамки физического развития, и располагается в сфере житейского опыта. Обычно эльф получает статус взрослого и взрослое имя в возрасте 100 лет, и может прожить до 750 лет.'
    },
    {
      title: 'Тёмное зрение',
      description: 'У вас есть тёмное зрение в пределах 60 футов.'
    },
    {
      title: 'Наследие фей',
      description: 'Вы получаете преимущество на спасброски, которые совершаете, чтобы избежать или прекратить состояние Очарованный.'
    },
    {
      title: 'Обострённые чувства',
      description: 'Вы получаете владение 1 навыком на выбор из списка: Проницательность, Внимательность или Выживание.'
    },
    {
      title: 'Транс',
      description: 'Вам не нужно спать и магия не может вас усыпить. Вы можете завершить продолжительный отдых за 4 часа, если проводите эти часы в состоянии транса, во время которого сохраняете сознание.'
    },
    {
      title: 'Происхождения эльфов',
      description: 'Вы принадлежите к родословной, которая наделяет вас сверхъестественными способностями. Выберите происхождение из таблицы «Происхождения эльфов». Вы получаете бонус 1 уровня этой родословной. Когда вы достигаете 3 и 5 уровня персонажа, то вы изучаете заклинание более высокого уровня, как указано в таблице. У вас всегда подготовлено это заклинание. Вы можете 1 раз наложить его без траты ячейки заклинаний и вы восстанавливаете эту возможность после завершения продолжительного отдыха. Вы также можете наложить это заклинание, используя любые доступные вам ячейки заклинаний соответствующего уровня. Интеллект, Мудрость или Харизма является вашей заклинательной характеристикой для заклинаний, которые вы используете с помощью этой особенности (выберите характеристику при выборе родословной).'
    },
    {
    title: 'Происхождения эльфов (таблица)',
    description: 'Происхождение\tУровень 1\tУровень 3\tУровень 5\nДроу\tДальность вашего тёмного зрения увеличивается до 120 футов. Вы также знаете заговор Пляшущие огоньки.\tОгонь фей\tТьма\nВысший эльф\tВы знаете заговор Фокусы. Когда вы завершаете продолжительный отдых, то вы можете заменить этот заговор на другой из списка заклинаний волшебника.\tОбнаружение магии\tТуманный шаг\nЛесной эльф\tВаша скорость увеличивается до 35 футов. Вы также знаете заговор Искусство друидов.\tСкороход\tБесследное передвижение'
    }
  ]
};
