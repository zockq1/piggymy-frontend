import ReactDOM from 'react-dom';
import { useRecoilValue } from 'recoil';

import { useModalHook } from '@/share/hooks/useModalHook';
import {
  modalChildrenState,
  ModalObjectModal,
  modalPowerState,
} from '@/share/state/modal';

const ModalContainer = () => {
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
          <div
            key={m.id}
            style={{ zIndex: INDEX + modals.length - 1 }}
            className="bg-gray-400 fixed inset-0 flex items-center justify-center bg-opacity-50"
          >
            <div className="relative">
              {getModal(m)}
              <button
                onClick={() => onClose(m.id)}
                className="text-gray-600 absolute right-3 top-2 flex aspect-square w-4"
              >
                X
              </button>
            </div>
          </div>
        );
      })}
    </>
  ) : null;

  if (typeof window === 'undefined') return <></>;

  const modal = document.getElementById('modal');
  if (!modal) return <></>;

  if (modalPower) {
    return ReactDOM.createPortal(modalContent, modal);
  }
  return null;
};

export default ModalContainer;
