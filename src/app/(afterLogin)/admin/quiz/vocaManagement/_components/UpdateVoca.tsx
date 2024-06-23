'use client';

import { useForm } from 'antd/es/form/Form';
import { useParams } from 'next/navigation';
import React, { useEffect, useMemo } from 'react';

import VocaForm from '@/app/(afterLogin)/admin/quiz/vocaManagement/_components/VocaForm';
import { useGetVoca } from '@/share/query/voca/useGetVoca';
import { useUpdateVoca } from '@/share/query/voca/useUpdateVoca';
import { CreateVocaRequestJson, UpdateVocaRequestJson } from '@/type/vocaType';

export default function UpdateVoca() {
  const params = useParams();
  const [form] = useForm();

  const { data } = useGetVoca(+params.vocaId);
  const { mutate: update } = useUpdateVoca();

  const initialValues = useMemo(
    () => ({
      koreanTitle: data?.koreanTitle ?? '',
      isUse: data?.isUse ?? false,
      image:
        data?.thumbnailPath && data?.thumbnailName
          ? [{ url: data?.thumbnailPath + data?.thumbnailName }]
          : null,
      thumbnailPath: data?.thumbnailPath ?? '',
      thumbnailName: data?.thumbnailName ?? '',
      sourceName: data?.sourceName ?? '',
      thumbnailSourceName: data?.thumbnailSourceName ?? '',
    }),
    [data],
  );

  const handleCancel = () => {
    form.setFieldsValue(initialValues);
  };

  const handleFinish = (
    formValue: CreateVocaRequestJson | UpdateVocaRequestJson,
  ) => {
    if (
      formValue.image &&
      formValue.image.length > 0 &&
      formValue.image[0].url ===
        String(data?.thumbnailPath) + String(data?.thumbnailName)
    ) {
      update({
        id: +params.vocaId,
        data: {
          ...formValue,
          vocaId: +params.vocaId,
          image: [],
          thumbnailPath: String(data?.thumbnailPath),
          thumbnailName: String(data?.thumbnailName),
        },
      });
    } else {
      update({
        id: +params.vocaId,
        data: {
          ...formValue,
          vocaId: +params.vocaId,
          thumbnailPath: '',
          thumbnailName: '',
        },
      });
    }
  };

  useEffect(() => {
    if (!data) return;

    form.setFieldsValue(initialValues);
  }, [data, form, initialValues]);

  return (
    <VocaForm form={form} onCancel={handleCancel} onFinish={handleFinish} />
  );
}
