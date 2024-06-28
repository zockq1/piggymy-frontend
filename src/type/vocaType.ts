import { UploadFile } from 'antd/es/upload/interface';

export interface VocaListResponseJson {
  id: number;
  koreanTitle: string;
  englishTitle: string;
  isUse: boolean;
  createdDate: string;
  modifiedDate: string;
}

export interface VocaResponseJson {
  id: number;
  koreanTitle: string;
  englishTitle: string;
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
  isUse: false;
  bookmarkCount: number;
  createdDate: string;
  modifiedDate: string;
  quizId: number | string | null;
  quizTitle: number | string | null;
}

export interface VocaModel {
  id: number;
  koreanTitle: string;
  englishTitle: string;
  isUse: boolean;
  createdDate: string;
  modifiedDate: string;
}

export interface VocaResponseModel {
  description: string;
}

/*
 *  POST /api/vocas
 *  FormData { thumbnail, voca }
 */

export interface CreateVocaRequestJson {
  vocaId: number;
  koreanTitle: string;
  englishTitle: string;
  koreanCategory: string;
  englishCategory: string;
  content: string;
  sourceName: string;
  sourceLink: string;
  thumbnailPath: string;
  thumbnailName: string;
  thumbnailSourceName: string;
  thumbnailSourceLink: string;
  isUse: false;
  image: UploadFile[];
  createdDate: string;
}

export type VocaAddRequest = FormData;

export interface VocaAddResponse extends VocaResponseModel {}

/*
 *  POST /api/voca/delete
 */

export type VocaDeleteRequest = number[];

export interface VocaDeleteResponse extends VocaResponseModel {}

/*
 *  GET /api/voca/${vocaId}
 */

export interface VocaDetailResponseJson {
  id: number;
  koreanTitle: string;
  englishTitle: string;
  isUse: boolean;
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
  createdDate: string;
  modifiedDate: string;
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

export interface VocaListResponseJson {
  totalCount: number;
  list: VocaModel[];
}

/*
 *  PUT /api/voca/update
 *  FormData { thumbnail, voca }
 */

export interface UpdateVocaRequestJson {
  vocaId?: number;
  koreanTitle: string;
  englishTitle: string;
  koreanCategory: string;
  englishCategory: string;
  content: string;
  sourceName: string;
  sourceLink: string;
  thumbnailPath: string;
  thumbnailName: string;
  thumbnailSourceName: string;
  thumbnailSourceLink: string;
  isUse: false;
  image: UploadFile[];
  createdDate: string;
}
export interface VocaUpdateResponse extends VocaResponseModel {}

/*
 *  PATCH /api/voca/update/useyn
 */

export interface VocaUpdateUseYnRequest {
  vocaIds: number[];
  useYn: boolean;
}

export interface VocaUpdateUseYnResponse extends VocaResponseModel {}

/*
 *  POST /api/voca/upload
 *  FormData { file }
 */

export type VocaUploadRequest = FormData;

export interface VocaUploadResponse extends VocaResponseModel {}
