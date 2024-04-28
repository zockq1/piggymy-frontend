import type { Meta, StoryObj } from '@storybook/react';

import SegmentedCategory from './SegmentedCategory';

const meta: Meta<typeof SegmentedCategory> = {
  title: 'SegmentedCategory',
  component: SegmentedCategory,
};

export default meta;
type Story = StoryObj<typeof SegmentedCategory>;

export const Segmented: Story = {
  render: () => (
    <SegmentedCategory options={['글/칼럼/뉴스레터', '영상 콘텐츠']} />
  ),
};
