import { Table as AntdTable, TableProps as AntdTableProps } from 'antd';
import * as React from 'react';

interface DataType {
  key: string;
  isUsed: string;
  word: string;
  quiz: string;
}

const columns: AntdTableProps<DataType>['columns'] = [
  {
    title: '사용여부',
    dataIndex: 'isUsed',
    key: 'isUsed',
    align: 'center',
    width: 100,
  },
  {
    title: '용어카드',
    dataIndex: 'word',
    key: 'word',
    width: 300,
  },
  {
    title: '퀴즈카드',
    dataIndex: 'quiz',
    key: 'quiz',
    width: 300,
  },
];

const data: DataType[] = [
  {
    key: '1',
    isUsed: '사용중',
    word: '관치금융',
    quiz: '관치금융이란 ~~~~',
  },
  {
    key: '2',
    isUsed: '사용중',
    word: '관치금융',
    quiz: '관치금융이란 ~~~~',
  },
  {
    key: '3',
    isUsed: '사용중',
    word: '관치금융',
    quiz: '관치금융이란 ~~~~',
  },
  {
    key: '4',
    isUsed: '사용중',
    word: '관치금융',
    quiz: '관치금융이란 ~~~~',
  },
  {
    key: '5',
    isUsed: '사용중',
    word: '관치금융',
    quiz: '관치금융이란 ~~~~',
  },
  {
    key: '6',
    isUsed: '사용중',
    word: '관치금융',
    quiz: '관치금융이란 ~~~~',
  },
];

interface TableProps {}

const Table = ({ ...props }: TableProps) => {
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.isUsed === 'Disabled User', // Column configuration not to be checked
      name: record.isUsed,
    }),
  };

  return (
    <AntdTable
      columns={columns}
      dataSource={data}
      pagination={{ hideOnSinglePage: true }}
      scroll={{ x: 700, y: 300 }}
      bordered
      rowSelection={rowSelection}
      {...props}
    />
  );
};

export default Table;
