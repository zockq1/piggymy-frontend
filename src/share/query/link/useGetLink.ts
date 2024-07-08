import { QueryClient, useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { LinkResponseJson } from '@/type/linkType';

import axiosInstance from '../axios';

interface GetLinkId {
  linkId: number;
}

interface GetLinkResponse extends LinkResponseJson {}

export const getLink = async (request: Request<null, GetLinkId>) => {
  const response = await axiosInstance.get<Response<GetLinkResponse>>(
    `/api/contents/${request.id?.linkId}`,
  );

  return response.data;
};

export function useGetLink(request: Request<null, GetLinkId>) {
  return useQuery({
    queryKey: ['links', request.id?.linkId],
    queryFn: () => getLink(request),
  });
}

export function usePrefetchLink(
  queryClient: QueryClient,
  request: Request<null, GetLinkId>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['links', request.id?.linkId],
    queryFn: () => getLink(request),
  });
}
