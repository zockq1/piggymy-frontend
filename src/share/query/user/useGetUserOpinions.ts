import { useQuery } from '@tanstack/react-query';

import { Response } from '@/type/apiType';
import { OpinionListResponseJson } from '@/type/opinionType';

import axiosInstance from '../axios';

export const getUserOpinions = async (userId: number) => {
  const {
    data: { data },
  } = await axiosInstance.get<Response<OpinionListResponseJson>>(
    `/api/users/${userId}/opinions`,
  );

  return data;
};

export function useGetUserOpinions(userId: number) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUserOpinions(userId),
  });
}
