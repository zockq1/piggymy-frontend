import React from 'react';

import { useModalHook } from '@/share/hooks/useModalHook';
import Button from '@/share/ui/button/Button';

const ModalExample = () => {
  const { openModal, closeModal } = useModalHook();

  return (
    <Button
      onClick={() => {
        openModal(
          'modal1',
          <Button
            onClick={() => {
              openModal(
                'modal2',
                <Button
                  onClick={() => {
                    closeModal('modal2');
                  }}
                >
                  2차 모달 닫기
                </Button>,
              );
            }}
          >
            2차 모달 열기
          </Button>,
        );
      }}
    >
      1차 모달 열기
    </Button>
  );
};

export default ModalExample;
