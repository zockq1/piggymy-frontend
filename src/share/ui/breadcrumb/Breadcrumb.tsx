/*
 * TODO : Antd 컴포넌트로 리펙토링 필요.
 * (https://ant.design/components/breadcrumb)
 *  */

import Image from 'next/image';
import { DOMAttributes } from 'react';

import arrow from '/public/img/Icon/next.svg';

interface BreadcrumbProps extends DOMAttributes<HTMLHeadingElement> {
  path: string[];
}

function Breadcrumb({ path }: BreadcrumbProps) {
  return (
    <div className="inline-flex items-center justify-center gap-3">
      {path.map((p, i) =>
        i < path.length - 1 ? (
          <>
            <span className="font-inter text-left text-lg font-bold leading-5 tracking-tighter text-[#999]">
              {p}
            </span>
            <Image src={arrow} alt="next" width={5} />
          </>
        ) : (
          <span
            key={'breadcrumb' + i}
            className="font-inter text-left text-lg font-bold leading-5 tracking-tighter"
          >
            {p}
          </span>
        ),
      )}
    </div>
  );
}

export default Breadcrumb;
