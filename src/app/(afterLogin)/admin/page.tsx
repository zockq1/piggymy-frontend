import HomeLayout from '@/share/layout/HomeLayout';

import Greeting from './_components/Greeting';
import NoticeBoard from './_components/NoticeBoard';
import QuickLink from './_components/QuickLink';
import TermCardBoard from './_components/TermCardBoard';
import ThemeCardBoard from './_components/ThemeCardBoard';
import UserCommentBoard from './_components/UserCommentBoard';

export default async function Admin() {
  return (
    <HomeLayout>
      <HomeLayout.Top>
        <Greeting />
      </HomeLayout.Top>
      <HomeLayout.Center>
        <UserCommentBoard />
      </HomeLayout.Center>
      <HomeLayout.Bottom>
        <ThemeCardBoard />
        <TermCardBoard />
      </HomeLayout.Bottom>
      <HomeLayout.Right>
        <QuickLink
          title="FireBase 바로가기"
          description={`실시간 앱 방문 수, 기능별 이용횟수 등
          회원별 데이터를 모니터링합니다.`}
          route="/admin"
        />
        <QuickLink
          title="피기미 자료 모음 바로가기"
          description={`피기미를 만들기 위해 생성된
          모든 자료를 아카이빙한 페이지입니다.`}
          route="/admin"
        />
        <NoticeBoard />
      </HomeLayout.Right>
    </HomeLayout>
  );
}
