'use client';

import dayjs from 'dayjs';

import MoreButton from '@/share/ui/button/MoreButton';
import ContentBox from '@/share/ui/content-box/ContentBox';
import PostList from '@/share/ui/post/PostList';
import Title from '@/share/ui/title/Title';

export default function NoticeBoard() {
  const dummy = [
    {
      title: '공지사항1공지사항1공지사항1공지사항1',
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
      title: '공지사항1공지사항1공지사항1공지사항1',
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
  ];

  return (
    <ContentBox
      className="h-full px-8 py-5"
      topLeft={<Title hasUnderbar>최근 등록된 용어 카드</Title>}
      topRight={<MoreButton />}
    >
      <div className="h-full">
        <PostList postList={dummy} />
      </div>
    </ContentBox>
  );
}
