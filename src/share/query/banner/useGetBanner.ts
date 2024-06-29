import { QueryClient, useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { BannerResponseJson } from '@/type/bannerType';

import axiosInstance from '../axios';

interface GetBannerId {
  bannerId: number;
}

interface GetBannerResponse extends BannerResponseJson {}

export const getBanner = async (request: Request<null, GetBannerId>) => {
  const response = await axiosInstance.get<Response<GetBannerResponse>>(
    `/api/banners/${request.id?.bannerId}`,
  );

  return response.data;
};

export function useGetBanner(data: Request<null, GetBannerId>) {
  return useQuery({
    queryKey: ['banners', data.id?.bannerId],
    queryFn: () => getBanner(data),
  });
}

export function usePrefetchBanner(
  queryClient: QueryClient,
  data: Request<null, GetBannerId>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['banners', data.id?.bannerId],
    queryFn: () => getBanner(data),
  });
}
