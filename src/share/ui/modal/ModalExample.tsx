import React from 'react';

import { useModalHook } from '@/share/hooks/useModalHook';
import Button from '@/share/ui/button/Button';

const ModalExample = () => {
  const { openModal, closeModal } = useModalHook();

  return (
    <Button
      onClick={() => {
        openModal(
          'modal',
          <Button
            onClick={() => {
              closeModal('modal');
            }}
          >
            모달 닫기
          </Button>,
        );
      }}
    >
      모달 열기
    </Button>
  );
};

export default ModalExample;
