import Link from 'next/link';
import { useEffect } from 'react';

import {
  contentList,
  settingList,
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
    <div className="flex h-full w-2/3 flex-row justify-center bg-warning">
      <ul className="h-full w-1/6">
        {contentList.map((str, index) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
      <ul className="h-full w-1/6">
        {vocaQuizList.map((str, index) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
      <ul className="h-full w-1/6">
        {settingList.map((str, index) => (
          <li key={index}>
            <Link href={str.route}>{str.title}</Link>
          </li>
        ))}
      </ul>
      <ul className="h-full w-1/6">
        {vocaQuizList.map((str, index) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
      <ul className="h-full w-1/6">
        {vocaQuizList.map((str, index) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
      <ul className="h-full w-1/6">
        {vocaQuizList.map((str, index) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
    </div>
  );
}
