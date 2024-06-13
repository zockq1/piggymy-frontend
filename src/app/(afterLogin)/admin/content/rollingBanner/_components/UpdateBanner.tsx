'use client';

import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';

import { useDeleteBanner } from '@/share/query/banner/useDeleteBanner';
import { useGetBanner } from '@/share/query/banner/useGetBanner';
import { useUpdateBanner } from '@/share/query/banner/useUpdateBanner';
import { BannerFormValue } from '@/type/bannerType';

import RollingBannerForm from './BannerForm';

interface UpdateBannerProps {
  currentBannerId: number;
}

export default function UpdateBanner({ currentBannerId }: UpdateBannerProps) {
  const [form] = useForm();
  const { mutate: updateBanner } = useUpdateBanner();
  const { mutate: deleteBanner } = useDeleteBanner();

  const { data, isSuccess } = useGetBanner({
    id: { bannerId: currentBannerId },
    data: null,
  });

  const handleSubmit = (formValue: BannerFormValue) => {
    const { exposureDuration, title, type, image, buttonName, moveId } =
      formValue;
    const data = {
      title: title,
      exposureEndDate: exposureDuration[1],
      exposureStartDate: exposureDuration[0],
      type: type,
      image: image,
      buttonName: buttonName,
      moveId: moveId,
    };
    updateBanner({
      id: { bannerId: currentBannerId },
      data: data,
    });
  };

  const handleCancel = () => {
    deleteBanner({
      id: { bannerId: currentBannerId },
      data: null,
    });
  };

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
      moveId,
    } = data.data;

    return (
      <RollingBannerForm
        type="update"
        form={form}
        onDelete={handleCancel}
        onSubmit={handleSubmit}
        initialValue={{
          createdDate: dayjs(createdDate),
          modifiedDate: dayjs(modifiedDate),
          exposureStartDate: dayjs(exposureStartDate),
          exposureEndDate: dayjs(exposureEndDate),
          type: type,
          title: title,
          image: imagePath + imageName,
          buttonName: buttonName,
          moveId: moveId,
        }}
      />
    );
  }

  return <>로딩</>;
}
