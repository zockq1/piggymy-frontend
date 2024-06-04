import axios, { AxiosError, AxiosResponse } from 'axios';
import { deleteCookie, getCookie, getCookies, setCookie } from 'cookies-next';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    let accessToken;
    if (typeof window === 'undefined') {
      // Server-side
      const { cookies } = await import('next/headers');
      accessToken = cookies().get('accessToken')?.value;
    } else {
      // Client-side
      accessToken = getCookie('accessToken');
    }
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401) {
      try {
        let newTokens;
        let accessToken, refreshToken;
        if (typeof window === 'undefined') {
          // Server-side
          const { cookies } = await import('next/headers');
          accessToken = cookies().get('accessToken')?.value;
          refreshToken = cookies().get('refreshToken')?.value;
        } else {
          // Client-side
          const cookies = getCookies();
          accessToken = cookies.accessToken;
          refreshToken = cookies.refreshToken;
        }

        if (refreshToken) {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACK_API}/api/member/refresh`,
            { refreshToken, accessToken },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                'REFRESH-TOKEN': `Bearer ${refreshToken}`,
              },
            },
          );
          newTokens = response.data;
          if (typeof window === 'undefined') {
            // Server-side
            const { cookies } = await import('next/headers');
            cookies().set('accessToken', newTokens.accessToken, {
              maxAge: 6 * 60 * 60,
            });
            cookies().set('refreshToken', newTokens.refreshToken, {
              maxAge: 30 * 24 * 60 * 60,
            });
            cookies().set('memberName', newTokens.memberName, {
              maxAge: 30 * 24 * 60 * 60,
            });
          } else {
            // Client-side
            setCookie('accessToken', newTokens.accessToken, {
              maxAge: 6 * 60 * 60,
            });
            setCookie('refreshToken', newTokens.refreshToken, {
              maxAge: 30 * 24 * 60 * 60,
            });
            setCookie('memberName', newTokens.memberName, {
              maxAge: 30 * 24 * 60 * 60,
            });
          }
        }

        if (newTokens && newTokens.accessToken && originalRequest) {
          originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`;
          return axios(originalRequest);
        }
      } catch (refreshError) {
        console.error('Token refresh error:', refreshError);
        if (typeof window === 'undefined') {
          // Server-side
          const { cookies } = await import('next/headers');
          cookies().delete('accessToken');
          cookies().delete('refreshToken');
          cookies().delete('memberName');
        } else {
          // Client-side
          deleteCookie('accessToken');
          deleteCookie('refreshToken');
          deleteCookie('memberName');
        }
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
