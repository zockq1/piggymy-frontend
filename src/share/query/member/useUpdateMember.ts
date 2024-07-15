import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';

import { Request, Response } from '@/type/apiType';
import { UpdateMemberRequestJson } from '@/type/memberType';

import axiosInstance from '../axios';

export const updateMember = async (
  request: Request<UpdateMemberRequestJson, number>,
) => {
  const response = await axiosInstance.put<Response<number>>(
    `/api/members/${request.id}`,
    request.data,
  );

  return response.data;
};

export function useUpdateMember() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['updateMember'],
    mutationFn: updateMember,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['members'] });
      notification.success({
        message: '퀴즈 수정 성공',
      });
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '퀴즈 수정 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}
