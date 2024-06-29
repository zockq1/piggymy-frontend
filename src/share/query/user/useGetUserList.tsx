import { QueryClient, useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { UserListResponseJson } from '@/type/userType';

import axiosInstance from '../axios';

interface GetUserListRequestQuery {
  page?: number;
  page_size?: number;
  sort_type?: 'CREATED' | 'MODIFIED';
  search_type?: 1 | 2;
  search_keyword?: string;
  start_date?: string;
  end_date?: string;
  is_use?: string | null;
}

export const getUserList = async (
  request?: Request<GetUserListRequestQuery>,
) => {
  const response = await axiosInstance.get<Response<UserListResponseJson>>(
    `/api/users`,
    { params: request?.data },
  );

  return response.data;
};

export function useGetUserList(data?: Request<GetUserListRequestQuery>) {
  return useQuery({
    queryKey: ['users', data?.data],
    queryFn: () => getUserList(data),
  });
}

export function usePrefetchUserList(
  queryClient: QueryClient,
  data?: Request<GetUserListRequestQuery>,
) {
  return queryClient.prefetchQuery({
    queryKey: ['users', data?.data],
    queryFn: () => getUserList(data),
  });
}
