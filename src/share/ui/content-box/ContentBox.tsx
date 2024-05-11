import React, { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/utils/cn';

interface ContentBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  topLeft?: ReactNode;
  topRight?: ReactNode;
}
function ContentBox({
  children,
  topLeft,
  topRight,
  className,
}: ContentBoxProps) {
  return (
    <div
      className={cn(
        `relative m-4 flex flex-col items-center justify-center rounded-[16px] bg-white p-4`,
        className,
      )}
    >
      {(topLeft || topRight) && (
        <div className="flex w-full justify-between">
          {topLeft && <div>{topLeft}</div>}
          {topRight && <div>{topRight}</div>}
        </div>
      )}
      <div className="flex h-full w-full items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default ContentBox;
