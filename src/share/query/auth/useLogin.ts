'use client';

import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';

import { LoginRequestModel, LoginResponseModel } from '@/type/authType';
import Response from '@/type/responseType';

export const login = async (loginData: LoginRequestModel) => {
  const response = await axios.post<Response<LoginResponseModel>>(
    `${process.env.NEXT_PUBLIC_BACK_API}/api/member/login`,
    loginData,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data;
};

export function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setCookie('accessToken', data.data.accessToken, {
        maxAge: 6 * 60 * 60,
      });
      setCookie('refreshToken', data.data.refreshToken, {
        maxAge: 30 * 24 * 60 * 60,
      });
      setCookie('memberName', data.data.memberName, {
        maxAge: 30 * 24 * 60 * 60,
      });
      router.push('/admin');
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '로그인 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
        console.log(error.response);
      }
    },
  });
}
