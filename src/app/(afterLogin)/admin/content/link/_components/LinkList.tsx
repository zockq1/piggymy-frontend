'use client';

import { PaginationProps } from 'antd';
import { TableProps as AntdTableProps } from 'antd/es/table/InternalTable';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import { useDeleteLinkList } from '@/share/query/link/useDeleteLinkList';
import { useGetLinkList } from '@/share/query/link/useGetLinkList';
import Button from '@/share/ui/button/Button';
import ContentBox from '@/share/ui/content-box/ContentBox';
import Table from '@/share/ui/table/Table';
import Title from '@/share/ui/title/Title';

interface DataType {
  key: React.Key;
  id: number;
  no: string;
  category: string;
  title: { title: string; id: number };
  publishDate: string;
  publishName: string;
  createdDate: string;
  memberName: string;
  vocaContents: string;
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
    title: '구분',
    dataIndex: 'category',
    key: 'category',
    width: 200,
  },
  {
    title: '링크 타이틀/URL',
    dataIndex: 'title',
    key: 'title',
    width: 300,
    render: (text: { title: string; id: string }) => (
      <Link href={`/admin/content/link/${text.id}`}>{text.title}</Link>
    ),
  },
  {
    title: '출처',
    dataIndex: 'publishName',
    key: 'publishName',
    width: 200,
  },
  {
    title: '발행일',
    dataIndex: 'publishDate',
    key: 'publishDate',
    width: 200,
  },
  {
    title: '등록자',
    dataIndex: 'memberName',
    key: 'memberName',
    width: 200,
  },
  {
    title: '등록일',
    dataIndex: 'createdDate',
    key: 'createdDate',
    width: 200,
  },
  {
    title: '등록된 용어 카드',
    dataIndex: 'vocaContents',
    key: 'vocaContents',
    width: 200,
  },
];

export default function LinkList() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [checkedIdList, setCheckedIdList] = useState<number[]>([]);
  const { data } = useGetLinkList({
    data: { page: currentPage, page_size: 10 },
  });
  const { mutate: deleteLinkList } = useDeleteLinkList();
  const totalCount = data?.data ? data?.data.totalCount : 0;

  const linkList: DataType[] = useMemo(() => {
    return data?.data
      ? data?.data.list.map((link) => {
          const {
            id,
            category,
            title,
            publishDate,
            publishName,
            createdDate,
            memberName,
            vocaContents,
          } = link;
          return {
            key: id,
            id: id,
            no: 'N',
            category,
            title: { title, id },
            publishDate,
            publishName,
            createdDate,
            memberName,
            vocaContents,
          };
        })
      : [];
  }, [data]);

  const handleChangePage: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = () => {
    deleteLinkList({ data: { linkIds: checkedIdList } });
  };

  return (
    <ContentBox
      topLeft={
        <Title>
          생성된 테마별 카드 모음집
          <Title.H>{data?.data ? data?.data.totalCount : 0}</Title.H> 건
        </Title>
      }
      topRight={
        <>
          <Button onClick={handleDelete}>삭제</Button>
          &nbsp;
          <Button>
            <Link href="/admin/content/link/create">신규 링크 등록</Link>
          </Button>
        </>
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
        rowSelection={{
          onChange: (
            selectedRowKeys: React.Key[],
            selectedRows: DataType[],
          ) => {
            setCheckedIdList(selectedRows.map((row) => row.id));
          },
        }}
        dataSource={linkList}
      />
    </ContentBox>
  );
}
