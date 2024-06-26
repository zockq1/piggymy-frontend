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
    const { thumbnail } = formValue;

    if (
      thumbnail &&
      thumbnail.length > 0 &&
      thumbnail[0].url ===
        String(data?.data.thumbnailPath) + String(data?.data.thumbnailName)
    ) {
      updateBadge({
        id: { badgeId: currentBadgeId },
        data: {
          ...formValue,
          thumbnail: [],
          thumbnailName: String(data?.data.thumbnailName),
          thumbnailPath: String(data?.data.thumbnailPath),
        },
      });
    } else {
      updateBadge({
        id: { badgeId: currentBadgeId },
        data: {
          ...formValue,
          thumbnailName: '',
          thumbnailPath: '',
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
      month,
      title,
      description,
      thumbnailName,
      thumbnailPath,
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
          month: month,
          isUse: isUse,
          title: title,
          thumbnail: thumbnailPath + thumbnailName,
          description: description,
        }}
      />
    );
  }

  return <>로딩</>;
}
