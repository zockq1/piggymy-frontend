import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';

import { Request, Response } from '@/type/apiType';

import axiosInstance from '../axios';

export const deleteQuizList = async (
  request: Request<{ quizIds: number[] }>,
) => {
  const response = await axiosInstance.post<Response<number>>(
    `/api/quizzes/delete`,
    request.data,
  );

  return response.data;
};

export function useDeleteQuizzes() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteQuizList,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['quizzes'] });
      notification.success({
        message: '용어 삭제 성공',
      });
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      console.log(error);
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '용어 삭제 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}
