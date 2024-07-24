import { QueryClient, useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { BannerResponseJson } from '@/type/bannerType';

import axiosInstance from '../axios';

interface GetBannerListRequestQuery {
  page?: number;
  page_size?: number;
}

interface GetBannerListResponse {
  totalCount: number;
  list: BannerResponseJson[];
}

export const getBannerList = async (
  request?: Request<GetBannerListRequestQuery>,
) => {
  const response = await axiosInstance.get<Response<GetBannerListResponse>>(
    `/api/banners`,
    { params: request?.data },
  );

  return response.data;
};

export function useGetBannerList(request?: Request<GetBannerListRequestQuery>) {
  return useQuery({
    queryKey: ['banners', request?.data],
    queryFn: () => getBannerList(request),
  });
}

export function usePrefetchBannerList(
  queryClient: QueryClient,
  request?: Request<GetBannerListRequestQuery>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['banners', request?.data],
    queryFn: () => getBannerList(request),
  });
}
