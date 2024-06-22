import React, { ReactNode } from 'react';

import CardFilter from '@/app/(afterLogin)/admin/quiz/_components/CardFilter';
import PageInfo from '@/app/(afterLogin)/admin/quiz/_components/PageInfo';
import VocaSearchList from '@/app/(afterLogin)/admin/quiz/_components/VocaSearchList';
import Layout from '@/share/layout/Layout';

interface VocaLayoutProps {
  children: ReactNode;
}

export default function VocaLayout({ children }: VocaLayoutProps) {
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
      <Layout.Content.Right>{children}</Layout.Content.Right>
    </>
  );
}
