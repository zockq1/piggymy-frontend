import { UploadFile } from 'antd';
import { Dayjs } from 'dayjs';

export interface BadgeRequestJson {
  image: UploadFile[];
  title: string;
  description: string;
  exposureStartDate: Dayjs;
  exposureEndDate: Dayjs;
  isUse: boolean;
}

export interface BadgeResponseJson {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  imageName: string;
  exposureStartDate: string;
  exposureEndDate: string;
  createdDate: string;
  modifiedDate: string;
  isUse: boolean;
}

export interface BadgeFormValue {
  exposureDuration: Dayjs[];
  title: string;
  description: string;
  image: UploadFile[];
  isUse: boolean;
}
