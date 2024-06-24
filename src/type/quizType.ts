export interface QuizListResponseJson {
  id: number;
  koreanTitle: string;
  englishTitle: string;
  isUse: boolean;
  createdDate: string;
  modifiedDate: string;
}

export interface QuizResponseJson {
  id: number;
  title: string;
  answer: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  isUse: boolean;
  vocaId: number;
  quizHistoryCount: number;
  bookmarkCount: number;
  createdDate: string;
  modifiedDate: string;
  hit: number;
  bookmark: boolean;
}

export interface QuizModel {
  id: number;
  title: string;
  answer: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  isUse: boolean;
  createdDate: string;
  modifiedDate: string;
}

export interface QuizResponseModel {
  description: string;
}

/*
 *  POST /api/quizzes
 *  FormData { thumbnail, quiz }
 */

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

export type QuizAddRequest = FormData;

export interface QuizAddResponse extends QuizResponseModel {}

/*
 *  POST /api/quiz/delete
 */

export type QuizDeleteRequest = number[];

export interface QuizDeleteResponse extends QuizResponseModel {}

/*
 *  GET /api/quiz/detail
 */

export interface QuizDetailResponse extends QuizModel {
  koreanCategory: string;
  englishCategory: string;
  content: string;
  thumbnailPath: string;
  thumbnailName: string;
  sourceName: string;
  sourceLink: string;
  thumbnailSourceName: string;
  thumbnailSourceLink: string;
  helpful: number;
  bookmarkCount: number;
  quizId: number;
  quizTitle: string;
}

/*
 *  GET /api/quiz/download
 *  어떤 용도의 API 인지 모르겠음
 *  application/octet-stream
 */

export type QuizDownloadResponse = string;

/*
 *  GET /api/quiz/list
 */

export interface QuizListResponseJson {
  totalCount: number;
  list: QuizModel[];
}

/*
 *  PUT /api/quiz/update
 *  FormData { thumbnail, quiz }
 */

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
export interface QuizUpdateResponse extends QuizResponseModel {}

/*
 *  PATCH /api/quiz/update/useyn
 */

export interface QuizUpdateUseYnRequest {
  quizIds: number[];
  useYn: boolean;
}

export interface QuizUpdateUseYnResponse extends QuizResponseModel {}

/*
 *  POST /api/quiz/upload
 *  FormData { file }
 */

export type QuizUploadRequest = FormData;

export interface QuizUploadResponse extends QuizResponseModel {}
