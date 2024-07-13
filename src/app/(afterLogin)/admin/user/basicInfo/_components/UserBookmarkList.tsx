'use client';

import { PaginationProps } from 'antd';
import { TableProps as AntdTableProps } from 'antd/es/table/InternalTable';
import { useParams } from 'next/navigation';
import React, { ChangeEvent, useMemo, useState } from 'react';

import { useGetUserBookmarks } from '@/share/query/user/useGetUserBookmarks';
import ContentBox from '@/share/ui/content-box/ContentBox';
import Dropdown from '@/share/ui/dropdown/Dropdown';
import Table from '@/share/ui/table/Table';
import Title from '@/share/ui/title/Title';

export interface DataType {
  type: string;
  content: string;
  hit: number;
  createdDate: string;
  modifiedDate: string;
}

export default function UserBookmarkList() {
  const { userId } = useParams();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortType, setSortType] = useState<'CREATED' | 'MODIFIED'>('CREATED');
  const { data } = useGetUserBookmarks({
    data: { userId: +userId, sort_type: sortType },
  });
  const totalCount = data ? data.data.totalCount : 0;

  const handleChangePage: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
  };

  const columns: AntdTableProps<DataType>['columns'] = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      align: 'center',
      width: 30,
    },
    {
      title: '구분',
      dataIndex: 'type',
      key: 'type',
      width: 50,
    },
    {
      title: '카드 상세',
      dataIndex: 'content',
      key: 'content',
      width: 220,
      ellipsis: true,
    },
    {
      title: '북마크일',
      dataIndex: 'createdDate',
      key: 'createdDate',
      width: 50,
      ellipsis: true,
    },
    {
      title: '조회수',
      dataIndex: 'hit',
      key: 'hit',
      width: 50,
      ellipsis: true,
    },
  ];

  const bookmarkList: DataType[] = useMemo(() => {
    return data
      ? data.data.list.map((bookmark, index) => {
          return {
            no: index,
            ...bookmark,
          };
        })
      : [];
  }, [data]);

  return (
    <ContentBox className={'flex w-full flex-col'}>
      <div className={'flex w-full flex-col items-start'}>
        <div className={'flex w-full items-start justify-between'}>
          <Title>
            전체 보낸 의견 <Title.H>{totalCount}</Title.H>건
          </Title>
          <Dropdown
            options={[
              { inputVal: 'CREATED', summary: '최근 북마크일' },
              { inputVal: 'MODIFIED', summary: '최근 저장순' },
            ]}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setSortType(e.target.value as 'CREATED' | 'MODIFIED');
            }}
          />
        </div>
        <Table
          hasSelection={false}
          columns={columns}
          className="mt-4"
          pagination={{
            total: totalCount,
            current: currentPage,
            onChange: handleChangePage,
          }}
          dataSource={bookmarkList}
        />
      </div>
    </ContentBox>
  );
}
