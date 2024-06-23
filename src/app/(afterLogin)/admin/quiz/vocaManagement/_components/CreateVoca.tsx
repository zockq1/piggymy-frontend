'use client';

import { useForm } from 'antd/es/form/Form';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

import VocaForm from '@/app/(afterLogin)/admin/quiz/vocaManagement/_components/VocaForm';
import { useCreateVoca } from '@/share/query/voca/useCreateVoca';
import { CreateVocaRequestJson, UpdateVocaRequestJson } from '@/type/vocaType';

export default function CreateVoca() {
  const params = useParams();
  const [form] = useForm();

  const { mutate: create } = useCreateVoca();

  const handleCancel = () => {
    form.resetFields();
  };

  const handleFinish = (
    formValue: CreateVocaRequestJson | UpdateVocaRequestJson,
  ) => {
    create({ data: formValue });
    form.resetFields();
  };

  useEffect(() => {
    if (!params.vocaId) {
      form.resetFields();
    }
  }, [form, params.vocaId]);

  return (
    <VocaForm form={form} onCancel={handleCancel} onFinish={handleFinish} />
  );
}
