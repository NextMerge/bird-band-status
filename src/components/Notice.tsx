import type { ReactNode } from "react";

type NoticeProps = {
  children: ReactNode;
  className?: string;
};

export function Notice({ children, className = "" }: NoticeProps) {
  return (
    <div
      className={`rounded-lg border border-red-500/30 bg-red-500/20 p-4 ${className}`}
    >
      {children}
    </div>
  );
}
