'use client';

import { useForm } from 'antd/es/form/Form';

import { useCreateBadge } from '@/share/query/badge/useCreateBadge';
import { BadgeFormValue } from '@/type/badgeType';

import BadgeForm from './BadgeForm';

export default function CreateBadge() {
  const [form] = useForm();
  const { mutate: create } = useCreateBadge();

  const handleSubmit = (formValue: BadgeFormValue) => {
    const { month, title, isUse, thumbnail, description } = formValue;
    console.log(formValue);
    const data = {
      title: title,
      month: month,
      description: description,
      thumbnail: thumbnail,
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
