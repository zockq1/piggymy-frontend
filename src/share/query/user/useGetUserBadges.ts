import { useQuery } from '@tanstack/react-query';

import { Response } from '@/type/apiType';
import { BadgeListResponseJson } from '@/type/badgeType';

import axiosInstance from '../axios';

export const getUserBadges = async () => {
  const {
    data: { data },
  } =
    await axiosInstance.get<Response<BadgeListResponseJson>>(
      `/api/users/badges`,
    );

  return data;
};

export function useGetUserBadges(userId: number) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUserBadges(),
  });
}
