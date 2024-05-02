import Link from 'next/link';
import { useEffect } from 'react';

import {
  contentList,
  managerList,
  settingList,
  userList,
  vocaQuizList,
} from '@/share/ui/header/headerList';

export default function HeaderDetail({
  headerList,
}: {
  headerList: unknown[];
}) {
  useEffect(() => {
    console.log(headerList);
  }, []);

  return (
    <div className="flex h-full w-10/12 flex-row justify-center bg-white text-sm">
      <ul className="h-full w-1/6">
        <li className="bottom-1 mb-1 border-solid border-black text-center text-lg font-bold">
          홈
        </li>
        {contentList.map((str, index) => (
          <li key={index}>
            <Link href={str.route}>{str.title}</Link>
          </li>
        ))}
      </ul>
      <ul className="h-full w-1/6">
        <li className="bottom-1 mb-1 border-solid border-black text-center text-lg font-bold">
          콘텐츠
        </li>
        {vocaQuizList.map((str, index) => (
          <li key={index}>
            <Link href={str.route}>{str.title}</Link>
          </li>
        ))}
      </ul>
      <ul className="h-full w-1/6">
        <li className="bottom-1 mb-1 border-solid border-black text-center text-lg font-bold">
          용어/퀴즈
        </li>
        {settingList.map((str, index) => (
          <li key={index}>
            <Link href={str.route}>{str.title}</Link>
          </li>
        ))}
      </ul>
      <ul className="h-full w-1/6">
        <li className="bottom-1 mb-1 border-solid border-black text-center text-lg font-bold">
          설정
        </li>
        {settingList.map((str, index) => (
          <li key={index}>
            <Link href={str.route}>{str.title}</Link>
          </li>
        ))}
      </ul>
      <ul className="h-full w-1/6">
        <li className="bottom-1 mb-1 border-solid border-black text-center text-lg font-bold">
          회원
        </li>
        {userList.map((str, index) => (
          <li key={index}>
            <Link href={str.route}>{str.title}</Link>
          </li>
        ))}
      </ul>
      <ul className="h-full w-1/6">
        <li className="bottom-1 mb-1 border-solid border-black text-center text-lg font-bold">
          관리자
        </li>
        {managerList.map((str, index) => (
          <li key={index}>
            <Link href={str.route}>{str.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
