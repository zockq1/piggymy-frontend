import { Form, FormItemProps, Input } from 'antd';
import React from 'react';

import Label from '@/share/form/item/Label';

interface TextProps extends FormItemProps {
  label: string;
  placeholder?: string;
  name?: string;
}

function Text({ label, placeholder, name, ...props }: TextProps) {
  return (
    <Form.Item
      label={label ? <Label>{label}</Label> : null}
      name={name}
      rules={[]}
      {...props}
    >
      <Input placeholder={placeholder} className={'w-full'} />
    </Form.Item>
  );
}

export default Text;
