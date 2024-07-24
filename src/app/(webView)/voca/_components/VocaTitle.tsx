'use client';

import dayjs from 'dayjs';
import { useParams } from 'next/navigation';

import { useGetVoca } from '@/share/query/webViewVoca/useGetVoca';

export default function VocaTitle() {
  const params = useParams();
  const { data } = useGetVoca(Number(params.vocaId));
  return (
    <header className="p-4">
      <h1 className="text-[28px] font-bold text-primary">
        {data?.koreanTitle}
      </h1>
      <time className="text-xs font-normal text-gray-3">
        {dayjs(data?.createdDate).format('YYYY.MM.DD')}
      </time>
    </header>
  );
}
