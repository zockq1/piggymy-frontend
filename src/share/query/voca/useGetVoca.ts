import { useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { VocaResponseJson } from '@/type/vocaType';

import axiosInstance from '../axios';

export const getVocaDetail = async (request: Request<number>) => {
  const {
    data: { data },
  } = await axiosInstance.get<Response<VocaResponseJson>>(
    `/api/vocas/${request.data}`,
  );
  return data;
};

export function useGetVoca(vocaId: number) {
  return useQuery({
    queryKey: ['voca', vocaId],
    queryFn: () => getVocaDetail({ data: vocaId }),
  });
}
