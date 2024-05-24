import Image from 'next/image';
import React from 'react';

import search from '/public/img/Icon/search.png';
import Search from '@/share/search/Search';
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
      <Search className={'mb-[-24px] w-full'} onFinish={handleFinish}>
        <div className={'flex w-full items-start justify-between gap-x-10'}>
          <div className={'flex gap-x-10'}>
            <Search.SearchRangePicker
              label={'등록일자'}
              className={'w-[379px]'}
              name={'range'}
            />
            <Search.SearchDropdown
              label={'사용여부'}
              placeholder={'전체'}
              className="max-w-[250px]"
              name={'use'}
            />
          </div>
          <Button type={'submit'}>
            <div className={'flex items-center justify-center gap-1'}>
              <Image src={search} alt="검색" width={18} height={18} />
            </div>
          </Button>
        </div>
      </Search>
    </ContentBox>
  );
}

export default CardFilter;
