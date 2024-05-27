'use client';

import dayjs from 'dayjs';

import MoreButton from '@/share/ui/button/MoreButton';
import ContentBox from '@/share/ui/content-box/ContentBox';
import Comment from '@/share/ui/list-item/Comment';
import Title from '@/share/ui/title/Title';

export default function UserCommentBoard() {
  const dummy = [
    {
      user: '홍길동',
      description: `사용자가 작성한 의견입니다.사용자가 작성한 의견입니다.사용자가 작성한 의견입니다.사용자가 작성한 의견입니다.
  저는 ~~~한 의견이 있습니다.`,
      createdDate: dayjs('2023-11-01'),
      feedback: '도움됨',
      onClick: () => {},
    },
    {
      user: '홍길동',
      description: `사용자가 작성한 의견입니다.사용자가 작성한 의견입니다.사용자가 작성한 의견입니다.사용자가 작성한 의견입니다.
  저는 ~~~한 의견이 있습니다.`,
      createdDate: dayjs('2023-11-01'),
      feedback: '도움됨',
      onClick: () => {},
    },
    {
      user: '홍길동',
      description: `사용자가 작성한 의견입니다.사용자가 작성한 의견입니다.사용자가 작성한 의견입니다.사용자가 작성한 의견입니다.
  저는 ~~~한 의견이 있습니다.`,
      createdDate: dayjs('2023-11-01'),
      feedback: '도움됨',
      onClick: () => {},
    },
  ];

  return (
    <ContentBox
      className="h-full px-8 py-5"
      topLeft={<Title hasUnderbar>회원 의견 관리</Title>}
      topRight={<MoreButton href="/admin/user/comment" />}
    >
      <div className="flex h-full w-full items-center justify-around">
        {dummy.slice(0, 3).map((item, index) => {
          const { user, description, createdDate, feedback, onClick } = item;
          return (
            <Comment
              key={index}
              user={user}
              description={description}
              createdDate={createdDate}
              feedback={feedback}
              onClick={onClick}
            />
          );
        })}
      </div>
    </ContentBox>
  );
}
