import React, { ReactNode } from 'react';

import NoticeModal from '@/share/modal/NoticeModal';
import { useModalHook } from '@/share/modal/useModalHook';
import Button from '@/share/ui/button/Button';

const ModalExample = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export const ModalSystem = ({
  clickableOverlay,
}: {
  clickableOverlay: boolean;
}) => {
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
                { clickableOverlay },
              );
            }}
          >
            2차 모달 열기
          </Button>,
          { clickableOverlay },
        );
      }}
    >
      1차 모달 열기
    </Button>
  );
};

export function DefaultModalSystem({
  clickableOverlay,
}: {
  clickableOverlay: boolean;
}) {
  const { openModal, closeModal } = useModalHook();

  const handleConfirm = () => {
    // Do something
    closeModal('default-modal');
  };
  const handleCancel = () => {
    closeModal('default-modal');
  };

  return (
    <Button
      onClick={() => {
        openModal(
          'default-modal',
          <NoticeModal
            message={'삭제하시겠습니까?'}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />,
          { clickableOverlay },
        );
      }}
    >
      기본 모달 열기
    </Button>
  );
}

export function CustomModalSystem({
  clickableOverlay,
}: {
  clickableOverlay: boolean;
}) {
  const { openModal, closeModal } = useModalHook();

  const handleConfirm = () => {
    // Do something
    closeModal('default-modal');
  };

  return (
    <Button
      onClick={() => {
        openModal(
          'default-modal',
          <div className={'bg-warning'}>
            <button onClick={handleConfirm}>버튼</button>
          </div>,
          { clickableOverlay },
        );
      }}
    >
      커스텀 모달 열기
    </Button>
  );
}

ModalExample.ModalSystem = ModalSystem;
ModalExample.DefaultModalSystem = DefaultModalSystem;
ModalExample.CustomModalSystem = CustomModalSystem;

export default ModalExample;
