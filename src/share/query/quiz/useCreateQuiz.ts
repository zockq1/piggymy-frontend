import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { Request, Response } from '@/type/apiType';
import { CreateQuizRequestJson } from '@/type/quizType';

import axiosInstance from '../axios';

export const createQuiz = async (request: Request<CreateQuizRequestJson>) => {
  const response = await axiosInstance.post<Response<number>>(
    `/api/quizzes`,
    request.data,
  );

  return response.data;
};

export function useCreateQuiz() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createQuiz,
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({ queryKey: ['quizzes'] });
      notification.success({
        message: '용어 생성 성공',
      });
      router.push(`/admin/quiz/quizManagement/${data.data}`);
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '용어 생성 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}
