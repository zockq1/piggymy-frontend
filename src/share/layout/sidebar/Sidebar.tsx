'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { HeaderType } from '@/type/routeType';

interface SidebarProps {
  sidebarList: HeaderType[];
}

export default function Sidebar({ sidebarList }: SidebarProps) {
  const routes = usePathname();

  return (
    <div className="mt-4 h-full w-full min-w-48 bg-white pt-2">
      <ul>
        <li className="pb-2 pl-4 text-lg text-gray-4">Route에 따라 변경</li>
        {sidebarList
          ? sidebarList.map((item: HeaderType) => {
              const isActive = routes.includes(item.route);
              return (
                <li
                  key={item.route}
                  className={`p-2 pb-3 pt-3 font-bold ${isActive ? 'bg-primary text-white' : 'bg-white'}`}
                >
                  <Link href={item.route} className="pl-2">
                    {item.title}
                  </Link>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}
