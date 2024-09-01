import { createContext, createSignal } from "solid-js";

type LocaleContextType = ReturnType<typeof createSignal<"en" | "fr">>;

export const LocaleContext = createContext<LocaleContextType>([
    undefined,
    undefined,
] as unknown as LocaleContextType);
