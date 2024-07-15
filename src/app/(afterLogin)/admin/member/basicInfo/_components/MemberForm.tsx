'use client';

import { Form, Input } from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import React from 'react';

import ImageUpload from '@/share/form/item/ImageUpload';
import Label from '@/share/form/item/Label';
import Button from '@/share/ui/button/Button';
import ContentBox from '@/share/ui/content-box/ContentBox';
import { UpdateMemberRequestJson } from '@/type/memberType';

interface MemberFormProps {
  form?: FormInstance;
  initialValues?: UpdateMemberRequestJson;
  disabled?: boolean;
  onFinish?: (formValue: UpdateMemberRequestJson) => void;
  onCancel?: () => void;
}

function MemberForm({
  form,
  initialValues,
  disabled = false,
  onFinish,
  onCancel,
}: MemberFormProps) {
  return (
    <ContentBox className={'flex h-full w-full items-start'}>
      <Form
        form={form}
        labelCol={{ span: 5 }}
        layout="horizontal"
        className="h-full w-full overflow-y-auto"
        onFinish={onFinish}
        disabled={disabled}
      >
        <Form.Item label={<Label>등록일</Label>} name={'createDate'}>
          <div className={'flex w-full items-start justify-between'}>
            <i className={'flex h-8 items-center'}>
              {initialValues?.createdDate
                ? dayjs(initialValues?.createdDate).format('YYYY-MM-DD')
                : ''}
            </i>
          </div>
        </Form.Item>
        <Form.Item
          label={<Label>관리자명</Label>}
          name="name"
          rules={[
            {
              required: true,
              message: '내용을 입력해주세요.',
            },
          ]}
          className={'w-full'}
        >
          <Input placeholder="내용을 입력해주세요." />
        </Form.Item>
        <Form.Item
          label={<Label>로그인 ID</Label>}
          name="name"
          rules={[
            {
              required: true,
              message: '내용을 입력해주세요.',
            },
          ]}
          className={'w-full'}
        >
          <Input placeholder="내용을 입력해주세요." />
        </Form.Item>
        <Form.Item
          label={<Label>로그인 비밀번호</Label>}
          name="nickname"
          rules={[
            {
              required: true,
              message: '내용을 입력해주세요.',
            },
          ]}
          className={'w-full'}
        >
          <Button>로그인 비밀번호 변경</Button>
        </Form.Item>
        <Form.Item
          label={<Label>이메일</Label>}
          name="email"
          rules={[
            {
              required: true,
              message: '내용을 입력해주세요.',
            },
          ]}
          className={'w-full'}
        >
          <Input placeholder="내용을 입력해주세요." />
        </Form.Item>
        <Form.Item
          label={<Label>휴대폰 번호</Label>}
          name="email"
          rules={[
            {
              required: true,
              message: '내용을 입력해주세요.',
            },
          ]}
          className={'w-full'}
        >
          <Input placeholder="내용을 입력해주세요." />
        </Form.Item>
        <ImageUpload label={'프로필 이미지'} maxCount={1} />
        <Form.Item
          label={<Label>직책</Label>}
          name="position"
          rules={[
            {
              required: true,
              message: '내용을 입력해주세요.',
            },
          ]}
          className={'w-full'}
        >
          <Input placeholder="내용을 입력해주세요." readOnly />
        </Form.Item>
        <Form.Item
          label={<Label>담당 업무</Label>}
          name="work"
          rules={[
            {
              required: true,
              message: '내용을 입력해주세요.',
            },
          ]}
          className={'w-full'}
        >
          <Input placeholder="내용을 입력해주세요." readOnly />
        </Form.Item>
        <Form.Item className="flex w-full justify-center">
          <Button
            type="button"
            size="large"
            color="gray"
            className="mx-4"
            onClick={onCancel}
          >
            취소
          </Button>
          <Button type="submit" size="large" className="mx-4">
            저장
          </Button>
        </Form.Item>
      </Form>
    </ContentBox>
  );
}

export default MemberForm;
