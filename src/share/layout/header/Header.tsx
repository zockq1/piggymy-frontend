'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import HeaderDetail from '@/share/layout/header/HeaderDetail';

interface HeaderPropsType {
  user: { id: string; userName: string }; // TODO 추후 user 반환값으로 변경
}

export default function Header({ user }: HeaderPropsType) {
  const [dropdownDisplayState, setDropdownDisplayState] =
    useState<boolean>(false);

  useEffect(() => {
    console.log(user);
  });

  const allDisplay = (state: boolean) => {
    setDropdownDisplayState(!state);
  };

  return (
    <div className="border-indigo-500 flex h-full w-full flex-row items-center justify-between border-b-2 pl-3 pr-3">
      <div className="title w-1/6 pl-1 text-2xl font-bold">
        <span>피기미 piggyme</span>
      </div>
      <div className="flex h-full w-8/12 flex-row">
        <ul className="flex w-full flex-row items-center justify-around">
          <li>
            <Link className="hover:text-blue-500 text-sm" href="/public">
              홈
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500 text-sm" href="/public">
              콘텐츠
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500 text-sm" href="/public">
              용어/퀴즈
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500 text-sm" href="/public">
              설정
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500 text-sm" href="/public">
              회원
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500 text-sm" href="/public">
              관리자
            </Link>
          </li>
          <li
            className="text-xs hover:cursor-pointer"
            onClick={() => {
              allDisplay(dropdownDisplayState);
            }}
          >
            전체보기
          </li>
        </ul>
      </div>
      <div className="flex h-full w-1/6 items-center justify-end">
        <div className="h-10 w-10 rounded-3xl bg-gray-3">
          {/*  이미지 삽입*/}
        </div>
        <div className="h-2/3 w-1/2 pl-1">
          <p className="h-1/2 w-full text-sm leading-7">관리자</p>
          <p className="h-1/2 w-full text-sm leading-5">관리자명</p>
        </div>
      </div>
      <div
        className={`absolute top-20 ml-32 flex h-auto w-10/12 justify-center bg-white p-4 pt-2 ${dropdownDisplayState ? 'block' : 'hidden'}`}
      >
        <HeaderDetail headerList={[]} />
      </div>
    </div>
  );
}
