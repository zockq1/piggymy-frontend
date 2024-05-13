'use client';

import { cva } from 'class-variance-authority';
import Link from 'next/link';

import { cn } from '@/utils/cn';

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 39 40"
      >
        <path
          fill="currentColor"
          d="M38.9704 20.161C38.9704 20.5915 38.7994 21.0045 38.4949 21.3089C38.1904 21.6134 37.7775 21.7844 37.347 21.7844H21.1125V38.0188C21.1125 38.4494 20.9415 38.8623 20.6371 39.1668C20.3326 39.4712 19.9197 39.6423 19.4891 39.6423C19.0585 39.6423 18.6456 39.4712 18.3412 39.1668C18.0367 38.8623 17.8657 38.4494 17.8657 38.0188V21.7844H1.63125C1.20069 21.7844 0.787762 21.6134 0.483308 21.3089C0.178853 21.0045 0.0078125 20.5915 0.0078125 20.161C0.0078125 19.7304 0.178853 19.3175 0.483308 19.013C0.787762 18.7086 1.20069 18.5375 1.63125 18.5375H17.8657V2.30313C17.8657 1.87257 18.0367 1.45964 18.3412 1.15518C18.6456 0.850728 19.0585 0.679687 19.4891 0.679688C19.9197 0.679687 20.3326 0.850728 20.6371 1.15518C20.9415 1.45964 21.1125 1.87257 21.1125 2.30313V18.5375H37.347C37.7775 18.5375 38.1904 18.7086 38.4949 19.013C38.7994 19.3175 38.9704 19.7304 38.9704 20.161Z"
        />
      </svg>
    </Link>
  );
}
