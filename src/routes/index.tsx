import { createFileRoute } from "@tanstack/react-router";
import { Menu } from "lucide-react";

import { Button } from "#/components/ui/button.tsx";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "#/components/ui/drawer.tsx";
import { Toaster } from "#/components/ui/toast.tsx";

import { computeOutputInfoCode } from "../verticals/bird-status/data/computeOutputInfoCode";
import { infoCodeList } from "../verticals/bird-status/data/infoCodes";
import { useLocale } from "../verticals/bird-status/locale/LocaleContext";
import { uiLocale } from "../verticals/bird-status/locale/uiLocale";
import { CodeGroup } from "../verticals/bird-status/ui/CodeGroup";
import {
  SelectedCodesProvider,
  useBirdStatus,
  useSelectedCodes,
} from "../verticals/bird-status/ui/SelectedCodesContext";
import {
  BirdStatusSelect,
  Sidebar,
  SidebarContent,
} from "../verticals/bird-status/ui/Sidebar";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <Toaster>
      <SelectedCodesProvider>
        <div className="flex h-dvh overscroll-none bg-[oklch(0.16_0.025_326)]">
          <div className="hidden h-full w-full md:flex">
            <Sidebar />
            <main className="bg-card mt-3 flex-1 overflow-auto rounded-tl-2xl border">
              <div className="mx-auto h-full max-w-300 p-6 pt-3">
                <CodeGroup codes={infoCodeList} />
              </div>
            </main>
          </div>
          <div className="flex h-full w-full flex-col md:hidden">
            <main className="bg-card flex-1 overflow-auto p-3">
              <CodeGroup codes={infoCodeList} />
            </main>
            <MobileBottomBar />
          </div>
        </div>
      </SelectedCodesProvider>
    </Toaster>
  );
}

function MobileBottomBar() {
  const locale = useLocale();
  const { birdStatus } = useBirdStatus();
  const { selectedCodes } = useSelectedCodes();
  const statusCode = `${birdStatus}${computeOutputInfoCode([...selectedCodes])
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="bg-card flex shrink-0 items-center gap-2 border-t p-2">
      <BirdStatusSelect
        aria-label={uiLocale.birdStatus.selectLabel[locale]}
        className="min-w-0 flex-1"
      />
      <Drawer showSwipeHandle>
        <DrawerTrigger
          render={
            <Button
              className="relative h-10 flex-1"
              aria-label={uiLocale.header.mobileDrawerTitle[locale]}
            >
              <span className="flex-1 text-center font-mono text-xl font-semibold">
                {statusCode}
              </span>
              <Menu className="absolute top-1/2 right-3 size-4 -translate-y-1/2" />
            </Button>
          }
        />
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              {uiLocale.header.mobileDrawerTitle[locale]}
            </DrawerTitle>
            <DrawerDescription>
              {uiLocale.header.mobileDrawerDescription[locale]}
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-4">
            <SidebarContent />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
