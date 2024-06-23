import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { Request, Response } from '@/type/apiType';
import { CreateQuizRequestJson } from '@/type/quizType';

import axiosInstance from '../axios';

export const createQuiz = async (quizData: Request<CreateQuizRequestJson>) => {
  const {
    koreanTitle,
    englishTitle,
    koreanCategory,
    englishCategory,
    content,
    sourceName,
    sourceLink,
    thumbnailSourceName,
    thumbnailSourceLink,
    isUse,
    image,
  } = quizData.data;

  const formData = new FormData();
  if (image && image[0].originFileObj) {
    formData.append(
      'thumbnail',
      image[0].originFileObj,
      image[0].originFileObj?.name,
    );
  } else {
    formData.append('thumbnail', '');
  }

  const quizBlob = new Blob(
    [
      JSON.stringify({
        koreanTitle: koreanTitle || '가나다',
        englishTitle: englishTitle || 'abc',
        koreanCategory: koreanCategory || 'r',
        englishCategory: englishCategory || 'a',
        content: content || '가나다라마',
        sourceName: sourceName || 'abc',
        sourceLink: sourceLink || 'abc',
        thumbnailSourceName: thumbnailSourceName || 'abc',
        thumbnailSourceLink: thumbnailSourceLink || 'abc',
        isUse: isUse,
      }),
    ],
    { type: 'application/json' },
  );

  formData.append('quiz', quizBlob);

  const response = await axiosInstance.post<Response<number>>(
    `/api/quizzes`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response.data;
};

export function useCreateQuiz() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createQuiz,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['quizzes'] });
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
