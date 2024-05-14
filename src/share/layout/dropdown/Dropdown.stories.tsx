import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from '@/share/layout/dropdown/Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'UI/Dropdown/Dropdown',
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const DefaultDropdown: Story = {
  args: {
    selectName: 'item',
    options: [
      { inputVal: 'item1', summary: 'item1' },
      { inputVal: 'item2', summary: 'item2' },
      { inputVal: 'item3', summary: 'item3' },
      { inputVal: 'item4', summary: 'item4' },
    ],
  },
};
