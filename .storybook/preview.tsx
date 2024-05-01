import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import Modal from '../src/share/ui/modal/Modal';
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
        <div id={'modal'} />
        <Modal />
      </RecoilRoot>
    ),
  ],
};

export default preview;
