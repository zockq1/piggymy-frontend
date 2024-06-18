'use client';

import { HTMLAttributes } from 'react';

type OptionsType = {
  inputVal: string;
  summary: string;
};

interface IDropdownProps extends HTMLAttributes<HTMLSelectElement> {
  options: OptionsType[];
}

export default function Dropdown({ options, ...props }: IDropdownProps) {
  return (
    <select {...props}>
      {options
        ? options.map((item: OptionsType, index: number) => {
            return (
              <option key={index} value={item.inputVal}>
                {item.summary}
              </option>
            );
          })
        : null}
    </select>
  );
}
