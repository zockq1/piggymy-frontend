export const parseBoolean = (str: string | null | undefined) =>
  str === 'true' ? true : str === 'false' ? false : undefined;
