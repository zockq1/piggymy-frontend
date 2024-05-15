import Link from 'next/link';

import Layout from '@/share/layout/Layout';

export default async function CreateVideo() {
  return (
    <Layout>
      <div
        style={{
          gridArea: 'header',
        }}
      >
        <Link href="/admin">홈</Link>&nbsp;&nbsp;
        <Link href="/admin/content/greetingMessage">콘텐츠</Link>&nbsp;&nbsp;
        <Link href="/admin/quiz/termManagement">용어/퀴즈</Link>&nbsp;&nbsp;
        <Link href="/admin/setting/termsOfUse">설정</Link>&nbsp;&nbsp;
        <Link href="/admin/user/basicInfo">회원</Link>&nbsp;&nbsp;
        <Link href="/admin/management/basicInfo">관리자</Link>
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
          <div className="h-[500px] bg-primary">동영상 등록 폼</div>
        </Layout.Content.Full>
      </Layout.Content>
    </Layout>
  );
}
