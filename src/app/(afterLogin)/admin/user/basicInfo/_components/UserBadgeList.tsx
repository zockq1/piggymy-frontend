'use client';

import dayjs from 'dayjs';
import { useParams } from 'next/navigation';
import React from 'react';

import pig from '/public/img/piggy/Basic-Face.png';
import { useGetUserBadges } from '@/share/query/user/useGetUserBadges';
import ContentBox from '@/share/ui/content-box/ContentBox';
import Badge from '@/share/ui/list-item/Badge';

export default function UserBadgeList() {
  const { userId } = useParams();

  const { data } = useGetUserBadges(+userId);
  const badgeList = data ? data.data.list : [];

  return (
    <ContentBox className={'grid w-full grid-cols-4'}>
      {badgeList.map((badge) => (
        <Badge
          key={badge.id}
          title={badge.title}
          createdDate={dayjs(badge.createdDate)}
          isActive={badge.isUse}
          isSelected={false}
          route={''}
          image={pig}
        />
      ))}
    </ContentBox>
  );
}
