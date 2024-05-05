import type { Meta, StoryObj } from '@storybook/react';

import pig from '/public/img/piggy/Basic-Face.png';

import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const SelectedBadge: Story = {
  args: {
    title: `11월 출첵 완료`,
    registrationDate: '2023.11.01',
    isActive: true,
    isSelected: true,
    route: '/123',
    image: pig,
  },
};

export const UnselectedBadge: Story = {
  args: {
    title: `12월 출첵 완료`,
    registrationDate: '2023.11.01',
    isActive: false,
    isSelected: false,
    route: '/123',
    image: pig,
  },
};
