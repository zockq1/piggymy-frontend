import React from 'react';

import CardFilter from '@/app/(afterLogin)/admin/quiz/_components/CardFilter';
import CreateVoca from '@/app/(afterLogin)/admin/quiz/_components/CreateVoca';
import PageInfo from '@/app/(afterLogin)/admin/quiz/_components/PageInfo';
import VocaSearchList from '@/app/(afterLogin)/admin/quiz/_components/VocaSearchList';
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
        <VocaSearchList />
      </Layout.Content.Left>
      <Layout.Content.Right>
        <CreateVoca />
      </Layout.Content.Right>
    </>
  );
}
