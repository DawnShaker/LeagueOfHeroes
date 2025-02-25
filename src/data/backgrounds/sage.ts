import type { Background } from '../../types/background';

export const sage: Background = {
  id: 'sage',
  name: 'Мудрец',
  nameEn: 'Sage',
  sourceBook: 'PHB24',
  lore: 'Вы провели годы своего становления, путешествуя между поместьями и монастырями, выполняя различные случайные работы и услуги в обмен на доступ к их библиотекам. Вы провели много долгих вечеров, уткнувшись носом в книги и свитки, изучая знания о мультивселенной (даже основы магии), и ваш разум жаждет большего.',
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
      description: '1 инструмент, набор или владение транспортом на ваш выбор'
    },
    equipment: '50 зм'
  },
  variants: {
    title: 'Специализация',
    description: 'Чтобы определить область изучаемого вами знания, совершите бросок по таблице или выберите один из вариантов самостоятельно.',
    table: [
      { roll: 1, result: 'Академик с испорченной репутацией' },
      { roll: 2, result: 'Алхимик' },
      { roll: 3, result: 'Астроном' },
      { roll: 4, result: 'Библиотекарь' },
      { roll: 5, result: 'Исследователь' },
      { roll: 6, result: 'Писец' },
      { roll: 7, result: 'Подмастерье волшебника' },
      { roll: 8, result: 'Профессор' }
    ]
  },
  characteristics: {
    personalityTraits: [
      { roll: 1, trait: 'Я использую многосложные слова, создающие впечатление образованности.' },
      { roll: 2, trait: 'Я прочитал все книги в величайших библиотеках мира — или, по крайней мере, говорю так.' },
      { roll: 3, trait: 'Я привык помогать тем, кто не так умён как я, и терпеливо всем всё объясняю.' },
      { roll: 4, trait: 'Больше всего на свете я люблю тайны.' },
      { roll: 5, trait: 'Прежде чем принять решение, я выслушаю аргументы обеих спорящих сторон.' },
      { roll: 6, trait: 'Я ... говорю ... медленно ... когда разговариваю ... с идиотами, ... то есть ... практически ... всегда.' },
      { roll: 7, trait: 'В социальном взаимодействии я ужасно неуклюж.' },
      { roll: 8, trait: 'Я убеждён, что остальные постоянно хотят украсть мои тайны.' }
    ],
    ideals: [
      { roll: 1, ideal: 'Знание. Путь к силе и самосовершенствованию лежит в знаниях. (Нейтральный)' },
      { roll: 2, ideal: 'Красота. Красота ведёт нас к тому, что истинно. (Добрый)' },
      { roll: 3, ideal: 'Логика. Эмоции не должны подавлять логическое мышление. (Законный)' },
      { roll: 4, ideal: 'Свобода. Ничто не должно сдерживать бесконечные варианты всех возможных исходов. (Хаотичный)' },
      { roll: 5, ideal: 'Власть. Знания — путь к власти и контролю. (Злой)' },
      { roll: 6, ideal: 'Самосовершенствование. Цель жизни в познании — самосовершенствование. (Любое)' }
    ],
    bonds: [
      { roll: 1, bond: 'Я должен защищать своих учеников.' },
      { roll: 2, bond: 'У меня есть древний текст, содержащий ужасную тайну, и который не должен попасть в чужие руки.' },
      { roll: 3, bond: 'Я работаю над сохранением библиотеки, университета, скриптория или монастыря.' },
      { roll: 4, bond: 'Труд всей моей жизни, это серия томов, посвящённая определённой области знаний.' },
      { roll: 5, bond: 'Всю свою жизнь я ищу ответ на один вопрос.' },
      { roll: 6, bond: 'Ради знаний я продал душу. Когда-нибудь я надеюсь совершить великое деяние и вернуть её себе.' }
    ],
    flaws: [
      { roll: 1, flaw: 'Меня легко отвлечь, пообещав информацию.' },
      { roll: 2, flaw: 'Увидев демона, большинство закричит и убежит. Я же остановлюсь и буду изучать его анатомию.' },
      { roll: 3, flaw: 'Для раскрытия древних тайн можно пожертвовать современной цивилизацией.' },
      { roll: 4, flaw: 'Я избегаю очевидных решений, пользуясь замысловатыми.' },
      { roll: 5, flaw: 'Я говорю, не обдумывая слова, чем часто оскорбляю других.' },
      { roll: 6, flaw: 'Ради спасения своей или чьей-либо еще жизни я выболтаю любую тайну.' }
    ]
  }
};