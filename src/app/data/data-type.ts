export interface Quiz {
  meta: Meta;
  questions: Array<Questions>;
  rating: Array<Rating>;
  score: Array<Score>;
}

interface Meta {
  title: string | number;
  author: string;
  image?: string;
  describe?: string;
  date: string;
  levelDifficulty: 1 | 2 | 3;
}
interface Questions {
  question: string;
  image?: string;
  answers: Array<string>;
  correct: string;
}
interface Rating {
  author: string;
  comment: string;
  rate: 1 | 2 | 3 | 4 | 5;
}
interface Score {
  winner: string;
  score: number;
}
