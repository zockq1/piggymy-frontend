import { useQuery } from '@tanstack/react-query';

import { Request } from '@/type/apiType';

import axiosInstance from '../axios';

export const getVocaDetail = async (request: Request<number>) => {
  const {
    data: { data },
  } = await axiosInstance.get(`/api/vocas/${request.data}`);
  return data;
};

export function useGetVoca(vocaId: number) {
  return useQuery({
    queryKey: ['voca', vocaId],
    queryFn: () => getVocaDetail({ data: vocaId }),
  });
}
