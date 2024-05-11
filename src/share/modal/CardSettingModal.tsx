'use client';

import { TableProps as AntdTableProps } from 'antd/es/table/InternalTable';
import React, { ReactNode, useState } from 'react';

import StatusBadge from '@/share/ui/badge/StatusBadge';
import WordBadge from '@/share/ui/badge/WordBadge';
import Button from '@/share/ui/button/Button';
import Table from '@/share/ui/table/Table';
import Title from '@/share/ui/title/Title';
import { cn } from '@/utils/cn';

export interface DataType {
  [key: string]: number | string | ReactNode;
}

interface CardSettingProps {
  onConfirm?: () => void;
  onCancel?: () => void;
}

function CardSettingModal({ onConfirm, onCancel }: CardSettingProps) {
  const [wordList] = useState([
    { id: 0, word: '관' },
    { id: 1, word: '치' },
    { id: 2, word: '금' },
    { id: 3, word: '융' },
  ]);

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
      isUsed: <StatusBadge isActive></StatusBadge>,
      word: '관치금융',
      quiz: lorem,
    },
    {
      key: 2,
      isUsed: <StatusBadge isActive></StatusBadge>,
      word: '관치금융',
      quiz: lorem,
    },
    {
      key: 3,
      isUsed: <StatusBadge isActive></StatusBadge>,
      word: '관치금융',
      quiz: lorem,
    },
    {
      key: 4,
      isUsed: <StatusBadge isActive></StatusBadge>,
      word: '관치금융',
      quiz: lorem,
    },
    {
      key: 5,
      isUsed: <StatusBadge isActive></StatusBadge>,
      word: '관치금융',
      quiz: lorem,
    },
    {
      key: 6,
      isUsed: <StatusBadge isActive></StatusBadge>,
      word: '관치금융',
      quiz: lorem,
    },
    {
      key: 7,
      isUsed: <StatusBadge isActive></StatusBadge>,
      word: '관치금융',
      quiz: lorem,
    },
    {
      key: 8,
      isUsed: <StatusBadge isActive></StatusBadge>,
      word: '관치금융',
      quiz: lorem,
    },
    {
      key: 9,
      isUsed: <StatusBadge isActive></StatusBadge>,
      word: '관치금융',
      quiz: lorem,
    },
    {
      key: 10,
      isUsed: <StatusBadge isActive></StatusBadge>,
      word: '관치금융',
      quiz: lorem,
    },
  ];

  return (
    <div
      className={cn(
        'flex w-[760px] flex-col items-start justify-center gap-2 text-center',
      )}
    >
      <Title>용어/퀴즈카드 설정</Title>
      <div className={'block w-full bg-warning'}>SEARCH UI</div>
      <div className={'flex flex-wrap items-center justify-start gap-3'}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 12.0006C21.0002 14.3668 20.0686 16.6378 18.4069 18.3222C16.7451 20.0066 14.4869 20.9688 12.1209 21.0006H12C9.70147 21.0064 7.48901 20.1267 5.82187 18.5444C5.75028 18.4767 5.69273 18.3955 5.6525 18.3056C5.61227 18.2156 5.59016 18.1186 5.58741 18.0201C5.58467 17.9216 5.60136 17.8235 5.63652 17.7315C5.67168 17.6394 5.72463 17.5552 5.79234 17.4836C5.86006 17.412 5.94121 17.3544 6.03116 17.3142C6.12112 17.274 6.21812 17.2519 6.31662 17.2491C6.41512 17.2464 6.5132 17.2631 6.60525 17.2982C6.69731 17.3334 6.78153 17.3863 6.85312 17.4541C7.92544 18.4653 9.27195 19.1382 10.7245 19.3887C12.177 19.6391 13.6711 19.456 15.0202 18.8623C16.3692 18.2685 17.5134 17.2904 18.3098 16.0501C19.1062 14.8099 19.5195 13.3624 19.4981 11.8886C19.4766 10.4148 19.0214 8.98004 18.1892 7.76346C17.3571 6.54689 16.1849 5.60248 14.8192 5.04822C13.4534 4.49395 11.9546 4.35441 10.51 4.64701C9.06537 4.93961 7.739 5.65139 6.69656 6.69343C6.6889 6.70172 6.68076 6.70954 6.67219 6.71687L4.18031 9.00062H6.75C6.94891 9.00062 7.13968 9.07964 7.28033 9.22029C7.42098 9.36094 7.5 9.55171 7.5 9.75062C7.5 9.94953 7.42098 10.1403 7.28033 10.281C7.13968 10.4216 6.94891 10.5006 6.75 10.5006H2.25C2.05109 10.5006 1.86032 10.4216 1.71967 10.281C1.57902 10.1403 1.5 9.94953 1.5 9.75062V5.25062C1.5 5.05171 1.57902 4.86094 1.71967 4.72029C1.86032 4.57964 2.05109 4.50062 2.25 4.50062C2.44891 4.50062 2.63968 4.57964 2.78033 4.72029C2.92098 4.86094 3 5.05171 3 5.25062V8.04437L5.64844 5.62562C6.90842 4.37053 8.512 3.51687 10.2567 3.1724C12.0015 2.82793 13.8092 3.00809 15.4516 3.69014C17.0941 4.37219 18.4976 5.52556 19.4851 7.00463C20.4726 8.48371 20.9997 10.2222 21 12.0006Z"
            fill="black"
          />
        </svg>
        {wordList.map((word) => (
          <WordBadge key={word.id} word={word.word} />
        ))}
      </div>

      <Table
        hasSelection
        columns={columns}
        dataSource={dataSource}
        scroll={{ y: 300 }}
      />
      {(onCancel || onConfirm) && (
        <div className={'flex w-full  justify-center gap-2'}>
          {onCancel && (
            <Button color={'white'} size={'large'} onClick={onCancel}>
              취소
            </Button>
          )}
          {onConfirm && (
            <Button color={'blue'} size={'large'} onClick={onConfirm}>
              확인
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default CardSettingModal;
