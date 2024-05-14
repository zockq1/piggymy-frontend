'use client';

type OptionsType = {
  inputVal: string;
  summary: string;
};

interface IDropdownProps {
  selectName: string;
  options: OptionsType[];
}

export default function Dropdown({ selectName, options }: IDropdownProps) {
  return (
    <select name={selectName ? selectName : 'test'}>
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
