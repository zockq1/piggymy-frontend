import Image from 'next/image';
import React from 'react';

import Button from '@/share/ui/button/Button';

interface DefaultModalProps {
  type?: 'confirm' | 'question';
  message: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

function NoticeModal({
  type = 'confirm',
  message,
  onConfirm,
  onCancel,
}: DefaultModalProps) {
  return (
    <div
      className={
        'w-[296px]: flex flex-col items-center justify-center gap-2 text-center'
      }
    >
      <Image
        src={`/img/modal/${type}.png`}
        alt={'check'}
        width={46}
        height={46}
      />
      {message}
      {(onCancel || onConfirm) && (
        <div className={'flex gap-2'}>
          {onCancel && (
            <Button color={'white'} size={'small'} onClick={onCancel}>
              취소
            </Button>
          )}
          {onConfirm && (
            <Button color={'blue'} size={'small'} onClick={onConfirm}>
              확인
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default NoticeModal;
