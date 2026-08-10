import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

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

  const toggleCode = useCallback((code: InfoCode) => {
    setSelectedCodes((prev) => {
      const next = new Set(prev);
      if (next.has(code)) {
        next.delete(code);
      } else {
        next.add(code);
      }
      return next;
    });
  }, []);

  const theContext = useMemo(
    () => ({ selectedCodes, toggleCode }),
    [selectedCodes, toggleCode],
  );

  return (
    <SelectedCodesContext.Provider value={theContext}>
      {children}
    </SelectedCodesContext.Provider>
  );
}
