import { QueryClient, useQuery } from '@tanstack/react-query';

import { AgreementResponseJson } from '@/type/agreementType';
import { Request, Response } from '@/type/apiType';

import axiosInstance from '../axios';

interface GetAgreementListRequestQuery {
  page?: number;
  page_size?: number;
}

interface GetAgreementListResponse {
  totalCount: number;
  list: Omit<AgreementResponseJson, 'content'>[];
}

export const getAgreementList = async (
  request?: Request<GetAgreementListRequestQuery>,
) => {
  const response = await axiosInstance.get<Response<GetAgreementListResponse>>(
    `/api/agreements`,
    { params: request?.data },
  );

  return response.data;
};

export function useGetAgreementList(
  request?: Request<GetAgreementListRequestQuery>,
) {
  return useQuery({
    queryKey: ['agreements', request?.data],
    queryFn: () => getAgreementList(request),
  });
}

export function prefetchAgreementList(
  queryClient: QueryClient,
  data?: Request<GetAgreementListRequestQuery>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['agreements', data?.data],
    queryFn: () => getAgreementList(data),
  });
}
