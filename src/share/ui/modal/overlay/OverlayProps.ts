import { HTMLAttributes, ReactElement, ReactNode } from 'react';

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  isTransparent?: boolean;
  zIndex?: number;
  children?: ReactElement | ReactElement[] | ReactNode | ReactNode[];
  onClose?: () => void;
}
