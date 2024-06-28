import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { Request, Response } from '@/type/apiType';
import { CardRequestJson } from '@/type/cardType';

import axiosInstance from '../axios';

interface CreateCardRequestJson extends CardRequestJson {}

export const createCard = async (request: Request<CreateCardRequestJson>) => {
  const {
    title,
    type,
    exposureEndDate,
    exposureStartDate,
    content,
    isUse,
    vocaIdList,
    quizIdList,
  } = request.data;

  const response = await axiosInstance.post<Response<number>>(`/api/cards`, {
    type: type,
    title: title,
    content: content,
    vocaIdList: vocaIdList || [],
    quizIdList: quizIdList || [],
    isUse: isUse,
    exposureStartDate: exposureStartDate.format('YYYY-MM-DD'),
    exposureEndDate: exposureEndDate.format('YYYY-MM-DD'),
  });

  return response.data;
};

export function useCreateCard() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCard,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['cards'] });
      notification.success({
        message: '테마별 카드모음집 생성 성공',
      });
      router.push(`/admin/content/themeCard/${response.data}`);
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '테마별 카드모음집 생성 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}
