import { List as AntdList } from 'antd';
import Image from 'next/image';
import React, { MouseEventHandler } from 'react';

import Icon from '@/share/ui/icon/Icon';

interface ListProps {
  itemList: {
    thumbnail?: string;
    title: string;
    subtitle: string;
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
        <AntdList.Item
          className={'cursor-pointer bg-white'}
          onClick={item.handleClick}
        >
          <div className={'flex items-center justify-start gap-2 bg-white'}>
            {item?.thumbnail && (
              <div className={'relative h-[56px] w-[96px]'}>
                <Image src={item.thumbnail} alt="thumbnail" fill />
              </div>
            )}
            <div className={'flex flex-col gap-1 bg-white'}>
              <div className={'font-bold'}>{item.title}</div>
              <div className={'text-[12px] text-[#616161]'}>
                {item.subtitle}
              </div>
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
