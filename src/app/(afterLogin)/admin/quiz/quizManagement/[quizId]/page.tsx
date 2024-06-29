import React from 'react';

import CardFilter from '@/app/(afterLogin)/admin/quiz/_components/CardFilter';
import PageInfo from '@/app/(afterLogin)/admin/quiz/_components/PageInfo';
import QuizSearchList from '@/app/(afterLogin)/admin/quiz/quizManagement/_components/QuizSearchList';
import Layout from '@/share/layout/Layout';

import UpdateQuiz from '../_components/UpdateQuiz';

export default async function QuizManagement() {
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

      <Layout.Content.Left>
        <QuizSearchList />
      </Layout.Content.Left>
      <Layout.Content.Right>
        <UpdateQuiz />
      </Layout.Content.Right>
    </>
  );
}
