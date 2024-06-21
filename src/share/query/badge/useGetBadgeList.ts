import { QueryClient, useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { BadgeResponseJson } from '@/type/badgeType';

import axiosInstance from '../axios';

interface GetBadgeListRequestQuery {
  page?: number;
  page_size?: number;
  sort_type?: 'CREATED' | 'MODIFIED';
  search_keyword?: string;
  start_date?: string;
  end_date?: string;
}

interface GetBadgeListResponse {
  totalCount: number;
  list: BadgeResponseJson[];
}

export const getBadgeList = async (
  request?: Request<GetBadgeListRequestQuery>,
) => {
  const response = await axiosInstance.get<Response<GetBadgeListResponse>>(
    `/api/badges`,
    { params: request?.data },
  );

  return response.data;
};

export function useGetBadgeList(request?: Request<GetBadgeListRequestQuery>) {
  return useQuery({
    queryKey: ['badges', request?.data],
    queryFn: () => getBadgeList(request),
  });
}

export function usePrefetchBadgeList(
  queryClient: QueryClient,
  request?: Request<GetBadgeListRequestQuery>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['badges', request?.data],
    queryFn: () => getBadgeList(request),
  });
}
