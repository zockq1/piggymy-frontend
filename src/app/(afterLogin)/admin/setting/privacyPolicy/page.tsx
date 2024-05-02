import Link from 'next/link';

import Layout from '@/share/layout/Layout';

export default async function PrivacyPolicy() {
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
          <Link href="/admin/setting/termsOfUse">이용약관 관리</Link>
          <br />
          <Link href="/admin/setting/privacyPolicy">
            개인정보 처리방침 관리
          </Link>
        </div>
      </Layout.LeftSideMenu>
      <Layout.Content>
        <Layout.Content.Full>
          <div className="h-[100px] bg-primary">라우팅 타이틀</div>
        </Layout.Content.Full>
        <Layout.Content.Full>
          <div className="h-[200px] bg-secondary">개인정보 처리방침 폼</div>
        </Layout.Content.Full>
      </Layout.Content>
    </Layout>
  );
}
