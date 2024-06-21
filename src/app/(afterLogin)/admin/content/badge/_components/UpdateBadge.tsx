'use client';

import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';

import { useDeleteBadge } from '@/share/query/badge/useDeleteBadge';
import { useGetBadge } from '@/share/query/badge/useGetBadge';
import { useUpdateBadge } from '@/share/query/badge/useUpdateBadge';
import { BadgeFormValue } from '@/type/badgeType';

import BadgeForm from './BadgeForm';

interface UpdateBadgeProps {
  currentBadgeId: number;
}

export default function UpdateBadge({ currentBadgeId }: UpdateBadgeProps) {
  const [form] = useForm();
  const { mutate: updateBadge } = useUpdateBadge();
  const { mutate: deleteBadge } = useDeleteBadge();

  const { data, isSuccess } = useGetBadge({
    id: { badgeId: currentBadgeId },
    data: null,
  });

  const handleSubmit = (formValue: BadgeFormValue) => {
    const { exposureDuration, title, description, image, isUse } = formValue;
    const formData = {
      title: title,
      exposureEndDate: exposureDuration[1],
      exposureStartDate: exposureDuration[0],
      description: description,
      image: image,
      isUse: isUse,
    };

    if (
      image &&
      image.length > 0 &&
      image[0].url ===
        String(data?.data.imagePath) + String(data?.data.imageName)
    ) {
      updateBadge({
        id: { badgeId: currentBadgeId },
        data: {
          ...formData,
          image: [],
          imageName: String(data?.data.imageName),
          imagePath: String(data?.data.imagePath),
        },
      });
    } else {
      updateBadge({
        id: { badgeId: currentBadgeId },
        data: {
          ...formData,
          imageName: '',
          imagePath: '',
        },
      });
    }
  };

  const handleCancel = () => {
    deleteBadge({
      id: { badgeId: currentBadgeId },
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
      description,
      imagePath,
      imageName,
      isUse,
    } = data.data;

    return (
      <BadgeForm
        mode="update"
        form={form}
        onDelete={handleCancel}
        onSubmit={handleSubmit}
        initialValue={{
          createdDate: dayjs(createdDate),
          modifiedDate: dayjs(modifiedDate),
          exposureStartDate: dayjs(exposureStartDate),
          exposureEndDate: dayjs(exposureEndDate),
          isUse: isUse,
          title: title,
          image: imagePath + imageName,
          description: description,
        }}
      />
    );
  }

  return <>로딩</>;
}
