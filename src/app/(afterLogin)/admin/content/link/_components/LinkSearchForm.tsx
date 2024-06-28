'use client';

import { Form, Input } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

import search from '/public/img/Icon/search.png';
import RangePicker from '@/share/form/item/RangePicker';
import Button from '@/share/ui/button/IconButton';
import ContentBox from '@/share/ui/content-box/ContentBox';
import { buildQueryString } from '@/utils/query';

interface LinkSearchFormValue {
  range: (Dayjs | null)[];
  title: string;
}

export default function LinkSearchForm() {
  const searchParams = useSearchParams();
  const startDate = searchParams.get('start_date');
  const endDate = searchParams.get('end_date');
  const title = searchParams.get('title');
  const router = useRouter();
  const path = usePathname();

  const handleFinish = (formValue: LinkSearchFormValue) => {
    const isRangeSelected = !formValue.range.includes(null);
    const params = {
      start_date: isRangeSelected
        ? formValue.range[0]!.format('YYYY-MM-DD')
        : '',
      end_date: isRangeSelected ? formValue.range[1]!.format('YYYY-MM-DD') : '',
      title: formValue.title,
    };

    if (buildQueryString(params)) {
      router.replace(`${path}?${buildQueryString(params)}`);
    } else {
      router.replace(path);
    }
  };

  return (
    <ContentBox>
      <Form className={'mb-[-24px] w-full'} onFinish={handleFinish}>
        <div className={'flex w-full items-start justify-between gap-x-10'}>
          <div className={'flex gap-x-10'}>
            <RangePicker
              label={'등록일자'}
              className={'m-0 w-[379px]'}
              name={'range'}
              initialValue={[
                startDate ? dayjs(startDate) : null,
                endDate ? dayjs(endDate) : null,
              ]}
            />
            <Form.Item label={'타이틀'} name="title" initialValue={title}>
              <Input placeholder="내용을 입력해주세요." />
            </Form.Item>
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
