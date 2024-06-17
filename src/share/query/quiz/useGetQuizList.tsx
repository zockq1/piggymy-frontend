import { QueryClient, useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';

import axiosInstance from '../axios';

interface GetQuizListRequestQuery {
  page?: number;
  page_size?: number;
  sort_type?: 'CREATED' | 'MODIFIED';
  search_type?: 1 | 2;
  search_keyword?: string;
  start_date?: string;
  end_date?: string;
  use_yn?: boolean;
}

interface GetQuizListResponse {
  totalCount: number;
  list: {
    id: number;
    title: string;
    isUse: boolean;
    createdDate: string;
    modifiedDate: string;
  }[];
}

export const getQuizList = async (query?: Request<GetQuizListRequestQuery>) => {
  const response = await axiosInstance.get<Response<GetQuizListResponse>>(
    `/api/quizzes`,
    { params: query?.data },
  );

  return response.data;
};

export function useGetQuizList(data?: Request<GetQuizListRequestQuery>) {
  return useQuery({
    queryKey: ['quizzes', data?.data],
    queryFn: () => getQuizList(data),
  });
}

export function usePrefetchQuizList(
  queryClient: QueryClient,
  data?: Request<GetQuizListRequestQuery>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['quizzes', data?.data],
    queryFn: () => getQuizList(data),
  });
}
