import { ReactNode } from 'react';

function MobileLayout({ children }: { children?: ReactNode }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplate: `'content' minmax(calc(100vh), max-content)`,
      }}
      className="m-auto max-w-[768px] bg-white"
    >
      {children}
    </div>
  );
}

function Header({ children }: { children?: ReactNode }) {
  return (
    <div
      style={{
        gridArea: 'header',
      }}
    >
      {children}
    </div>
  );
}

function Content({ children }: { children?: ReactNode }) {
  return (
    <div style={{ gridArea: 'content' }} className=" gap-4">
      {children}
    </div>
  );
}

function Footer({ children }: { children?: ReactNode }) {
  return (
    <div
      style={{
        gridArea: 'footer',
      }}
    >
      {children}
    </div>
  );
}

MobileLayout.Header = Header;
MobileLayout.Content = Content;
MobileLayout.Footer = Footer;

export default MobileLayout;
