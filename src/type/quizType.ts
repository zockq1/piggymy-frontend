export interface QuizListResponseJson {
  totalCount: number;
  list: QuizModel[];
}

export interface QuizResponseJson {
  id: number;
  title: string;
  vocaId?: number;
  answer?: string;
  option1?: string;
  option2?: string;
  option3?: string;
  option4?: string;
  isUse: boolean;
  quizHistoryCount?: number;
  bookmarkCount?: number;
  hit?: number;
  bookmark?: boolean;
  createdDate?: string;
  modifiedDate?: string;
}

export interface QuizModel extends QuizResponseJson {}

export interface CreateQuizRequestJson {
  vocaId: number;
  title: string;
  answer: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  isUse: false;
}

export interface UpdateQuizRequestJson {
  vocaId?: number;
  title: string;
  answer: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  isUse: boolean;
  quizHistoryCount?: number;
  bookmarkCount?: number;
  createdDate: string;
  modifiedDate?: string;
  hit?: number;
  bookmark?: boolean;
}
