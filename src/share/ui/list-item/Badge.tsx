'use client';

import { cva } from 'class-variance-authority';
import { Dayjs } from 'dayjs';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { cn } from '@/utils/cn';

import StatusBadge from '../badge/StatusBadge';

export const BadgeVariants = cva('', {
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

interface BadgeProps {
  title: string;
  image: string | StaticImageData;
  createdDate: Dayjs;
  isActive: boolean;
  isSelected: boolean;
  route: string;
}

export default function Badge({
  title,
  image,
  createdDate,
  isActive,
  isSelected,
  route,
}: BadgeProps) {
  return (
    <div className="flex h-[199px] w-[170px] flex-col justify-between">
      <Link
        href={route}
        className={cn(
          BadgeVariants({ status: isSelected ? 'selected' : 'unselected' }),
          'flex h-[170px] flex-col items-center rounded-2xl py-[18px]',
        )}
      >
        <Image src={image} alt="image" width={110} height={110} />
        <h1 className="h-[36px] font-semibold">{title}</h1>
      </Link>
      <div className="flex items-center justify-between">
        <div className="text-xs">
          등록일: <i>{createdDate.format('YYYY.MM.DD')}</i>
        </div>
        <StatusBadge isActive={isActive} />
      </div>
    </div>
  );
}
