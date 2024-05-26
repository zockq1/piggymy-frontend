import React, { ReactNode } from 'react';

function HomeLayout({ children }: { children?: ReactNode }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplate: `'top    right ' 120px
                       'center right ' 528px
                       'bottom right ' 210px / 3fr 1fr`,
        gap: '20px',
      }}
      className="col-start-1 col-end-3 p-10"
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
        gap: '20px',
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
        gap: '20px',
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
