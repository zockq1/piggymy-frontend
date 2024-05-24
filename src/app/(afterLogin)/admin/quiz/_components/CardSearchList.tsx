import dayjs, { Dayjs } from 'dayjs';
import Image from 'next/image';
import React, { useState } from 'react';

import search from '/public/img/Icon/search.png';
import Search from '@/share/search/Search';
import Button from '@/share/ui/button/IconButton';
import ContentBox from '@/share/ui/content-box/ContentBox';
import Dropdown from '@/share/ui/dropdown/Dropdown';
import Add from '@/share/ui/list-item/Add';
import Card from '@/share/ui/list-item/Card';
import Title from '@/share/ui/title/Title';

interface FormExampleValue {}

function CardSearchList() {
  const [cardList, setCardList] = useState<
    {
      id: string;
      title: string;
      createdDate: Dayjs;
      isActive: boolean;
      isSelected: boolean;
      route: string;
      isChecked: boolean;
    }[]
  >([
    {
      title: '피치마켓 (peach market)',
      id: '1',
      isChecked: false,
      createdDate: dayjs('2023-11-01'),
      isActive: true,
      isSelected: true,
      route: '/asd',
    },
    {
      title: '관치금융',
      id: '2',
      isChecked: false,
      createdDate: dayjs('2023-11-01'),
      isActive: false,
      isSelected: false,
      route: '/asd',
    },
    {
      title: '피치마켓 (peach market)',
      id: '3',
      isChecked: false,
      createdDate: dayjs('2023-11-01'),
      isActive: true,
      isSelected: true,
      route: '/asd',
    },
    {
      title: '관치금융',
      id: '4',
      isChecked: false,
      createdDate: dayjs('2023-11-01'),
      isActive: false,
      isSelected: false,
      route: '/asd',
    },
    {
      title: '피치마켓 (peach market)',
      id: '5',
      isChecked: false,
      createdDate: dayjs('2023-11-01'),
      isActive: true,
      isSelected: true,
      route: '/asd',
    },
    {
      title: '관치금융',
      id: '6',
      isChecked: false,
      createdDate: dayjs('2023-11-01'),
      isActive: false,
      isSelected: false,
      route: '/asd',
    },
  ]);

  const handleFinish = (formValue: FormExampleValue) => {
    for (const [key, value] of Object.entries(formValue)) {
      console.log(`${key}: ${value}`);
    }
  };

  const toggleCheck = (id: string) => {
    setCardList(
      cardList.map((card) => {
        if (card.id === id) {
          return { ...card, isChecked: !card.isChecked };
        }
        return card;
      }),
    );
  };

  return (
    <ContentBox>
      <Search className={'flex w-full flex-col gap-4'} onFinish={handleFinish}>
        <div className={'flex w-full items-start justify-between gap-x-3'}>
          <Search.SearchText
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
        <ul className={'flex flex-col gap-4 overflow-y-auto'}>
          {cardList.map((card) => {
            return (
              <li key={card.id} className={'list-none'}>
                <Card
                  id={card.id}
                  title={card.title}
                  createdDate={card.createdDate}
                  isActive={card.isActive}
                  isChecked={card.isChecked}
                  route={card.route}
                  isSelected={card.isSelected}
                  onChangeChecked={toggleCheck}
                />
              </li>
            );
          })}
          <Add type={'card'} isSelected={false} route={'/123'} />
        </ul>
      </Search>
    </ContentBox>
  );
}

export default CardSearchList;
