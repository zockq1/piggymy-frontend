import { useEffect, useState } from 'react';

export default function useIsIosWebView() {
  const [isIOSWebView, setIsIOSWebView] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    // iOS WebView User-Agent 확인
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    const isWebKit = /AppleWebKit/i.test(userAgent);
    const isSafari =
      /Safari/i.test(userAgent) &&
      !/CriOS/i.test(userAgent) &&
      !/FxiOS/i.test(userAgent);

    if (isIOS && isWebKit && !isSafari) {
      setIsIOSWebView(true);
    }
  }, []);

  return isIOSWebView;
}
