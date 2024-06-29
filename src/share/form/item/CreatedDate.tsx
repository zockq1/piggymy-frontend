import { Form } from 'antd';
import { Dayjs } from 'dayjs';

import Label from './Label';

export default function CreatedDate({ createdDate }: { createdDate: Dayjs }) {
  return (
    <Form.Item label={<Label>등록일</Label>} labelCol={{ span: 100 }}>
      <i>{createdDate.format('YYYY.MM.DD')}</i>
    </Form.Item>
  );
}
