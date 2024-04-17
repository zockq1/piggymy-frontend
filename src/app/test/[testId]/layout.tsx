import { ReactNode } from 'react';

export default function TestLayout({ children }: { children: ReactNode }) {
  return <div className="text-purple-0.5">asdaasdasdsd{children}</div>;
}
