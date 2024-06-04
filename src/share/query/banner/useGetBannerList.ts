import { QueryClient, useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import buildQueryString from '@/utils/buildQueryString';

import axiosInstance from '../axios';

interface GetBannerListRequestQuery {
  page?: number;
  page_size?: number;
}

interface GetBannerListResponse {
  totalCount: number;
  list: {
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
  }[];
}

export const getBannerList = async (
  query?: Request<GetBannerListRequestQuery>,
) => {
  const queryString = query ? buildQueryString(query.data) : '';
  const response = await axiosInstance.get<Response<GetBannerListResponse>>(
    `/api/banners${queryString}`,
  );

  return response.data;
};

export function useGetBannerList(data?: Request<GetBannerListRequestQuery>) {
  return useQuery({
    queryKey: ['banners', data],
    queryFn: () => getBannerList(data),
  });
}

export function usePrefetchBannerList(
  queryClient: QueryClient,
  data?: Request<GetBannerListRequestQuery>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['banners', data],
    queryFn: () => getBannerList(data),
  });
}
