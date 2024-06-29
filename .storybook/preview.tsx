import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import ModalProvider from '../src/share/modal/ModalProvider';
import { RecoilRoot } from 'recoil';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
        <ModalProvider />
      </RecoilRoot>
    ),
  ],
};

export default preview;
