import { QueryClient, useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { BadgeResponseJson } from '@/type/badgeType';

import axiosInstance from '../axios';

interface GetBadgeId {
  badgeId: number;
}

interface GetBadgeResponse extends BadgeResponseJson {}

export const getBadge = async (request: Request<null, GetBadgeId>) => {
  const response = await axiosInstance.get<Response<GetBadgeResponse>>(
    `/api/badges/attendance/${request.id?.badgeId}`,
  );

  return response.data;
};

export function useGetBadge(request: Request<null, GetBadgeId>) {
  return useQuery({
    queryKey: ['badges', request.id?.badgeId],
    queryFn: () => getBadge(request),
  });
}

export function usePrefetchBadge(
  queryClient: QueryClient,
  request: Request<null, GetBadgeId>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['badges', request.id?.badgeId],
    queryFn: () => getBadge(request),
  });
}
