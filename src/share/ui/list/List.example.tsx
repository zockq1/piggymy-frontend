'use client';

import React, { MouseEventHandler, useState } from 'react';

import List from '@/share/ui/list/List';

interface DataType {
  thumbnail?: string;
  title: string;
  subtitle: string;
  handleClick: MouseEventHandler<HTMLDivElement>;
}

function ListExample() {
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [list, setList] = useState<DataType[]>([
    {
      thumbnail:
        'https://cdn.vox-cdn.com/thumbor/2ECtQus43_-tjqtlxy0WE8peSEQ=/0x0:2012x1341/1400x1050/filters:focal(1006x670:1007x671)/cdn.vox-cdn.com/uploads/chorus_asset/file/15483559/google2.0.0.1441125613.jpg',
      title: 'Racing car sprays burning fuel into crowd.',
      subtitle: '2024-07-21',
      handleClick: () => {
        console.log('clicked');
      },
    },
    {
      title: 'Japanese princess to wed commoner.',
      subtitle: '2024-07-21',
      handleClick: () => {
        console.log('clicked');
      },
    },
    {
      title: 'Australian walks 100km after outback crash.',
      subtitle: '2024-07-21',
      handleClick: () => {
        console.log('clicked');
      },
    },
    {
      title: 'Man charged over missing wedding girl.',
      subtitle: '2024-07-21',
      handleClick: () => {
        console.log('clicked');
      },
    },
    {
      title: 'Los Angeles battles huge wildfires.',
      subtitle: '2024-07-21',
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
          subtitle: '0000-00-00',
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
