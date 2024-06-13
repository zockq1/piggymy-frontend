import { QueryClient, useInfiniteQuery, useQuery } from '@tanstack/react-query';

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
  is_use?: boolean | string;
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

export const getVocaDetail = async (vocaId: number) => {
  const response = await axiosInstance.get(`/api/vocas/${vocaId}`, {});

  return response.data;
};

export const getVocaList = async (query?: Request<GetVocaListRequestQuery>) => {
  const filteredParams = removeNullValues(query?.data || {});

  const response = await axiosInstance.get(`/api/vocas`, {
    params: filteredParams,
  });

  return response.data;
};

export function useGetVocaDetail(vocaId: number) {
  return useQuery({
    queryKey: ['voca', vocaId],
    queryFn: () => {
      return getVocaDetail(vocaId);
    },
  });
}

export function useGetVocaListInfinite(
  data?: Request<GetVocaListRequestQuery>,
) {
  return useInfiniteQuery({
    queryKey: ['vocas', removeNullValues(data?.data || {}) || data],
    queryFn: ({ pageParam }) => {
      return getVocaList({ data: { ...data?.data, page: pageParam } });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages, firstPageParam, allPageParams) => {
      return allPageParams[allPageParams.length - 1] + 1;
    },
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
