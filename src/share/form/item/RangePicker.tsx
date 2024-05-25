import { DatePicker, Form, FormItemProps } from 'antd';
import React from 'react';

import Label from '@/share/form/item/Label';

interface RangePickerProps extends FormItemProps {
  label: string;
  placeholder?: string;
  name?: string;
}

function RangePicker({ label, name, ...props }: RangePickerProps) {
  return (
    <Form.Item label={<Label>{label}</Label>} name={name} {...props}>
      <DatePicker.RangePicker className={'w-full'} />
    </Form.Item>
  );
}

export default RangePicker;
