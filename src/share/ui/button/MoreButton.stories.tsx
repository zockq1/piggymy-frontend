import type { Meta, StoryObj } from '@storybook/react';

import MoreButton from './MoreButton';

const meta: Meta<typeof MoreButton> = {
  title: 'MoreButton',
  component: MoreButton,
};

export default meta;
type Story = StoryObj<typeof MoreButton>;

export const Button: Story = {
  args: {},
};
