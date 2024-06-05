import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';

import { Request, Response } from '@/type/apiType';

import axiosInstance from '../axios';

interface DeleteBannerId {
  bannerId: number;
}

export const deleteBanner = async (
  bannerData: Request<null, DeleteBannerId>,
) => {
  const response = await axiosInstance.put<Response<null>>(
    `/api/banners${bannerData.id?.bannerId}`,
  );

  return response.data;
};

interface UseDeleteBannerProps {
  onSuccess?: () => void;
}

export function useDeleteBanner({ onSuccess }: UseDeleteBannerProps) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBanner,
    onSuccess: () => {
      onSuccess && onSuccess();
      queryClient.invalidateQueries({ queryKey: ['banners'] });
      notification.success({
        message: '배너 삭제 성공',
      });
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
