export interface LoginRequestModel {
  memberId: string;
  password: string;
}

export interface LoginResponseModel {
  accessToken: string;
  refreshToken: string;
  memberName: string;
}
