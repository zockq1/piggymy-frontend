import { Collapse as AntdCollapse } from 'antd';
import React, { ReactNode } from 'react';

import Icon from '@/share/ui/icon/Icon';

interface CollapseProps {
  title: string;
  content: ReactNode;
}

function Collapse({ title, content }: CollapseProps) {
  return (
    <AntdCollapse
      items={[
        {
          key: '1',
          label: <h3 className={'font-bold'}>{title}</h3>,
          children: content,
        },
      ]}
      expandIcon={({ isActive }) => (
        <Icon icon={isActive ? 'up' : 'down'} size={16} />
      )}
      expandIconPosition={'end'}
    />
  );
}

export default Collapse;
