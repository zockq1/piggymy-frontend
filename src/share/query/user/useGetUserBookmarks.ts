import { useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { BookmarkListResponseJson } from '@/type/bookmarkType';

import axiosInstance from '../axios';

interface GetQuizListRequestQuery {
  userId: number;
  page?: number;
  page_size?: number;
  sort_type: 'CREATED' | 'MODIFIED';
}

export const getUserBookmarks = async (
  request: Request<GetQuizListRequestQuery>,
) => {
  const { data } = await axiosInstance.get<Response<BookmarkListResponseJson>>(
    `/api/users/${request.data}/bookmarks`,
  );

  return data;
};

export function useGetUserBookmarks(request: Request<GetQuizListRequestQuery>) {
  return useQuery({
    queryKey: ['user', request.data],
    queryFn: () => getUserBookmarks(request),
  });
}
