import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';

import { AgreementRequestJson } from '@/type/agreementType';
import { Request, Response } from '@/type/apiType';

import axiosInstance from '../axios';

interface CreateAgreementRequestJson extends AgreementRequestJson {}

export const createAgreement = async (
  request: Request<CreateAgreementRequestJson>,
) => {
  const response = await axiosInstance.post<Response<number>>(
    `/api/agreements`,
    {
      ...request.data,
    },
  );

  return response.data;
};

export function useCreateAgreement() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAgreement,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['agreements'] });
      notification.success({
        message: '약관 생성 성공',
      });
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '약관 생성 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}
