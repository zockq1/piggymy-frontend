import { Dayjs } from 'dayjs';

export interface CardRequestJson {
  type: 'VOCA' | 'QUIZ';
  title: string;
  content: string;
  vocaIdList: number[];
  quizIdList: number[];
  isUse: boolean;
  exposureStartDate: Dayjs;
  exposureEndDate: Dayjs;
}

export interface CardResponseJson {
  id: number;
  type: 'VOCA' | 'QUIZ';
  title: string;
  content: string;
  vocaIdList: number[];
  quizIdList: number[];
  isUse: boolean;
  exposureStartDate: string;
  exposureEndDate: string;
  createdDate: string;
  modifiedDate: string;
}

export interface CardFormValue {
  type: 'VOCA' | 'QUIZ';
  title: string;
  content: string;
  vocaIdList: number[];
  quizIdList: number[];
  isUse: boolean;
  exposureDuration: Dayjs[];
}
