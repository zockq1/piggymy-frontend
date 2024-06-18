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

export function useGetVoca(
  vocaId: number,
): UseQueryResult<VocaResponseJson | null> {
  return useQuery({
    queryKey: ['voca', vocaId],
    queryFn: () => {
      if (vocaId === null || vocaId === undefined) {
        return Promise.resolve(null); // Return a default value or null when vocaId is null or undefined
      }
      return getVocaDetail(vocaId);
    },
    enabled: !isNaN(vocaId) && vocaId !== null && vocaId !== undefined, // Disable the query if vocaId is null or undefined
  });
}
