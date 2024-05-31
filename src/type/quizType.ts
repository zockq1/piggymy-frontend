export interface QuizModel {
  title: string;
  answer: 1 | 2 | 3 | 4;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  useYn: boolean;
  vocaId: number;
}

export interface QuizResponseModel {
  description: string;
}

/*
 *  POST /api/quiz/add
 */

export interface QuizAddRequest extends QuizModel {}

export interface QuizAddResponse extends QuizResponseModel {}

/*
 *  POST /api/quiz/delete
 */

export type QuizDeleteRequest = number[];

export interface QuizDeleteResponse extends QuizResponseModel {}

/*
 *  GET /api/quiz/detail
 */

export interface QuizDetailResponse extends Omit<QuizModel, 'vocaId'> {
  id: number;
  quizHistoryCount: number;
  isBookmark: boolean;
  bookmarkCount: number;
  createdDate: string;
  modifiedDate: string;
  view: number;
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

export interface QuizListResponse {
  totalCount: number;
  list: Partial<QuizDetailResponse>[];
}

/*
 *  PUT /api/quiz/update
 */

export interface QuizUpdateRequest extends QuizModel {
  id: number;
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
