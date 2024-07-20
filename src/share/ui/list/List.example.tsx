'use client';

import React, { MouseEventHandler, useState } from 'react';

import List from '@/share/ui/list/List';

interface DataType {
  title: string;
  handleClick: MouseEventHandler<HTMLDivElement>;
}

function ListExample() {
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [list, setList] = useState<DataType[]>([
    {
      title: 'Racing car sprays burning fuel into crowd.',
      handleClick: () => {
        console.log('clicked');
      },
    },
    {
      title: 'Japanese princess to wed commoner.',
      handleClick: () => {
        console.log('clicked');
      },
    },
    {
      title: 'Australian walks 100km after outback crash.',
      handleClick: () => {
        console.log('clicked');
      },
    },
    {
      title: 'Man charged over missing wedding girl.',
      handleClick: () => {
        console.log('clicked');
      },
    },
    {
      title: 'Los Angeles battles huge wildfires.',
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
