'use client';

import useIsIosWebView from '@/share/hooks/useIsIosWebView';
import { cn } from '@/utils/cn';

export default function VocaFooter() {
  const isWebView = useIsIosWebView();
  return (
    <footer className="p-4 pt-6">
      <button
        className={cn(
          'h-12	w-full rounded-lg bg-blue-0 font-semibold text-primary',
          {
            'opacity-40': !isWebView,
          },
        )}
      >
        관련 퀴즈 풀어보기
      </button>
      <p className="mt-8 text-center text-base font-semibold text-gray-1">
        이 정보가 유익했나요?
      </p>
      <div className="flex w-full justify-center gap-2 p-2 opacity-40">
        <button
          className={cn('rounded-lg bg-gray-6 p-2 text-sm', {
            'opacity-40': !isWebView,
          })}
        >
          도움돼요 👍
        </button>
        <button
          className={cn('rounded-lg bg-gray-6 p-2 text-sm', {
            'opacity-40': !isWebView,
          })}
        >
          부족해요
        </button>
      </div>
    </footer>
  );
}
