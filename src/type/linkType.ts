import { Dayjs } from 'dayjs';

export type LinkType = 'NEWS' | 'YOUTUBE' | 'MOVIE' | 'DRAMA';

export interface LinkFormValue {
  category: LinkType;
  title: string;
  sourceLink: string;
  publishName: string;
  publishDate: Dayjs;
  isUse: boolean;
  vocaIdList: number[];
}

export interface LinkRequestJson extends LinkFormValue {}

export interface LinkResponseJson {
  id: number;
  category: LinkType;
  title: string;
  sourceLink: string;
  publishName: string;
  publishDate: string;
  isUse: boolean;
  vocaIdList: number[];
  createdDate: string;
  modifiedDate: string;
}

export interface LinkListResponseJson {
  id: number;
  category: LinkType;
  title: string;
  sourceLink: string;
  publishName: string;
  publishDate: string;
  isUse: boolean;
  memberName: string;
  vocaContents: string;
  createdDate: string;
  modifiedDate: string;
}
