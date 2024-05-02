import { ButtonHTMLAttributes } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...props }: IconButtonProps) {
  return (
    <button
      className="rounded-[10px] bg-[#D9D9D9] p-[9px] text-gray-3"
      {...props}
    >
      {children && children}
    </button>
  );
}
