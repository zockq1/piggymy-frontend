'use client';

import { Form } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

import search from '/public/img/Icon/search.png';
import Text from '@/share/form/item/Text';
import { useGetVocaList } from '@/share/query/voca/useGetVocaList';
import Button from '@/share/ui/button/IconButton';
import ContentBox from '@/share/ui/content-box/ContentBox';
import Dropdown from '@/share/ui/dropdown/Dropdown';
import Add from '@/share/ui/list-item/Add';
import Card from '@/share/ui/list-item/Card';
import Title from '@/share/ui/title/Title';
import { buildQueryString } from '@/share/utils/query';
import { VocaResponseJson } from '@/type/vocaType';

interface FormExampleValue {
  range: Dayjs[];
  useYn: boolean;
  keyword: string;
}

function CardSearchList() {
  const searchParams = useSearchParams();
  const startDate = searchParams.get('start_date');
  const endDate = searchParams.get('end_date');
  const useYn = searchParams.get('use_yn');
  const keyword = searchParams.get('keyword');
  const router = useRouter();
  const path = usePathname();

  const { data } = useGetVocaList({
    data: {
      start_date: startDate!,
      end_date: endDate!,
      use_yn: useYn!,
      search_keyword: keyword!,
    },
  });

  const [selectCardIds, setSelectCardIds] = useState<number[]>([]);

  const handleFinish = (formValue: FormExampleValue) => {
    const params = {
      start_date: startDate ?? '',
      end_date: endDate ?? '',
      use_yn: useYn ?? '',
      keyword: formValue.keyword,
    };
    if (buildQueryString(params)) {
      router.replace(`${path}?${buildQueryString(params)}`);
    }
  };

  const toggleCheck = (id: string) => {
    const ids = new Set(selectCardIds);
    if (ids.has(+id)) {
      ids.delete(+id);
    } else {
      ids.add(+id);
    }

    setSelectCardIds(Array.from(ids));
  };

  return (
    <ContentBox className={'flex h-full max-h-[calc(100vh-400px)] items-start'}>
      <Form
        className={'flex h-full w-full flex-col gap-4'}
        onFinish={handleFinish}
      >
        <div className={'flex w-full items-start justify-between gap-x-3'}>
          <Text
            label={''}
            placeholder={'검색'}
            name={'keyword'}
            className={'w-full'}
          />
          <Button type={'submit'}>
            <Image src={search} alt="검색" width={18} height={18} />
          </Button>
        </div>
        <div className={'flex w-full items-start justify-between'}>
          <Title>
            카드 모음집 <Title.H>2</Title.H>건
          </Title>
          <Dropdown
            selectName={'등록일'}
            options={[
              { inputVal: 'RECENT', summary: '등록일' },
              { inputVal: 'used', summary: '사용중' },
              { inputVal: 'unused', summary: '미사용중' },
            ]}
          />
        </div>
        {!!data && !!data.data && !!data.data.list && (
          <ul className={'flex flex-col gap-4 overflow-y-auto'}>
            {data.data.list?.map((voca: VocaResponseJson) => {
              return (
                <li key={voca.id} className={'list-none'}>
                  <Card
                    id={voca.id.toString()}
                    koreanTitle={voca.koreanTitle}
                    createdDate={dayjs(voca.createdDate)}
                    isActive={voca.useYn}
                    isChecked={selectCardIds.includes(voca.id)}
                    route={`/admin/quiz/quizManagement/${voca.id}`}
                    isSelected={selectCardIds.includes(voca.id)}
                    onChangeChecked={toggleCheck}
                  />
                </li>
              );
            })}
            <Add type={'card'} isSelected={false} route={'/123'} />
          </ul>
        )}
      </Form>
    </ContentBox>
  );
}

export default CardSearchList;
