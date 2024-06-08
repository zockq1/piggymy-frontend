import { QueryClient, useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { VocaResponseJson } from '@/type/vocaType';

import axiosInstance from '../axios';

interface GetVocaListRequestQuery {
  page?: number;
  page_size?: number;
  sort_type?: 'CREATED' | 'MODIFIED';
  search_keyword?: string;
  filter?: string;
  start_date?: string;
  end_date?: string;
  use_yn?: boolean | string;
}

interface GetVocaListResponse {
  totalCount: number;
  list: VocaResponseJson[];
}

// Utility function to remove null values from an object
const removeNullValues = (obj: GetVocaListRequestQuery) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v !== null && v !== undefined),
  );
};

export const getVocaList = async (query?: Request<GetVocaListRequestQuery>) => {
  const filteredParams = removeNullValues(query?.data || {});

  const response = await axiosInstance.get<Response<GetVocaListResponse>>(
    `/api/vocas`,
    { params: filteredParams },
  );

  return response.data;
};

export function useGetVocaList(data?: Request<GetVocaListRequestQuery>) {
  return useQuery({
    queryKey: ['vocas', removeNullValues(data?.data || {}) || data],
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
