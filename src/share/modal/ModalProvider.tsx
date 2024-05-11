'use client';

import { createPortal } from 'react-dom';
import { useRecoilValue } from 'recoil';

import { useModalHook } from '@/share/modal/useModalHook';
``;
import {
  modalChildrenState,
  ModalObjectModal,
  modalPowerState,
} from '@/share/modal/Modal.recoil';
import Overlay from '@/share/modal/Overlay';

const ModalProvider = () => {
  const modalPower = useRecoilValue(modalPowerState);
  const modalList = useRecoilValue(modalChildrenState);
  const { closeModal } = useModalHook();
  const INDEX = 50;

  const onClose = (modal?: ModalObjectModal) => {
    if (!modal || !modal.options.clickableOverlay) return;

    closeModal(modal.id);
  };

  const modalContent = (
    <>
      {modalList.map((modal) => {
        return (
          <Overlay key={modal.id} onClose={() => onClose(modal)}>
            <div
              key={modal.id}
              className="w-fit min-w-[343px] rounded-[12px] bg-white p-6 shadow-[0_20px_24px_rgba(0,0,0,0.12)]"
              style={{ zIndex: INDEX + modalList.length - 1 }}
            >
              {modal.component}
            </div>
          </Overlay>
        );
      })}
    </>
  );

  if (!modalPower) return null;

  return createPortal(modalContent, document.body);
  // return modalContent;
};

export default ModalProvider;
