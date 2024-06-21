'use client';

import { useForm } from 'antd/es/form/Form';

import { useCreateBadge } from '@/share/query/badge/useCreateBadge';
import { BadgeFormValue } from '@/type/badgeType';

import BadgeForm from './BadgeForm';

export default function CreateBadge() {
  const [form] = useForm();
  const { mutate: create } = useCreateBadge();

  const handleSubmit = (formValue: BadgeFormValue) => {
    const { exposureDuration, title, isUse, image, description } = formValue;
    const data = {
      title: title,
      exposureEndDate: exposureDuration[1],
      exposureStartDate: exposureDuration[0],
      description: description,
      image: image,
      isUse: isUse,
    };
    create({
      data: data,
    });
  };

  const handleCancel = () => {
    form.resetFields();
  };

  return (
    <BadgeForm
      form={form}
      mode="create"
      onDelete={handleCancel}
      onSubmit={handleSubmit}
    />
  );
}
