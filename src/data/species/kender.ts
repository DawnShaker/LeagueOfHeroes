import type { Species } from '../../types/species';

export const kender: Species = {
  id: 'kender',
  name: 'Кендер',
  nameEn: 'Kender',
  sourceBook: 'DSOTDQ14',
  lore: 'Во времена мифического происхождения Кринна, Реоркс, бог ремёсел, наслаждался эпохой неограниченного творчества. Многие народы возникли из его божественной кузницы, но не все среди них остались такими, какими их создал бог. Под действием безудержной магии группа гномов преобразилась и одарилась почти сверхъестественным любопытством и бесстрашием. Это были первые кендеры.\nРодом из мира Кринн, кендеры - это миниатюрные гуманоиды, похожие на людей с заостренными ушами и разнообразной внешностью. Кендеры обладают сверхъестественным любопытством, которое толкает их на приключения. Из-за этой любознательности многие кендеры проваливаются через порталы в другие планы и миры.\nКендеры иногда собирают внушительные коллекции редкостей. Некоторые могут собирать мирские безделушки или реликвии из магических мест, в то время как другие могут стать профессиональными ворами.',
  portrait: '/images/species/kender.jpg',
  type: 'гуманоид',
  size: 'Маленький',
  speed: 30,
  abilities: [
    {
      title: 'Возраст',
      description: 'Естественная продолжительность жизни кендера составляет около 100 лет. Они стареют медленно, оставаясь, по сравнению с другими расами, детьми, даже когда их тело стареет. Кендеры воспринимают смерть как очередное великое приключение и не задерживаются в печали после смерти близкого человека.'
    },
    {
      title: 'Бесстрашие',
      description: 'Вы совершаете с преимуществом спасброски, чтобы избежать или окончить на себе состояние «испуганный». Когда вы проваливаете спасбросок, чтобы избежать или окончить на себе состояние «испуганный», вы можете вместо этого сделать спасбросок успешным. Преуспев в спасброске таким образом, вы не можете сделать это повторно, пока не окончите продолжительный отдых.'
    },
    {
      title: 'Любопытство кендеров',
      description: 'Благодаря мистическому происхождению вашего народа, вы владеете одним из следующих навыков на ваш выбор: Проницательность, Расследование, Ловкость рук, Скрытность или Выживание.'
    },
    {
      title: 'Насмешка',
      description: 'Вы обладаете необыкновенной способностью выводить существ из себя. Бонусным действием вы можете произнести ряд провокационных слов в адрес существа в пределах 60 футов от вас, которое может слышать и понимать вас. Цель должна преуспеть в спасброске Мудрости, иначе она будет совершать броски атаки с помехой против других целей, кроме вас, до начала вашего следующего хода. Сл спасброска = 8 + бонус мастерства + модификатор Интеллекта, Мудрости или Харизмы (определите при выборе этой расы).\nВы можете использовать это бонусное действие количество раз, равное вашему бонусу мастерства. Вы восстанавливаете все потраченные использования после окончания продолжительного отдыха.'
    }
  ]
};