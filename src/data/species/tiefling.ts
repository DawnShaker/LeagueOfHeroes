import type { Species } from '../../types/species';

export const tiefling: Species = {
    id: 'tiefling',
    name: 'Тифлинг',
    nameEn: 'Tiefling',
    sourceBook: 'PHB24',
    variants: [
      {
        name: 'Тифлинг Асмодея',
        nameEn: 'Asmodeus Tiefling',
        sourceBook: 'MTF14',
        lore: 'Тифлинги, связанные с Нессусом, повелевают силами огня и тьмы, ведомые более острым, чем у других, интеллектом, как и подобает тем, кто связан с самим Асмодеем.',
        abilities: [
        {
          title: 'Происхождение исчадия (таблица)',
          description: 'Наследие\tУровень 1\tУровень 3\tУровень 5\nАсмодей\tУ вас есть сопротивление к урону огнём. Вы также знаете заговор Фокусы.\tАдское возмездие\tТьма'
        }
      ],
      replacesAbilities: ['Происхождение исчадия (таблица)']
      },
      {
        name: 'Тифлинг Вельзевул',
        nameEn: 'Baalzebul Tiefling',
        sourceBook: 'MTF14',
        lore: 'Рассыпающееся царство Маладомини находится под властью Вельзевула, который превосходно совращает тех, чьи мелкие грехи можно превратить во влекущие проклятье поступки. Тифлинги, связанные с этим архидьяволом, прекрасно совращают других и физически, и психологически.',
        abilities: [
        {
          title: 'Происхождение исчадия (таблица)',
          description: 'Наследие\tУровень 1\tУровень 3\tУровень 5\nВельзевул\tУ вас есть сопротивление к урону огнём. Вы также знаете заговор Фокусы.\tЛуч болезни\tКорона безумия'
        }
      ],
      replacesAbilities: ['Происхождение исчадия (таблица)']
      },
      {
        name: 'Тифлинг Гласии',
        nameEn: 'Glasya Tiefling',
        sourceBook: 'MTF14',
        lore: 'Гласия, криминальный авторитет Преисподних, дарует своим тифлингам магию, полезную для совершения преступлений.',
        abilities: [
        {
          title: 'Происхождение исчадия (таблица)',
          description: 'Наследие\tУровень 1\tУровень 3\tУровень 5\nМалболга\tУ вас есть сопротивление к урону огнём. Вы также знаете заговор Малая иллюзия.\tМаскировка\tНевидимость'
        }
      ],
      replacesAbilities: ['Происхождение исчадия (таблица)']
      },
      {
        name: 'Тифлинг Диспатер',
        nameEn: 'Dispater Tiefling',
        sourceBook: 'MTF14',
        lore: 'Громадный город Дис занимает значительную часть второго слоя Преисподних. Это место, где секреты раскрываются тем, кто больше заплатит, что делает тифлингов Диспатера прекрасными шпионами и разведчиками.',
        abilities: [
        {
          title: 'Происхождение исчадия (таблица)',
          description: 'Наследие\tУровень 1\tУровень 3\tУровень 5\nДиспатер\tУ вас есть сопротивление к урону огнём. Вы также знаете заговор Фокусы.\tМаскировка\tОбнаружение мыслей'
        }
      ],
      replacesAbilities: ['Происхождение исчадия (таблица)']
      },
      {
        name: 'Тифлинг Зариэль',
        nameEn: 'Zariel Tiefling',
        sourceBook: 'MTF14',
        lore: 'Тифлинги, имеющие кровную связь с Зариэль, физически сильнее прочих тифлингов и получают полезные в бою магические способности.',
        abilities: [
        {
          title: 'Происхождение исчадия (таблица)',
          description: 'Наследие\tУровень 1\tУровень 3\tУровень 5\nЗариэль\tУ вас есть сопротивление к урону огнём. Вы также знаете заговор Фокусы.\tПалящая кара\tКлеймящая кара'
        }
      ],
      replacesAbilities: ['Происхождение исчадия (таблица)']
      },
      {
        name: 'Тифлинг Левистус',
        nameEn: 'Levistus Tiefling',
        sourceBook: 'MTF14',
        lore: 'Левистус правит заледеневшей Стигией и известен как архидьявол, предлагающий сделку тем, кто неотвратимо обречён.',
        abilities: [
        {
          title: 'Происхождение исчадия (таблица)',
          description: 'Наследие\tУровень 1\tУровень 3\tУровень 5\nЛевистус\tУ вас есть сопротивление к урону огнём. Вы также знаете заговор Луч холода.\tДоспех Агатиса\tТьма'
        }
      ],
      replacesAbilities: ['Происхождение исчадия (таблица)']
      },
      {
        name: 'Тифлинг Маммон',
        nameEn: 'Mammon Tiefling',
        sourceBook: 'MTF14',
        lore: 'Великий ростовщик Маммон превыше всего любит деньги. Связанные с ним тифлинги великолепно собирают и сохраняют богатство.',
        abilities: [
        {
          title: 'Происхождение исчадия (таблица)',
          description: 'Наследие\tУровень 1\tУровень 3\tУровень 5\nМаммон\tУ вас есть сопротивление к урону огнём. Вы также знаете заговор Волшебная рука.\tТензеров парящий диск\tВолшебний замок'
        }
      ],
      replacesAbilities: ['Происхождение исчадия (таблица)']
      },
      {
        name: 'Тифлинг Мефестофель',
        nameEn: 'Mephistopheles Tiefling',
        sourceBook: 'MTF14',
        lore: 'В ледяном царстве Кании Мефистофель даёт магическую силу всем, кто будет ему молиться. Связанные с ним тифлинги немного владеют тайной магией.',
        abilities: [
        {
          title: 'Происхождение исчадия (таблица)',
          description: 'Наследие\tУровень 1\tУровень 3\tУровень 5\nМефестофель\tУ вас есть сопротивление к урону огнём. Вы также знаете заговор Волшебная рука.\tОгненные ладони\tГорящий клинок'
        }
      ],
      replacesAbilities: ['Происхождение исчадия (таблица)']
      },
      {
        name: 'Тифлинг Фьерна',
        nameEn: 'Fierna Tiefling',
        sourceBook: 'MTF14',
        lore: 'Как мастерский манипулятор, Фьерна дарует связанным с ней тифлингам сильную личность.',
        abilities: [
        {
          title: 'Происхождение исчадия (таблица)',
          description: 'Наследие\tУровень 1\tУровень 3\tУровень 5\nФьерна\tУ вас есть сопротивление к урону огнём. Вы также знаете заговор Дружба.\tОчарование личности\tВнушение'
        }
      ],
      replacesAbilities: ['Происхождение исчадия (таблица)']
      }
    ],
    lore: 'Тифлинги либо рождаются на Нижних планах, либо имеют предков исчадий, происходящих оттуда. Тифлинг связан кровью с дьяволом, демоном или другим злобным существом. Эта связь с Нижними планами — зловещее наследие тифлинга, которое обещает силу, но не влияет на моральные устои тифлинга. Тифлинг сам решает, принять или отвергнуть своё зловещее наследие.',
    portrait: '/images/species/tiefling.jpg',
    type: 'гуманоид',
    size: 'Средний (около 4–7 футов) или Маленький (около 3–4 футов)',
    speed: 30,
    abilities: [
        {
            title: 'Тёмное зрение',
            description: 'У вас есть тёмное зрение в пределах 60 футов.'
        },
        {
            title: 'Происхождение исчадия',
            description: 'Вы принадлежите к родословной, которая наделяет вас сверхъестественными способностями. Выберите происхождение из таблицы «Происхождение исчадия». Вы получаете бонус 1 уровня этой родословной. Когда вы достигаете 3 и 5 уровня персонажа, вы изучаете заклинание более высокого уровня, как указано в таблице. Это заклинание всегда подготовлено у вас. Вы можете 1 раз наложить его без траты ячейки заклинаний и вы восстанавливаете эту возможность после завершения продолжительного отдыха. Вы также можете наложить это заклинание, используя любые доступные вам ячейки заклинаний соответствующего уровня. Интеллект, Мудрость или Харизма является вашей заклинательной характеристикой для заклинаний, которые вы используете с помощью этой особенности (выберите характеристику при выборе родословной).'
        },
        {
            title: 'Происхождение исчадия (таблица)',
            description: 'Происхождение\tУровень 1\tУровень 3\tУровень 5\nБездны\tУ вас есть сопротивление к урону ядом. Вы также знаете заговор Ядовитые брызги.\tЛуч болезни\tУдержание личности\nХтоническое\tУ вас есть сопротивление к урону некротической энергией. Вы также знаете заговор Леденящее прикосновение.\tПсевдожизнь\tЛуч слабости\nИнфернальное\tУ вас есть сопротивление к урону огнём. Вы также знаете заговор Огненный снаряд.\tАдское возмездие\tТьма'
        },
        {
            title: 'Потустороннее Присутствие',
            description: 'Вы знаете заговор Чудотворство. Выбранная вами заклинательная характеристика для умения Происхождение исчадия является заклинательной характеристикой для заговора Чудотворство от умения Потусторонее присутствие.'
        }
    ]
};