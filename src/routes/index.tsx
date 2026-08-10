import { createFileRoute } from "@tanstack/react-router";

import { Toaster } from "#/components/ui/toast.tsx";

import { infoCodeList } from "../verticals/bird-status/data/infoCodes";
import { CodeGroup } from "../verticals/bird-status/ui/CodeGroup";
import { SelectedCodesProvider } from "../verticals/bird-status/ui/SelectedCodesContext";
import { Sidebar } from "../verticals/bird-status/ui/Sidebar";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <Toaster>
      <SelectedCodesProvider>
        <div className="flex h-dvh overscroll-none bg-[oklch(0.16_0.025_326)]">
          <Sidebar />
          <main className="bg-card mt-3 flex-1 overflow-auto rounded-tl-2xl border">
            <div className="mx-auto h-full max-w-300 p-6 pt-3">
              <CodeGroup codes={infoCodeList} />
            </div>
          </main>
        </div>
      </SelectedCodesProvider>
    </Toaster>
  );
}
