'use client';

import React from 'react';

import Breadcrumb from '@/share/ui/breadcrumb/Breadcrumb';
import Title from '@/share/ui/title/Title';

function PageInfo() {
  return (
    <div className="flex items-center justify-start gap-5">
      <div className="flex justify-start py-1">
        <Title>용어카드 관리</Title>
      </div>
      <Breadcrumb path={['용어 퀴즈', '용어카드 관리']} />
    </div>
  );
}

export default PageInfo;
