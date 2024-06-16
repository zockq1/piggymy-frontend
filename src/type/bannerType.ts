import { UploadFile } from 'antd';
import { Dayjs } from 'dayjs';

export interface BannerRequestJson {
  image: UploadFile[];
  type: 'VOCA' | 'QUIZ';
  title: string;
  buttonName: string;
  moveQuizId: number | null;
  moveVocaId: number | null;
  exposureStartDate: Dayjs;
  exposureEndDate: Dayjs;
}

export interface BannerResponseJson {
  id: number;
  type: 'VOCA' | 'QUIZ';
  title: string;
  imagePath: string;
  imageName: string;
  buttonName: string;
  moveQuizId: number | null;
  moveVocaId: number | null;
  exposureStartDate: string;
  exposureEndDate: string;
  createdDate: string;
  modifiedDate: string;
}

export interface BannerFormValue {
  exposureDuration: Dayjs[];
  type: 'VOCA' | 'QUIZ';
  title: string;
  image: UploadFile[];
  buttonName: string;
  moveQuizId: number | null;
  moveVocaId: number | null;
}
