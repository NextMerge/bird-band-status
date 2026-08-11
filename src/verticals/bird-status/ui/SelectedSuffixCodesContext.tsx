import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { defaultPrefixCode, type PrefixCode } from "../data/prefixCode";
import {
  isCodeAllowedWithPrefixCode,
  type SuffixCode,
} from "../data/suffixCodes";

type SelectedSuffixCodesContextValue = {
  selectedSuffixCodes: ReadonlySet<SuffixCode>;
  toggleSuffixCode: (code: SuffixCode) => void;
  clearSuffixCodes: () => void;
  prefixCode: PrefixCode;
  setPrefixCode: (prefixCode: PrefixCode) => void;
};

const SelectedSuffixCodesContext =
  createContext<SelectedSuffixCodesContextValue | null>(null);

export function useSelectedSuffixCodes() {
  const ctx = useContext(SelectedSuffixCodesContext);
  if (!ctx) {
    throw new Error(
      "useSelectedSuffixCodes must be used within a SelectedSuffixCodesProvider",
    );
  }
  return ctx;
}

export function usePrefixCode() {
  const ctx = useContext(SelectedSuffixCodesContext);
  if (!ctx) {
    throw new Error(
      "usePrefixCode must be used within a SelectedSuffixCodesProvider",
    );
  }
  return { prefixCode: ctx.prefixCode, setPrefixCode: ctx.setPrefixCode };
}

export function SelectedSuffixCodesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedSuffixCodes, setSelectedSuffixCodes] = useState<
    ReadonlySet<SuffixCode>
  >(new Set());
  const [prefixCode, setPrefixCode] = useState<PrefixCode>(defaultPrefixCode);

  useEffect(() => {
    setSelectedSuffixCodes((prev) => {
      const next = new Set(prev);
      let changed = false;
      for (const code of prev) {
        if (!isCodeAllowedWithPrefixCode(code, prefixCode)) {
          next.delete(code);
          changed = true;
        }
      }
      return changed ? next : prev;
    });
  }, [prefixCode]);

  const toggleSuffixCode = useCallback((code: SuffixCode) => {
    setSelectedSuffixCodes((prev) => {
      const next = new Set(prev);
      if (next.has(code)) {
        next.delete(code);
      } else {
        next.add(code);
      }
      return next;
    });
  }, []);

  const clearSuffixCodes = useCallback(() => {
    setSelectedSuffixCodes(new Set());
  }, []);

  const theContext = useMemo(
    () => ({
      selectedSuffixCodes,
      toggleSuffixCode,
      clearSuffixCodes,
      prefixCode,
      setPrefixCode,
    }),
    [
      selectedSuffixCodes,
      toggleSuffixCode,
      clearSuffixCodes,
      prefixCode,
      setPrefixCode,
    ],
  );

  return (
    <SelectedSuffixCodesContext.Provider value={theContext}>
      {children}
    </SelectedSuffixCodesContext.Provider>
  );
}
