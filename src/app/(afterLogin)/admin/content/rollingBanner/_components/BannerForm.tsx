'use client';

import { DatePicker, Form, Input } from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import dayjs, { Dayjs } from 'dayjs';

import { ActiveCheckbox } from '@/share/form/item/ActiveCheckbox';
import CreatedDate from '@/share/form/item/CreatedDate';
import ImageUpload from '@/share/form/item/ImageUpload';
import Label from '@/share/form/item/Label';
import VocaChoice from '@/share/form/item/VocaChoice';
import Button from '@/share/ui/button/Button';
import ContentBox from '@/share/ui/content-box/ContentBox';
import { BannerFormValue } from '@/type/bannerType';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

interface RollingBannerFormProps {
  onSubmit: (data: BannerFormValue) => void;
  onDelete: () => void;
  form: FormInstance;
  type: 'create' | 'update';
  initialValue?: {
    useYn: boolean;
    createdDate: Dayjs;
    modifiedDate: Dayjs;
    exposureStartDate: Dayjs;
    exposureEndDate: Dayjs;
    type: string;
    title: string;
    image: string;
    buttonName: string;
    movePage: number; //용어카드 id
  };
}

export default function RollingBannerForm({
  initialValue,
  onSubmit,
  onDelete,
  form,
  type,
}: RollingBannerFormProps) {
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
          initialValue={initialValue?.type}
        >
          <Input placeholder="내용을 입력해주세요." className="w-[200px]" />
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
          <TextArea rows={4} />
        </Form.Item>
        <ImageUpload initialImage={initialValue?.image} />
        <Form.Item
          label={<Label>버튼명</Label>}
          name="buttonName"
          rules={[
            {
              required: true,
              message: '내용을 입력해주세요.',
            },
          ]}
          initialValue={initialValue?.buttonName}
        >
          <Input placeholder="내용을 입력해주세요." />
        </Form.Item>
        <VocaChoice
          label="카드 선택"
          name="movePage"
          initialValue={initialValue?.movePage}
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
            {type === 'create' ? '취소' : '삭제'}
          </Button>
          <Button type="submit" size="large" className="mx-4">
            {type === 'create' ? '저장' : '수정'}
          </Button>
        </Form.Item>
      </Form>
    </ContentBox>
  );
}
