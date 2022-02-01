import { Quiz } from './data-type';

export const quizzes: Array<Quiz> = [
  {
    meta: {
      title: 'Front-end Quiz',
      author: 'Front-Flex',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
      describe: 'Simple quiz for beginner front-end developers',
      date: '1/6/2022',
      levelDifficulty: 'easy',
    },
    questions: [
      {
        question: 'What is not a css preprocessor?',
        answers: ['Sass', 'Stylus', 'Tailwind', 'Less'],
        correct: 'Tailwind',
      },
      {
        question: 'What notation can be used angular interpolation?',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png',
        answers: [
          '[(interpolation)]',
          '{{interpolation}}',
          '@interpolation',
          '{interpolation}',
        ],
        correct: '{{interpolation}}',
      },
      {
        question: 'Choose no framework',
        answers: ['Remix', 'NuxtJS', 'Prettier', 'Vue.js'],
        correct: 'Prettier',
      },
      {
        question: 'Find example angular directive',
        answers: ['*NgIf', '*NgxFor', '*NpmAngular', '*NgSwift'],
        correct: '*NgIf',
      },
      {
        question: 'What command will create a new branch?',
        image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
        answers: [
          'git branch',
          'git init',
          'git new branch',
          'git checkout -b',
        ],
        correct: 'git checkout -b',
      },
    ],
    rating: [
      {
        author: 'Front-Flex',
        comment: 'Well, not bad',
        rate: 3,
      },
      {
        author: 'FrontJS',
        comment: 'Very Simple!',
        rate: 5,
      },
    ],
    score: [
      {
        winner: 'Front-Flex',
        score: 275,
      },
      {
        winner: 'FrontJS',
        score: 280,
      },
    ],
  },
  {
    meta: {
      title: 'Musical Instruments',
      author: 'Sound_Architecture',
      image:
        'https://soundarchitecture.netlify.app/static/media/logosawhite.75a96919.webp',
      describe: 'Quiz about intruments from the whole world',
      date: '1/2/2022',
      levelDifficulty: 'hard',
    },
    questions: [
      {
        question: 'Cor anglais evolved from what type of instrument?',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/8/80/English_Horn_picture.jpg',
        answers: ['Flute', 'Oboe', 'Clarinet', 'Bassoon'],
        correct: 'Oboe',
      },
      {
        question: 'Sitar came from:',
        image: 'https://art-srebro.pl/images/sitar.jpg',
        answers: ['Anatolia', 'South Asia', 'Northern Africa', 'Balkans'],
        correct: 'South Asia',
      },
      {
        question: 'What is this instrument?',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Lira.jpg',
        answers: ['Octobass', 'Baritone', 'Hurdy-gurdy', 'Bagpipes'],
        correct: 'Hurdy-gurdy',
      },
      {
        question: 'Theramin is special because:',
        image: 'https://ichef.bbci.co.uk/images/ic/1200x675/p01f73n5.jpg',
        answers: [
          'It made of ivory',
          'It is not possible to control volume',
          'You need to use water to play it properly',
          'You do not have to touch it to play it',
        ],
        correct: 'You do not have to touch it to play it',
      },
      {
        question: 'What is this instrument?',
        image:
          'https://ethnictune.com/wp-content/uploads/2016/03/Duduk-D-Alto-Professional.jpg',
        answers: ['Shawm', 'Duduk', 'Flute', 'Oboe'],
        correct: 'Duduk',
      },
      {
        question: 'What is this instrument?',
        image: 'http://www.nyckelharpa.com/images/harpa_hh4.jpg',
        answers: ['Fiddle', 'Nyckelharpa', 'Viola', 'Byzantine lyra'],
        correct: 'Nyckelharpa',
      },
      {
        question: 'What is Celesta ensemble section?',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/4/46/Celesta_Schiedmayer_Studio.jpg',
        answers: ['Brass', 'String', 'Woodwind', 'Percussion'],
        correct: 'Percussion',
      },
      {
        question: 'The sound in armonica is created by:',
        image:
          'https://musictales.club/sites/musictales.club/files/styles/mt_large/public/field/image/glass_armonica_by_robert_comploj_0.jpg',
        answers: ['Glass bowls', 'Water', 'Fingers', 'All answers are correct'],
        correct: 'All answers are correct',
      },
      {
        question: 'The Japanese koto is derived from the Chinese instrument:',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Japanese_Koto.jpg/1200px-Japanese_Koto.jpg',
        answers: ['Gusqin', 'Erhu', 'Pipa', 'Guzheng'],
        correct: 'Guzheng',
      },
      {
        question:
          'What is the most common problem for harpist during concerts?',
        image:
          'https://harpadepoveste.ro/wp-content/uploads/2021/01/harpa-de-poveste1-1.jpg',
        answers: [
          'Breaking strings',
          'Instrument out of tune',
          'Pain in the fingers',
          'Cracked fingernails',
        ],
        correct: 'Breaking strings',
      },
    ],
    rating: [
      {
        author: 'Sound_Architecture',
        comment: 'You know the vibe',
        rate: 4,
      },
      {
        author: 'Sound_Architecture',
        comment: 'You are real musical globtrotter',
        rate: 5,
      },
    ],
    score: [
      {
        winner: 'SA',
        score: 275,
      },
      {
        winner: 'SA',
        score: 280,
      },
    ],
  },
];
