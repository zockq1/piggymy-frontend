import { QueryClient, useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { LinkListResponseJson, LinkType } from '@/type/linkType';

import axiosInstance from '../axios';

interface GetLinkListRequestQuery {
  page?: number;
  page_size?: number;
  sort_type?: 'CREATED' | 'MODIFIED';
  title?: string;
  category?: LinkType;
  publish_name?: string;
  member_ids?: number[];
  voca_ids?: number[];
  start_date?: string;
  end_date?: string;
  is_use?: boolean;
}

interface GetLinkListResponse {
  totalCount: number;
  list: LinkListResponseJson[];
}

export const getLinkList = async (
  request?: Request<GetLinkListRequestQuery>,
) => {
  const response = await axiosInstance.get<Response<GetLinkListResponse>>(
    `/api/contents`,
    { params: request?.data },
  );

  return response.data;
};

export function useGetLinkList(request?: Request<GetLinkListRequestQuery>) {
  return useQuery({
    queryKey: ['links', request?.data],
    queryFn: () => getLinkList(request),
  });
}

export function usePrefetchLinkList(
  queryClient: QueryClient,
  data?: Request<GetLinkListRequestQuery>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['links', data?.data],
    queryFn: () => getLinkList(data),
  });
}
