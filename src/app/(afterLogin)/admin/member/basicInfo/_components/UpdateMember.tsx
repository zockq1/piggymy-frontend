'use client';

import { useForm } from 'antd/es/form/Form';
import { useParams } from 'next/navigation';
import React, { useEffect, useMemo } from 'react';

import MemberForm from '@/app/(afterLogin)/admin/member/basicInfo/_components/MemberForm';
import { useGetMember } from '@/share/query/member/useGetMember';
import { useUpdateMember } from '@/share/query/member/useUpdateMember';
import { UpdateMemberRequestJson } from '@/type/memberType';

export default function UpdateMember() {
  const { memberId } = useParams();
  const [form] = useForm();

  const { data } = useGetMember(+memberId);
  const { mutate: update } = useUpdateMember();

  const initialValues = useMemo(
    () => ({
      memberId: data?.memberId,
      name: data?.name || '',
      email: data?.email || '',
      profileImgName: data?.profileImgName || '',
      profileImgPath: data?.profileImgPath || '',
      socialLogin: data?.socialLogin || '',
      position: data?.position || '',
      work: data?.work || '',
      createdDate: data?.createdDate || '',
      modifiedDate: data?.modifiedDate || '',
    }),
    [data],
  );

  useEffect(() => {
    if (!data) return;

    form.setFieldsValue(initialValues);
  }, [data, form, initialValues]);

  const handleCancel = () => {
    form.setFieldsValue(initialValues);
  };

  const handleFinish = (formValue: UpdateMemberRequestJson) => {
    update({
      id: +memberId,
      data: {
        ...(formValue as UpdateMemberRequestJson),
      },
    });
  };

  useEffect(() => {
    if (!data) return;

    form.setFieldsValue(initialValues);
  }, [data, form, initialValues]);

  return (
    <MemberForm
      initialValues={initialValues}
      form={form}
      onCancel={handleCancel}
      onFinish={handleFinish}
    />
  );
}
