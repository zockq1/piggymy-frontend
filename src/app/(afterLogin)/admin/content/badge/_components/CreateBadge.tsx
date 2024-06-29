'use client';

import { useForm } from 'antd/es/form/Form';

import { useCreateBadge } from '@/share/query/badge/useCreateBadge';
import { BadgeFormValue } from '@/type/badgeType';

import BadgeForm from './BadgeForm';

export default function CreateBadge() {
  const [form] = useForm();
  const { mutate: create } = useCreateBadge();

  const handleSubmit = (formValue: BadgeFormValue) => {
    create({
      data: formValue,
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
