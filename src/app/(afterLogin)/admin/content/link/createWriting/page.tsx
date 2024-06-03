import Link from 'next/link';

import Header from '@/share/layout/header/Header';
import Layout from '@/share/layout/Layout';

export default async function CreateWriting() {
  return (
    <Layout>
      <div
        style={{
          gridArea: 'header',
        }}
      >
        <Header />
      </div>
      <Layout.LeftSideMenu></Layout.LeftSideMenu>
      <Layout.Content>
        <Layout.Content.Full>
          <div className="h-[100px] bg-primary">라우팅 타이틀</div>
        </Layout.Content.Full>
        <Layout.Content.Full>
          <div className="h-[200px] bg-secondary">
            <Link href="/admin/content/link/createWriting">
              글/칼럼/뉴스 등록
            </Link>
            <br />
            <Link href="/admin/content/link/createVideo">동영상 등록</Link>
          </div>
        </Layout.Content.Full>
        <Layout.Content.Full>
          <div className="h-[500px] bg-primary">글/칼럼/뉴스 등록 폼</div>
        </Layout.Content.Full>
      </Layout.Content>
    </Layout>
  );
}
