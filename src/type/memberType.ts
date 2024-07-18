export interface MemberListResponseJson {
  totalCount: number;
  list: MemberModel[];
}

export interface MemberResponseJson {
  id: number;
  name: string;
  memberId?: number;
  email: string;
  position: string;
  work: string;
  profileImgName: string;
  profileImgPath: string;
  socialLogin: string;
  createdDate: string;
  modifiedDate: string;
}

export interface MemberModel extends MemberResponseJson {}

export interface UpdateMemberRequestJson {
  name: string;
  memberId?: number;
  email: string;
  position: string;
  work: string;
  profileImgName: string;
  profileImgPath: string;
  socialLogin: string;
  createdDate: string;
  modifiedDate: string;
}
