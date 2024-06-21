'use client';

import { useForm } from 'antd/es/form/Form';

import { useCreateCard } from '@/share/query/card/useCreateCard';
import { CardFormValue } from '@/type/cardType';

import CardForm from './CardForm';

export default function CreateCard() {
  const [form] = useForm();
  const { mutate: create } = useCreateCard();

  const handleSubmit = (formValue: CardFormValue) => {
    const {
      exposureDuration,
      title,
      type,
      content,
      vocaIdList,
      quizIdList,
      isUse,
    } = formValue;
    const data = {
      title: title,
      exposureEndDate: exposureDuration[1],
      exposureStartDate: exposureDuration[0],
      type: type,
      content: content,
      vocaIdList: vocaIdList,
      quizIdList: quizIdList,
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
    <CardForm
      form={form}
      mode="create"
      onDelete={handleCancel}
      onSubmit={handleSubmit}
    />
  );
}
