'use client';

import Link from 'next/link';

import HeaderDetail from '@/share/layout/header/HeaderDetail';
import { HeaderType } from '@/type/routeType';

interface HeaderUserType {
  user: { id: string; userName: string }; // TODO 추후 user 반환값으로 변경
}

export default function Header({ user }: HeaderUserType) {
  const headerRouteList: HeaderType[] = [
    { title: '홈', route: '/admin' },
    { title: '콘텐츠', route: '/admin/content/greetingMessage' },
    { title: '용어/퀴즈', route: '/admin/quiz/termManagement' },
    { title: '설정', route: '/admin/setting/privacyPolicy' },
    { title: '회원', route: '/admin/user/basicInfo' },
    { title: '관리자', route: '/admin/management/basicInfo' },
  ];

  return (
    <div className="border-indigo-500 flex h-full w-full flex-row items-center justify-between pl-3 pr-3 shadow-md">
      <div className="title w-1/6 pl-1 text-2xl font-bold">
        <span>피기미 piggyme</span>
      </div>
      <div className="flex h-full w-8/12 flex-row">
        <ul className="flex w-full flex-row items-center justify-around">
          {headerRouteList.map((item: HeaderType) => (
            <li key={item.title}>
              <Link
                className="text-sm font-bold hover:text-blue-5"
                href={item.route}
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li className="text-xs hover:cursor-pointer">
            <HeaderDetail />
          </li>
        </ul>
      </div>
      <div className="flex h-full w-1/6 items-center justify-end">
        <div className="h-10 w-10 rounded-3xl bg-gray-3">
          {/*  이미지 삽입*/}
        </div>
        <div className="h-2/3 w-1/2 pl-1">
          <p className="h-1/2 w-full text-sm leading-7">관리자</p>
          <p className="h-1/2 w-full text-sm leading-5">
            {user.userName ? user.userName : 'test'}
          </p>
        </div>
      </div>
    </div>
  );
}
