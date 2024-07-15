import { useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { MemberListResponseJson } from '@/type/memberType';

import axiosInstance from '../axios';

interface GetMemberListRequestQuery {
  page?: number;
  page_size?: number;
  sort_type?: 'CREATED' | 'MODIFIED';
  search_type?: 1 | 2;
  search_keyword?: string;
  start_date?: string;
  end_date?: string;
  is_use?: string | null;
}

export const getMemberList = async (
  request?: Request<GetMemberListRequestQuery>,
) => {
  const response = await axiosInstance.get<Response<MemberListResponseJson>>(
    `/api/members`,
    { params: request?.data },
  );

  return response.data;
};

export function useGetMemberList(data?: Request<GetMemberListRequestQuery>) {
  return useQuery({
    queryKey: ['members', data?.data],
    queryFn: () => getMemberList(data),
  });
}
