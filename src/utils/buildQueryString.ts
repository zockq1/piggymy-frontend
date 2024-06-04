/* eslint-disable  @typescript-eslint/no-explicit-any */
export default function buildQueryString(params: { [key: string]: any }) {
  return (
    '?' +
    Object.entries(params)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      )
      .join('&')
  );
}
