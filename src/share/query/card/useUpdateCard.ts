import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';

import { Request, Response } from '@/type/apiType';
import { CardRequestJson } from '@/type/cardType';

import axiosInstance from '../axios';

interface UpdateCardId {
  cardId: number;
}

interface UpdateCardRequestJson extends CardRequestJson {}

export const updateCard = async (
  request: Request<UpdateCardRequestJson, UpdateCardId>,
) => {
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

  const response = await axiosInstance.put<Response<null>>(
    `/api/cards/${request.id?.cardId}`,
    {
      type: type,
      title: title,
      content: content,
      vocaIdList: vocaIdList || [],
      quizIdList: quizIdList || [],
      isUse: isUse,
      exposureStartDate: exposureStartDate.format('YYYY-MM-DD'),
      exposureEndDate: exposureEndDate.format('YYYY-MM-DD'),
    },
  );

  return response.data;
};

export function useUpdateCard() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCard,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['cards'] });
      notification.success({
        message: '테마별 카드모음집 수정 성공',
      });
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '테마별 카드모음집 수정 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}
