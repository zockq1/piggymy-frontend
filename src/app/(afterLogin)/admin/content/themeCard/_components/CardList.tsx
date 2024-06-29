'use client';

import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useGetCardList } from '@/share/query/card/useGetCardList';
import ContentBox from '@/share/ui/content-box/ContentBox';
import Icon from '@/share/ui/icon/Icon';
import Add from '@/share/ui/list-item/Add';
import Theme from '@/share/ui/list-item/Theme';
import Title from '@/share/ui/title/Title';

interface CardListProps {
  currentCardId?: number;
}

export default function CardList({ currentCardId }: CardListProps) {
  const { data } = useGetCardList();
  const swiperRef = useRef<SwiperType>();

  return (
    <ContentBox
      topLeft={
        <Title>
          생성된 테마별 카드 모음집
          <Title.H>{data?.data ? data?.data.list.length : 0}</Title.H> 건
        </Title>
      }
      className={'flex'}
    >
      <div className="mt-4 flex w-full items-start justify-start gap-2">
        <Add
          route="/admin/content/themeCard"
          type="theme"
          isSelected={currentCardId === undefined}
        />
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="h-[153px] text-primary"
        >
          <Icon icon="prev" />
        </button>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Pagination, Navigation]}
          initialSlide={
            data?.data.list.findIndex((data) => data.id === currentCardId) || 0
          }
        >
          {data?.data &&
            data?.data.list.map((card) => {
              const {
                title,
                id,
                content,
                createdDate,
                exposureStartDate,
                exposureEndDate,
                isUse,
              } = card;

              return (
                <SwiperSlide key={id} className="">
                  <Theme
                    description={content}
                    title={title}
                    isActive={
                      dayjs().isBetween(
                        exposureStartDate,
                        exposureEndDate,
                        null,
                        '[]',
                      ) && isUse
                    }
                    isSelected={currentCardId === id}
                    createdDate={dayjs(createdDate)}
                    route={`/admin/content/themeCard/${id}`}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="h-[153px] text-primary"
        >
          <Icon icon="next" />
        </button>
      </div>
    </ContentBox>
  );
}
