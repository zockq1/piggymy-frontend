'use client';

import { Form } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

import search from '/public/img/Icon/search.png';
import Dropdown from '@/share/form/item/Dropdown';
import RangePicker from '@/share/form/item/RangePicker';
import Button from '@/share/ui/button/IconButton';
import ContentBox from '@/share/ui/content-box/ContentBox';
import { buildQueryString } from '@/share/utils/query';

interface FormExampleValue {
  range: Dayjs[];
  useYn: boolean;
}

function CardFilter() {
  const searchParams = useSearchParams();
  const startDate = searchParams.get('start_date');
  const endDate = searchParams.get('end_date');
  const useYn = searchParams.get('use_yn');
  const router = useRouter();
  const path = usePathname();

  const handleFinish = (formValue: FormExampleValue) => {
    const isRangeSelected = !!formValue.range && formValue.range.length === 2;
    const params = {
      start_date: isRangeSelected
        ? formValue.range[0].format('YYYY-MM-DD')
        : '',
      end_date: isRangeSelected ? formValue.range[1].format('YYYY-MM-DD') : '',
      use_yn: formValue.useYn,
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
              className={'w-[379px]'}
              name={'range'}
              initialValue={[
                startDate ? dayjs(startDate) : null,
                endDate ? dayjs(endDate) : null,
              ]}
            />
            <Dropdown
              label={'사용여부'}
              placeholder={'전체'}
              className="max-w-[250px]"
              name={'useYn'}
              optionList={[
                { id: 0, value: String(true), label: '사용중' },
                { id: 1, value: String(false), label: '미사용중' },
              ]}
              initialValue={useYn}
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
