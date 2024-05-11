'use client';

import { cva } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export const WordBadgeVariants = cva('', {
  variants: {},
  defaultVariants: {},
});

interface WordBadgeProps extends HTMLAttributes<HTMLElement> {
  word: string;
}

export default function WordBadge({
  word,
  className,
  ...props
}: WordBadgeProps) {
  return (
    <div
      className={cn(
        WordBadgeVariants({}),
        'inline-flex h-max w-max gap-1 whitespace-nowrap rounded bg-[#DEEBFF] px-[10px] text-center text-[11px] font-semibold leading-[22px]',
        className,
      )}
      {...props}
    >
      {word}
      <button className={'italic'}>X</button>
    </div>
  );
}
