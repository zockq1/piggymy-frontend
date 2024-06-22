import React from 'react';

import CardFilter from '@/app/(afterLogin)/admin/quiz/_components/CardFilter';
import PageInfo from '@/app/(afterLogin)/admin/quiz/_components/PageInfo';
import VocaCreateForm from '@/app/(afterLogin)/admin/quiz/_components/VocaCreateForm';
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
        <VocaCreateForm />
      </Layout.Content.Right>
    </>
  );
}
