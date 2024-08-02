import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}
