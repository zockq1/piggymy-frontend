import Link from 'next/link';

import Layout from '@/share/layout/Layout';

export default async function BasicInfo() {
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
      <Layout.LeftSideMenu>
        <div className="h-full bg-gray-5">
          <Link href="/admin/user/basicInfo">기본 정보 관리</Link>
        </div>
      </Layout.LeftSideMenu>
      <Layout.Content>
        <Layout.Content.Full>
          <div className=" h-[50px] bg-primary">라우팅 타이틀</div>
        </Layout.Content.Full>
        <Layout.Content.Full>
          <div className=" h-[100px] bg-secondary">사용자 정보 검색</div>
        </Layout.Content.Full>

        <Layout.Content.Left>
          <div className=" h-[700px] bg-gray-3">사용자 검색</div>
        </Layout.Content.Left>
        <Layout.Content.Right>
          <div className=" h-[800px] bg-warning">사용자 폼</div>
        </Layout.Content.Right>
      </Layout.Content>
    </Layout>
  );
}
