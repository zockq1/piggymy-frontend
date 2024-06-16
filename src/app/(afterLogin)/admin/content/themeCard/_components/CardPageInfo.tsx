import React from 'react';

import Breadcrumb from '@/share/ui/breadcrumb/Breadcrumb';
import Title from '@/share/ui/title/Title';

export default function CardPageInfo() {
  return (
    <div className="ml-3 mt-5 flex items-center justify-start gap-5">
      <Title>테마별 카드모음집 관리</Title>
      <Breadcrumb path={['콘텐츠', '테마별 카드모음집 관리']} />
    </div>
  );
}
