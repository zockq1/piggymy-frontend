import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import PostList from './PostList';

const meta: Meta<typeof PostList> = {
  title: 'UI/Post/PostList',
  component: PostList,
};

export default meta;
type Story = StoryObj<typeof PostList>;

export const PostListWithAuthor: Story = {
  args: {
    postList: [
      {
        title: '공지사항1공지사항1공지사항1공지사항1',
        author: '작성자1',
        createdDate: dayjs('2023-11-01'),
        route: '/123',
      },
      {
        title: '공지사항2',
        author: '작성자2',
        createdDate: dayjs('2023-11-01'),
        route: '/123',
      },
      {
        title: '공지사항3',
        author: '작성자3',
        createdDate: dayjs('2023-11-01'),
        route: '/123',
      },
    ],
  },
};

export const PostListWithoutAuthor: Story = {
  args: {
    postList: [
      {
        title: '공지사항1공지사항1공지사항1공지사항1',
        createdDate: dayjs('2023-11-01'),
        route: '/123',
      },
      {
        title: '공지사항2',
        createdDate: dayjs('2023-11-01'),
        route: '/123',
      },
      {
        title: '공지사항3',
        createdDate: dayjs('2023-11-01'),
        route: '/123',
      },
    ],
  },
};
