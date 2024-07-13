import { QueryClient, useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { PrivacyResponseJson } from '@/type/privacyType';

import axiosInstance from '../axios';

interface GetPrivacyId {
  privacyId: number;
}

interface GetPrivacyResponse extends PrivacyResponseJson {}

export const getPrivacy = async (request: Request<null, GetPrivacyId>) => {
  const response = await axiosInstance.get<Response<GetPrivacyResponse>>(
    `/api/privacys/${request.id?.privacyId}`,
  );

  return response.data;
};

export function useGetPrivacy(request: Request<null, GetPrivacyId>) {
  return useQuery({
    queryKey: ['privacys', request.id?.privacyId],
    queryFn: () => getPrivacy(request),
    enabled: false,
  });
}

export function prefetchPrivacy(
  queryClient: QueryClient,
  request: Request<null, GetPrivacyId>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['privacys', request.id?.privacyId],
    queryFn: () => getPrivacy(request),
  });
}
