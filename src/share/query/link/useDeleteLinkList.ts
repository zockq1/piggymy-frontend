import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';

import { Request, Response } from '@/type/apiType';

import axiosInstance from '../axios';

export const deleteLinkList = async (
  request: Request<{ linkIds: number[] }>,
) => {
  const response = await axiosInstance.post<Response<number>>(
    `/api/contents/delete`,
    request.data,
  );

  return response.data;
};

export function useDeleteLinkList() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteLinkList,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['links'] });
      notification.success({
        message: '링크 삭제 성공',
      });
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '링크 삭제 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}
