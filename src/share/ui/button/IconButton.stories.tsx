import type { Meta, StoryObj } from '@storybook/react';

import Icon from '../icon/Icon';
import IconButton from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'UI/Button/IconButton',
  component: IconButton,
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const SearchButton: Story = {
  args: {
    children: <Icon icon="search" size={22} color="#666666" />,
  },
};
