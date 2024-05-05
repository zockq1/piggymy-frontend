import { createPortal } from 'react-dom';
import { useRecoilValue } from 'recoil';

import { useModalHook } from '@/share/hooks/useModalHook';
import {
  modalChildrenState,
  ModalObjectModal,
  modalPowerState,
} from '@/share/state/modal';
import Overlay from '@/share/ui/modal/overlay/Overlay';

const Modal = () => {
  const modalPower = useRecoilValue(modalPowerState);
  const modals = useRecoilValue(modalChildrenState);
  const { closeModal } = useModalHook();
  const INDEX = 50;

  const getModal = (m: ModalObjectModal) => {
    return (
      <div
        key={m.id}
        className="w-fit min-w-[343px] rounded-[12px] bg-white p-6 shadow-[0_20px_24px_rgba(0,0,0,0.12)]"
        style={{ zIndex: INDEX + modals.length - 1 }}
      >
        {m.component}
      </div>
    );
  };

  const onClose = (id: string) => {
    closeModal(id);
  };

  const modalContent = modalPower ? (
    <>
      {modals.map((m) => {
        return (
          <Overlay
            key={m.id}
            onClose={
              m.options.clickableOverlay ? () => onClose(m.id) : undefined
            }
          >
            {getModal(m)}
          </Overlay>
        );
      })}
    </>
  ) : null;

  if (typeof window === 'undefined') return <></>;

  const modal = document.getElementById('modal');
  if (!modal) return <></>;

  if (modalPower) {
    return createPortal(modalContent, modal);
  }
  return null;
};

export default Modal;
