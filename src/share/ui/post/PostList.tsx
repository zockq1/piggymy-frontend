'use client';

import 'dayjs/locale/ko';

import { Dayjs } from 'dayjs';
import Link from 'next/link';

interface PostListProps {
  postList: {
    title: string;
    author?: string;
    createdDate: Dayjs;
    route: string;
  }[];
}

export default function PostList({ postList }: PostListProps) {
  return (
    <ul className=" divide-y divide-[#d9d9d9]">
      {postList.map((post) => {
        const { title, author, createdDate, route } = post;
        return (
          <li
            key={title}
            className="grid h-[65px] w-[330px] grid-cols-[190px_140px] items-center"
          >
            <Link href={route} className="truncate text-[15px] font-bold">
              {title}
            </Link>
            <span className="h-2 divide-x divide-[#d9d9d9] text-end text-[9px]">
              {author && <span className="break-keep px-2">{author}</span>}
              <span className=" break-keep px-2 text-end">
                {createdDate.locale('ko').format('YYYY.MM.DD ddd요일')}
              </span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
