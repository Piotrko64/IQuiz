export interface Quiz {
  meta: Meta;
  questions: Array<Questions>;
  rating: Array<Rating>;
  score: Array<Score>;
}

interface Meta {
  title: string;
  author: string;
  image?: string;
  describe?: string;
  date: string;
  levelDifficulty: 'easy' | 'medium' | 'hard';
}
export interface Questions {
  question: string;
  image?: string;
  answers: Array<string>;
  correct: string;
}
export interface Rating {
  author: string;
  comment: string;
  rate: number;
}
interface Score {
  winner: string;
  score: number;
}
export type onetofive = 1 | 2 | 3 | 4 | 5;
export interface rateScore {
  author: string;
  comment: string;
  rate: number;
}
