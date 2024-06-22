'use client';

import { useForm } from 'antd/es/form/Form';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

import VocaForm from '@/app/(afterLogin)/admin/quiz/_components/VocaForm';
import { useGetVoca } from '@/share/query/voca/useGetVoca';
import { useUpdateVoca } from '@/share/query/voca/useUpdateVoca';
import { CreateVocaRequestJson, UpdateVocaRequestJson } from '@/type/vocaType';

export default function VocaUpdateForm() {
  const params = useParams();
  const [form] = useForm();

  const { data } = useGetVoca(+params.vocaId);
  const { mutate: update } = useUpdateVoca();

  const initialValues = {
    koreanTitle: data?.koreanTitle ?? '',
    isUse: data?.isUse ?? false,
    image:
      data?.thumbnailPath && data?.thumbnailName
        ? [{ url: data?.thumbnailPath + data?.thumbnailName }]
        : null,
    thumbnail: data?.thumbnailPath ?? '' + data?.thumbnailName ?? '',
    sourceName: data?.sourceName ?? '',
    thumbnailSourceName: data?.thumbnailSourceName ?? '',
  };

  const handleCancel = () => {
    form.setFieldsValue(initialValues);
  };

  const handleFinish = (
    formValue: CreateVocaRequestJson | UpdateVocaRequestJson,
  ) => {
    update({ data: { vocaId: +params.vocaId, ...formValue } });
  };

  useEffect(() => {
    if (!data) return;

    form.setFieldsValue(initialValues);
  }, [data, form, initialValues]);

  return (
    <VocaForm form={form} onCancel={handleCancel} onFinish={handleFinish} />
  );
}
