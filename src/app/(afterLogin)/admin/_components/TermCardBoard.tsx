'use client';

import dayjs from 'dayjs';

import MoreButton from '@/share/ui/button/MoreButton';
import ContentBox from '@/share/ui/content-box/ContentBox';
import PostList from '@/share/ui/post/PostList';
import Title from '@/share/ui/title/Title';

export default function TermCardBoard() {
  const dummy = [
    {
      title: '용어 카드1',
      createdDate: dayjs('2023-11-01'),
      route: '/admin',
    },
    {
      title: '용어 카드2',
      createdDate: dayjs('2023-11-01'),
      route: '/admin',
    },
  ];

  return (
    <ContentBox
      className="h-full px-8 py-5"
      topLeft={<Title hasUnderbar>최근 등록된 용어 카드</Title>}
      topRight={<MoreButton href="/admin/quiz/termManagement" />}
    >
      <PostList postList={dummy} />
    </ContentBox>
  );
}
