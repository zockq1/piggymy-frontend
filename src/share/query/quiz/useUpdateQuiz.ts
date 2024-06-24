import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';

import { Request, Response } from '@/type/apiType';
import { UpdateQuizRequestJson } from '@/type/quizType';

import axiosInstance from '../axios';

export const updateQuiz = async (
  request: Request<UpdateQuizRequestJson, number>,
) => {
  const response = await axiosInstance.put<Response<number>>(
    `/api/quizzes/${request.id}`,
    request.data,
  );

  return response.data;
};

export function useUpdateQuiz() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['updateQuiz'],
    mutationFn: updateQuiz,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['quizzes'] });
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

export const patchIsUse = async (
  request: Request<{ quizIds: number[]; isUse: boolean }>,
) => {
  const response = await axiosInstance.patch<Response<null>>(
    `/api/quizzes/isuse`,
    request.data,
  );

  return response.data;
};

export function usePatchQuizzesIsUse() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchIsUse,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['quizzes'] });
      notification.success({
        message: '퀴즈 사용여부 변경 성공',
      });
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '퀴즈 사용여부 변경 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}
