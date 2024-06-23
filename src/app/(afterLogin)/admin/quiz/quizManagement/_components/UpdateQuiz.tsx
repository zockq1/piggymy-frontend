'use client';

import { useForm } from 'antd/es/form/Form';
import { useParams } from 'next/navigation';
import React, { useEffect, useMemo } from 'react';

import QuizForm from '@/app/(afterLogin)/admin/quiz/quizManagement/_components/QuizForm';
import { useGetQuiz } from '@/share/query/quiz/useGetQuiz';
import { useUpdateQuiz } from '@/share/query/quiz/useUpdateQuiz';
import { CreateQuizRequestJson, UpdateQuizRequestJson } from '@/type/quizType';

export default function UpdateQuiz() {
  const params = useParams();
  const [form] = useForm();

  const { data } = useGetQuiz(+params.quizId);
  const { mutate: update } = useUpdateQuiz();

  const initialValues = useMemo(
    () => ({
      title: data?.title ?? '',
      answer: data?.answer ?? '',
      option1: data?.option1 ?? '',
      option2: data?.option2 ?? '',
      option3: data?.option3 ?? '',
      option4: data?.option4 ?? '',
      vocaId: data?.vocaId ?? null,
      isUse: data?.isUse ?? false,
    }),
    [data],
  );

  const handleCancel = () => {
    form.setFieldsValue(initialValues);
  };

  const handleFinish = (
    formValue: CreateQuizRequestJson | UpdateQuizRequestJson,
  ) => {
    update({
      id: +params.quizId,
      data: {
        ...formValue,
      },
    });
  };

  useEffect(() => {
    if (!data) return;

    form.setFieldsValue(initialValues);
  }, [data, form, initialValues]);

  return (
    <QuizForm form={form} onCancel={handleCancel} onFinish={handleFinish} />
  );
}
