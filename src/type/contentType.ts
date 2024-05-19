import { VocaCommonRequest } from '@/type/vocaType';

export interface ContentCommonRequest {
  category: number;
  title: string;
  sourceLink: string;
  publishName: string;
  publishDate: string;
  useYn: boolean;
}

export interface ContentCommonResponse {
  description: string;
}

/*
 *  POST /api/content/add
 */

export interface ContentAddRequest extends ContentCommonRequest {
  vocaIds: number[];
}

export interface ContentAddResponse extends ContentCommonResponse {}

/*
 *  POST /api/content/delete
 */

export type ContentDeleteRequest = number[];

export interface ContentDeleteResponse extends ContentCommonResponse {}

/*
 *  GET /api/content/detail
 */

export interface ContentDetailResponse extends ContentCommonRequest {
  id: number;
  memberId: number;
  vocaList: VocaCommonRequest[];
}

/*
 *  GET /api/content/download
 *  어떤 용도의 API 인지 모르겠음
 *  application/octet-stream
 */

export type ContentDownloadResponse = string;

/*
 *  GET /api/content/list
 */

export interface ContentListModel extends ContentCommonRequest {
  id: number;
  categoryName: string;
  memberName: string;
  vocaContents: string;
  createDate: string;
  modifiedDate: string;
}

export interface ContentListResponse {
  totalCount: number;
  list: ContentListModel[];
}

/*
 *  PUT /api/content/update
 *  FormData { thumbnail, content }
 */

export interface ContentUpdateRequest extends ContentCommonRequest {
  id: number;
  vocaIds: number[];
}

export interface ContentUpdateResponse extends ContentCommonResponse {}

/*
 *  POST /api/content/upload
 *  FormData { file }
 */

export type ContentUploadRequest = FormData;

export interface ContentUploadResponse extends ContentCommonResponse {}
