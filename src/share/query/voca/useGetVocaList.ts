import { QueryClient, useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { VocaListResponseJson } from '@/type/vocaType';

import axiosInstance from '../axios';

interface GetVocaListRequestQuery {
  page?: number;
  page_size?: number;
  sort_type?: 'CREATED' | 'MODIFIED';
  search_keyword?: string;
  filter?: string;
  start_date?: string;
  end_date?: string;
  is_use?: string | null;
}

const removeNullValues = (obj: GetVocaListRequestQuery) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== null && v !== undefined),
  );
};

export const getVocaList = async (
  request: Request<GetVocaListRequestQuery>,
) => {
  const filteredParams = removeNullValues(request.data);

  const response = await axiosInstance.get<Response<VocaListResponseJson>>(
    `/api/vocas`,
    {
      params: filteredParams,
    },
  );

  return response.data;
};

export function useGetVocaList(data: Request<GetVocaListRequestQuery>) {
  return useQuery({
    queryKey: ['vocas'],
    queryFn: () => getVocaList(data),
  });
}

export function usePrefetchVocaList(
  queryClient: QueryClient,
  data: Request<GetVocaListRequestQuery>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['vocas', data?.data],
    queryFn: () => getVocaList(data),
  });
}
