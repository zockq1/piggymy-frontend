import {
  QueryClient,
  useInfiniteQuery,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { VocaListResponseJson, VocaResponseJson } from '@/type/vocaType';

import axiosInstance from '../axios';

export const getVocaDetail = async (vocaId: number) => {
  const {
    data: { data },
  } = await axiosInstance.get(`/api/vocas/${vocaId}`);
  return data;
};

export function useGetVoca(vocaId: number): UseQueryResult<VocaResponseJson> {
  return useQuery({
    queryKey: ['voca', vocaId],
    queryFn: () => {
      return getVocaDetail(vocaId);
    },
  });
}
