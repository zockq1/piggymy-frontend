'use client';

import dayjs from 'dayjs';

import MoreButton from '@/share/ui/button/MoreButton';
import ContentBox from '@/share/ui/content-box/ContentBox';
import PostList from '@/share/ui/post/PostList';
import Title from '@/share/ui/title/Title';

export default function NoticeBoard() {
  const dummy = [
    {
      title: '공지사항1',
      author: '작성자1',
      createdDate: dayjs('2023-11-01'),
      route: '/admin',
    },
    {
      title: '공지사항2',
      author: '작성자2',
      createdDate: dayjs('2023-11-01'),
      route: '/admin',
    },
    {
      title: '공지사항3',
      author: '작성자3',
      createdDate: dayjs('2023-11-01'),
      route: '/admin',
    },
    {
      title: '공지사항4',
      author: '작성자1',
      createdDate: dayjs('2023-11-01'),
      route: '/admin',
    },
    {
      title: '공지사항5',
      author: '작성자2',
      createdDate: dayjs('2023-11-01'),
      route: '/admin',
    },
    {
      title: '공지사항6',
      author: '작성자3',
      createdDate: dayjs('2023-11-01'),
      route: '/admin',
    },
  ];

  return (
    <ContentBox
      className="h-full w-[400px] px-8 py-5"
      topLeft={<Title hasUnderbar>공지사항</Title>}
      topRight={<MoreButton href="/admin" />}
    >
      <div className="h-full w-full">
        <PostList postList={dummy} />
      </div>
    </ContentBox>
  );
}
