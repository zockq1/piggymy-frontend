'use client';

import { useForm } from 'antd/es/form/Form';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

import QuizForm from '@/app/(afterLogin)/admin/quiz/quizManagement/_components/QuizForm';
import { useCreateQuiz } from '@/share/query/quiz/useCreateQuiz';
import { CreateQuizRequestJson, UpdateQuizRequestJson } from '@/type/quizType';

export default function CreateQuiz() {
  const params = useParams();
  const [form] = useForm();

  const { mutate: create } = useCreateQuiz();

  const handleCancel = () => {
    form.resetFields();
  };

  const handleFinish = (
    formValue: CreateQuizRequestJson | UpdateQuizRequestJson,
  ) => {
    create({ data: formValue as CreateQuizRequestJson });
    form.resetFields();
  };

  useEffect(() => {
    if (!params.quizId) {
      form.resetFields();
    }
  }, [form, params.quizId]);

  return (
    <QuizForm form={form} onCancel={handleCancel} onFinish={handleFinish} />
  );
}
