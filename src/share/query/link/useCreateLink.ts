import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { Request, Response } from '@/type/apiType';
import { LinkRequestJson } from '@/type/linkType';

import axiosInstance from '../axios';

interface CreateLinkRequestJson extends LinkRequestJson {}

export const createLink = async (request: Request<CreateLinkRequestJson>) => {
  const { publishDate } = request.data;

  const response = await axiosInstance.post<Response<number>>(`/api/contents`, {
    ...request.data,
    publishDate: publishDate.format('YYYY-MM-DD'),
  });

  return response.data;
};

export function useCreateLink() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createLink,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['links'] });
      notification.success({
        message: '링크 생성 성공',
      });
      router.push(`/admin/content/link/${response.data}`);
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '링크 생성 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}
