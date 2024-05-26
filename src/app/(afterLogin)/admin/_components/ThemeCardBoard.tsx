'use client';

import dayjs from 'dayjs';

import MoreButton from '@/share/ui/button/MoreButton';
import ContentBox from '@/share/ui/content-box/ContentBox';
import PostList from '@/share/ui/post/PostList';
import Title from '@/share/ui/title/Title';

export default function ThemeCardBoard() {
  const dummy = [
    {
      title: '테마 카드1',
      createdDate: dayjs('2023-11-01'),
      route: '/admin',
    },
    {
      title: '테마 카드2',
      createdDate: dayjs('2023-11-01'),
      route: '/admin',
    },
  ];

  return (
    <ContentBox
      className="h-full px-8 py-5"
      topLeft={<Title hasUnderbar>최근 등록된 테마별 카드</Title>}
      topRight={<MoreButton />}
    >
      <PostList postList={dummy} />
    </ContentBox>
  );
}
