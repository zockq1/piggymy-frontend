'use client';

import { useForm } from 'antd/es/form/Form';

import { useCreateBanner } from '@/share/query/banner/useCreateBanner';
import { BannerFormValue } from '@/type/bannerType';

import RollingBannerForm from './BannerForm';

export default function CreateBanner() {
  const [form] = useForm();
  const { mutate: create } = useCreateBanner();

  const handleSubmit = (formValue: BannerFormValue) => {
    const {
      exposureDuration,
      title,
      type,
      image,
      buttonName,
      moveQuizId,
      moveVocaId,
      isUse,
    } = formValue;
    const data = {
      title: title,
      exposureEndDate: exposureDuration[1],
      exposureStartDate: exposureDuration[0],
      type: type,
      image: image,
      buttonName: buttonName,
      moveVocaId: moveVocaId,
      moveQuizId: moveQuizId,
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
    <RollingBannerForm
      form={form}
      mode="create"
      onDelete={handleCancel}
      onSubmit={handleSubmit}
    />
  );
}
