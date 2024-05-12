import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { LoginResponseModel } from '@/type/authType';

const { persistAtom } = recoilPersist({
  key: 'jwt',
  storage: localStorage,
});

export const authState = atom<LoginResponseModel>({
  key: 'authState',
  default: {
    accessToken: '',
    refreshToken: '',
    memberName: '',
  },
  effects_UNSTABLE: [persistAtom],
});
