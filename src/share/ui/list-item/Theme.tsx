'use client';

import { cva } from 'class-variance-authority';
import { Dayjs } from 'dayjs';
import Link from 'next/link';

import { cn } from '@/utils/cn';

import StatusBadge from '../badge/StatusBadge';

export const ThemeVariants = cva('', {
  variants: {
    status: {
      selected: `border-2 border-[#6799F3] bg-[#F0F6FF] shadow-[3px_3px_10px_0_rgba(36,106,232,0.2)]`,
      unselected: `border border-[#ccc] bg-white`,
    },
  },
  defaultVariants: {
    status: 'unselected',
  },
});

interface ThemeProps {
  title: string;
  description: string;
  createdDate: Dayjs;
  isActive: boolean;
  isSelected: boolean;
  route: string;
}

export default function Theme({
  title,
  description,
  createdDate,
  isActive,
  isSelected,
  route,
}: ThemeProps) {
  return (
    <div className="flex h-[153px] w-[318px] flex-col justify-between">
      <Link
        href={route}
        className={cn(
          ThemeVariants({ status: isSelected ? 'selected' : 'unselected' }),
          'h-[123px] rounded-2xl px-[23px] py-3',
        )}
      >
        <h1 className="h-[36px] text-lg font-bold">{title}</h1>
        <p className="whitespace-pre-line text-[11px] font-normal leading-[15px] text-gray-2">
          {description}
        </p>
      </Link>
      <div className="flex items-center justify-between px-4">
        <div className="text-xs">
          등록일: <i>{createdDate.format('YYYY.MM.DD')}</i>
        </div>
        <StatusBadge isActive={isActive} />
      </div>
    </div>
  );
}
