import { DatePicker, Form, FormProps, Input, Select } from 'antd';
import { type } from 'doctrine';
import React, { HTMLAttributes } from 'react';

import Label from '@/share/form/item/Label';
import FieldType = type.FieldType;

interface SearchProps extends HTMLAttributes<HTMLFormElement> {
  onFinish?: FormProps<FieldType>['onFinish'];
}

function Search({ children, onFinish, ...props }: SearchProps) {
  return (
    <Form
      labelCol={{}}
      layout="horizontal"
      className="w-full"
      onFinish={onFinish}
      {...props}
    >
      {children}
    </Form>
  );
}

interface FormItemProps
  extends Omit<HTMLAttributes<HTMLInputElement>, 'onReset'> {
  label: string;
  placeholder?: string;
  name?: string;
}

interface SearchRangePickerProps extends FormItemProps {}

function SearchRangePicker({ label, name, ...props }: SearchRangePickerProps) {
  return (
    <Form.Item label={<Label>{label}</Label>} name={name} {...props}>
      <DatePicker.RangePicker className={'w-full'} />
    </Form.Item>
  );
}

interface SearchTextProps extends FormItemProps {}

function SearchText({ label, placeholder, name, ...props }: SearchTextProps) {
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

interface SearchDropdownProps extends FormItemProps {}

function SearchDropdown({
  label,
  placeholder,
  name,
  ...props
}: SearchDropdownProps) {
  return (
    <Form.Item label={label && <Label>{label}</Label>} name={name} {...props}>
      <Select placeholder={placeholder} className={'w-full'}>
        <Select.Option value="demo">Demo</Select.Option>
      </Select>
    </Form.Item>
  );
}

Search.SearchRangePicker = SearchRangePicker;
Search.SearchText = SearchText;
Search.SearchDropdown = SearchDropdown;

export default Search;
