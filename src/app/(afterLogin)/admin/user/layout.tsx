import { ReactNode } from 'react';

import Layout from '@/share/layout/Layout';
import Sidebar from '@/share/layout/sidebar/Sidebar';
import { userList } from '@/share/route/routes';

interface UserLayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <>
      <Layout.LeftSideMenu>
        <Sidebar sidebarList={userList} title="회원" />
      </Layout.LeftSideMenu>
      <Layout.Content>{children}</Layout.Content>
    </>
  );
}
