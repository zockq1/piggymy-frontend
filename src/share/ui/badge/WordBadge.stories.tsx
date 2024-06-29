import type { Meta, StoryObj } from '@storybook/react';

import WordBadge from './WordBadge';

const meta: Meta<typeof WordBadge> = {
  title: 'UI/Badge/WordBadge',
  component: WordBadge,
};

export default meta;
type Story = StoryObj<typeof WordBadge>;

export const Default: Story = {
  args: {
    word: '관치금융',
    onClick: () => {
      console.log('뱃지 클릭');
    },
  },
};
