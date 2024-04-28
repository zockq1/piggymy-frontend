import React, { FC, ReactNode, useEffect, useState } from 'react';

interface ContentBoxProps {
  children: ReactNode;
  topLeft?: ReactNode;
  topRight?: ReactNode;
  height?: string | number;
}
const ContentBox: FC<ContentBoxProps> = ({
  children,
  topLeft,
  topRight,
  height,
}) => {
  const [heightClass, setHeightClass] = useState('h-max');

  useEffect(() => {
    // NOTE: h-[${height}px]를 div className에 직접 꽂으면 동작하지 않는데, 이때에 이렇게 useEffect로 처리하지 않고 더 깔끔하게 처리할 좋은 방법에 대해서 고민이 필요함
    setHeightClass(`h-[${height}px]`);
  }, [height]);

  return (
    <div
      className={`relative flex flex-col items-center justify-center ${height ? heightClass : 'h-full'} w-full bg-white p-4`}
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
};

export default ContentBox;
