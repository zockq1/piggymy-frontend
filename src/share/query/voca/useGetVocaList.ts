import { QueryClient, useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import buildQueryString from '@/utils/buildQueryString';

import axiosInstance from '../axios';

interface GetVocaListRequestQuery {
  page?: number;
  page_size?: number;
  sort_type?: 'CREATED' | 'MODIFIED';
  search_keyword?: string;
  filter?: string;
  start_date?: string;
  end_date?: string;
  use_yn?: boolean;
}

interface GetVocaListResponse {
  totalCount: number;
  list: {
    id: number;
    koreanTitle: string;
    englishTitle: string;
    useYn: boolean;
    createdDate: string;
    modifiedDate: string;
  }[];
}

export const getVocaList = async (query?: Request<GetVocaListRequestQuery>) => {
  const queryString = query ? buildQueryString(query.data) : '';
  const response = await axiosInstance.get<Response<GetVocaListResponse>>(
    `/api/vocas${queryString}`,
  );

  return response.data;
};

export function useGetVocaList(data?: Request<GetVocaListRequestQuery>) {
  return useQuery({
    queryKey: ['vocas', data],
    queryFn: () => getVocaList(data),
  });
}

export function usePrefetchVocaList(
  queryClient: QueryClient,
  data?: Request<GetVocaListRequestQuery>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['vocas', data],
    queryFn: () => getVocaList(data),
  });
}
