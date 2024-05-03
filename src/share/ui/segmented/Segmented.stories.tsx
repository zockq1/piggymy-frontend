import type { Meta, StoryObj } from '@storybook/react';

import Segmented from './Segmented';

const meta: Meta<typeof Segmented> = {
  title: 'Segmented',
  component: Segmented,
};

export default meta;
type Story = StoryObj<typeof Segmented>;

export const Default: Story = {
  render: () => (
    <Segmented
      segments={[
        { id: 0, path: '/', name: '회원 정보' },
        { id: 1, path: '/a', name: '받은 배지' },
        { id: 2, path: '/b', name: '북마크' },
        { id: 3, path: '/c', name: '보낸 의견' },
      ]}
      currentPath={'/'}
    />
  ),
};
