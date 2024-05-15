import React, { ReactNode } from 'react';

function TestLayout({ children }: { children?: ReactNode }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplate: `'header header header' 70px
                       'sidebar top    right ' 180px
                       'sidebar center right ' 528px
                       'sidebar bottom right ' 190px / 15% 70% 15%`,
      }}
    >
      {children}
    </div>
  );
}

function Top({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        gridArea: 'top',
      }}
    >
      {children}
    </div>
  );
}

function Center({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        gridArea: 'center',
      }}
    >
      {children}
    </div>
  );
}

function Bottom({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        gridArea: 'bottom',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      {children}
    </div>
  );
}

function Right({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        gridArea: 'right',
        display: 'grid',
        gridTemplateRows: '2fr 2fr 7fr',
      }}
    >
      {children}
    </div>
  );
}

function SideBar({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        gridArea: 'sidebar',
      }}
    >
      {children}
    </div>
  );
}

function Header({ children }: { children: ReactNode }) {
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

TestLayout.Top = Top;
TestLayout.Center = Center;
TestLayout.Bottom = Bottom;
TestLayout.Right = Right;
TestLayout.SideBar = SideBar;
TestLayout.Header = Header;

export default TestLayout;
