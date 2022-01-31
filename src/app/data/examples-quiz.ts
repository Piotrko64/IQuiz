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
      levelDifficulty: 2,
    },
    questions: [
      {
        question: 'What is not a css preprocessor?',
        answers: ['Sass', 'Stylus', 'Tailwind', 'Less'],
        correct: 'Tailwind',
      },
      {
        question: 'What notation can be used angular interpolation?',
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
        rate: 4,
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
];
