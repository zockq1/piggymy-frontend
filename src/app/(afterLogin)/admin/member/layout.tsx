import { ReactNode } from 'react';

import Layout from '@/share/layout/Layout';
import Sidebar from '@/share/layout/sidebar/Sidebar';
import { memberList } from '@/share/route/routes';

interface UserLayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <>
      <Layout.LeftSideMenu>
        <Sidebar sidebarList={memberList} title="관리자" />
      </Layout.LeftSideMenu>
      <Layout.Content>{children}</Layout.Content>
    </>
  );
}
