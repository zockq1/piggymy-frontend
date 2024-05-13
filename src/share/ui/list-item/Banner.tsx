'use client';

import { cva } from 'class-variance-authority';
import { Dayjs } from 'dayjs';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import arrow from '/public/img/Icon/Right.svg';
import { cn } from '@/utils/cn';

import StatusBadge from '../badge/StatusBadge';

export const BannerVariants = cva('', {
  variants: {
    status: {
      selected: `border-2 border-[#6799F3] bg-[#F0F6FF] shadow-[3px_3px_10px_0_rgba(36,106,232,0.2)]`,
      unselected: `bg-gray-6`,
    },
  },
  defaultVariants: {
    status: 'unselected',
  },
});

interface BannerProps {
  title: string;
  category: string;
  buttonTitle: string;
  image: string | StaticImageData;
  createdDate: Dayjs;
  isActive: boolean;
  isSelected: boolean;
  route: string;
}

export default function Banner({
  title,
  category,
  createdDate,
  isActive,
  isSelected,
  route,
  buttonTitle,
  image,
}: BannerProps) {
  return (
    <div className="flex h-[234px] w-[390px] flex-col justify-between">
      <Link
        href={route}
        className={cn(
          BannerVariants({ status: isSelected ? 'selected' : 'unselected' }),
          'relative h-[200px] px-[16px] py-5',
        )}
      >
        <div className="w-max rounded-lg bg-primary px-2 py-1 text-xs font-semibold text-white">
          {category}
        </div>
        <p className="mt-2 whitespace-pre-line text-xl font-bold text-gray-2">
          {title}
        </p>
        <div className="absolute right-1 top-1">
          <Image src={image} alt="image" width={110} height={110} />
        </div>
        <div className="absolute bottom-2 right-4 flex items-center text-xs text-primary">
          {buttonTitle} <Image src={arrow} alt="arrow" width={24} height={24} />
        </div>
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
