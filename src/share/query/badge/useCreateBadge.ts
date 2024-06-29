import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { Request, Response } from '@/type/apiType';
import { BadgeRequestJson } from '@/type/badgeType';

import axiosInstance from '../axios';

interface CreateBadgeRequestJson extends BadgeRequestJson {}

export const createBadge = async (request: Request<CreateBadgeRequestJson>) => {
  const { title, description, month, thumbnail, isUse } = request.data;

  const formData = new FormData();
  if (thumbnail && thumbnail[0].originFileObj) {
    formData.append(
      'thumbnail',
      thumbnail[0].originFileObj,
      thumbnail[0].originFileObj?.name,
    );
  } else {
    formData.append('thumbnail', '');
  }

  const badgeBlob = new Blob(
    [
      JSON.stringify({
        description: description,
        title: title,
        isUse: isUse,
        month: month,
      }),
    ],
    { type: 'application/json' },
  );

  formData.append('badge', badgeBlob);

  const response = await axiosInstance.post<Response<number>>(
    `/api/badges/attendance`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response.data;
};

export function useCreateBadge() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBadge,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['badges'] });
      notification.success({
        message: '뱃지 생성 성공',
      });
      router.push(`/admin/content/badge/${response.data}`);
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '뱃지 생성 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}
