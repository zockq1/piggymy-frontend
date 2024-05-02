'use client';

import Link from 'next/link';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
import { useEffect } from 'react';

import { contentList } from '@/share/ui/header/headerList';

export default function SidebarComponent({
  sidebarList,
}: {
  sidebarList: unknown[];
}) {
  const segments = useSelectedLayoutSegments();
  const router = usePathname();
  const activeSegments = router.split('/')[2];
  const linkQuery: string[] = ['1', '2', '3', '4', '5'];

  useEffect(() => {
    console.log(sidebarList);
    console.log(segments);
  }, []);

  return (
    <div className="h-full w-full bg-white">
      <ul>
        {/* //TODO 테스트 리스트 추후변경*/}
        <li className="pb-2 text-lg font-bold">Route에 따라 변경</li>
        {contentList.map((item, index) => {
          const isActive = activeSegments == linkQuery[index];
          return (
            <li
              key={index}
              className={`p-2 ${isActive ? 'bg-primary' : 'bg-gray-3'}`}
            >
              <Link href={`/test/${index + 1}`}>{item.title}</Link>
            </li>
          );
        })}
        <li></li>
      </ul>
    </div>
  );
}
