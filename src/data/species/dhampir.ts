import type { Species } from '../../types/species';

export const dhampir: Species = {
  id: 'dhampir',
  name: 'Дампир',
  nameEn: 'Dhampir',
  sourceBook: 'VRGR14',
  lore: 'Оказавшись между миром живых и миром мёртвых, дампиры сохраняют волю к жизни, в тоже время подвергаясь бесконечному испытанию жестоким чувством голода. Связь с нежитью дарит дампирам вкус бессмертного могущества вампира в виде увеличения скорости, тёмного зрения и высасывающего жизнь укуса.\nОбладая уникальным пониманием природы нежити, многие дампиры становятся искателями приключений и охотниками на чудовищ. Их часто ведут глубоко личные мотивы. Некоторые ищут опасности, представляя чудовищ олицетворением своего собственного голода. Другие стремятся отомстить тем, кто превратил их в дампира. Третьи же становятся одинокими охотниками, стараясь дистанцироваться от тех, кто искушает их голод.',
  portrait: '/images/species/dhampir.jpg',
  type: 'гуманоид',
  size: 'Средний',
  speed: 35,
  abilities: [
    {
      title: 'Наследие предков',
      description: 'Если вы замените вид этим наследием, вы можете сохранить следующие элементы прежнего вида: любые навыки и любые скорости лазания, полёта или плавания, которые вы получили от него.\nЕсли вы не оставите ни один из этих элементов или выберете это наследие при создании персонажа, вы получаете владение двумя навыками по вашему выбору.'
    },
    {
      title: 'Тёмное зрение',
      description: 'У вас есть тёмное зрение в пределах 60 футов.'
    },
    {
      title: 'Природа нежити',
      description: 'Вам не нужно дышать.'
    },
    {
      title: 'Паучье лазание',
      description: 'Вы получаете скорость лазания, равную вашей скорости ходьбы. Кроме того, на 3-м уровне вы получаете возможность перемещаться вверх, вниз и вдоль вертикальных поверхностей, а также по потолкам, оставляя руки свободными.'
    },
    {
      title: 'Укус вампира',
      description: 'Ваш укус клыками — это природное оружие, которое считается простым рукопашным оружием, которым вы владеете. Вы добавляете ваш модификатор Телосложения вместо модификатора Силы для бросков атаки и урона для атак, совершаемых этим укусом. Атака наносит 1к4 колющего урона при попадании. Если у вас не достаёт половины и более ваших хитов, вы совершаете с преимуществом броски атаки вашим укусом.\nКогда вы атакуете этим укусом и попадаете по существу, которое не является Конструктом или Нежитью, вы можете усилить себя одним из следующих способов по вашему выбору:\n- Вы восстанавливаете хиты, равные колющему урону, который вы нанесли укусом.\n- Вы получаете бонус к следующей проверке характеристики или броску атаки, который вы совершаете. Бонус равен колющему урону, который вы нанесли укусом.\nВы можете усилить себя данным укусом количество раз, равное вашему бонусу мастерства, и вы восстановите все израсходованные применения после окончания продолжительного отдыха.'
    }
  ]
};