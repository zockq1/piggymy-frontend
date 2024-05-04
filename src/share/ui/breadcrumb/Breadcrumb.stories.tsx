import type { Meta, StoryObj } from '@storybook/react';

import Breadcrumb from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Breadcrumb',
  component: Breadcrumb,
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const TwoDepth: Story = {
  render: () => <Breadcrumb path={['콘텐츠', '테마별 카드모음집 관리']} />,
};

export const ThreeDepth: Story = {
  render: () => (
    <Breadcrumb path={['설정', '서비스 이용', '개인정보 처리방침']} />
  ),
};
