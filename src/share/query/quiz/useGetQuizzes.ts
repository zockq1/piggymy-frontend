import { QueryClient, useInfiniteQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { QuizListResponseJson } from '@/type/quizType';

import axiosInstance from '../axios';

interface GetQuizListRequestQuery {
  page?: number;
  page_size?: number;
  sort_type?: 'CREATED' | 'MODIFIED';
  search_keyword?: string;
  filter?: string;
  start_date?: string;
  end_date?: string;
  is_use?: boolean | string;
}

// Utility function to remove null values from an object
const removeNullValues = (obj: GetQuizListRequestQuery) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== null && v !== undefined),
  );
};

export const getQuizList = async (
  request?: Request<GetQuizListRequestQuery>,
) => {
  const filteredParams = removeNullValues(request?.data || {});

  const response = await axiosInstance.get<Response<QuizListResponseJson>>(
    `/api/quizzes`,
    {
      params: filteredParams,
    },
  );

  return response.data;
};

export function useGetQuizListInfinite(
  data?: Request<GetQuizListRequestQuery>,
) {
  return useInfiniteQuery({
    queryKey: ['quizzes', removeNullValues(data?.data || {}) || data],
    queryFn: ({ pageParam }) => {
      return getQuizList({ data: { ...data?.data, page: pageParam } });
    },
    initialPageParam: 1,
    getNextPageParam: (_lastPage, _pages, _firstPageParam, allPageParams) => {
      return allPageParams[allPageParams.length - 1] + 1;
    },
  });
}

export function usePrefetchQuizList(
  queryClient: QueryClient,
  data?: Request<GetQuizListRequestQuery>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['quizzes', data],
    queryFn: () => getQuizList(data),
  });
}
