'use client';

import { useMutation } from '@tanstack/react-query';
import { setCookie } from 'cookies-next';
import { useRecoilState } from 'recoil';

import { LoginRequestModel, LoginResponseModel } from '@/type/authType';
import Response from '@/type/responseType';

import { baseURL } from '../query/fetch-config';
import { authState } from './auth.recoil';

export const login = async (loginData: LoginRequestModel) => {
  const response = await fetch(`${baseURL}/api/member/login`, {
    method: 'POST',
    body: JSON.stringify(loginData),
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json() as Promise<Response<LoginResponseModel>>;
};

export function useLoginMutation() {
  const [, setAuth] = useRecoilState(authState);
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setCookie('accessToken', data.data.accessToken);
      setAuth({
        ...data.data,
      });
    },
  });
}
