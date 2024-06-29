import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { Request, Response } from '@/type/apiType';

import axiosInstance from '../axios';

interface DeleteCardId {
  cardId: number;
}

export const deleteCard = async (request: Request<null, DeleteCardId>) => {
  const response = await axiosInstance.delete<Response<null>>(
    `/api/cards/${request.id?.cardId}`,
  );

  return response.data;
};

export function useDeleteCard() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cards'] });
      notification.success({
        message: '테마별 카드모음집 삭제 성공',
      });
      router.push('/admin/content/themeCard');
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '테마별 카드모음집 삭제 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}
