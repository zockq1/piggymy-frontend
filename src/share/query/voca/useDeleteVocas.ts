import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { Response } from '@/type/apiType';

import axiosInstance from '../axios';

export const deleteVocaList = async (vocaIds: number[]) => {
  const response = await axiosInstance.post<Response<number>>(
    `/api/vocas/delete`,
    { vocaIds },
  );

  return response.data;
};

export function useDeleteVocas() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteVocaList,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['vocas'] });
      notification.success({
        message: '용어 삭제 성공',
      });
      router.push(`/admin/quiz/vocaManagement/${data.data}`);
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
