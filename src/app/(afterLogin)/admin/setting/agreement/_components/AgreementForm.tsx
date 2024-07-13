'use client';

import { Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEffect } from 'react';

import Label from '@/share/form/item/Label';
import { useCreateAgreement } from '@/share/query/agreement/useCreateAgreement';
import { useGetAgreement } from '@/share/query/agreement/useGetAgreement';
import { useGetAgreementList } from '@/share/query/agreement/useGetAgreementList';
import Button from '@/share/ui/button/Button';
import ContentBox from '@/share/ui/content-box/ContentBox';

const { TextArea } = Input;

interface AgreementFormValue {
  version: string;
  content: string;
}

export default function AgreementForm() {
  const [form] = useForm();
  const { mutate } = useCreateAgreement();
  const { data: agreementList, isSuccess: isSuccessAgreementList } =
    useGetAgreementList({
      data: { page: 1, page_size: 1 },
    });
  const {
    data: agreement,
    refetch,
    isSuccess: isSuccessAgreement,
  } = useGetAgreement({
    data: null,
    id: { agreementId: agreementList?.data.list[0].id || 0 },
  });

  useEffect(() => {
    if (isSuccessAgreementList && agreementList.data.list.length > 0) {
      refetch();
    }
  }, [isSuccessAgreementList, agreementList, refetch]);

  useEffect(() => {
    if (isSuccessAgreement) {
      form.setFieldsValue({
        content: agreement.data.content,
        version: agreement.data.version,
      });
    }
  }, [isSuccessAgreement, agreement, refetch, form]);

  const handleFinish = (formValue: AgreementFormValue) => {
    mutate({
      data: {
        ...formValue,
      },
    });
  };

  return (
    <ContentBox className={'flex h-full items-start'}>
      <Form
        labelCol={{ span: 2 }}
        layout="horizontal"
        className="mr-4 h-full w-full overflow-y-auto"
        onFinish={handleFinish}
        form={form}
      >
        <Form.Item
          label={<Label>버전</Label>}
          name="version"
          rules={[
            {
              required: true,
              message: '내용을 입력해주세요.',
            },
          ]}
        >
          <Input placeholder="내용을 입력해주세요." />
        </Form.Item>
        <Form.Item
          label={<Label>메시지</Label>}
          name="content"
          rules={[
            {
              required: true,
              message: '메시지를 입력해주세요.',
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item className="flex w-full justify-center">
          <Button type="submit" size="large" className="mx-4">
            저장
          </Button>
        </Form.Item>
      </Form>
    </ContentBox>
  );
}
