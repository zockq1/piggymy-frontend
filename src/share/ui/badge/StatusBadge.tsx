'use client';

import { cva } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export const StatusBadgeVariants = cva('', {
  variants: {
    status: {
      active: `bg-secondary text-white`,
      inactive: `bg-[#CDD1D9] text-[#7C8394]`,
    },
  },
  defaultVariants: {
    status: 'active',
  },
});

interface StatusBadgeProps extends HTMLAttributes<HTMLDivElement> {
  isActive: boolean;
}

export default function StatusBadge({
  isActive,
  className,
  ...props
}: StatusBadgeProps) {
  return (
    <div
      className={cn(
        StatusBadgeVariants({
          status: isActive ? 'active' : 'inactive',
        }),
        'h-max w-max whitespace-nowrap rounded px-[10px] text-center text-[11px] font-semibold leading-[22px]',
        className,
      )}
      {...props}
    >
      {isActive ? '사용중' : '미사용'}
    </div>
  );
}
