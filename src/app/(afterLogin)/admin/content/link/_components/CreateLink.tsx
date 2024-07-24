'use client';

import { useForm } from 'antd/es/form/Form';

import { useCreateLink } from '@/share/query/link/useCreateLink';
import { LinkFormValue } from '@/type/linkType';

import LinkForm from './LinkForm';

export default function CreateLink() {
  const [form] = useForm();
  const { mutate: create } = useCreateLink();

  const handleSubmit = (formValue: LinkFormValue) => {
    create({
      data: {
        ...formValue,
      },
    });
  };

  const handleCancel = () => {
    form.resetFields();
  };

  return (
    <LinkForm
      form={form}
      mode="create"
      onDelete={handleCancel}
      onSubmit={handleSubmit}
    />
  );
}
