import type { Meta, StoryObj } from '@storybook/react';

import ModalExample from '@/share/ui/modal/ModalExample';

import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalSystemOverview: Story = {
  render: () => <ModalExample />,
};
