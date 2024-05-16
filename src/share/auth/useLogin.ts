'use client';

import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';
import { setCookie } from 'cookies-next';

import { LoginRequestModel, LoginResponseModel } from '@/type/authType';
import Response from '@/type/responseType';

import { baseURL } from '../query/fetch-config';

export const login = async (loginData: LoginRequestModel) => {
  const response = await axios.post<Response<LoginResponseModel>>(
    `${baseURL}/api/member/login`,
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
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '에러 발생',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
        console.log(error.response);
      }
    },
  });
}
