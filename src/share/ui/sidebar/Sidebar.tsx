'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { contentList } from '@/share/layout/header/headerListData';

interface SidebarProps {
  sidebarList: unknown[];
}

export default function Sidebar({ sidebarList }: SidebarProps) {
  const router = usePathname();
  const activeSegments = router.split('/')[3];
  const linkQuery: string[] = ['1', '2', '3', '4', '5'];

  useEffect(() => {
    console.log(sidebarList);
  }, []);

  return (
    <div className="border-indigo-500 h-full w-full border-r-2 bg-white pt-2">
      <ul>
        {/* //TODO 테스트 리스트 추후변경*/}
        <li className="pb-2 pl-4 text-lg font-bold">Route에 따라 변경</li>
        {contentList.map((item, index) => {
          const isActive = activeSegments == linkQuery[index];
          return (
            <li
              key={index}
              className={`p-2 ${isActive ? 'bg-primary' : 'bg-gray-3'}`}
            >
              <Link href={`/test/route/${index + 1}`} className="pl-2">
                {item.title}
              </Link>
            </li>
          );
        })}
        <li></li>
      </ul>
    </div>
  );
}
