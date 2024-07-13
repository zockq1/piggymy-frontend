import { QueryClient, useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { OpinionResponseJson, OpinionType } from '@/type/opinionType';

import axiosInstance from '../axios';

interface GetOpinionListRequestQuery {
  page?: number;
  page_size?: number;
  sort_type?: 'CREATED' | 'MODIFIED';
  opinion_type?: OpinionType;
  user_nickname?: string;
  delYn?: boolean;
  start_date?: string;
  end_date?: string;
}

interface GetOpinionListResponse {
  totalCount: number;
  list: OpinionResponseJson[];
}

export const getOpinionList = async (
  request?: Request<GetOpinionListRequestQuery>,
) => {
  const response = await axiosInstance.get<Response<GetOpinionListResponse>>(
    `/api/opinions`,
    { params: request?.data },
  );

  return response.data;
};

export function useGetOpinionList(
  request?: Request<GetOpinionListRequestQuery>,
) {
  return useQuery({
    queryKey: ['opinions', request?.data],
    queryFn: () => getOpinionList(request),
  });
}

export function prefetchOpinionList(
  queryClient: QueryClient,
  request?: Request<GetOpinionListRequestQuery>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['opinions', request?.data],
    queryFn: () => getOpinionList(request),
  });
}
