import { QueryClient, useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { CardResponseJson } from '@/type/cardType';

import axiosInstance from '../axios';

interface GetCardId {
  cardId: number;
}

interface GetCardResponse extends CardResponseJson {}

export const getCard = async (request: Request<null, GetCardId>) => {
  const response = await axiosInstance.get<Response<GetCardResponse>>(
    `/api/cards/${request.id?.cardId}`,
  );

  return response.data;
};

export function useGetCard(request: Request<null, GetCardId>) {
  return useQuery({
    queryKey: ['cards', request.id?.cardId],
    queryFn: () => getCard(request),
  });
}

export function usePrefetchCard(
  queryClient: QueryClient,
  request: Request<null, GetCardId>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['cards', request.id?.cardId],
    queryFn: () => getCard(request),
  });
}
