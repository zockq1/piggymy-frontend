import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';

import { Request, Response } from '@/type/apiType';
import { BadgeRequestJson } from '@/type/badgeType';

import axiosInstance from '../axios';

interface UpdateBadgeId {
  badgeId: number;
}

interface UpdateBadgeRequestJson extends BadgeRequestJson {
  thumbnailPath: string;
  thumbnailName: string;
}

export const updateBadge = async (
  request: Request<UpdateBadgeRequestJson, UpdateBadgeId>,
) => {
  const {
    title,
    description,
    month,
    thumbnail,
    thumbnailPath,
    thumbnailName,
    isUse,
  } = request.data;

  const formData = new FormData();
  if (thumbnail && thumbnail.length > 0 && thumbnail[0].originFileObj) {
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
        thumbnailPath: thumbnailPath,
        thumbnailName: thumbnailName,
      }),
    ],
    { type: 'application/json' },
  );

  formData.append('badge', badgeBlob);

  const response = await axiosInstance.put<Response<null>>(
    `/api/badges/attendance/${request.id?.badgeId}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response.data;
};

export function useUpdateBadge() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBadge,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['badges'] });
      notification.success({
        message: '뱃지 수정 성공',
      });
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '뱃지 수정 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}
