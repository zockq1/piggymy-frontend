'use client';

import React from 'react';

import Breadcrumb from '@/share/ui/breadcrumb/Breadcrumb';
import Title from '@/share/ui/title/Title';

interface PageInfoProps {
  title: string;
  path: string[];
}

function PageInfo({ title, path }: PageInfoProps) {
  return (
    <div className="flex items-center justify-start gap-5">
      <div className="flex justify-start py-1">
        <Title>{title}</Title>
      </div>
      <Breadcrumb path={path} />
    </div>
  );
}

export default PageInfo;
