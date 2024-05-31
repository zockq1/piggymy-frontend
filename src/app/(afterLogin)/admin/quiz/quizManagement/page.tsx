import React from 'react';

import CardFilter from '@/app/(afterLogin)/admin/quiz/_components/CardFilter';
import CardSearchList from '@/app/(afterLogin)/admin/quiz/_components/CardSearchList';
import QuizCardInfoForm from '@/app/(afterLogin)/admin/quiz/_components/QuizCardInfoForm';
import QuizPageInfo from '@/app/(afterLogin)/admin/quiz/_components/QuizPageInfo';
import Layout from '@/share/layout/Layout';

export default async function QuizManagement() {
  return (
    <>
      <Layout.Content.Full>
        <QuizPageInfo />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <CardFilter />
      </Layout.Content.Full>

      <Layout.Content.Left>
        <CardSearchList />
      </Layout.Content.Left>
      <Layout.Content.Right>
        <QuizCardInfoForm />
      </Layout.Content.Right>
    </>
  );
}
