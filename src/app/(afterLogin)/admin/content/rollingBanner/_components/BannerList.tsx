'use client';

import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

import { useEffect, useRef } from 'react';

import { useGetBannerList } from '@/share/query/banner/useGetBannerList';
import ContentBox from '@/share/ui/content-box/ContentBox';
import Add from '@/share/ui/list-item/Add';
import Banner from '@/share/ui/list-item/Banner';
import Title from '@/share/ui/title/Title';

interface RollingBannerListProps {
  currentBannerId?: number;
}

export default function RollingBannerList({
  currentBannerId,
}: RollingBannerListProps) {
  const { data } = useGetBannerList();
  const selectedBannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedBannerRef.current) {
      selectedBannerRef.current.scrollIntoView({
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [currentBannerId]);

  return (
    <ContentBox
      topLeft={
        <Title>
          생성된 롤링 배너{' '}
          <Title.H>{data?.data ? data?.data.list.length : 0}</Title.H> 건
        </Title>
      }
      className={'flex h-[334px] '}
    >
      <div className="flex w-full items-start justify-start gap-10 overflow-x-scroll">
        <Add
          route="/admin/content/rollingBanner"
          type="banner"
          isSelected={currentBannerId === undefined}
        />
        {data?.data &&
          data?.data.list.map((banner) => {
            const {
              title,
              id,
              type,
              buttonName,
              imagePath,
              imageName,
              createdDate,
              exposureStartDate,
              exposureEndDate,
            } = banner;

            const isSelected = currentBannerId === id;
            const bannerRef = isSelected ? selectedBannerRef : null;

            return (
              <div ref={bannerRef} key={id}>
                <Banner
                  title={title}
                  category={type}
                  buttonTitle={buttonName}
                  image={imagePath + imageName}
                  isActive={dayjs().isBetween(
                    exposureStartDate,
                    exposureEndDate,
                    null,
                    '[]',
                  )}
                  isSelected={currentBannerId === id}
                  createdDate={dayjs(createdDate)}
                  route={`/admin/content/rollingBanner/${id}`}
                />
              </div>
            );
          })}
      </div>
    </ContentBox>
  );
}
