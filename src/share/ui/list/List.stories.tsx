import type { Meta, StoryObj } from '@storybook/react';

import ListExample from '@/share/ui/list/List.example';

import List from './List';

const meta: Meta<typeof List> = {
  title: 'List',
  component: List,
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: () => <ListExample />,
};
