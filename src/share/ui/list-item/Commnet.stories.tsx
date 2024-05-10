import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import Comment from './Comment';

const meta: Meta<typeof Comment> = {
  title: 'UI/List-Item/Comment',
  component: Comment,
};

export default meta;
type Story = StoryObj<typeof Comment>;

export const StoryComment: Story = {
  args: {
    user: '홍길동',
    description: `사용자가 작성한 의견입니다.사용자가 작성한 의견입니다.사용자가 작성한 의견입니다.사용자가 작성한 의견입니다.
    저는 ~~~한 의견이 있습니다.`,
    createdDate: dayjs('2023-11-01'),
    feedback: '도움됨',
    onClick: () => {},
  },
};
