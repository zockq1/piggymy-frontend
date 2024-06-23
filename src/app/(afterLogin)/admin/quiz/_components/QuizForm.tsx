import { Form } from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs';
import React from 'react';

import { ActiveCheckbox } from '@/share/form/item/ActiveCheckbox';
import ChoiceList from '@/share/form/item/ChoiceList';
import Label from '@/share/form/item/Label';
import VocaSelect from '@/share/form/item/VocaSelect';
import Button from '@/share/ui/button/Button';
import ContentBox from '@/share/ui/content-box/ContentBox';
import { CreateQuizRequestJson, UpdateQuizRequestJson } from '@/type/quizType';

interface QuizFormProps {
  form: FormInstance;
  onFinish: (formValue: CreateQuizRequestJson | UpdateQuizRequestJson) => void;
  onCancel: () => void;
}

function QuizForm({ form, onCancel, onFinish }: QuizFormProps) {
  return (
    <ContentBox className={'flex h-full items-start'}>
      <Form
        form={form}
        labelCol={{ span: 5 }}
        layout="horizontal"
        className="h-full w-full overflow-y-auto"
        onFinish={onFinish}
      >
        <Form.Item label={<Label>등록일</Label>}>
          <div className={'flex w-full items-start justify-between'}>
            <i className={'flex h-8 items-center'}>
              {dayjs().format('YYYY-MM-DD')}
            </i>
            <ActiveCheckbox />
          </div>
        </Form.Item>
        <Form.Item
          label={<Label>퀴즈</Label>}
          name="title"
          rules={[{ required: true }]}
        >
          <TextArea rows={2} />
        </Form.Item>
        <ChoiceList />
        <VocaSelect label="관련 용어카드" name="vocaId" initialValue={48} />
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

export default QuizForm;
