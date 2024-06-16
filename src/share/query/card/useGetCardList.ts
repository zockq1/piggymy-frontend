import { QueryClient, useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { CardResponseJson } from '@/type/cardType';

import axiosInstance from '../axios';

interface GetCardListRequestQuery {
  page?: number;
  page_size?: number;
}

export const getCardList = async (query?: Request<GetCardListRequestQuery>) => {
  const response = await axiosInstance.get<Response<CardResponseJson[]>>(
    `/api/cards`,
    { params: query?.data },
  );

  return response.data;
};

export function useGetCardList(data?: Request<GetCardListRequestQuery>) {
  return useQuery({
    queryKey: ['cards', data?.data],
    queryFn: () => getCardList(data),
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
