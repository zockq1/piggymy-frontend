'use client';

import { Form, Input, UploadFile } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import Image from 'next/image';
import React from 'react';

import search from '/public/img/icon/search.png';
import { ActiveCheckbox } from '@/share/form/item/ActiveCheckbox';
import ChoiceList from '@/share/form/item/ChoiceList';
import Label from '@/share/form/item/Label';
import Button from '@/share/ui/button/Button';
import IconButton from '@/share/ui/button/IconButton';
import ContentBox from '@/share/ui/content-box/ContentBox';

const { TextArea } = Input;

interface QuizCardInfoFormValue {
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

export default function QuizCardInfoForm() {
  const createdDate = dayjs('2024-10-2');

  const onFinish = (formValue: QuizCardInfoFormValue) => {
    for (const [key, value] of Object.entries(formValue)) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <ContentBox className={'flex h-full items-start'}>
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
        <Form.Item label={<Label>퀴즈</Label>} name="quiz">
          <TextArea rows={2} />
        </Form.Item>
        <ChoiceList />
        <Form.Item
          label={<Label>{'용어카드 선택'}</Label>}
          colon={false}
          name={`reference${2}`}
          className={'w-full'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <div className={'flex w-full items-start justify-between gap-4'}>
            <Input placeholder="카드를 선택해주세요." />
            <IconButton type={'submit'}>
              <div className={'flex items-center justify-center gap-1'}>
                <Image src={search} alt="검색" width={14} height={14} />
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
