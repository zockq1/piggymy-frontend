function filterOption(input: string, option?: { children: string }) {
  return (option?.children ?? '')[1]
    .toLowerCase()
    .includes(input.toLowerCase());
}

export default filterOption;
