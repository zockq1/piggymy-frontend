import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import SearchExample from '@/share/form/Search.example';

const meta: Meta<typeof SearchExample> = {
  title: 'Search',
  component: SearchExample,
};

export default meta;
type Story = StoryObj<typeof SearchExample>;

export const ContentSearch: Story = {
  args: {},
  render: () => <SearchExample.ContentSearchExample />,
};

export const WordSearch: Story = {
  args: {},
  render: () => <SearchExample.WordSearchExample />,
};

export const ManagerSearchExample = {
  args: {},
  render: () => <SearchExample.ManagerSearchExample />,
};

export const TextSearchExample = {
  args: {},
  render: () => <SearchExample.TextSearchExample />,
};
