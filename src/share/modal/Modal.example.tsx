import React, { ReactNode } from 'react';

import CardSettingModal from '@/share/modal/CardSettingModal';
import NoticeModal from '@/share/modal/NoticeModal';
import { useModalHook } from '@/share/modal/useModalHook';
import UserFeedbackModal from '@/share/modal/UserFeedbackModal';
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

  return (
    <>
      <Button
        onClick={() => {
          openModal(
            'card-setting-modal',
            <CardSettingModal
              onConfirm={() => {
                closeModal('card-setting-modal');
              }}
              onCancel={() => {
                closeModal('card-setting-modal');
              }}
            />,
            { clickableOverlay },
          );
        }}
      >
        용어/퀴즈 카드 설정 모달 열기
      </Button>
      <Button
        onClick={() => {
          openModal(
            'user-feedback--modal',
            <UserFeedbackModal
              onConfirm={() => {
                closeModal('user-feedback--modal');
              }}
              onCancel={() => {
                closeModal('user-feedback--modal');
              }}
            />,
            { clickableOverlay },
          );
        }}
      >
        회원 의견 상세 모달 열기
      </Button>
    </>
  );
}

ModalExample.ModalSystem = ModalSystem;
ModalExample.DefaultModalSystem = DefaultModalSystem;
ModalExample.CustomModalSystem = CustomModalSystem;

export default ModalExample;
