import { QueryClient, useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';

import axiosInstance from '../axios';

interface GetBannerId {
  bannerId: number;
}

interface GetBannerResponse {
  id: number;
  type: string;
  title: string;
  imagePath: string;
  imageName: string;
  buttonName: string;
  movePage: number;
  useYn: boolean;
  exposureStartDate: string;
  exposureEndDate: string;
  createdDate: string;
  modifiedDate: string;
}

export const getBanner = async (bannerData: Request<null, GetBannerId>) => {
  const response = await axiosInstance.get<Response<GetBannerResponse>>(
    `/api/banners/${bannerData.id?.bannerId}`,
  );

  return response.data;
};

export function useGetBanner(data: Request<null, GetBannerId>) {
  return useQuery({
    queryKey: ['banners', data],
    queryFn: () => getBanner(data),
  });
}

export function usePrefetchBanner(
  queryClient: QueryClient,
  data: Request<null, GetBannerId>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['banners', data],
    queryFn: () => getBanner(data),
  });
}
