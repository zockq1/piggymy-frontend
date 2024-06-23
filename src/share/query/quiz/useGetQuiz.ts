import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { QuizResponseJson } from '@/type/quizType';

import axiosInstance from '../axios';

export const getQuizDetail = async (quizId: number) => {
  const {
    data: { data },
  } = await axiosInstance.get(`/api/quizzes/${quizId}`);
  return data;
};

export function useGetQuiz(
  quizId: number,
): UseQueryResult<QuizResponseJson | null> {
  return useQuery({
    queryKey: ['quiz', quizId],
    queryFn: () => {
      if (quizId === null || quizId === undefined) {
        return Promise.resolve(null); // Return a default value or null when quizId is null or undefined
      }
      return getQuizDetail(quizId);
    },
    enabled: !isNaN(quizId) && quizId !== null && quizId !== undefined, // Disable the query if quizId is null or undefined
  });
}
