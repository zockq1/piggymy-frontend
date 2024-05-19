import type { Meta, StoryObj } from '@storybook/react';

import Sidebar from '@/share/layout/sidebar/Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'UI/Sidebar/Sidebar',
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const ContentSidebar: Story = {
  args: {
    sidebarList: [
      { title: '그리팅 메세지 관리', route: '/admin/content/greetingMessage' },
      { title: '롤링 배너 관리', route: '/admin/content/rollingBanner' },
      { title: '테마별 카드모음집 관리', route: '/admin/content/themeCard' },
      { title: '배지 관리', route: '/admin/content/badge' },
      { title: '링크 관리', route: '/admin/content/link' },
    ],
  },
};
