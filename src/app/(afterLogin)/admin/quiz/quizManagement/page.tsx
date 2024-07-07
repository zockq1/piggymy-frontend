import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import React from 'react';

import CardFilter from '@/app/(afterLogin)/admin/quiz/_components/CardFilter';
import QuizSearchList from '@/app/(afterLogin)/admin/quiz/quizManagement/_components/QuizSearchList';
import Layout from '@/share/layout/Layout';
import { prefetchQuizList } from '@/share/query/quiz/useGetQuizList';

import PageInfo from '../../_components/PageInfo';
import CreateQuiz from './_components/CreateQuiz';

export default async function QuizManagement({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const queryClient = new QueryClient();

  const params = {
    start_date: searchParams['start_date'],
    end_date: searchParams['end_date'],
    is_use: searchParams['is_use'],
    search_keyword: searchParams['search_keyword'],
  };

  await Promise.all([
    prefetchQuizList(queryClient, {
      data: {
        page: 1,
        page_size: 10,
        sort_type: 'CREATED',
        ...params,
      },
    }),
  ]);

  return (
    <>
      <Layout.Content.Full>
        <PageInfo
          title={'퀴즈카드 관리'}
          path={['용어 퀴즈', '퀴즈카드 관리']}
        />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <CardFilter />
      </Layout.Content.Full>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <Layout.Content.Left>
          <QuizSearchList searchParams={params} />
        </Layout.Content.Left>
      </HydrationBoundary>
      <Layout.Content.Right>
        <CreateQuiz />
      </Layout.Content.Right>
    </>
  );
}
