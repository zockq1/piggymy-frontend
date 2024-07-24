export interface UserListResponseJson {
  totalCount: number;
  list: UserModel[];
}

export interface UserResponseJson {
  id: number;
  nickname: string;
  vocaId?: number;
  email: string;
  profileImgName: string;
  profileImgPath: string;
  socialLogin: string;
  delYn: boolean;
  createdDate: string;
  modifiedDate: string;
}

export interface UserModel extends UserResponseJson {}

export interface UpdateUserRequestJson {
  nickname: string;
  vocaId?: number;
  email: string;
  profileImgName: string;
  profileImgPath: string;
  socialLogin: string;
  delYn: boolean;
  createdDate: string;
  modifiedDate: string;
}
