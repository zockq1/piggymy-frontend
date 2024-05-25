import { ReactNode } from 'react';

function Layout({ children }: { children?: ReactNode }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplate: `'header header ' 70px
                       'side   content' calc(100vh - 70px) / 240px auto`,
      }}
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

function LeftSideMenu({ children }: { children?: ReactNode }) {
  return <div style={{ gridArea: 'side' }}>{children}</div>;
}

function Content({ children }: { children?: ReactNode }) {
  return (
    <div
      style={{
        gridArea: 'content',
        display: 'grid',
        gridTemplateColumns: `355px auto`,
        gridTemplateRows: `auto
                           auto
                           calc(100vh - 240px)`,
        gap: '20px',
        padding: '20px',
        overflowY: 'hidden',
      }}
    >
      {children}
    </div>
  );
}

function FullContent({ children }: { children?: ReactNode }) {
  return <div className="col-start-1 col-end-3">{children}</div>;
}

function LeftContent({ children }: { children?: ReactNode }) {
  return <div className="col-start-1 col-end-2">{children}</div>;
}

function RightContent({ children }: { children?: ReactNode }) {
  return <div className="col-start-2 col-end-3">{children}</div>;
}

Layout.Header = Header;
Layout.LeftSideMenu = LeftSideMenu;
Layout.Content = Content;
Content.Left = LeftContent;
Content.Right = RightContent;
Content.Full = FullContent;

export default Layout;
