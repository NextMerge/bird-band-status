import { createContext, useContext } from "react";

import type { Locale } from "./uiLocale";

const LocaleContext = createContext<Locale>("en");

export function useLocale() {
  return useContext(LocaleContext);
}

export function LocaleProvider({
  value,
  children,
}: {
  value: Locale;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}
