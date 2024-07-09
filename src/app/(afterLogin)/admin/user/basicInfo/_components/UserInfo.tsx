'use client';

import { useForm } from 'antd/es/form/Form';
import { useParams } from 'next/navigation';
import React, { useEffect, useMemo } from 'react';

import UserForm from '@/app/(afterLogin)/admin/user/basicInfo/_components/UserForm';
import { useGetUser } from '@/share/query/user/useGetUser';

export default function UserInfo() {
  const { userId } = useParams();
  const [form] = useForm();

  const { data } = useGetUser(+userId);

  const initialValues = useMemo(
    () => ({
      nickname: data?.nickname || '',
      email: data?.email || '',
      profileImgName: data?.profileImgName || '',
      profileImgPath: data?.profileImgPath || '',
      socialLogin: data?.socialLogin || '',
      vocaId: data?.vocaId,
      delYn: !data?.delYn || false,
      createdDate: data?.createdDate || '',
      modifiedDate: data?.modifiedDate || '',
    }),
    [data],
  );

  useEffect(() => {
    if (!data) return;

    form.setFieldsValue(initialValues);
  }, [data, form, initialValues]);

  return (
    <UserForm initialValues={initialValues} form={form} disabled={!userId} />
  );
}
