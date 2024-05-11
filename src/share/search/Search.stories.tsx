import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import SearchExample from '@/share/search/Search.example';

import Search from './Search';

const meta: Meta<typeof Search> = {
  title: 'Search',
  component: Search,
};

export default meta;
type Story = StoryObj<typeof Search>;

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
