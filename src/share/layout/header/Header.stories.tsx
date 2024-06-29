import type { Meta, StoryObj } from '@storybook/react';

import Header from '@/share/layout/header/Header';

const meta: Meta<typeof Header> = {
  title: 'UI/Header/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const DefaultHeader: Story = {
  args: {
    user: { id: '1234', userName: '관리자' },
  },
};
