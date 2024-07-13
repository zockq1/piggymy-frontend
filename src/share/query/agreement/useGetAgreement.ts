import { QueryClient, useQuery } from '@tanstack/react-query';

import { AgreementResponseJson } from '@/type/agreementType';
import { Request, Response } from '@/type/apiType';

import axiosInstance from '../axios';

interface GetAgreementId {
  agreementId: number;
}

interface GetAgreementResponse extends AgreementResponseJson {}

export const getAgreement = async (request: Request<null, GetAgreementId>) => {
  const response = await axiosInstance.get<Response<GetAgreementResponse>>(
    `/api/agreements/${request.id?.agreementId}`,
  );

  return response.data;
};

export function useGetAgreement(request: Request<null, GetAgreementId>) {
  return useQuery({
    queryKey: ['agreements', request.id?.agreementId],
    queryFn: () => getAgreement(request),
    enabled: false,
  });
}

export function prefetchAgreement(
  queryClient: QueryClient,
  request: Request<null, GetAgreementId>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['agreements', request.id?.agreementId],
    queryFn: () => getAgreement(request),
  });
}
