'use client';

import Breadcrumb from '@/share/ui/breadcrumb/Breadcrumb';

export default async function Badge() {
  return (
    <>
      <div className="flex h-[100px] pl-8">
        <Breadcrumb path={['콘텐츠', '배지 관리']} />
      </div>
      <div className="h-[200px] bg-secondary">배지 선택</div>
      <div className="h-[500px] bg-primary">배지 관리 폼</div>
    </>
  );
}
