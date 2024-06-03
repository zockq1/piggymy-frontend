import Header from '@/share/layout/header/Header';
import Layout from '@/share/layout/Layout';
import Sidebar from '@/share/layout/sidebar/Sidebar';
import { contentList } from '@/share/route/routes';
import Breadcrumb from '@/share/ui/breadcrumb/Breadcrumb';

export default async function Badge() {
  return (
    <Layout>
      <div
        style={{
          gridArea: 'header',
        }}
      >
        <Header />
      </div>
      <Layout.LeftSideMenu>
        <Sidebar sidebarList={contentList} />
      </Layout.LeftSideMenu>
      <Layout.Content>
        <Layout.Content.Full>
          <div className="flex h-[100px] items-center pl-4">
            <Breadcrumb path={['콘텐츠', '배지 관리']} />
          </div>
        </Layout.Content.Full>
        <Layout.Content.Full>
          <div className="h-[200px] bg-secondary">배지 선택</div>
        </Layout.Content.Full>
        <Layout.Content.Full>
          <div className="h-[500px] bg-primary">배지 관리 폼</div>
        </Layout.Content.Full>
      </Layout.Content>
    </Layout>
  );
}
