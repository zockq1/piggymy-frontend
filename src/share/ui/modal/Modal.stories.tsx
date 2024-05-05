import type { Meta, StoryObj } from '@storybook/react';

import ModalExample from '@/share/ui/modal/ModalExample';

import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Overview: Story = {
  args: { clickableOverlay: true },
  render: (args) => (
    <ModalExample>
      <ModalExample.ModalSystem
        clickableOverlay={
          (args as { clickableOverlay: true }).clickableOverlay as boolean
        }
      />
    </ModalExample>
  ),
};

export const DefaultModal: Story = {
  args: { clickableOverlay: true },
  render: (args) => (
    <ModalExample>
      <ModalExample.DefaultModalSystem
        clickableOverlay={
          (args as { clickableOverlay: true }).clickableOverlay as boolean
        }
      />
    </ModalExample>
  ),
};

export const CustomModal: Story = {
  args: { clickableOverlay: true },
  render: (args) => (
    <ModalExample>
      <ModalExample.CustomModalSystem
        clickableOverlay={
          (args as { clickableOverlay: true }).clickableOverlay as boolean
        }
      />
    </ModalExample>
  ),
};
