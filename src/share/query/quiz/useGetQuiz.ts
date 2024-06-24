import { useQuery } from '@tanstack/react-query';

import { Request } from '@/type/apiType';

import axiosInstance from '../axios';

export const getQuizDetail = async (request: Request<number>) => {
  const {
    data: { data },
  } = await axiosInstance.get(`/api/quizzes/${request.data}`);
  return data;
};

export function useGetQuiz(quizId: number) {
  return useQuery({
    queryKey: ['quiz', quizId],
    queryFn: () => getQuizDetail({ data: quizId }),
  });
}
