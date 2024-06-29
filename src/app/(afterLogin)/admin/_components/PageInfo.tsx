import React from 'react';

import Breadcrumb from '@/share/ui/breadcrumb/Breadcrumb';
import Title from '@/share/ui/title/Title';

interface PageInfoProps {
  title: string;
  path: string[];
}

export default function PageInfo({ title, path }: PageInfoProps) {
  return (
    <div className="ml-3 mt-5 flex items-center justify-start gap-5">
      <Title>{title}</Title>
      <Breadcrumb path={path} />
    </div>
  );
}
