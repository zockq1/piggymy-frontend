import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';

import { modalChildrenState, modalPowerState } from '@/share/state/modal';

export const useModalHook = () => {
  const [, setModalPower] = useRecoilState(modalPowerState);
  const [, setModals] = useRecoilState(modalChildrenState);

  const openModal = (id: string, component: ReactNode) => {
    const newModal = { id, component };
    setModalPower(true);
    setModals((modals) => {
      return [...modals, newModal];
    });
  };

  const closeModal = (id: string) => {
    setModals((prev) => {
      return prev.filter((m) => {
        return m.id !== id;
      });
    });
  };

  return {
    openModal,
    closeModal,
  };
};
