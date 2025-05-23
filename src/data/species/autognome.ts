import type { Species } from '../../types/species';

export const autognome: Species = {
  id: 'autognome',
  name: 'Автогном',
  nameEn: 'Autognome',
  sourceBook: 'SAS14',
  lore: 'Автогномы — это механические существа, построенные скальными гномами по своему подобию. При создании гномы обычно преследовали какую-то определённую цель. К примеру, гном мог создать автогнома, чтобы тот был верным товарищем или коллегой. Иногда, в основном из-за неисправности или уникальных стечений обстоятельств, автогномы появляются отделёнными от своего создателя и становятся сами по себе.\nАвтогномы похожи на своих создателей, а также большинство из них запрограммированы говорить и понимать гномий язык. Внутренние компоненты, использованные для создания автогнома, могут сильно разниться. Один автогном может иметь настоящее живое сердце в своей груди, когда как жизнь другого гнома может поддерживаться при помощи звёздной пыли или необычного часового механизма.',
  portrait: '/images/species/autognome.jpg',
  type: 'конструкт',
  size: 'Маленький',
  speed: 30,
  abilities: [
    {
      title: 'Возраст',
      description: 'Подобно гномам, автогномы живут веками, вплоть до 500 лет.'
    },
    {
      title: 'Усиленный каркас',
      description: 'Вы заключены в оболочку из тонкого металла или какого-то другого прочного материала. Пока вы не носите доспехов, ваш Класс Доспеха равен 13 + ваш модификатор Ловкости.'
    },
    {
      title: 'Механическая природа',
      description: 'Вы получаете сопротивление урону ядом и иммунитет к болезням, а также с преимуществом совершаете спасброски против паралича или отравления. Вам не нужно есть, пить или дышать.'
    },
    {
      title: 'Создан для успеха',
      description: 'Вы можете добавить к4 к одному броску атаки, проверке характеристики или спасброску, который вы совершаете. Вы можете совершить это уже после броска к20, но должны сделать это прежде, чем Мастер объявит результат броска. Вы можете использовать эту особенность количество раз, равное вашему бонусу мастерства. Вы восстанавливаете все израсходованные использования после окончания продолжительного отдыха.'
    },
    {
      title: 'Отдых стража',
      description: 'Когда вы устраиваете продолжительный отдых, вы должны оставаться как минимум 6 часов без движения и активности, вместо сна. В таком состоянии вы становитесь неподвижны, но остаётесь в сознании и можете всё видеть и слышать.'
    },
    {
      title: 'Особая сборка',
      description: 'Вы получаете два владения инструментами по вашему выбору.'
    },
    {
      title: 'Лечащая машина',
      description: 'Если на вас накладывают заклинание починка [mending], вы можете потратить Кость Хитов, бросить её и восстановить количество хитов, равное результату броска + ваш модификатор Телосложения (минимум 1 хит).\nКроме того, ваш создатель разработал вас так, чтобы вы получали преимущества от заклинаний сохраняющих жизнь, но которые обычно не действуют на Конструктов: лечение ран [cure wounds], лечащее слово [healing word], множественное лечение ран [mass cure wounds], множественное лечащее слово [mass healing word] и уход за умирающим [spare the dying].'
    }
  ]
};