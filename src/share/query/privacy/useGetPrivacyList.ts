import { QueryClient, useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { PrivacyResponseJson } from '@/type/privacyType';

import axiosInstance from '../axios';

interface GetPrivacyListRequestQuery {
  page?: number;
  page_size?: number;
}

interface GetPrivacyListResponse {
  totalCount: number;
  list: Omit<PrivacyResponseJson, 'content'>[];
}

export const getPrivacyList = async (
  request?: Request<GetPrivacyListRequestQuery>,
) => {
  const response = await axiosInstance.get<Response<GetPrivacyListResponse>>(
    `/api/privacys`,
    { params: request?.data },
  );

  return response.data;
};

export function useGetPrivacyList(
  request?: Request<GetPrivacyListRequestQuery>,
) {
  return useQuery({
    queryKey: ['privacys', request?.data],
    queryFn: () => getPrivacyList(request),
  });
}

export function prefetchPrivacyList(
  queryClient: QueryClient,
  data?: Request<GetPrivacyListRequestQuery>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['privacys', data?.data],
    queryFn: () => getPrivacyList(data),
  });
}
