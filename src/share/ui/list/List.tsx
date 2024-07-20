import { List as AntdList } from 'antd';
import React, { MouseEventHandler } from 'react';

interface ListProps {
  itemList: { title: string; handleClick: MouseEventHandler<HTMLDivElement> }[];
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
          <>{item.title}</>
        </AntdList.Item>
      )}
      style={{ overflowX: 'hidden' }}
    />
  );
}

export default List;
