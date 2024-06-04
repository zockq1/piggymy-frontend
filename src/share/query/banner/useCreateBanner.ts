import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification, UploadFile } from 'antd';
import axios, { AxiosError } from 'axios';
import { Dayjs } from 'dayjs';

import { Request, Response } from '@/type/apiType';

import axiosInstance from '../axios';

interface CreateBannerRequestJson {
  image: UploadFile[];
  type: string;
  title: string;
  buttonName: string;
  movePage: number;
  exposureStartDate: Dayjs;
  exposureEndDate: Dayjs;
  useYn: boolean;
}

export const createBanner = async (
  bannerData: Request<CreateBannerRequestJson>,
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

  const response = await axiosInstance.post<Response<null>>(
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

interface UseCreateBannerProps {
  onSuccess?: () => void;
}

export function useCreateBanner({ onSuccess }: UseCreateBannerProps) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBanner,
    onSuccess: () => {
      onSuccess && onSuccess();
      queryClient.invalidateQueries({ queryKey: ['banners'] });
      notification.success({
        message: '배너 생성 성공',
      });
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '배너 생성 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}
