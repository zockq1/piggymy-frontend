import { QueryClient, useQuery } from '@tanstack/react-query';

import axiosInstance from '@/share/query/axios';

export interface VocaModel {}

const getVocaFn = async () => {
  const res = await axiosInstance.get(
    `${process.env.NEXT_PUBLIC_BACK_API}/api/vocas`,
  );
  return res;
};

const usePrefetchVoca = (queryClient: QueryClient) => {
  return queryClient.prefetchQuery({
    queryKey: ['category'],
    queryFn: getVocaFn,
  });
};

const useGetVoca = () => {
  return useQuery({
    queryKey: ['category'],
    queryFn: getVocaFn,
  });
};

export { useGetVoca, usePrefetchVoca };
