'use client';

import dayjs from 'dayjs';

import { useGetBanner } from '@/share/query/banner/useGetBanner';

import RollingBannerForm from './RollingBannerForm';

interface UpdateBannerProps {
  currentBannerId: number;
}

export default function UpdateBanner({ currentBannerId }: UpdateBannerProps) {
  const { data, isSuccess } = useGetBanner({
    id: { bannerId: currentBannerId },
    data: null,
  });

  if (isSuccess) {
    const {
      createdDate,
      modifiedDate,
      exposureEndDate,
      exposureStartDate,
      title,
      type,
      imagePath,
      imageName,
      buttonName,
      movePage,
      useYn,
    } = data.data;
    return (
      <RollingBannerForm
        initialValue={{
          createdDate: dayjs(createdDate),
          modifiedDate: dayjs(modifiedDate),
          exposureStartDate: dayjs(exposureStartDate),
          exposureEndDate: dayjs(exposureEndDate),
          type: type,
          title: title,
          image: imagePath + imageName,
          buttonName: buttonName,
          movePage: movePage,
          useYn: useYn,
        }}
      />
    );
  }

  return (
    <>
      <RollingBannerForm />
    </>
  );
}
