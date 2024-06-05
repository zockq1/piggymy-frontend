import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';

import { Request, Response } from '@/type/apiType';
import { BannerRequestJson } from '@/type/bannerType';

import axiosInstance from '../axios';

interface UpdateBannerId {
  bannerId: number;
}

interface UpdateBannerRequestJson extends BannerRequestJson {}

export const updateBanner = async (
  bannerData: Request<UpdateBannerRequestJson, UpdateBannerId>,
) => {
  const {
    title,
    type,
    buttonName,
    movePage,
    exposureEndDate,
    exposureStartDate,
    image,
    useYn,
  } = bannerData.data;

  const formData = new FormData();
  formData.append('thumbnail', image[0].originFileObj as Blob);
  formData.append(
    'banner',
    JSON.stringify({
      type: type,
      title: title,
      buttonName: buttonName,
      movePage: movePage,
      exposureStartDate: exposureStartDate.format('YYYY-MM-DD'),
      exposureEndDate: exposureEndDate.format('YYYY-MM-DD'),
      useYn: useYn,
    }),
  );

  const response = await axiosInstance.put<Response<null>>(
    `/api/banners`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response.data;
};

interface UseUpdateBannerProps {
  onSuccess?: () => void;
}

export function useUpdateBanner({ onSuccess }: UseUpdateBannerProps) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBanner,
    onSuccess: () => {
      onSuccess && onSuccess();
      queryClient.invalidateQueries({ queryKey: ['banners'] });
      notification.success({
        message: '배너 수정 성공',
      });
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '배너 수정 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}
