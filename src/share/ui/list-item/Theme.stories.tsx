import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import Theme from './Theme';

const meta: Meta<typeof Theme> = {
  title: 'UI/List-Item/Theme',
  component: Theme,
};

export default meta;
type Story = StoryObj<typeof Theme>;

export const SelectedTheme: Story = {
  args: {
    title: '북마크 단골 용어 💖',
    description: `직장인이라면 반드시 알아야 할 경제 용어들을 모아봤어요.
    뉴스를 읽을 때도, 주식에 투자할 때도, 언제 어디서든
    알고 있으면 유익한 용어들을 학습해보세요.`,
    createdDate: dayjs('2023-11-01'),
    isActive: true,
    isSelected: true,
    route: '/123',
  },
};

export const UnselectedTheme: Story = {
  args: {
    title: '북마크 단골 용어 💖',
    description: `직장인이라면 반드시 알아야 할 경제 용어들을 모아봤어요.
    뉴스를 읽을 때도, 주식에 투자할 때도, 언제 어디서든
    알고 있으면 유익한 용어들을 학습해보세요.`,
    createdDate: dayjs('2023-11-01'),
    isActive: false,
    isSelected: false,
    route: '/123',
  },
};
