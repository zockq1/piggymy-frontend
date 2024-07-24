'use client';

import React, { useState } from 'react';

import UserBadgeList from '@/app/(afterLogin)/admin/user/basicInfo/_components/UserBadgeList';
import UserBookmarkList from '@/app/(afterLogin)/admin/user/basicInfo/_components/UserBookmarkList';
import UserInfo from '@/app/(afterLogin)/admin/user/basicInfo/_components/UserInfo';
import UserOpinionList from '@/app/(afterLogin)/admin/user/basicInfo/_components/UserOpinionList';
import Segmented, { Segment } from '@/share/ui/segmented/Segmented';

function SegmentControlContainer() {
  const [currentSegment, setCurrentSegment] = useState('userInfo');

  const handleSegmentClick = (segment: Segment) => {
    setCurrentSegment(segment.segment);
  };

  return (
    <div className={'flex w-full flex-col items-start gap-4'}>
      <Segmented
        segmentList={[
          { id: 0, segment: 'userInfo', name: '회원 정보' },
          { id: 1, segment: 'badgeList', name: '받은 배지' },
          { id: 2, segment: 'bookmarkList', name: '북마크' },
          { id: 3, segment: 'opinionList', name: '보낸 의견' },
        ]}
        activeSegment={currentSegment}
        controlType={'state'}
        onClick={handleSegmentClick}
      />
      {currentSegment === 'userInfo' && <UserInfo />}
      {currentSegment === 'badgeList' && <UserBadgeList />}
      {currentSegment === 'bookmarkList' && <UserBookmarkList />}
      {currentSegment === 'opinionList' && <UserOpinionList />}
    </div>
  );
}

export default SegmentControlContainer;
