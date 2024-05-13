import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';

import {
  modalChildrenState,
  modalPowerState,
} from '@/share/modal/Modal.recoil';

export const useModalHook = () => {
  const [, setModalPower] = useRecoilState(modalPowerState);
  const [, setModals] = useRecoilState(modalChildrenState);

  const openModal = (
    id: string,
    component: ReactNode,
    options: { clickableOverlay: boolean } = { clickableOverlay: true },
  ) => {
    const newModal = { id, component, options };
    setModalPower(true);
    setModals((modals) => {
      return [...modals, newModal];
    });
  };

  const closeModal = (id: string) => {
    setModals((prev) =>
      prev.filter((m) => {
        return m.id !== id;
      }),
    );
  };

  return {
    openModal,
    closeModal,
  };
};
