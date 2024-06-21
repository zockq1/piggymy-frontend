'use client';

import { DatePicker, Form, Input } from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import dayjs, { Dayjs } from 'dayjs';

import { ActiveCheckbox } from '@/share/form/item/ActiveCheckbox';
import CreatedDate from '@/share/form/item/CreatedDate';
import ImageUpload from '@/share/form/item/ImageUpload';
import Label from '@/share/form/item/Label';
import Button from '@/share/ui/button/Button';
import ContentBox from '@/share/ui/content-box/ContentBox';
import { BadgeFormValue } from '@/type/badgeType';

const { RangePicker } = DatePicker;

interface BadgeFormProps {
  onSubmit: (data: BadgeFormValue) => void;
  onDelete: () => void;
  form: FormInstance;
  mode: 'create' | 'update';
  initialValue?: {
    createdDate: Dayjs;
    modifiedDate: Dayjs;
    exposureStartDate: Dayjs;
    exposureEndDate: Dayjs;
    title: string;
    image: string;
    description: string;
    isUse: boolean;
  };
}

export default function BadgeForm({
  initialValue,
  onSubmit,
  onDelete,
  form,
  mode,
}: BadgeFormProps) {
  return (
    <ContentBox className={'flex h-full items-start'}>
      <Form
        labelCol={{ span: 2 }}
        layout="horizontal"
        className="mr-4 h-full w-full overflow-y-auto"
        onFinish={onSubmit}
        form={form}
      >
        <CreatedDate
          createdDate={initialValue ? initialValue.createdDate : dayjs()}
        />
        <ActiveCheckbox />
        <Form.Item
          label={<Label>노출 기간</Label>}
          name="exposureDuration"
          rules={[
            {
              required: true,
              message: '노출 기간을 입력해주세요.',
            },
          ]}
          initialValue={
            initialValue
              ? [
                  dayjs(initialValue?.exposureStartDate),
                  dayjs(initialValue?.exposureEndDate),
                ]
              : null
          }
        >
          <RangePicker />
        </Form.Item>
        <Form.Item
          label={<Label>타이틀</Label>}
          name="title"
          rules={[
            {
              required: true,
              message: '메시지를 입력해주세요.',
            },
          ]}
          initialValue={initialValue?.title}
        >
          <Input placeholder="내용을 입력해주세요." />
        </Form.Item>
        <ImageUpload initialImage={initialValue?.image} />
        <Form.Item
          label={<Label>버튼명</Label>}
          name="description"
          rules={[
            {
              required: true,
              message: '내용을 입력해주세요.',
            },
          ]}
          initialValue={initialValue?.description}
        >
          <Input placeholder="내용을 입력해주세요." />
        </Form.Item>

        <Form.Item className="flex w-full justify-center">
          <Button
            onClick={(e) => {
              e.preventDefault();
              onDelete();
            }}
            size="large"
            className="mx-4"
            color="gray"
          >
            {mode === 'create' ? '취소' : '삭제'}
          </Button>
          <Button type="submit" size="large" className="mx-4">
            {mode === 'create' ? '저장' : '수정'}
          </Button>
        </Form.Item>
      </Form>
    </ContentBox>
  );
}
