import type { Meta, StoryObj } from '@storybook/react';

import FormExample from './Form.example';

const meta: Meta<typeof FormExample> = {
  title: 'Form',
  component: FormExample,
};

export default meta;

type Story = StoryObj<typeof FormExample>;

export const Form: Story = {};
