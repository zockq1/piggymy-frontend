'use client';

import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import { useEffect } from 'react';

import { contentList } from '@/share/ui/header/headerList';

export default function SidebarComponent({
  sidebarList,
}: {
  sidebarList: unknown[];
}) {
  const segments = useSelectedLayoutSegments();
  const activeSegments = segments[segments.length - 1];
  const linkQuery: string[] = ['1', '2', '3', '4', '5'];

  useEffect(() => {
    console.log(sidebarList);
    console.log(segments);
  }, []);

  return (
    <div className="h-full w-full bg-gray-3 pl-4">
      <ul>
        {/* //TODO 테스트 리스트 추후변경*/}
        <li>Route에 따라 변경</li>
        {contentList.map((item, index) => {
          const isActive = activeSegments == linkQuery[index];
          return (
            <li key={index} className={isActive ? 'bg-primary' : 'bg-gray-3'}>
              <Link href={`/test/${index + 1}`}>{item.title}</Link>
            </li>
          );
        })}
        <li></li>
      </ul>
    </div>
  );
}
