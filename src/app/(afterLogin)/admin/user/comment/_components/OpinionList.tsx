'use client';

import { useQueryClient } from '@tanstack/react-query';
import { PaginationProps } from 'antd';
import { TableProps as AntdTableProps } from 'antd/es/table/InternalTable';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import {
  prefetchOpinionList,
  useGetOpinionList,
} from '@/share/query/opinion/useGetOpinionList';
import ContentBox from '@/share/ui/content-box/ContentBox';
import Table from '@/share/ui/table/Table';
import Title from '@/share/ui/title/Title';
import { parseBoolean } from '@/share/utils/parseBoolean';
import { OpinionResponseJson, OpinionType } from '@/type/opinionType';

interface DataType {
  key: React.Key;
  id: number;
  no: string;
  content: OpinionResponseJson;
  userNickname: string;
  createdDate: string;
  userDelYn: string;
}

const columns: AntdTableProps<DataType>['columns'] = [
  {
    title: 'NO',
    dataIndex: 'no',
    key: 'no',
    align: 'center',
    width: 100,
  },
  {
    title: '작성 내용',
    dataIndex: 'content',
    key: 'content',
    width: 600,
    render: (opinion: OpinionResponseJson) => opinion.content,
  },
  {
    title: '작성자',
    dataIndex: 'userNickname',
    key: 'userNickname',
    width: 200,
  },
  {
    title: '작성일',
    dataIndex: 'createdDate',
    key: 'createdDate',
    width: 200,
  },
  {
    title: '탈퇴 여부',
    dataIndex: 'userDelYn',
    key: 'userDelYn',
    width: 200,
  },
];

export default function OpinionList() {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const userNickname = searchParams.get('userNickname');
  const userDelYn = searchParams.get('userDelYn');
  const opinionType = searchParams.get('opinionType');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data } = useGetOpinionList({
    data: {
      page: currentPage,
      page_size: 10,
      start_date: startDate!,
      end_date: endDate!,
      user_nickname: userNickname!,
      delYn: parseBoolean(userDelYn),
      opinion_type: opinionType as OpinionType,
    },
  });
  const totalCount = data?.data ? data?.data.totalCount : 0;

  const opinionList: DataType[] = useMemo(() => {
    return data?.data
      ? data?.data.list.map((opinion) => {
          const { id, createdDate, userNickname, userDelYn } = opinion;
          return {
            key: id,
            id: id,
            no: 'N',
            content: opinion,
            userNickname,
            createdDate,
            userDelYn: userDelYn ? 'Y' : 'N',
          };
        })
      : [];
  }, [data]);

  useEffect(() => {
    prefetchOpinionList(queryClient, {
      data: {
        page: currentPage + 1,
        page_size: 10,
        start_date: startDate!,
        end_date: endDate!,
        user_nickname: userNickname!,
        delYn: parseBoolean(userDelYn),
        opinion_type: opinionType as OpinionType,
      },
    });
  }, [
    currentPage,
    queryClient,
    endDate,
    startDate,
    opinionType,
    userDelYn,
    userNickname,
  ]);

  const handleChangePage: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
  };

  return (
    <ContentBox
      topLeft={
        <Title>
          검색 결과
          <Title.H>{data?.data ? data?.data.totalCount : 0}</Title.H> 건
        </Title>
      }
      className={'flex'}
    >
      <Table
        hasSelection={true}
        columns={columns}
        className="mt-4"
        pagination={{
          total: totalCount,
          current: currentPage,
          onChange: handleChangePage,
        }}
        dataSource={opinionList}
      />
    </ContentBox>
  );
}
