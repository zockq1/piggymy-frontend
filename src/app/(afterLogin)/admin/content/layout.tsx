import type { Metadata } from 'next';

import Header from '@/share/layout/header/Header';
import Layout from '@/share/layout/Layout';
import Sidebar from '@/share/layout/sidebar/Sidebar';
import { contentList } from '@/share/route/routes';

export const metadata: Metadata = {
  title: 'piggyme - content layout',
  description: 'piggyme Admin content',
};

export default function MainLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <Layout>
      <Layout.Header>
        <Header user={{ id: 'id', userName: 'test' }} />
      </Layout.Header>
      <Layout.LeftSideMenu>
        <Sidebar sidebarList={contentList} />
      </Layout.LeftSideMenu>
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
}
