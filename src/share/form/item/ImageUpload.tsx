'use client';

import { PlusOutlined } from '@ant-design/icons';
import { Form, Upload } from 'antd';

import Label from './Label';

/**
 * antd form onFinish의 value 매개변수에 추가되는 값
 * @example
 *  {
 *    image: UploadFile[];
 *  }
 */
export default function ImageUpload({
  initialImage,
}: {
  initialImage?: string;
}) {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const getFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <Form.Item
      label={<Label>이미지</Label>}
      name="image"
      valuePropName="fileList"
      getValueFromEvent={getFile}
      initialValue={initialImage ? [{ url: initialImage }] : null}
      rules={[{ required: true, message: '이미지를 업로드해 주세요' }]}
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
