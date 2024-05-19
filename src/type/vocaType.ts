export interface VocaCommonRequest {
  id: number;
  koreanTitle: string;
  englishTitle: string;
  useYn: boolean;
  createdDate: string;
  modifiedDate: string;
}

export interface VocaCommonResponse {
  description: string;
}

/*
 *  POST /api/voca/add
 *  FormData { thumbnail, voca }
 */

export type VocaAddRequest = FormData;

export interface VocaAddResponse extends VocaCommonResponse {}

/*
 *  POST /api/voca/delete
 */

export type VocaDeleteRequest = number[];

export interface VocaDeleteResponse extends VocaCommonResponse {}

/*
 *  GET /api/voca/detail
 */

export interface VocaDetailResponse extends VocaCommonRequest {
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
 *  GET /api/voca/download
 *  어떤 용도의 API 인지 모르겠음
 *  application/octet-stream
 */

export type VocaDownloadResponse = string;

/*
 *  GET /api/voca/list
 */

export interface VocaListResponse {
  totalCount: number;
  list: VocaCommonRequest[];
}

/*
 *  PUT /api/voca/update
 *  FormData { thumbnail, voca }
 */

export type VocaUpdateRequest = FormData;

export interface VocaUpdateResponse extends VocaCommonResponse {}

/*
 *  PATCH /api/voca/update/useyn
 */

export interface VocaUpdateUseYnRequest {
  vocaIds: number[];
  useYn: boolean;
}

export interface VocaUpdateUseYnResponse extends VocaCommonResponse {}

/*
 *  POST /api/voca/upload
 *  FormData { file }
 */

export type VocaUploadRequest = FormData;

export interface VocaUploadResponse extends VocaCommonResponse {}
