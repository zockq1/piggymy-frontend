import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { Request, Response } from '@/type/apiType';

import axiosInstance from '../axios';

interface DeleteBadgeId {
  badgeId: number;
}

export const deleteBadge = async (request: Request<null, DeleteBadgeId>) => {
  const response = await axiosInstance.delete<Response<null>>(
    `/api/badges/attendance/${request.id?.badgeId}`,
  );

  return response.data;
};

export function useDeleteBadge() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBadge,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['badges'] });
      notification.success({
        message: '배너 삭제 성공',
      });
      router.push('/admin/content/badge');
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '뱃지 삭제 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}
