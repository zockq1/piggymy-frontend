import Link from 'next/link';

import HomeLayout from '@/share/layout/HomeLayout';

export default async function Admin() {
  return (
    <HomeLayout>
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
      <HomeLayout.Top>
        <div className="h-full bg-gray-5">그리팅 메시지</div>
      </HomeLayout.Top>
      <HomeLayout.Center>
        <div className="h-full bg-primary">회원 의견 모아보기</div>
      </HomeLayout.Center>
      <HomeLayout.Bottom>
        <div className="h-full bg-warning">최근 등록된 테마별 카드모음집</div>
        <div className="h-full bg-gray-5">최근 등록된 용어카드</div>
      </HomeLayout.Bottom>
      <HomeLayout.Right>
        <div className="h-full bg-secondary">FireBase 바로가기</div>
        <div className="h-full bg-warning">피기미 자료 모음 바로가기</div>
        <div className="h-full bg-secondary">공지사항</div>
      </HomeLayout.Right>
    </HomeLayout>
  );
}
