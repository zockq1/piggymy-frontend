import { ReactNode } from 'react';

function Layout({ children }: { children?: ReactNode }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplate: `'header header ' 70px
                       'side   content' minmax(calc(100vh - 70px), max-content) / 240px auto`,
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
      }}
    >
      {children}
    </div>
  );
}

Layout.Header = Header;
Layout.LeftSideMenu = LeftSideMenu;
Layout.Content = Content;

export default Layout;
