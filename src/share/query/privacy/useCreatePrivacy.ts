import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';

import { Request, Response } from '@/type/apiType';
import { PrivacyRequestJson } from '@/type/privacyType';

import axiosInstance from '../axios';

interface CreatePrivacyRequestJson extends PrivacyRequestJson {}

export const createPrivacy = async (
  request: Request<CreatePrivacyRequestJson>,
) => {
  const response = await axiosInstance.post<Response<number>>(`/api/privacys`, {
    ...request.data,
  });

  return response.data;
};

export function useCreatePrivacy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPrivacy,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['privacys'] });
      notification.success({
        message: '개인정보 처리방침 생성 성공',
      });
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '개인정보 처리방침 생성 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}
