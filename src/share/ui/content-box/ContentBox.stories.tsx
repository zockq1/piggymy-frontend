import type { Meta, StoryObj } from '@storybook/react';
import Link from 'next/link';

import Layout from '@/share/layout/Layout';

import ContentBox from './ContentBox';

const meta: Meta<typeof ContentBox> = {
  title: 'ContentBox',
  component: ContentBox,
};

export default meta;
type Story = StoryObj<typeof ContentBox>;

export const InTheLayout: Story = {
  render: () => (
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
          <Link href="/admin/content/greetingMessage">그리팅 메시지 관리</Link>
          <br />
          <Link href="/admin/content/rollingBanner">롤링 배너 관리</Link>
          <br />
          <Link href="/admin/content/themeCard">테마별 카드 모음집 관리</Link>
          <br />
          <Link href="/admin/content/badge">뱃지 관리</Link>
          <br />
          <Link href="/admin/content/link">링크 관리</Link>
          <br />
          <Link href="/admin/content/link/createWriting">신규 링크 등록</Link>
        </div>
      </Layout.LeftSideMenu>
      <Layout.Content>
        <Layout.Content.Full>
          <div className="h-[100px] bg-primary">라우팅 타이틀</div>
        </Layout.Content.Full>
        <Layout.Content.Full>
          <ContentBox
            topLeft={<div>left</div>}
            topRight={<div>Right</div>}
            className="h-[240px]"
          >
            <div className="h-full w-full bg-warning ">children</div>
          </ContentBox>
        </Layout.Content.Full>
      </Layout.Content>
    </Layout>
  ),
};
