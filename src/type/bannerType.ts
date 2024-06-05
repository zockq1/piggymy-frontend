import { UploadFile } from 'antd';
import { Dayjs } from 'dayjs';

export interface BannerRequestJson {
  image: UploadFile[];
  type: string;
  title: string;
  buttonName: string;
  movePage: number;
  exposureStartDate: Dayjs;
  exposureEndDate: Dayjs;
  useYn: boolean;
}

export interface BannerResponseJson {
  id: number;
  type: string;
  title: string;
  imagePath: string;
  imageName: string;
  buttonName: string;
  movePage: number;
  useYn: boolean;
  exposureStartDate: string;
  exposureEndDate: string;
  createdDate: string;
  modifiedDate: string;
}

export interface BannerFormValue {
  exposureDuration: Dayjs[];
  type: string;
  title: string;
  image: UploadFile[];
  buttonName: string;
  movePage: number; //용어카드 id
  useYn: boolean;
}
