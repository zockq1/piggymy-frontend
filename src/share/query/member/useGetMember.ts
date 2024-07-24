import { useQuery } from '@tanstack/react-query';

import { Request, Response } from '@/type/apiType';
import { MemberResponseJson } from '@/type/memberType';

import axiosInstance from '../axios';

export const getMemberDetail = async (request: Request<number>) => {
  const {
    data: { data },
  } = await axiosInstance.get<Response<MemberResponseJson>>(
    `/api/members/${request.data}`,
  );
  return data;
};

export function useGetMember(memberId: number) {
  console.log(memberId);
  return useQuery({
    queryKey: ['member', memberId],
    queryFn: () => getMemberDetail({ data: memberId }),
  });
}
