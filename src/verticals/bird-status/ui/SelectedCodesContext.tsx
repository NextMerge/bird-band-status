import { createContext, useContext, useState } from "react";

import type { InfoCode } from "../data/infoCodes";

type SelectedCodesContextValue = {
  selectedCodes: ReadonlySet<InfoCode>;
  toggleCode: (code: InfoCode) => void;
};

const SelectedCodesContext = createContext<SelectedCodesContextValue | null>(
  null,
);

export function useSelectedCodes() {
  const ctx = useContext(SelectedCodesContext);
  if (!ctx) {
    throw new Error(
      "useSelectedCodes must be used within a SelectedCodesProvider",
    );
  }
  return ctx;
}

export function SelectedCodesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedCodes, setSelectedCodes] = useState<ReadonlySet<InfoCode>>(
    new Set(),
  );

  const toggleCode = (code: InfoCode) => {
    setSelectedCodes((prev) => {
      const next = new Set(prev);
      if (next.has(code)) {
        next.delete(code);
      } else {
        next.add(code);
      }
      return next;
    });
  };

  return (
    <SelectedCodesContext.Provider value={{ selectedCodes, toggleCode }}>
      {children}
    </SelectedCodesContext.Provider>
  );
}
