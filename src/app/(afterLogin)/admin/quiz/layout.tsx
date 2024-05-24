import { ReactNode } from 'react';

import Layout from '@/share/layout/Layout';
import Sidebar from '@/share/layout/sidebar/Sidebar';
import { vocaQuizList } from '@/share/route/routes';

interface QuizLayoutProps {
  children: ReactNode;
}

export default function QuizLayout({ children }: QuizLayoutProps) {
  return (
    <>
      <Layout.LeftSideMenu>
        <Sidebar sidebarList={vocaQuizList} />
      </Layout.LeftSideMenu>
      <Layout.Content>{children}</Layout.Content>
    </>
  );
}
