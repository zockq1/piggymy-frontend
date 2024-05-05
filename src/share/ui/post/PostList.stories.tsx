import type { Meta, StoryObj } from '@storybook/react';

import PostList from './PostList';

const meta: Meta<typeof PostList> = {
  title: 'PostList',
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
        registrationDate: '2023.12.15 금요일',
        route: '/123',
      },
      {
        title: '공지사항2',
        author: '작성자2',
        registrationDate: '2023.12.15 금요일',
        route: '/123',
      },
      {
        title: '공지사항3',
        author: '작성자3',
        registrationDate: '2023.12.15 금요일',
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
        registrationDate: '2023.12.15 금요일',
        route: '/123',
      },
      {
        title: '공지사항2',
        registrationDate: '2023.12.15 금요일',
        route: '/123',
      },
      {
        title: '공지사항3',
        registrationDate: '2023.12.15 금요일',
        route: '/123',
      },
    ],
  },
};
