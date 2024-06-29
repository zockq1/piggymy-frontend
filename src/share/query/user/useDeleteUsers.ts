import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';

import { Request, Response } from '@/type/apiType';

import axiosInstance from '../axios';

export const deleteUserList = async (
  request: Request<{ userIds: number[] }>,
) => {
  const response = await axiosInstance.post<Response<number>>(
    `/api/users/delete`,
    request.data,
  );

  return response.data;
};

export function useDeleteUsers() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUserList,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['users'] });
      notification.success({
        message: '용어 삭제 성공',
      });
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '용어 삭제 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}
