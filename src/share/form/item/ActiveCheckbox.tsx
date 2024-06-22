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
export function ActiveCheckbox({
  initialValue = true,
}: {
  initialValue?: boolean;
}) {
  return (
    <Form.Item
      label={<Label>사용여부</Label>}
      name="isUse"
      rules={[{ required: true }]}
      initialValue={initialValue}
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
