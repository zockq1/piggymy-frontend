'use client';

import { Form, Radio } from 'antd';

import StatusBadge from '@/share/ui/badge/StatusBadge';

import Label from './Label';

export function ActiveCheckbox() {
  return (
    <Form.Item
      label={<Label>사용여부</Label>}
      name="status"
      rules={[{ required: true }]}
      initialValue={true}
    >
      <Radio.Group>
        <Radio value={true}>
          <StatusBadge isActive />
        </Radio>
        <Radio value={false}>
          <StatusBadge isActive={false} />
        </Radio>
      </Radio.Group>
    </Form.Item>
  );
}
