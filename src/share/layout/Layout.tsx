import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

function LeftSideMenu({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

function FullContent({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

function LeftContent({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

function RightContent({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

Layout.LeftSideMenu = LeftSideMenu;
Layout.FullContent = FullContent;
Layout.LeftContent = LeftContent;
Layout.RightContent = RightContent;
