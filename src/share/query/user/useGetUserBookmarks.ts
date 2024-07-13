import { useQuery } from '@tanstack/react-query';

import { Response } from '@/type/apiType';
import { BadgeListResponseJson } from '@/type/badgeType';

import axiosInstance from '../axios';

export const getUserBookmarks = async (userId: number) => {
  const {
    data: { data },
  } = await axiosInstance.get<Response<BadgeListResponseJson>>(
    `/api/users/${userId}/bookmarks`,
  );

  return data;
};

export function useGetUserBookmarks(userId: number) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUserBookmarks(userId),
  });
}
