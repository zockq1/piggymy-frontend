'use client';

import { PlusOutlined } from '@ant-design/icons';
import { Form, Upload } from 'antd';

import Label from './Label';

interface ImageUploadProps {
  initialImage?: string;
  name?: string;
  label?: string;
}

/**
 * antd form onFinish의 value 매개변수에 추가되는 값
 * @example
 *  {
 *    image: UploadFile[];
 *  }
 */
export default function ImageUpload({
  initialImage,
  name = 'image',
  label = '이미지',
}: ImageUploadProps) {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const getFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <Form.Item
      label={<Label>{label}</Label>}
      name={name}
      valuePropName="fileList"
      getValueFromEvent={getFile}
      initialValue={initialImage ? [{ url: initialImage }] : null}
    >
      <Upload listType="picture-card" maxCount={1}>
        <button type="button">
          <PlusOutlined />
          <div>Upload</div>
        </button>
      </Upload>
    </Form.Item>
  );
}
