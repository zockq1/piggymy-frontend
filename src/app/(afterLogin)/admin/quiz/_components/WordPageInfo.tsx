'use client';

import React from 'react';

import Breadcrumb from '@/share/ui/breadcrumb/Breadcrumb';
import Button from '@/share/ui/button/Button';
import Title from '@/share/ui/title/Title';

function WordPageInfo() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start gap-5">
        <div className="flex justify-start py-1">
          <Title>용어카드 관리</Title>
        </div>
        <Breadcrumb path={['용어 퀴즈', '용어카드 관리']} />
      </div>
      <div className="flex items-center justify-start gap-4">
        <Button type="button" size="small" color="blue" onClick={() => {}}>
          사용여부 일괄변경
        </Button>
        <Button type="button" size="small" color="blue" onClick={() => {}}>
          삭제
        </Button>
      </div>
    </div>
  );
}

export default WordPageInfo;
