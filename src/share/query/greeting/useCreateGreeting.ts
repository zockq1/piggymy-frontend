import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';
import { Dayjs } from 'dayjs';

import { Request, Response } from '@/type/apiType';

import axiosInstance from '../axios';

interface CreateGreetingRequestJson {
  message: string;
  exposureStartDate: Dayjs;
  exposureEndDate: Dayjs;
}

export const createGreeting = async (
  greetingData: Request<CreateGreetingRequestJson>,
) => {
  const response = await axiosInstance.post<Response<null>>(
    `${process.env.NEXT_PUBLIC_BACK_API}/api/greetings`,
    {
      message: greetingData.data.message,
      exposureStartDate:
        greetingData.data.exposureStartDate.format('YYYY-MM-DD'),
      exposureEndDate: greetingData.data.exposureEndDate.format('YYYY-MM-DD'),
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data;
};

interface UseCreateGreetingProps {
  onSuccess?: () => void;
}

export function useCreateGreeting({ onSuccess }: UseCreateGreetingProps) {
  return useMutation({
    mutationFn: createGreeting,
    onSuccess: () => {
      onSuccess && onSuccess();
      notification.success({
        message: '그리팅 메시지 생성 성공',
      });
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '그리팅 메시지 생성 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}
