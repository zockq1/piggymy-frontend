import { ReactNode } from 'react';

export default function Label({ children }: { children: ReactNode }) {
  return <span className="text-sm font-bold">{children}</span>;
}
