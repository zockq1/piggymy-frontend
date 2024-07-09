import { useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { UserResponseJson } from '@/type/userType';

import axiosInstance from '../axios';

export const getUserDetail = async (request: Request<number>) => {
  const {
    data: { data },
  } = await axiosInstance.get<Response<UserResponseJson>>(
    `/api/users/${request.data}`,
  );
  return data;
};

export function useGetUser(userId: number) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUserDetail({ data: userId }),
  });
}
