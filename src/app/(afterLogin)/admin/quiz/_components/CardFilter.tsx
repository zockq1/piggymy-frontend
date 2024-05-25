'use client';

import { Form } from 'antd';
import Image from 'next/image';
import React from 'react';

import search from '/public/img/Icon/search.png';
import Dropdown from '@/share/form/item/Dropdown';
import RangePicker from '@/share/form/item/RangePicker';
import Button from '@/share/ui/button/IconButton';
import ContentBox from '@/share/ui/content-box/ContentBox';

interface FormExampleValue {}

function CardFilter() {
  const handleFinish = (formValue: FormExampleValue) => {
    for (const [key, value] of Object.entries(formValue)) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <ContentBox>
      <Form className={'mb-[-24px] w-full'} onFinish={handleFinish}>
        <div className={'flex w-full items-start justify-between gap-x-10'}>
          <div className={'flex gap-x-10'}>
            <RangePicker
              label={'등록일자'}
              className={'w-[379px]'}
              name={'range'}
            />
            <Dropdown
              label={'사용여부'}
              placeholder={'전체'}
              className="max-w-[250px]"
              name={'use'}
              optionList={[
                { id: 0, value: 'used', label: '사용중' },
                { id: 1, value: 'unused', label: '미사용중' },
              ]}
            />
          </div>
          <Button type={'submit'}>
            <div className={'flex items-center justify-center gap-1'}>
              <Image src={search} alt="검색" width={18} height={18} />
            </div>
          </Button>
        </div>
      </Form>
    </ContentBox>
  );
}

export default CardFilter;
