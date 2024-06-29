'use client';

import { DatePicker, Form, Input, Select } from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import dayjs, { Dayjs } from 'dayjs';

import { ActiveCheckbox } from '@/share/form/item/ActiveCheckbox';
import CreatedDate from '@/share/form/item/CreatedDate';
import Label from '@/share/form/item/Label';
import VocaChoice from '@/share/form/item/VocaChoice';
import Button from '@/share/ui/button/Button';
import ContentBox from '@/share/ui/content-box/ContentBox';
import { LinkFormValue, LinkType } from '@/type/linkType';

const { RangePicker } = DatePicker;

interface LinkFormProps {
  onSubmit: (data: LinkFormValue) => void;
  onDelete: () => void;
  form: FormInstance;
  mode: 'create' | 'update';
  initialValue?: {
    createdDate: Dayjs;
    modifiedDate: Dayjs;
    category: LinkType;
    title: string;
    sourceLink: string;
    publishName: string;
    publishDate: Dayjs;
    isUse: boolean;
    vocaIdList: number[];
  };
}

export default function LinkForm({
  initialValue,
  onSubmit,
  onDelete,
  form,
  mode,
}: LinkFormProps) {
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
          label={<Label>구분</Label>}
          name="category"
          rules={[
            {
              required: true,
              message: '내용을 입력해주세요.',
            },
            {
              max: 10,
              message: '최대 10글자 입니다.',
            },
          ]}
          initialValue={initialValue?.category}
        >
          <Select>
            <Select.Option value={LinkType.NEWS}>뉴스</Select.Option>
            <Select.Option value={LinkType.YOUTUBE}>유튜브</Select.Option>
            <Select.Option value={LinkType.MOVIE}>영화</Select.Option>
            <Select.Option value={LinkType.DRAMA}>드라마</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label={<Label>링크 타이틀</Label>}
          name="title"
          rules={[
            {
              required: true,
              message: '링크 타이틀을 입력해주세요.',
            },
          ]}
          initialValue={initialValue?.title}
        >
          <Input placeholder="내용을 입력해주세요." />
        </Form.Item>
        <Form.Item
          label={<Label>링크 URL</Label>}
          name="title"
          rules={[
            {
              required: true,
              message: '링크 URL을 입력해주세요.',
            },
          ]}
          initialValue={initialValue?.sourceLink}
        >
          <Input placeholder="내용을 입력해주세요." />
        </Form.Item>
        <Form.Item
          label={<Label>발행처</Label>}
          name="publishName"
          rules={[
            {
              required: true,
              message: '발행처를 입력해주세요.',
            },
          ]}
          initialValue={initialValue?.sourceLink}
        >
          <Input placeholder="내용을 입력해주세요." />
        </Form.Item>
        <Form.Item
          label={<Label>발행일</Label>}
          name="publishDate"
          rules={[
            {
              required: true,
              message: '발행일을 입력해주세요.',
            },
          ]}
          initialValue={initialValue ? dayjs(initialValue?.publishDate) : null}
        >
          <RangePicker />
        </Form.Item>

        <VocaChoice
          label="용어 카드 선택"
          name="vocaIdList"
          initialValue={initialValue?.vocaIdList}
          mode="multiple"
        />

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
