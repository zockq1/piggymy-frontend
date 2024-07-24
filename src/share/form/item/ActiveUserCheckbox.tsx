'use client';

import { Form, Radio } from 'antd';

import StatusBadge from '@/share/ui/badge/StatusBadge';

import Label from './Label';

/**
 * antd form onFinish의 value 매개변수에 추가되는 값
 * @example
 *  {
 *    isUse: boolean;
 *  }
 */

interface ActiveUserCheckboxProps {
  initialValue?: boolean;
}

export function ActiveUserCheckbox({
  initialValue = true,
}: ActiveUserCheckboxProps) {
  return (
    <Form.Item
      label={<Label>탈퇴여부</Label>}
      name="delYn"
      rules={[{ required: true }]}
      initialValue={initialValue}
      className={'m-0'}
    >
      <Radio.Group>
        <Radio value={true}>
          <StatusBadge isActive labels={['활동중', '탈퇴']} />
        </Radio>
        <Radio value={false}>
          <StatusBadge isActive={false} labels={['활동중', '탈퇴']} />
        </Radio>
      </Radio.Group>
    </Form.Item>
  );
}
