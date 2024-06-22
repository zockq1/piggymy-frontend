import { QueryClient, useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { CardResponseJson } from '@/type/cardType';

import axiosInstance from '../axios';

interface GetCardListRequestQuery {
  page?: number;
  page_size?: number;
}

interface GetCardListResponse {
  totalCount: number;
  list: Omit<CardResponseJson, 'vocaIdList' | 'vocaIdList'>[];
}

export const getCardList = async (
  request?: Request<GetCardListRequestQuery>,
) => {
  const response = await axiosInstance.get<Response<GetCardListResponse>>(
    `/api/cards`,
    { params: request?.data },
  );

  return response.data;
};

export function useGetCardList(request?: Request<GetCardListRequestQuery>) {
  return useQuery({
    queryKey: ['cards', request?.data],
    queryFn: () => getCardList(request),
  });
}

export function usePrefetchCardList(
  queryClient: QueryClient,
  data?: Request<GetCardListRequestQuery>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['cards', data?.data],
    queryFn: () => getCardList(data),
  });
}
