'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { contentList } from '@/share/layout/header/headerListData';
import { ListType } from '@/type/testType';

interface SidebarProps {
  sidebarList: ListType[];
}

export default function Sidebar({ sidebarList }: SidebarProps) {
  const route = useParams();
  const activeSegments = route.testId;

  return (
    <div className="border-indigo-500 h-full w-full min-w-48 border-r-2 bg-white pt-2">
      <ul>
        {/* //TODO 테스트 리스트 추후변경*/}
        {sidebarList
          ? sidebarList.map((item: ListType, index: number) => {
              const isActive = activeSegments == item.query;
              return (
                <li
                  key={index}
                  className={`p-2 font-bold ${isActive ? 'bg-primary' : 'bg-white'}`}
                >
                  <Link href={`/test/route/${item.query}`} className="pl-2">
                    {item.title}
                  </Link>
                </li>
              );
            })
          : null}
        <li className="pb-2 pl-4 text-lg text-gray-4">Route에 따라 변경</li>
        {contentList.map((item, index) => {
          const isActive = activeSegments == item.query;
          return (
            <li
              key={index}
              className={`p-2 font-bold ${isActive ? 'bg-primary' : 'bg-white'}`}
            >
              <Link href={`/test/route/${item.query}`} className="pl-2">
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
