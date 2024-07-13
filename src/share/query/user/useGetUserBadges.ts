import { useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { BadgeListResponseJson } from '@/type/badgeType';

import axiosInstance from '../axios';

export const getUserBadges = async (request: Request<number>) => {
  const { data } = await axiosInstance.get<Response<BadgeListResponseJson>>(
    `/api/users/${request.data}/badges`,
  );
  return data;
};

export function useGetUserBadges(userId: number) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUserBadges({ data: userId }),
  });
}
