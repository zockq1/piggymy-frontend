import React from 'react';

import CardFilter from '@/app/(afterLogin)/admin/quiz/_components/CardFilter';
import CardSearchList from '@/app/(afterLogin)/admin/quiz/_components/CardSearchList';
import WordCardInfoForm from '@/app/(afterLogin)/admin/quiz/_components/WordCardInfoForm';
import WordPageInfo from '@/app/(afterLogin)/admin/quiz/_components/WordPageInfo';
import Layout from '@/share/layout/Layout';

export default async function TermManagement() {
  return (
    <>
      <Layout.Content.Full>
        <WordPageInfo />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <CardFilter />
      </Layout.Content.Full>

      <Layout.Content.Left>
        <CardSearchList />
      </Layout.Content.Left>
      <Layout.Content.Right>
        <WordCardInfoForm />
      </Layout.Content.Right>
    </>
  );
}
