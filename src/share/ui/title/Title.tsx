import { DOMAttributes, ReactNode } from 'react';

interface TitleProps extends DOMAttributes<HTMLHeadingElement> {
  hasUnderbar?: boolean;
}

function Title({ children, hasUnderbar = false }: TitleProps) {
  return (
    <div className="flex w-auto">
      <div className="flex w-auto flex-col">
        <h2 className="font-inter text-left text-lg font-bold leading-5 tracking-tighter">
          {children}
        </h2>
        {hasUnderbar && <hr className="h-[6px] rounded-[2px] bg-primary" />}
      </div>
    </div>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return <span className="mx-[3px] text-primary">{children}</span>;
}

Title.H = Highlight;

export default Title;
