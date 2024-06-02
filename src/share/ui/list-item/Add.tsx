'use client';

import { cva } from 'class-variance-authority';
import Link from 'next/link';

import { cn } from '@/utils/cn';

import Icon from '../icon/Icon';

export const BadgeVariants = cva('', {
  variants: {
    type: {
      badge: `w-[197px] h-[197px] rounded-2xl`,
      banner: `w-[390px] h-[231px]`,
      card: `w-[308px] h-[78px] rounded-2xl`,
      theme: `w-[319px] h-[145px] rounded-2xl`,
    },
    status: {
      selected: `text-[#87ABED] border-2 border-[#6799F3] bg-[#F0F6FF] shadow-[3px_3px_10px_0_rgba(36,106,232,0.2)]`,
      unselected: `text-gray-5 bg-gray-6`,
    },
  },
  defaultVariants: {
    type: 'badge',
    status: 'unselected',
  },
});

interface BadgeProps {
  route: string;
  type: 'badge' | 'banner' | 'card' | 'theme';
  isSelected: boolean;
}

export default function Badge({ route, type, isSelected }: BadgeProps) {
  return (
    <Link
      href={route}
      className={cn(
        BadgeVariants({ type, status: isSelected ? 'selected' : 'unselected' }),
        'flex items-center justify-center',
      )}
    >
      <Icon icon="plus" size={40} />
    </Link>
  );
}
