import * as React from 'react';
import styled from 'styled-components';
import { Table as AntTable } from 'antd';
import { useRouter } from 'next/router';

const StyledTable = styled(AntTable)``;

interface TableData {
  _id: string;
}
interface TableProps {
  data: readonly TableData[];
}
export default function Table({ data }: TableProps) {
  const router = useRouter();

  const columns = [
    {
      title: 'Name',
      dataIndex: '_id',
      key: '_id',
      render: (text: string) => <>{text}</>,
    },
  ];

  return (
    <StyledTable
      theme="dark"
      columns={columns}
      dataSource={data}
      onRow={(record, rowIndex) => {
        return {
          // click row there are also other options like mouse enter, double click etc.
          onClick: (event) => {
            event.preventDefault();
            router.push(`/asset/${record._id}`);
          },
        };
      }}
    />
  );
}
