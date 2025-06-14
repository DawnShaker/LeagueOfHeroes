import type { Background } from '../../types/background';

export const investigator: Background = {
  id: 'investigator',
  name: 'Следователь',
  nameEn: 'Investigator',
  sourceBook: 'VRGR14',
  lore: 'Вы неустанно ищете правду. Возможно, вами движет вера в закон и чувство всеобщей справедливости, а может быть, этот самый закон подвёл вас, и вы стремитесь все исправить. Вы могли стать свидетелем чего-то замечательного или ужасного, и теперь вы должны узнать больше об этой скрытой истине. Или, может быть, вы наёмный детектив, раскрывающий секреты для хорошо платящих клиентов. Независимо от того, являются ли загадки, в которые вы вовлечены, местными преступлениями или заговорами, охватывающими королевство, вами движет личная потребность выследить даже самые неуловимые улики и раскрыть то, что другие скрывают в тенях.',
  proficiencies: {
    abilityScores: {
      description: 'Либо значение одной характеристики по вашему выбору увеличивается на 2, а другой — на 1, либо значение трёх различных характеристик по вашему выбору увеличивается на 1'
    },
    feat: 'Любая черта происхождения',
    skills: {
      count: 2,
      description: '2 любых навыка'
    },
    tools: {
      description: '1 владение: ремесленный/неремесленный инструмент, набор, транспорт, музыкальный инструмент, игровой набор'
    },
    equipment: '50 зм'
  },
  variants: {
    title: 'Переломное событие',
    table: [
      { roll: 1, result: 'Друг был несправедливо обвинен в убийстве. Вы выследили настоящего убийцу, доказав невиновность своего друга и начав свою карьеру детектива.'},
      { roll: 2, result: 'Вам сказали, что вы пропали без вести на несколько недель. Когда вас нашли, вы не помнили, что пропали. Теперь вы ищете, чтобы узнать, что случилось с вами.'},
      { roll: 3, result: 'Вы помогли духу обрести покой, найдя его пропавший труп. С тех пор другие призрачные клиенты искали вас, чтобы помочь им найти покой.'},
      { roll: 4, result: 'Вы рассказали, что монстры, терроризирующие ваш дом, были иллюзиями, созданными жестоким магом. Маг сбежал, но вы продолжаете раскрывать магические мистификации.'},
      { roll: 5, result: 'Вы были несправедливо обвинены и осуждены за преступление. Вам удалось сбежать и попытаться помочь другим избежать того, что вы пережили, даже несмотря на то, что вас преследует закон.'},
      { roll: 6, result: 'Вы пережили разрушительное использование магического устройства, которое уничтожило ваш дом. Вас нашли члены секретной организации. Теперь вы работаете с ними, выслеживая опасные сверхъестественные явления и не давая им причинить вред.'},
      { roll: 7, result: 'Вы нашли доказательства заговора, лежащего в основе общества. Вы пытались разоблачить эту загадочную клику, но вам никто не поверил. Вы все еще пытаетесь доказать то, что знаете, это правда.'},
      { roll: 8, result: 'Вы получили работу в агентстве, которое расследует преступления, которые не могут раскрыть местные правоохранительные органы. Вы часто задаетесь вопросом, что для вас важнее, правда или ваша плата.'}
    ]
  },
  characteristics: {
    personalityTraits: [
      { roll: 1, trait: 'У меня была встреча, которая, я считаю, придает мне особую близость со сверхъестественным существом или событием.'},
      { roll: 2, trait: 'Фирменный предмет одежды или особое оружие служит эмблемой того, кто я есть.'},
      { roll: 3, trait: 'Я никогда не признаю, что я не в себе.'},
      { roll: 4, trait: 'Я должен знать ответ на каждый секрет. Ни одна дверь не остается незапертой в моем присутствии.'},
      { roll: 5, trait: 'Я позволяю людям недооценивать меня, раскрывая всю свою компетентность только близким мне людям.'},
      { roll: 6, trait: 'Я навязчиво стремлюсь собирать трофеи своих путешествий и побед.'},
      { roll: 7, trait: 'Неважно, что весь мир против меня. Я всегда буду делать то, что считаю правильным.'},
      { roll: 8, trait: 'У меня болезненные интересы и жуткая эстетика.'},
      { roll: 9, trait: 'У меня есть личный ритуал, мантра или метод релаксации, который я использую для борьбы со стрессом.'},
      { roll: 10, trait: 'Нет ничего важнее жизни, и я никого не оставляю в опасности.'},
      { roll: 11, trait: 'Я быстро прибегаю к экстремальным решениям. Зачем рисковать тем, что меньший вариант не работает?'},
      { roll: 12, trait: 'Меня легко напугать, но я не трус.'}
    ],
    ideals: [
      { roll: 1, ideal: 'Адреналин. Я испытал такую ​​странность, что теперь чувствую себя живым только в экстремальных ситуациях.'},
      { roll: 2, ideal: 'Баланс. Я стараюсь противодействовать поступкам того, за кого я чувствую себя ответственным.'},
      { roll: 3, ideal: 'Связанный. Я обидел кого-то и должен заставить их волю избежать их проклятия.'},
      { roll: 4, ideal: 'Побег. Я верю, что есть что-то за пределами известного мне мира, и мне нужно это найти.'},
      { roll: 5, ideal: 'Наследие. Я должен сделать что-то великое, чтобы меня запомнили, а мое время уходит.'},
      { roll: 6, ideal: 'Неверное направление. Я усердно работаю над тем, чтобы другие не осознали моих недостатков или проступков.'},
      { roll: 7, ideal: 'Одержимость. Я жил так долго, что не могу себе представить другого пути.'},
      { roll: 8, ideal: 'Обязательство. Я обязан перед своим народом, верой, семьей или учителем продолжить восхваляемое наследие.'},
      { roll: 9, ideal: 'Обещание. Моя жизнь больше не принадлежит мне. Я должен исполнить мечту того, кто ушел.'},
      { roll: 10, ideal: 'Откровение. Мне нужно знать, что лежит за тайнами смерти, мира или Туманов.'},
      { roll: 11, ideal: 'Святилище. Я знаю силы, действующие в мире, и стремлюсь создать острова отдельно от них.'},
      { roll: 12, ideal: 'Правда. Я забочусь о правде превыше всего, даже если она никому не выгодна.'}
    ],
    bonds: [
      { roll: 1, bond: 'Мне отчаянно нужно вернуться к кому-то или куда-то, но я потерял их в туманах.'},
      { roll: 2, bond: 'Все, что я делаю, служит могущественному господину, которого я должен хранить в секрете от всех.'},
      { roll: 3, bond: 'Я многим обязан своему исчезнувшему наставнику. Я стремлюсь продолжать их работу, даже если я ищу их.'},
      { roll: 4, bond: 'Я видел великую тьму и решил стать светом против нее — светом всех огней.'},
      { roll: 5, bond: 'Кто-то, кого я люблю, стал монстром, убийцей или другой угрозой. Я должен искупить их.'},
      { roll: 6, bond: 'Мир был убежден в ужасной лжи. Я должен раскрыть правду.'},
      { roll: 7, bond: 'Я очень скучаю по кому-то и быстро усыновляю людей, которые напоминают мне о них.'},
      { roll: 8, bond: 'Великое зло живет во мне. Я буду бороться с ним и другим злом мира так долго, как только смогу.'},
      { roll: 9, bond: 'Я отчаянно ищу лекарства от недуга или проклятия, для близкого мне человека или для себя.'},
      { roll: 10, bond: 'Ко мне тянутся духи. Я делаю все, что могу, чтобы помочь им обрести покой.'},
      { roll: 11, bond: 'Я использую свой хитрый ум, чтобы разгадывать тайны и вершить правосудие для тех, кого обидели.'},
      { roll: 12, bond: 'Я потерял кого-то, кто мне дорог, но я все еще вижу его в видениях виноватых, повторяющихся снах или в виде духа.'}
    ],
    flaws: [
      { roll: 1, flaw: 'Я верю, что за мной следует гибель, и что любого, кто приблизится ко мне, ждет трагический конец.'},
      { roll: 2, flaw: 'Я убежден, что что-то преследует меня, появляясь в зеркалах, снах и местах, где никто не мог.'},
      { roll: 3, flaw: 'Я особенно суеверен и живу, стремясь избежать неудач, злых духов или Туманов.'},
      { roll: 4, flaw: 'Я совершил невыразимое зло и сделаю все, чтобы другие не узнали.'},
      { roll: 5, flaw: 'Я исключительно доверчив и сразу верю любой истории или легенде.'},
      { roll: 6, flaw: 'Я скептик и не верю в силу ритуалов, религии, суеверий или духов.'},
      { roll: 7, flaw: 'Я знаю, что мое будущее предопределено, и что все, что я делаю, приведет к предсказанному концу.'},
      { roll: 8, flaw: 'Мне нужно находить лучшее во всех и во всем, даже если это означает отрицание явного злого умысла.'},
      { roll: 9, flaw: 'Я видел зло в каком-то месте, например, в лесу, в городе или на кладбище, и сопротивляюсь тому, чтобы идти туда.'},
      { roll: 10, flaw: 'Я исключительно осторожен, тщательно планирую и придумываю бесчисленные непредвиденные обстоятельства.'},
      { roll: 11, flaw: 'У меня репутация победителя великого зла, но это ложь, и злая сила знает.'},
      { roll: 12, flaw: 'Я знаю, что цель всегда оправдывает средства, и быстро иду на жертвы ради достижения своих целей.'}
    ]
  }
};