import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';

import { Request, Response } from '@/type/apiType';
import { LinkRequestJson } from '@/type/linkType';

import axiosInstance from '../axios';

interface UpdateLinkId {
  linkId: number;
}

interface UpdateLinkRequestJson extends LinkRequestJson {}

export const updateLink = async (
  request: Request<UpdateLinkRequestJson, UpdateLinkId>,
) => {
  const { publishDate } = request.data;

  const response = await axiosInstance.put<Response<null>>(
    `/api/contents/${request.id?.linkId}`,
    {
      ...request.data,
      publishDate: publishDate.format('YYYY-MM-DD'),
    },
  );

  return response.data;
};

export function useUpdateLink() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateLink,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['links'] });
      notification.success({
        message: '링크 수정 성공',
      });
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '링크 수정 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}
