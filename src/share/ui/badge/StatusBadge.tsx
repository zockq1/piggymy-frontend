import { cva } from 'class-variance-authority';

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

interface StatusBadgeProps {
  isActive: boolean;
}

export default function StatusBadge({ isActive }: StatusBadgeProps) {
  return (
    <div
      className={cn(
        StatusBadgeVariants({
          status: isActive ? 'active' : 'inactive',
        }),
        'h-max w-max whitespace-nowrap rounded px-[10px] text-[11px] font-semibold leading-[22px]',
      )}
    >
      {isActive ? '사용중' : '미사용'}
    </div>
  );
}
