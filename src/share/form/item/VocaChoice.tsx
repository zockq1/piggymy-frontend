'use client';

import { Form, FormItemProps, Radio, Select } from 'antd';
import React, { useState } from 'react';

import Label from '@/share/form/item/Label';
import { useGetVocaList } from '@/share/query/voca/useGetVocaList';
import StatusBadge from '@/share/ui/badge/StatusBadge';
import filterOption from '@/utils/filterOption';

interface VocaChoiceProps extends FormItemProps {}

export default function VocaChoice({ name, initialValue }: VocaChoiceProps) {
  const { data, isLoading } = useGetVocaList({
    data: { page: 1, page_size: 1000 },
  });
  const [status, setStatus] = useState<'all' | 'active' | 'inActive'>('all');
  /* eslint-disable  @typescript-eslint/no-unused-vars */
  const [type, setType] = useState<'all' | 'voca' | 'quiz'>('all');

  return (
    <>
      <Form.Item label={<Label>{'카드 선택 옵션'}</Label>}>
        <Radio.Group
          options={[
            { label: '전체', value: 'all' },
            { label: '사용중', value: 'active' },
            { label: '미사용', value: 'inActive' },
          ]}
          defaultValue="all"
          onChange={(e) => setStatus(e.target.value)}
          optionType="button"
          buttonStyle="solid"
          className="mr-5"
        />
        <Radio.Group
          options={[
            { label: '전체', value: 'all' },
            { label: '용어', value: 'voca' },
            { label: '퀴즈', value: 'quiz' },
          ]}
          defaultValue="all"
          onChange={(e) => setType(e.target.value)}
          optionType="button"
          buttonStyle="solid"
        />
      </Form.Item>

      <Form.Item
        label={<Label>{'카드 선택'}</Label>}
        name={name}
        initialValue={initialValue}
        rules={[
          {
            required: true,
            message: `용어 카드를 선택해 주세요`,
          },
        ]}
      >
        <Select
          showSearch
          filterOption={filterOption}
          placeholder="용어/퀴즈카드를 선택해주세요."
          loading={isLoading}
        >
          {data?.data &&
            data?.data.list
              .filter((voca) => {
                if (status === 'active') return voca.useYn === true;
                if (status === 'inActive') return voca.useYn === false;
                return true;
              })
              .map((voca) => (
                <Select.Option value={voca.id} key={voca.id}>
                  <StatusBadge isActive={voca.useYn} className="mr-3" />
                  {/* 추후 type 상태에 따른 출력 변경 필요 */}
                  {`${voca.koreanTitle}(${voca.englishTitle})`}
                </Select.Option>
              ))}
        </Select>
      </Form.Item>
    </>
  );
}
