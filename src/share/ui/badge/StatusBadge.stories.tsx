import type { Meta, StoryObj } from '@storybook/react';

import StatusBadge from './StatusBadge';

const meta: Meta<typeof StatusBadge> = {
  title: 'StatusBadge',
  component: StatusBadge,
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const ActiveBadge: Story = {
  args: { isActive: true },
};

export const InactiveBadge: Story = {
  args: { isActive: false },
};
