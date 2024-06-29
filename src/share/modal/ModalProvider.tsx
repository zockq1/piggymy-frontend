'use client';

import { createPortal } from 'react-dom';
import { useRecoilValue } from 'recoil';

import { useModal } from '@/share/modal/useModal';
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
  const { closeModal } = useModal();
  const MIN_INDEX = 1000;

  const onClose = (modal?: ModalObjectModal) => {
    if (!modal || !modal.options.clickableOverlay) return;

    closeModal(modal.id);
  };

  const modalContent =
    modalList.length > 0 ? (
      <div className={''}>
        {modalList.map((modal) => {
          return (
            <Overlay
              key={modal.id}
              onClose={() => onClose(modal)}
              style={{ zIndex: MIN_INDEX + modalList.length - 1 }}
            >
              <div
                key={modal.id}
                className="w-fit min-w-[343px] rounded-[12px] bg-white p-6 shadow-[0_20px_24px_rgba(0,0,0,0.12)]"
                style={{ zIndex: MIN_INDEX + modalList.length - 1 }}
              >
                {modal.component}
              </div>
            </Overlay>
          );
        })}
      </div>
    ) : null;

  if (!modalPower) return null;

  return createPortal(modalContent, document.body);
  // return modalContent;
};

export default ModalProvider;
