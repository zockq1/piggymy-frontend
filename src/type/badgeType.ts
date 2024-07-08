import { UploadFile } from 'antd';

export interface BadgeListResponseJson {
  totalCount: number;
  list: BadgeResponseJson[];
}

export interface BadgeRequestJson {
  thumbnail: UploadFile[];
  title: string;
  description: string;
  month: number;
  isUse: boolean;
}

export interface BadgeResponseJson {
  id: number;
  title: string;
  description: string;
  thumbnailPath: string;
  thumbnailName: string;
  month: number;
  createdDate: string;
  modifiedDate: string;
  isUse: boolean;
}

export interface BadgeFormValue {
  month: number;
  title: string;
  description: string;
  thumbnail: UploadFile[];
  isUse: boolean;
}
