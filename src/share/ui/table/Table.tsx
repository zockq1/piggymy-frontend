import { Table as AntdTable, TableProps as AntdTableProps } from 'antd';
import * as React from 'react';
import { ReactNode } from 'react';

interface TableProps extends AntdTableProps {
  hasSelection: boolean;
}

const Table = ({ dataSource, columns, hasSelection, ...props }: TableProps) => {
  const rowSelection = {
    onChange: (
      selectedRowKeys: React.Key[],
      selectedRows: { [key: string]: number | string | ReactNode }[],
    ) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      );
    },
    getCheckboxProps: (record: {
      [key: string]: number | string | ReactNode;
    }) => {
      console.log(record);
      return {};
    },
  };

  return (
    <AntdTable
      columns={columns}
      dataSource={dataSource}
      bordered
      rowSelection={hasSelection ? rowSelection : undefined}
      pagination={false}
      {...props}
    />
  );
};

export default Table;
