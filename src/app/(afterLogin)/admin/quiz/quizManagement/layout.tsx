import React from 'react';

import CardFilter from '@/app/(afterLogin)/admin/quiz/_components/CardFilter';
import CardSearchList from '@/app/(afterLogin)/admin/quiz/_components/CardSearchList';
import PageInfo from '@/app/(afterLogin)/admin/quiz/_components/PageInfo';
import VocaInfoForm from '@/app/(afterLogin)/admin/quiz/_components/VocaInfoForm';
import Layout from '@/share/layout/Layout';

export default function QuizLayout() {
  return (
    <>
      <Layout.Content.Full>
        <PageInfo />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <CardFilter />
      </Layout.Content.Full>

      <Layout.Content.Left>
        <CardSearchList />
      </Layout.Content.Left>
      <Layout.Content.Right>
        <VocaInfoForm />
      </Layout.Content.Right>
    </>
  );
}
