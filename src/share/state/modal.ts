import { ReactNode } from 'react';
import { atom } from 'recoil';
import { v1 } from 'uuid';

export interface ModalObjectModal {
  id: string;
  component: ReactNode;
  options: { clickableOverlay: boolean };
}

export const modalPowerState = atom<boolean>({
  key: `modalPowerState/${v1()}`,
  default: false,
});

export const modalChildrenState = atom<ModalObjectModal[]>({
  key: `modalChildrenState/${v1()}`,
  default: [],
});
