import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { defaultBirdStatus, type BirdStatusCode } from "../data/birdStatus";
import { type InfoCode, isCodeAllowedWithBirdStatus } from "../data/infoCodes";

type SelectedCodesContextValue = {
  selectedCodes: ReadonlySet<InfoCode>;
  toggleCode: (code: InfoCode) => void;
  clearCodes: () => void;
  birdStatus: BirdStatusCode;
  setBirdStatus: (birdStatus: BirdStatusCode) => void;
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

export function useBirdStatus() {
  const ctx = useContext(SelectedCodesContext);
  if (!ctx) {
    throw new Error(
      "useBirdStatus must be used within a SelectedCodesProvider",
    );
  }
  return { birdStatus: ctx.birdStatus, setBirdStatus: ctx.setBirdStatus };
}

export function SelectedCodesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedCodes, setSelectedCodes] = useState<ReadonlySet<InfoCode>>(
    new Set(),
  );
  const [birdStatus, setBirdStatus] =
    useState<BirdStatusCode>(defaultBirdStatus);

  useEffect(() => {
    setSelectedCodes((prev) => {
      const next = new Set(prev);
      let changed = false;
      for (const code of prev) {
        if (!isCodeAllowedWithBirdStatus(code, birdStatus)) {
          next.delete(code);
          changed = true;
        }
      }
      return changed ? next : prev;
    });
  }, [birdStatus]);

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

  const clearCodes = useCallback(() => {
    setSelectedCodes(new Set());
  }, []);

  const theContext = useMemo(
    () => ({
      selectedCodes,
      toggleCode,
      clearCodes,
      birdStatus,
      setBirdStatus,
    }),
    [selectedCodes, toggleCode, clearCodes, birdStatus, setBirdStatus],
  );

  return (
    <SelectedCodesContext.Provider value={theContext}>
      {children}
    </SelectedCodesContext.Provider>
  );
}
