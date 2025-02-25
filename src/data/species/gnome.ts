import type { Species } from '../../types/species';

export const gnome: Species = {
  id: 'gnome',
  name: 'Гном',
  nameEn: 'Gnome',
  sourceBook: 'PHB24',
  lore: 'Гномы – это волшебные существа, созданные богами изобретений, иллюзий и подземной жизни. Первые гномы редко встречались с другими народами из-за своей скрытной натуры и склонности жить в лесах и норах. Несмотря на малый рост, они компенсировали это умом, сбивая хищников с толку ловушками и лабиринтами туннелей. Они также научились магии от богов, таких как Гарл Златоблеск, Бэрван Дикий Странник и Баравар Теневой Плащ, которые навещали их в облике смертных. Эта магия в конечном итоге привела к возникновению родословных лесных и скальных гномов.',
  portrait: '/images/species/gnome.jpg',
  type: 'гуманоид',
  size: 'Маленький (около 3-4 футов)',
  speed: 30,
  abilities: [
    {
      title: 'Тёмное зрение',
      description: 'У вас есть тёмное зрение в пределах 60 футов.'
    },
    {
      title: 'Гномья хитрость',
      description: 'Вы получаете преимущество на спасброски Интеллекта, Мудрости и Харизмы.'
    },
    {
      title: 'Гномье происхождение',
      description: 'Вы принадлежите к родословной, которая наделяет вас сверхъестественными способностями. Выберите 1 из следующих вариантов; вне зависимости от вашего выбора, Интеллект, Мудрость или Харизма является вашей заклинательной характеристикой для заклинаний, которые вы используете с помощью этой особенности (выберите характеристику при выборе родословной).'
    },
    {
      title: 'Гномье происхождение (таблица)',
      description: '• Лесной гном.Вы знаете заговор Малая иллюзия.Вы также всегда имеете подготовленное заклинание Разговор с животными. Вы можете накладывать его без траты ячейки заклинаний количество раз, равное вашему бонусу мастерства, и восстанавливаете все использованные применения послe завершения продолжительного отдыха.Вы также можете использовать любые ячейки заклинаний, чтобы накладывать это заклинание.\n\n• Скальный гном. Вы знаете заговоры Починка и Фокусы. Кроме того, вы можете потратить 10 минут на наложение заклинания Фокусы, чтобы создать крошечное механическое устройство(КД 5, 1хит), такое как игрушка, зажигалка или музыкальная шкатулка. При создании устройства вы определяете его функцию, выбирая один из эффектов заклинания Фокусы; устройство производит этот эффект каждый раз, когда вы или другое существо выполняет бонусное действие, чтобы активировать его касанием. Если выбранный эффект имеет опции, то вы выбираете 1 из них для устройства при его создании. Например, если вы выбрали эффект зажигания - угасания, то вы определяете, будет ли устройство зажигать или тушить огонь; устройство не может делать и то, и другое. Вы можете иметь до 3 таких устройств одновременно и каждое из них разваливается через 8 часов после создания или когда вы разбираете его прикосновением с помощью действия использование.'
    }
  ],
    variants: [
      {
        name: 'Глубинный гном',
        nameEn: 'Deep gnome',
        sourceBook: 'MPMM14',
        lore: 'Глубинные гномы, или свирфнеблины, являются уроженцами Подземья и пропитаны магией этого подземного царства. Они способны необычайно ловко маскироваться, а их свирфнеблинская магия затрудняет их обнаружение. Эти особенности позволили им выживать в течение нескольких поколений среди опасностей Подземья.',
        abilities: [
        {
          title: 'Тёмное зрение',
          description: 'У вас есть тёмное зрение в пределах 120 футов.'
        },
        {
          title: 'Гномья хитрость',
          description: 'Вы получаете преимущество на спасброски Интеллекта, Мудрости и Харизмы.'
        },
        {
          title: 'Гномье происхождение',
          description: 'Вы принадлежите к родословной, которая наделяет вас сверхъестественными способностями. Выберите 1 из следующих вариантов; вне зависимости от вашего выбора, Интеллект, Мудрость или Харизма является вашей заклинательной характеристикой для заклинаний, которые вы используете с помощью этой особенности (выберите характеристику при выборе родословной).'
        },
        {
          title: 'Дар свирфнеблина  (таблица)',
          description: '• Глубинный гном.Начиная с 3-го уровня, вы можете накладывать на себя заклинание Маскировка с помощью этой особенности. Начиная с 5-го уровня, вы также можете накладывать на себя заклинание Необнаружимость, без использования материальных компонентов. После накладывания одного из этих заклинаний с помощью особенности вы должны закончить продолжительный отдых, прежде чем сможете вновь наложить эти заклинания таким образом. Вы также можете накладывать эти заклинания, используя ячейки заклинаний подходящего уровня.'
        },
        {
          title: 'Камуфляж свирфнеблина',
          description: 'Когда вы совершаете проверку Ловкости (Скрытность), вы можете совершить её с преимуществом. Вы можете использовать эту особенность количество раз, равное вашему бонусу мастерства. Вы восстанавливаете все потраченные использования по окончании продолжительного отдыха.'
        }
      ],
      replacesAbilities: ['Тёмное зрение', 'Гномья хитрость', 'Гномье происхождение', 'Гномье происхождение (таблица)', 'Гномье происхождение (таблица)']
      },
    ]
};
