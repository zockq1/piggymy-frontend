import { VocaModel } from '@/type/vocaType';

export interface ContentModel {
  category: number;
  title: string;
  sourceLink: string;
  publishName: string;
  publishDate: string;
  useYn: boolean;
}

export interface ContentResponseModel {
  description: string;
}

/*
 *  POST /api/content/add
 */

export interface ContentAddRequest extends ContentModel {
  vocaIds: number[];
}

export interface ContentAddResponse extends ContentResponseModel {}

/*
 *  POST /api/content/delete
 */

export type ContentDeleteRequest = number[];

export interface ContentDeleteResponse extends ContentResponseModel {}

/*
 *  GET /api/content/detail
 */

export interface ContentDetailResponse extends ContentModel {
  id: number;
  memberId: number;
  vocaList: VocaModel[];
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

export interface ContentListModel extends ContentModel {
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

export interface ContentUpdateRequest extends ContentModel {
  id: number;
  vocaIds: number[];
}

export interface ContentUpdateResponse extends ContentResponseModel {}

/*
 *  POST /api/content/upload
 *  FormData { file }
 */

export type ContentUploadRequest = FormData;

export interface ContentUploadResponse extends ContentResponseModel {}
