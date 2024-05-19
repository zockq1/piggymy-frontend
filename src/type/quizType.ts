export interface QuizCommonRequest {
  title: string;
  answer: 1 | 2 | 3 | 4;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  useYn: boolean;
  vocaId: number;
}

export interface QuizCommonResponse {
  description: string;
}

/*
 *  POST /api/quiz/add
 */

export interface QuizAddRequest extends QuizCommonRequest {}

export interface QuizAddResponse extends QuizCommonResponse {}

/*
 *  POST /api/quiz/delete
 */

export type QuizDeleteRequest = number[];

export interface QuizDeleteResponse extends QuizCommonResponse {}

/*
 *  GET /api/quiz/detail
 */

export interface QuizDetailResponse extends Omit<QuizCommonRequest, 'vocaId'> {
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

export interface QuizUpdateRequest extends QuizCommonRequest {
  id: number;
}

export interface QuizUpdateResponse extends QuizCommonResponse {}

/*
 *  PATCH /api/quiz/update/useyn
 */

export interface QuizUpdateUseYnRequest {
  quizIds: number[];
  useYn: boolean;
}

export interface QuizUpdateUseYnResponse extends QuizCommonResponse {}

/*
 *  POST /api/quiz/upload
 *  FormData { file }
 */

export type QuizUploadRequest = FormData;

export interface QuizUploadResponse extends QuizCommonResponse {}
