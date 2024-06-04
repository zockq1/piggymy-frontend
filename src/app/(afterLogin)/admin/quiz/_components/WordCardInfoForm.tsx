'use client';

import { Form, Input, Select, UploadFile } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import Image from 'next/image';
import React from 'react';

import plus from '/public/img/icon/plus.png';
import { ActiveCheckbox } from '@/share/form/item/ActiveCheckbox';
import ImageUpload from '@/share/form/item/ImageUpload';
import Label from '@/share/form/item/Label';
import Button from '@/share/ui/button/Button';
import IconButton from '@/share/ui/button/IconButton';
import ContentBox from '@/share/ui/content-box/ContentBox';

const { TextArea } = Input;

interface WordCardInfoFormValue {
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

/* <Form.item>{...}</Form.item> 단위로 컴포넌트화를 시켜야할지 고민 */

export default function WordCardInfoForm() {
  const createdDate = dayjs('2024-10-2');

  const onFinish = (formValue: WordCardInfoFormValue) => {
    for (const [key, value] of Object.entries(formValue)) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <ContentBox className={'flex h-full max-h-[calc(100vh-400px)] items-start'}>
      <Form
        labelCol={{ span: 2 }}
        layout="horizontal"
        className="h-full w-full overflow-y-auto"
        onFinish={onFinish}
      >
        <Form.Item label={<Label>등록일</Label>}>
          <div className={'flex w-full items-start justify-between'}>
            <i className={'flex h-8 items-center'}>
              {createdDate.format('YYYY.MM.DD')}
            </i>
            <ActiveCheckbox />
          </div>
        </Form.Item>
        <Form.Item
          label={<Label>필터</Label>}
          name="select"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label={<Label>필터</Label>}
          name="select"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label={<Label>용어</Label>}
          name="category"
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
        <ImageUpload
          name={'대표이미지'}
          initialImage="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <Form.Item
          label={<Label>대표이미지 출처</Label>}
          name="imageSrc"
          className={'w-full'}
        >
          <Input placeholder="내용을 입력해주세요." />
        </Form.Item>
        <Form.Item label={<Label>뜻</Label>} name="meaning">
          <TextArea rows={8} />
        </Form.Item>
        <Form.Item
          label={<Label>뜻 출처</Label>}
          name="meaningSrc"
          className={'w-full'}
        >
          <Input placeholder="내용을 입력해주세요." />
        </Form.Item>
        <Form.Item
          label={<Label>관련 링크</Label>}
          name="reference1"
          className={'w-full'}
        >
          <Input placeholder="내용을 입력해주세요." />
        </Form.Item>
        <Form.Item
          label={<Label>{''}</Label>}
          colon={false}
          name={`reference${2}`}
          className={'w-full'}
        >
          <div className={'flex w-full items-start justify-between gap-4'}>
            <Input placeholder="내용을 입력해주세요." />
            <IconButton type={'submit'}>
              <div className={'flex items-center justify-center gap-1'}>
                <Image src={plus} alt="검색" width={14} height={14} />
              </div>
            </IconButton>
          </div>
        </Form.Item>
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
  );
}
