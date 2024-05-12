'use client';

import { Form, Radio } from 'antd';

import StatusBadge from '@/share/ui/badge/StatusBadge';

import Label from './Label';

/**
 * antd form onFinish의 value 매개변수에 추가되는 값
 * @example
 *  {
 *    useYn: boolean;
 *  }
 */
export function ActiveCheckbox() {
  return (
    <Form.Item
      label={<Label>사용여부</Label>}
      name="useYn"
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
