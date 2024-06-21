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

import { useGetBadgeList } from '@/share/query/badge/useGetBadgeList';
import ContentBox from '@/share/ui/content-box/ContentBox';
import Icon from '@/share/ui/icon/Icon';
import Add from '@/share/ui/list-item/Add';
import Badge from '@/share/ui/list-item/Badge';
import Title from '@/share/ui/title/Title';

interface BadgeListProps {
  currentBadgeId?: number;
}

export default function BadgeList({ currentBadgeId }: BadgeListProps) {
  const { data } = useGetBadgeList();
  const swiperRef = useRef<SwiperType>();

  return (
    <ContentBox
      topLeft={
        <Title>
          생성된 배지
          <Title.H>{data?.data ? data?.data.list.length : 0}</Title.H> 건
        </Title>
      }
      className={'flex'}
    >
      <div className="mt-4 flex w-full items-start justify-start gap-2">
        <Add
          route="/admin/content/badge"
          type="badge"
          isSelected={currentBadgeId === undefined}
        />
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="h-[234px] text-primary"
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
            data?.data.list.findIndex((data) => data.id === currentBadgeId) || 0
          }
        >
          {data?.data &&
            data?.data.list.map((badge) => {
              const {
                title,
                id,
                imagePath,
                imageName,
                createdDate,
                exposureStartDate,
                exposureEndDate,
              } = badge;

              return (
                <SwiperSlide key={id} className="">
                  <Badge
                    title={title}
                    image={imagePath + imageName}
                    isActive={dayjs().isBetween(
                      exposureStartDate,
                      exposureEndDate,
                      null,
                      '[]',
                    )}
                    isSelected={currentBadgeId === id}
                    createdDate={dayjs(createdDate)}
                    route={`/admin/content/badge/${id}`}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="h-[234px] text-primary"
        >
          <Icon icon="next" />
        </button>
      </div>
    </ContentBox>
  );
}
