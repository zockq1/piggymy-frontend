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

export function useGetBannerList(data?: Request<GetBannerListRequestQuery>) {
  return useQuery({
    queryKey: ['banners', data?.data],
    queryFn: () => getBannerList(data),
  });
}

export function usePrefetchBannerList(
  queryClient: QueryClient,
  data?: Request<GetBannerListRequestQuery>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['banners', data?.data],
    queryFn: () => getBannerList(data),
  });
}
