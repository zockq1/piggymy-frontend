import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export const ButtonVariants = cva(
  `
  rounded-xl w-max font-extralight
  `,
  {
    variants: {
      variant: {
        primary: `
        text-wite bg-gray-4
        hover:border-black hover:bg-gray-2
        active:bg-purple-10
        disabled:bg-gray-0`,
        secondary: `
        text-gray-4 bg-purple-1
        hover:bg-purple-0.5 hover:text-purple-8.5
        active:bg-purple-1.5
        disabled:bg-gray-0`,
        outline: `
        text-gray-4 bg-purple-1 border border-gray-4
        hover:bg-purple-0.5 hover:text-purple-8.5
        active:bg-purple-1.5
        disabled:text-gray-1.5 disabled:bg-purple-0.5 disabled:border-gray-1.5`,
        text: `
        text-purple-6 bg-transparent
        active:text-purple-8.5
        disabled:text-gray-1.5
        `,
      },
      size: {
        small: 'text-sm py-2 px-4',
        medium: 'text-base py-3 px-6 ',
        large: 'text-xl py-4 px-8 ',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'small',
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {}

function Button({ variant, size, children, ...props }: ButtonProps) {
  return (
    <button className={cn(ButtonVariants({ variant, size }))} {...props}>
      {children && children}
    </button>
  );
}

export default Button;
