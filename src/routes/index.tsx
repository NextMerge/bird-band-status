import { createFileRoute } from "@tanstack/react-router";

import { infoCodeList } from "../verticals/bird-status/data/infoCodes";
import { LocaleProvider } from "../verticals/bird-status/locale/LocaleContext";
import type { Locale } from "../verticals/bird-status/locale/uiLocale";
import { CodeGroup } from "../verticals/bird-status/ui/CodeGroup";
import { Sidebar } from "../verticals/bird-status/ui/Sidebar";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const locale: Locale = navigator.language.startsWith("fr") ? "fr" : "en";

  return (
    <LocaleProvider value={locale}>
      <div className="flex h-dvh bg-[oklch(0.16_0.025_326)]">
        <Sidebar />
        <main className="bg-card mt-3 flex-1 overflow-auto rounded-tl-2xl border">
          <div className="mx-auto h-full w-full max-w-2xl p-6">
            <CodeGroup codes={infoCodeList} />
          </div>
        </main>
      </div>
    </LocaleProvider>
  );
}
