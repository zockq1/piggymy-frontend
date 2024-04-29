import React, { ReactNode } from 'react';

function HomeLayout({ children }: { children?: ReactNode }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplate: `'header header' 70px
                       'top    right ' 180px
                       'center right ' 528px
                       'bottom right ' 190px / 70% 30%`,
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

HomeLayout.Top = Top;
HomeLayout.Center = Center;
HomeLayout.Bottom = Bottom;
HomeLayout.Right = Right;

export default HomeLayout;
