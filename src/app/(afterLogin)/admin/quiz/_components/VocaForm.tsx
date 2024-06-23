import { Form, Input } from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';

import plus from '/public/img/icon/plus.png';
import { ActiveCheckbox } from '@/share/form/item/ActiveCheckbox';
import ImageUpload from '@/share/form/item/ImageUpload';
import Label from '@/share/form/item/Label';
import Button from '@/share/ui/button/Button';
import IconButton from '@/share/ui/button/IconButton';
import ContentBox from '@/share/ui/content-box/ContentBox';
import { CreateVocaRequestJson, UpdateVocaRequestJson } from '@/type/vocaType';

interface VocaFormProps {
  form: FormInstance;
  onFinish: (formValue: CreateVocaRequestJson | UpdateVocaRequestJson) => void;
  onCancel: () => void;
}

function VocaForm({ form, onCancel, onFinish }: VocaFormProps) {
  return (
    <ContentBox className={'flex h-full items-start'}>
      <Form
        form={form}
        labelCol={{ span: 2 }}
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
          label={<Label>용어</Label>}
          name="koreanTitle"
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
        <ImageUpload name={'대표이미지'} maxCount={1} />
        <Form.Item
          label={<Label>대표이미지 출처</Label>}
          name="thumbnailSourceName"
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

export default VocaForm;
