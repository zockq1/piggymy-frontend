import type { Meta, StoryObj } from '@storybook/react';

import Add from './Add';

const meta: Meta<typeof Add> = {
  title: 'UI/List-Item/Add',
  component: Add,
};

export default meta;
type Story = StoryObj<typeof Add>;

export const BadgeAdd: Story = {
  args: {
    isSelected: true,
    route: '/123',
    type: 'badge',
  },
};

export const CardAdd: Story = {
  args: {
    isSelected: false,
    route: '/123',
    type: 'card',
  },
};

export const ThemeAdd: Story = {
  args: {
    isSelected: false,
    route: '/123',
    type: 'theme',
  },
};

export const BannerAdd: Story = {
  args: {
    isSelected: true,
    route: '/123',
    type: 'banner',
  },
};
