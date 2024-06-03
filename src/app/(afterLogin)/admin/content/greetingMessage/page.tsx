import Header from '@/share/layout/header/Header';
import Layout from '@/share/layout/Layout';
import Sidebar from '@/share/layout/sidebar/Sidebar';
import { contentList } from '@/share/route/routes';
import Breadcrumb from '@/share/ui/breadcrumb/Breadcrumb';

export default async function GreetingMessage() {
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
        <div className={'bg-gray-5'}>
          <Layout.Content.Full>
            <div className="flex h-[100px] items-center pl-4">
              <Breadcrumb path={['콘텐츠', '그리팅 메세지 관리']} />
            </div>
          </Layout.Content.Full>
          <Layout.Content.Full>
            <div className="h-[400px] bg-secondary">그리팅 메시지 관리 폼</div>
          </Layout.Content.Full>
        </div>
      </Layout.Content>
    </Layout>
  );
}
