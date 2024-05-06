import type { Meta, StoryObj } from '@storybook/react';
import Image from 'next/image';

import search from '/public/img/Icon/Name=Search.png';

import IconButton from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'UI/Button/IconButton',
  component: IconButton,
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const SearchButton: Story = {
  args: {
    children: <Image src={search} alt="검색" width={22} height={22} />,
  },
};
