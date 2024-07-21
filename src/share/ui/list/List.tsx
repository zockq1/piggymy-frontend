import { List as AntdList } from 'antd';
import Image from 'next/image';
import React, { MouseEventHandler } from 'react';

import Icon from '@/share/ui/icon/Icon';

interface ListProps {
  itemList: {
    title: string;
    createDate: string;
    handleClick: MouseEventHandler<HTMLDivElement>;
  }[];
  loadMore?: () => void;
  showLoadMore?: boolean;
}

function List({ itemList, loadMore, showLoadMore = true }: ListProps) {
  return (
    <AntdList
      footer={
        showLoadMore ? (
          <div className={'flex justify-center'}>
            <button onClick={loadMore}>더보기</button>
          </div>
        ) : null
      }
      bordered
      dataSource={itemList}
      renderItem={(item) => (
        <AntdList.Item className={'bg-white'} onClick={item.handleClick}>
          <div className={'flex justify-start bg-white'}>
            <Image src={''} width={96} height={56} alt="thumbnail" />
            <div className={'flex flex-col bg-white'}>
              <div>{item.title}</div>
              <div>{item.createDate}</div>
            </div>
          </div>
          <Icon icon={'next'} size={18} />
        </AntdList.Item>
      )}
      style={{ overflowX: 'hidden' }}
    />
  );
}

export default List;
