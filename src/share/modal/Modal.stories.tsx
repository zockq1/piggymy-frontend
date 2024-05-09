import type { Meta, StoryObj } from '@storybook/react';

import ModalExample from '@/share/modal/Modal.example';

import ModalProvider from './ModalProvider';

const meta: Meta<typeof ModalProvider> = {
  title: 'Modal',
  component: ModalProvider,
};

export default meta;
type Story = StoryObj<typeof ModalProvider>;

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
