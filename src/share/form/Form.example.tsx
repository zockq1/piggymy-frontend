'use client';

import { DatePicker, Form, Input, Select, UploadFile } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

import Button from '../ui/button/Button';
import ContentBox from '../ui/content-box/ContentBox';
import { ActiveCheckbox } from './item/ActiveCheckbox';
import ChoiceList from './item/ChoiceList';
import CreatedDate from './item/CreatedDate';
import ImageUpload from './item/ImageUpload';
import Label from './item/Label';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

interface FormExampleValue {
  answer: number;
  datePicker: Dayjs;
  image: UploadFile;
  input: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  rangePicker: Dayjs[];
  select: string;
  textArea: string;
  useYn: true;
}

export default function FormExample() {
  const createdDate = dayjs('2024-10-2');

  const onFinish = (formValue: FormExampleValue) => {
    for (const [key, value] of Object.entries(formValue)) {
      console.log(`${key}: ${value}`);
    }
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
