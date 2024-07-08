'use client';

import React, { useState } from 'react';

import UserInfo from '@/app/(afterLogin)/admin/user/basicInfo/_components/UserInfo';
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
          { id: 1, segment: 'badges', name: '받은 배지' },
          { id: 2, segment: 'bookmarks', name: '북마크' },
          { id: 3, segment: 'opinions', name: '보낸 의견' },
        ]}
        activeSegment={currentSegment}
        controlType={'state'}
        onClick={handleSegmentClick}
      />
      {currentSegment === 'userInfo' && <UserInfo />}
    </div>
  );
}

export default SegmentControlContainer;
