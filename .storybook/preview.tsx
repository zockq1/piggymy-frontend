import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import ModalProvider from '../src/share/modal/ModalProvider';
import { RecoilRoot } from 'recoil';
import { ConfigProvider } from 'antd';

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
        <ConfigProvider
          theme={{
            token: { colorLink: 'inherit' },
            components: {
              Table: {
                headerBg: '#F4F5F8',
                headerBorderRadius: 0,
                borderColor: '#CDD1D9',
              },
              Collapse: {
                contentBg: '#f5f5f5',
                headerBg: '#ffffff',
                borderRadiusLG: 0,
              },
            },
          }}
        >
          <Story />
          <ModalProvider />
        </ConfigProvider>
      </RecoilRoot>
    ),
  ],
};

export default preview;
