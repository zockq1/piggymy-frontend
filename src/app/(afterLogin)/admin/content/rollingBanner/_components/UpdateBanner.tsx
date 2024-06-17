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
    const {
      exposureDuration,
      title,
      type,
      image,
      buttonName,
      moveVocaId,
      moveQuizId,
    } = formValue;
    const formData = {
      title: title,
      exposureEndDate: exposureDuration[1],
      exposureStartDate: exposureDuration[0],
      type: type,
      image: image,
      buttonName: buttonName,
      moveVocaId: moveVocaId,
      moveQuizId: moveQuizId,
    };

    if (
      image &&
      image.length > 0 &&
      image[0].url ===
        String(data?.data.imagePath) + String(data?.data.imageName)
    ) {
      updateBanner({
        id: { bannerId: currentBannerId },
        data: {
          ...formData,
          image: [],
          imageName: String(data?.data.imageName),
          imagePath: String(data?.data.imagePath),
        },
      });
    } else {
      updateBanner({
        id: { bannerId: currentBannerId },
        data: {
          ...formData,
          imageName: '',
          imagePath: '',
        },
      });
    }
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
      moveVocaId,
      moveQuizId,
    } = data.data;

    return (
      <RollingBannerForm
        mode="update"
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
          moveVocaId: moveVocaId,
          moveQuizId: moveQuizId,
        }}
      />
    );
  }

  return <>로딩</>;
}
