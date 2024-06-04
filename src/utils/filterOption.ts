function filterOption(input: string, option?: { children: string }) {
  console.log(option?.children);
  return (option?.children ?? '')[1]
    .toLowerCase()
    .includes(input.toLowerCase());
}

export default filterOption;
