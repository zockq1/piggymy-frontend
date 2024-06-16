'use client';

import { DatePicker, Form, Input, Select } from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';

import { ActiveCheckbox } from '@/share/form/item/ActiveCheckbox';
import CreatedDate from '@/share/form/item/CreatedDate';
import Label from '@/share/form/item/Label';
import QuizChoice from '@/share/form/item/QuizChoice';
import VocaChoice from '@/share/form/item/VocaChoice';
import Button from '@/share/ui/button/Button';
import ContentBox from '@/share/ui/content-box/ContentBox';
import { CardFormValue } from '@/type/cardType';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

interface CardFormProps {
  onSubmit: (data: CardFormValue) => void;
  onDelete: () => void;
  form: FormInstance;
  mode: 'create' | 'update';
  initialValue?: {
    type: 'VOCA' | 'QUIZ';
    title: string;
    content: string;
    vocaIdList: number[];
    quizIdList: number[];
    isUse: boolean;
    createdDate: Dayjs;
    modifiedDate: Dayjs;
    exposureStartDate: Dayjs;
    exposureEndDate: Dayjs;
  };
}

export default function CardForm({
  initialValue,
  onSubmit,
  onDelete,
  form,
  mode,
}: CardFormProps) {
  const [type, setType] = useState<'VOCA' | 'QUIZ'>('VOCA');

  const handleTypeChange = (value: 'VOCA' | 'QUIZ') => {
    setType(value);
  };

  useEffect(() => {
    initialValue && setType(initialValue.type);
  }, [initialValue]);

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
          label={<Label>구분</Label>}
          name="type"
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
          initialValue={type}
        >
          <Select onChange={handleTypeChange}>
            <Select.Option value="VOCA">용어</Select.Option>
            <Select.Option value="QUIZ">퀴즈</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label={<Label>테마 타이틀</Label>}
          name="title"
          rules={[
            {
              required: true,
              message: '내용을 입력해주세요.',
            },
          ]}
          initialValue={initialValue?.title}
        >
          <Input placeholder="내용을 입력해주세요." />
        </Form.Item>
        <Form.Item
          label={<Label>설명</Label>}
          name="title"
          rules={[
            {
              required: true,
              message: '메시지를 입력해주세요.',
            },
          ]}
          initialValue={initialValue?.content}
        >
          <TextArea rows={4} />
        </Form.Item>
        {type === 'VOCA' ? (
          <VocaChoice
            label="용어 카드 선택"
            name="moveVocaId"
            initialValue={initialValue?.vocaIdList}
            mode="multiple"
          />
        ) : (
          <QuizChoice
            label="퀴즈 카드 선택"
            name="moveQuizId"
            initialValue={initialValue?.quizIdList}
            mode="multiple"
          />
        )}

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
