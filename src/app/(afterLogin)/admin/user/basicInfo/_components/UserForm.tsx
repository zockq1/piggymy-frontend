import { Checkbox, Col, Form, Input, Row } from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import React from 'react';

import { ActiveUserCheckbox } from '@/share/form/item/ActiveUserCheckbox';
import ImageUpload from '@/share/form/item/ImageUpload';
import Label from '@/share/form/item/Label';
import ContentBox from '@/share/ui/content-box/ContentBox';
import { UpdateUserRequestJson } from '@/type/userType';

interface UserFormProps {
  initialValues?: UpdateUserRequestJson;
  form?: FormInstance;
  disabled?: boolean;
  onFinish?: (formValue: UpdateUserRequestJson) => void;
}

function UserForm({
  initialValues,
  form,
  disabled = false,
  onFinish,
}: UserFormProps) {
  return (
    <ContentBox className={'flex h-full w-full items-start'}>
      <Form
        form={form}
        labelCol={{ span: 3 }}
        layout="horizontal"
        className="h-full w-full overflow-y-auto"
        onFinish={onFinish}
        disabled={disabled}
      >
        <Form.Item label={<Label>가입일</Label>} name={'createDate'}>
          <div className={'flex w-full items-start justify-between'}>
            <i className={'flex h-8 items-center'}>
              {initialValues?.createdDate
                ? dayjs(initialValues?.createdDate).format('YYYY-MM-DD')
                : ''}
            </i>
            <ActiveUserCheckbox />
          </div>
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
          label={<Label>회원명</Label>}
          name="nickname"
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
          label={<Label>닉네임</Label>}
          name="nickname"
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
        <ImageUpload label={'대표이미지'} maxCount={1} />
        <Form.Item
          label={<Label>소셜로그인</Label>}
          name="socialLogin"
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
          name="checkbox-group"
          label={<Label>서비스 약관 및 정책</Label>}
        >
          <Checkbox.Group>
            <Row>
              <Col>
                <Checkbox
                  value="A"
                  style={{ lineHeight: '32px', whiteSpace: 'nowrap' }}
                >
                  서비스 이용 약관
                </Checkbox>
              </Col>
              <Col>
                <Checkbox
                  value="B"
                  style={{ lineHeight: '32px', whiteSpace: 'nowrap' }}
                >
                  개인정보처리방침
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
      </Form>
    </ContentBox>
  );
}

export default UserForm;
