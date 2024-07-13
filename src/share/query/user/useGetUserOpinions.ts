import { useQuery } from '@tanstack/react-query';

import { Response } from '@/type/apiType';
import { BadgeListResponseJson } from '@/type/badgeType';

import axiosInstance from '../axios';

export const getUserOpinions = async (userId: number) => {
  const {
    data: { data },
  } = await axiosInstance.get<Response<BadgeListResponseJson>>(
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
