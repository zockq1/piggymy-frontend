import { cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

import { cn } from '@/utils/cn';
import { ExcludeNullVariantProp } from '@/utils/ExcludeNullVariantProp';

export const ButtonVariants = cva(
  `
  rounded-[10px] w-max font-light	
  `,
  {
    variants: {
      color: {
        blue: `bg-primary text-white`,
        white: `bg-white text-black border border-gray-4`,
        gray: `bg-gray-6 text-black border border-gray-4`,
      },
      size: {
        small: 'text-base py-1 px-4',
        large: 'text-base py-2 px-8 ',
      },
    },
    defaultVariants: {
      color: 'blue',
      size: 'small',
    },
  },
);

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    ExcludeNullVariantProp<typeof ButtonVariants> {}

export default function Button({
  color,
  size,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(ButtonVariants({ color, size }), className)}
      {...props}
    >
      {children && children}
    </button>
  );
}
