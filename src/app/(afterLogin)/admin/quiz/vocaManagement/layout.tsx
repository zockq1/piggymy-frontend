import React, { ReactNode } from 'react';

import CardFilter from '@/app/(afterLogin)/admin/quiz/_components/CardFilter';
import CardSearchList from '@/app/(afterLogin)/admin/quiz/_components/CardSearchList';
import VocaInfoForm from '@/app/(afterLogin)/admin/quiz/_components/VocaInfoForm';
import WordPageInfo from '@/app/(afterLogin)/admin/quiz/_components/WordPageInfo';
import Layout from '@/share/layout/Layout';
import Sidebar from '@/share/layout/sidebar/Sidebar';
import { vocaQuizList } from '@/share/route/routes';

interface QuizLayoutProps {
  children: ReactNode;
}

export default function VocaLayout({ children }: QuizLayoutProps) {
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
        <VocaInfoForm />
      </Layout.Content.Right>
    </>
  );
}
