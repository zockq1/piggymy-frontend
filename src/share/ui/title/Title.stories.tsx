import type { Meta, StoryObj } from '@storybook/react';

import Title from './Title';

const meta: Meta<typeof Title> = {
  title: 'Title',
  component: Title,
};

export default meta;
type Story = StoryObj<typeof Title>;

export const DefaultTitle: Story = {
  render: () => <Title>관리자 게시판</Title>,
};

export const Underbar: Story = {
  render: () => <Title hasUnderbar>관리자 게시판</Title>,
};

export const Highlight: Story = {
  render: () => (
    <Title>
      카드 모음집 <Title.H>2</Title.H>건
    </Title>
  ),
};

export const HighlightUnderbar: Story = {
  render: () => (
    <Title hasUnderbar>
      카드 모음집 <Title.H>2</Title.H>건
    </Title>
  ),
};
