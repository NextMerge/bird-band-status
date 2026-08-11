import { createContext, useContext, useMemo, useState } from "react";

import type { Locale } from "./uiLocale";

function getDefaultLocale(): Locale {
  return navigator.language.startsWith("fr") ? "fr" : "en";
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  setLocale: () => {},
});

export function useLocale() {
  return useContext(LocaleContext).locale;
}

export function useSetLocale() {
  return useContext(LocaleContext).setLocale;
}

export function LocaleProvider({
  initialValue,
  children,
}: {
  initialValue?: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState<Locale>(
    initialValue ?? getDefaultLocale,
  );
  const contextValue = useMemo(
    () => ({ locale, setLocale }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={contextValue}>
      {children}
    </LocaleContext.Provider>
  );
}
