/*
 * TODO : Antd 컴포넌트로 리펙토링 필요.
 * (https://ant.design/components/breadcrumb)
 *  */

import Image from 'next/image';
import { DOMAttributes, ReactNode } from 'react';

import arrow from '/public/img/icon/next.svg';

interface BreadcrumbProps extends DOMAttributes<HTMLHeadingElement> {
  path: string[];
}

function Breadcrumb({ path }: BreadcrumbProps) {
  const temp: ReactNode[] = [];

  path.forEach((p, i) => {
    if (i < path.length - 1) {
      temp.push(
        <span className="font-inter text-left text-lg font-bold leading-5 tracking-tighter text-[#999]">
          {p}
        </span>,
      );
      temp.push(<Image src={arrow} alt="next" width={5} />);
    } else {
      temp.push(
        <span className="font-inter text-left text-lg font-bold leading-5 tracking-tighter">
          {p}
        </span>,
      );
    }
  });

  return (
    <div className="inline-flex items-center justify-center gap-3">{temp}</div>
  );
}

export default Breadcrumb;
