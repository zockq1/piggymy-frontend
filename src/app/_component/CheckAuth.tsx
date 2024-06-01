'use client';

import { getCookie } from 'cookies-next';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CheckAuth() {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const token = getCookie('refreshToken');

    if (token && pathname === '/') {
      router.push('/admin');
    }

    if (!token) {
      router.push('/login');
    }
  }, [router, pathname]);
  return null;
}
