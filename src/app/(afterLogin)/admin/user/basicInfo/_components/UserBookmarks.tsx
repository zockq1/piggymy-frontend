'use client';

import { useParams } from 'next/navigation';
import React from 'react';

import { useGetUserBookmarks } from '@/share/query/user/useGetUserBookmarks';
import ContentBox from '@/share/ui/content-box/ContentBox';

export default function UserBookmarks() {
  const { userId } = useParams();

  const { data } = useGetUserBookmarks(+userId);
  console.log(data);

  return <ContentBox className={'grid w-full grid-cols-4'}>1</ContentBox>;
}
