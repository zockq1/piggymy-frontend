import type { Meta, StoryObj } from '@storybook/react';
import { TableProps as AntdTableProps } from 'antd/es/table/InternalTable';
import { ReactNode } from 'react';

import Table from './Table';

const meta: Meta<typeof Table> = {
  title: 'Table',
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export interface DataType {
  [key: string]: number | string | ReactNode;
}

const lorem =
  '정부가 재량적 정치운용을 통해서 민간 금융기관에 참여함으로써 금융시장의 인사와 자금배분에 직접 개입하는 형태.';

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
    width: 200,
  },
  {
    title: '퀴즈카드',
    dataIndex: 'quiz',
    key: 'quiz',
    width: 300,
  },
];

const dataSource: DataType[] = [
  {
    key: 1,
    isUsed: '사용중',
    word: '관치금융',
    quiz: lorem,
  },
  {
    key: 2,
    isUsed: '사용중',
    word: '관치금융',
    quiz: lorem,
  },
  {
    key: 3,
    isUsed: '사용중',
    word: '관치금융',
    quiz: lorem,
  },
  {
    key: 4,
    isUsed: '사용중',
    word: '관치금융',
    quiz: lorem,
  },
  {
    key: 5,
    isUsed: '사용중',
    word: '관치금융',
    quiz: lorem,
  },
  {
    key: 6,
    isUsed: '사용중',
    word: '관치금융',
    quiz: lorem,
  },
  {
    key: 7,
    isUsed: '사용중',
    word: '관치금융',
    quiz: lorem,
  },
  {
    key: 8,
    isUsed: '사용중',
    word: '관치금융',
    quiz: lorem,
  },
  {
    key: 9,
    isUsed: '사용중',
    word: '관치금융',
    quiz: lorem,
  },
  {
    key: 10,
    isUsed: '사용중',
    word: '관치금융',
    quiz: lorem,
  },
];

export const Default: Story = {
  args: { columns, dataSource, hasSelection: false, pagination: false },
};

export const Pagination: Story = {
  args: {
    columns,
    dataSource,
    hasSelection: false,
    pagination: { total: 50 },
  },
};

export const Scroll: Story = {
  args: { columns, dataSource, hasSelection: false, scroll: { y: 500 } },
};

export const HasSelection: Story = {
  args: { columns, dataSource, hasSelection: true, scroll: { y: 300 } },
};

export const HasSelectionHiddenAllSelect: Story = {
  args: {
    columns,
    dataSource,
    hasSelection: true,
    scroll: { y: 300 },
    rowSelection: { hideSelectAll: true },
  },
};
