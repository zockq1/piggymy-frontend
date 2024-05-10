'use client';

import { DatePicker, Form, Input, Select } from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

import dayjs from 'dayjs';
import { ReactNode } from 'react';

import Button from '../ui/button/Button';
import ContentBox from '../ui/content-box/ContentBox';
import { ActiveCheckbox } from './item/ActiveCheckbox';
import ChoiceList from './item/ChoiceList';
import CreatedDate from './item/CreatedDate';
import ImageUpload from './item/ImageUpload';

function Label({ children }: { children: ReactNode }) {
  return <span className="text-sm font-bold">{children}</span>;
}

export default function FormExample() {
  const createdDate = dayjs('2024-10-2');

  const onFinish = (value: unknown) => {
    console.log(value);
  };

  return (
    <div className="bg-warning p-4">
      <ContentBox className="m-4 ">
        <Form
          labelCol={{ span: 4 }}
          layout="horizontal"
          className="w-full"
          onFinish={onFinish}
        >
          <CreatedDate createdDate={createdDate} />
          <ActiveCheckbox />
          <Form.Item
            label={<Label>구분</Label>}
            name="input"
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
          >
            <Input placeholder="내용을 입력해주세요." className="w-[200px]" />
          </Form.Item>
          <ChoiceList />
          <Form.Item label={<Label>드롭다운</Label>} name="select">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label={<Label>문자영역</Label>} name="textArea">
            <TextArea rows={4} disabled />
          </Form.Item>
          <Form.Item label={<Label>날짜 선택</Label>} name="rangePicker">
            <RangePicker />
          </Form.Item>
          <Form.Item label={<Label>날짜 선택</Label>} name="datePicker">
            <DatePicker />
          </Form.Item>
          <ImageUpload initialImage="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
          <Form.Item className="flex w-full justify-center">
            <Button size="large" color="gray" className="mx-4">
              취소
            </Button>
            <Button type="submit" size="large" className="mx-4">
              저장
            </Button>
          </Form.Item>
        </Form>
      </ContentBox>
    </div>
  );
}

// 관련 링크
// 용어 카드 선택
// 4지선다형
