import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { Request, Response } from '@/type/apiType';

import axiosInstance from '../axios';

interface DeleteBannerId {
  bannerId: number;
}

export const deleteBanner = async (request: Request<null, DeleteBannerId>) => {
  const response = await axiosInstance.delete<Response<null>>(
    `/api/banners/${request.id?.bannerId}`,
  );

  return response.data;
};

export function useDeleteBanner() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBanner,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['banners'] });
      notification.success({
        message: '배너 삭제 성공',
      });
      router.push('/admin/content/rollingBanner');
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '배너 삭제 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}
