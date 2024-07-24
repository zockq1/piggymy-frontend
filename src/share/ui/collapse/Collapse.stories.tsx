import type { Meta, StoryObj } from '@storybook/react';

import Collapse from './Collapse';

const meta: Meta<typeof Collapse> = {
  title: 'Collapse',
  component: Collapse,
};

export default meta;
type Story = StoryObj<typeof Collapse>;

export const Default: Story = {
  render: () => (
    <Collapse
      title={'어떤 뜻인가요?'}
      content={`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          `}
    />
  ),
};
