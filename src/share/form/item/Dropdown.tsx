import { Form, FormItemProps, Select } from 'antd';
import React from 'react';

import Label from '@/share/form/item/Label';

interface DropdownProps extends FormItemProps {
  label: string;
  placeholder?: string;
  name?: string;
}

function Dropdown({ label, placeholder, name, ...props }: DropdownProps) {
  return (
    <Form.Item label={label && <Label>{label}</Label>} name={name} {...props}>
      <Select placeholder={placeholder} className={'w-full'}>
        <Select.Option value="demo">Demo</Select.Option>
      </Select>
    </Form.Item>
  );
}

export default Dropdown;
