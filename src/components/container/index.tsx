import type { PropsWithChildren } from 'react';

export const LayoutContainer: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="max-w-[88%]  m-auto">{children}</div>
);
