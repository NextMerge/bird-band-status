import { createFileRoute } from "@tanstack/react-router";

import { Toaster } from "#/components/ui/toast.tsx";

import { suffixCodeList } from "../verticals/bird-status/data/suffixCodes";
import { SelectedSuffixCodesProvider } from "../verticals/bird-status/ui/SelectedSuffixCodesContext";
import { SuffixCodeTable } from "../verticals/bird-status/ui/SuffixCodeTable";
import { MobileBottomBar } from "../verticals/sidebar/ui/MobileBottomBar";
import { Sidebar } from "../verticals/sidebar/ui/Sidebar";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <Toaster>
      <SelectedSuffixCodesProvider>
        <div className="flex h-dvh overscroll-none bg-[oklch(0.16_0.025_326)]">
          <div className="hidden h-full w-full md:flex">
            <Sidebar />
            <main className="bg-card mt-3 flex-1 overflow-auto rounded-tl-2xl border">
              <div className="mx-auto h-full max-w-300 p-6 pt-3">
                <SuffixCodeTable codes={suffixCodeList} />
              </div>
            </main>
          </div>
          <div className="flex h-full w-full flex-col md:hidden">
            <main className="bg-card flex-1 overflow-auto p-3">
              <SuffixCodeTable codes={suffixCodeList} />
            </main>
            <MobileBottomBar />
          </div>
        </div>
      </SelectedSuffixCodesProvider>
    </Toaster>
  );
}
