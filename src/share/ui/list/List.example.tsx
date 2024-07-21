'use client';

import React, { MouseEventHandler, useState } from 'react';

import List from '@/share/ui/list/List';

interface DataType {
  title: string;
  createDate: string;
  handleClick: MouseEventHandler<HTMLDivElement>;
}

function ListExample() {
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [list, setList] = useState<DataType[]>([
    {
      title: 'Racing car sprays burning fuel into crowd.',
      createDate: '2024-07-21',
      handleClick: () => {
        console.log('clicked');
      },
    },
    {
      title: 'Japanese princess to wed commoner.',
      createDate: '2024-07-21',
      handleClick: () => {
        console.log('clicked');
      },
    },
    {
      title: 'Australian walks 100km after outback crash.',
      createDate: '2024-07-21',
      handleClick: () => {
        console.log('clicked');
      },
    },
    {
      title: 'Man charged over missing wedding girl.',
      createDate: '2024-07-21',
      handleClick: () => {
        console.log('clicked');
      },
    },
    {
      title: 'Los Angeles battles huge wildfires.',
      createDate: '2024-07-21',
      handleClick: () => {
        console.log('clicked');
      },
    },
  ]);

  const onLoadMore = () => {
    setList(
      list.concat(
        [...new Array(1)].map(() => ({
          title: 'loaded just now',
          createDate: '0000-00-00',
          handleClick: () => {},
        })),
      ),
    );
    setShowLoadMore(false);
  };

  return (
    <List itemList={list} loadMore={onLoadMore} showLoadMore={showLoadMore} />
  );
}

export default ListExample;
