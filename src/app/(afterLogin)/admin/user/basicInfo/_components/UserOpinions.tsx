'use client';

import { useParams } from 'next/navigation';
import React from 'react';

import { useGetUserOpinions } from '@/share/query/user/useGetUserOpinions';
import ContentBox from '@/share/ui/content-box/ContentBox';

export default function UserOpinions() {
  const { userId } = useParams();

  const { data } = useGetUserOpinions(+userId);
  console.log(data);

  return <ContentBox className={'grid w-full grid-cols-4'}>1</ContentBox>;
}
