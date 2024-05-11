import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Submit: Story = {
  args: {
    children: '저장',
    color: 'blue',
    size: 'large',
  },
};

export const Cancel: Story = {
  args: {
    children: '취소',
    color: 'gray',
    size: 'large',
  },
};

export const ModalSubmit: Story = {
  args: {
    children: '확인',
    color: 'blue',
    size: 'small',
  },
};

export const ModalCancel: Story = {
  args: {
    children: '취소',
    color: 'white',
    size: 'small',
  },
};
