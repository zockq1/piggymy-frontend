'use client';

import { Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEffect } from 'react';

import Label from '@/share/form/item/Label';
import { useCreatePrivacy } from '@/share/query/privacy/useCreatePrivacy';
import { useGetPrivacy } from '@/share/query/privacy/useGetPrivacy';
import { useGetPrivacyList } from '@/share/query/privacy/useGetPrivacyList';
import Button from '@/share/ui/button/Button';
import ContentBox from '@/share/ui/content-box/ContentBox';

const { TextArea } = Input;

interface PrivacyFormValue {
  version: string;
  content: string;
}

export default function PrivacyForm() {
  const [form] = useForm();
  const { mutate } = useCreatePrivacy();
  const { data: privacyList, isSuccess: isSuccessPrivacyList } =
    useGetPrivacyList({
      data: { page: 1, page_size: 1 },
    });
  const {
    data: privacy,
    refetch,
    isSuccess: isSuccessPrivacy,
  } = useGetPrivacy({
    data: null,
    id: { privacyId: privacyList?.data.list[0].id || 0 },
  });

  useEffect(() => {
    if (isSuccessPrivacyList && privacyList.data.list.length > 0) {
      refetch();
    }
  }, [isSuccessPrivacyList, privacyList, refetch]);

  useEffect(() => {
    if (isSuccessPrivacy) {
      form.setFieldsValue({
        content: privacy.data.content,
        version: privacy.data.version,
      });
    }
  }, [isSuccessPrivacy, privacy, refetch, form]);

  const handleFinish = (formValue: PrivacyFormValue) => {
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
