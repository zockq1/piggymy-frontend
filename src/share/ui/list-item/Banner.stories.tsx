import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import pig from '/public/img/piggy/Basic-Face.png';

import Banner from './Banner';

const meta: Meta<typeof Banner> = {
  title: 'UI/List-Item/Banner',
  component: Banner,
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const SelectedBanner: Story = {
  args: {
    title: `‘관치금융'이란
    용어를 들어보셨나요?
    용어를 들어보셨나요?`,
    category: `오늘의 용어`,
    createdDate: dayjs('2023-11-01'),
    isActive: true,
    isSelected: true,
    route: '/123',
    buttonTitle: '딱 1분만 투자해서 알아보기',
    image: pig,
  },
};

export const UnselectedBanner: Story = {
  args: {
    title: `Q. 정부가 민간 금융기관의 
    인사와 자금 운용에
    직접 개입하는 금융 형태는?`,
    category: `오늘의 퀴즈`,
    createdDate: dayjs('2023-11-01'),
    isActive: false,
    isSelected: false,
    route: '/123',
    buttonTitle: '딱 1분만 투자해서 알아보기',
    image: pig,
  },
};
