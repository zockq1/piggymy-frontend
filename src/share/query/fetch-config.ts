const apiMode = process.env.NEXT_PUBLIC_API_MODE;
export const baseURL =
  apiMode === 'MOCK'
    ? process.env.NEXT_PUBLIC_MOCK_API
    : process.env.NEXT_PUBLIC_BACK_API;
