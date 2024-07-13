// export type OpinionType =
//   | 'BAD'
//   | 'NOT_HELPFUL'
//   | 'SOSO'
//   | 'HELPFUL'
//   | 'VERY_HELPFUL'
//   | 'SUPER_HELPFUL';

export const enum OpinionType {
  BAD = 'BAD',
  NOT_HELPFUL = 'NOT_HELPFUL',
  SOSO = 'SOSO',
  HELPFUL = 'HELPFUL',
  VERY_HELPFUL = 'VERY_HELPFUL',
  SUPER_HELPFUL = 'SUPER_HELPFUL',
}

export interface OpinionResponseJson {
  id: number;
  type: OpinionType;
  content: string;
  userNickname: string;
  userDelYn: boolean;
  createdDate: string;
  modifiedDate: string;
}
