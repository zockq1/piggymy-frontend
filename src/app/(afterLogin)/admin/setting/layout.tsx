import { ReactNode } from 'react';

import Layout from '@/share/layout/Layout';
import Sidebar from '@/share/layout/sidebar/Sidebar';
import { settingList } from '@/share/route/routes';

interface ContentLayoutProps {
  children: ReactNode;
}

export default function SettingLayout({ children }: ContentLayoutProps) {
  return (
    <>
      <Layout.LeftSideMenu>
        <Sidebar sidebarList={settingList} title="설정" />
      </Layout.LeftSideMenu>
      <Layout.Content>{children}</Layout.Content>
    </>
  );
}
