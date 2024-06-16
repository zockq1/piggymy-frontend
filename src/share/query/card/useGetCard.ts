import { QueryClient, useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { CardResponseJson } from '@/type/cardType';

import axiosInstance from '../axios';

interface GetCardId {
  cardId: number;
}

interface GetCardResponse extends CardResponseJson {}

export const getCard = async (cardData: Request<null, GetCardId>) => {
  const response = await axiosInstance.get<Response<GetCardResponse>>(
    `/api/cards/${cardData.id?.cardId}`,
  );

  return response.data;
};

export function useGetCard(data: Request<null, GetCardId>) {
  return useQuery({
    queryKey: ['cards', data.id?.cardId],
    queryFn: () => getCard(data),
  });
}

export function usePrefetchCard(
  queryClient: QueryClient,
  data: Request<null, GetCardId>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['cards', data.id?.cardId],
    queryFn: () => getCard(data),
  });
}
