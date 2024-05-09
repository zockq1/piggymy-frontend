import React, {
  HTMLAttributes,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from 'react';

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  isTransparent?: boolean;
  zIndex?: number;
  children?: ReactElement | ReactElement[] | ReactNode | ReactNode[];
  onClose?: () => void;
}

function Overlay({ onClose, ...props }: OverlayProps) {
  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!onClose) return;

    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-[1300] flex h-[100dvh] w-[100dvw] items-center justify-center before:fixed before:bottom-0 before:left-0 before:right-0 before:top-0 before:opacity-60 before:content-[''] ${
        props.isTransparent ? 'before:bg-transparent' : 'before:bg-black'
      }`}
      onClick={onClick}
      {...props}
    >
      {props.children}
    </div>
  );
}

export default Overlay;
