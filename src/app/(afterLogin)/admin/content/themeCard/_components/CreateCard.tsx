'use client';

import { useForm } from 'antd/es/form/Form';

import { useCreateCard } from '@/share/query/card/useCreateCard';
import { CardFormValue } from '@/type/cardType';

import CardForm from './CardForm';

export default function CreateCard() {
  const [form] = useForm();
  const { mutate: create } = useCreateCard();

  const handleSubmit = (formValue: CardFormValue) => {
    create({
      data: {
        ...formValue,
        exposureEndDate: formValue.exposureDuration[1],
        exposureStartDate: formValue.exposureDuration[0],
      },
    });
  };

  const handleCancel = () => {
    form.resetFields();
  };

  return (
    <CardForm
      form={form}
      mode="create"
      onDelete={handleCancel}
      onSubmit={handleSubmit}
    />
  );
}
