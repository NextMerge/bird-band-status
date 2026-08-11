import { Menu } from "lucide-react";
import type { ComponentProps } from "react";

import { Button } from "#/components/ui/button.tsx";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "#/components/ui/drawer.tsx";
import { useLocale } from "#/locale/LocaleContext.tsx";
import { uiLocale } from "#/locale/uiLocale.ts";

import { computeOutputSuffixCode } from "../../bird-status/data/computeOutputSuffixCode";
import {
  usePrefixCode,
  useSelectedSuffixCodes,
} from "../../bird-status/ui/SelectedSuffixCodesContext";
import { renderSuffixCode } from "../../bird-status/utils/renderSuffixCode";
import { PrefixCodeSelect } from "./PrefixCodeSelect";
import { SidebarContent } from "./SidebarContent";

function OpenSidebarDrawerButton(props: ComponentProps<typeof Button>) {
  const locale = useLocale();
  const { prefixCode } = usePrefixCode();
  const { selectedSuffixCodes } = useSelectedSuffixCodes();
  const statusCode = `${prefixCode}${renderSuffixCode(computeOutputSuffixCode([...selectedSuffixCodes]))}`;

  return (
    <Button
      {...props}
      className="relative h-10 flex-1"
      aria-label={uiLocale.header.mobileDrawerTitle[locale]}
    >
      <span className="flex-1 text-center font-mono text-xl font-semibold">
        {statusCode}
      </span>
      <Menu className="absolute top-1/2 right-3 size-4 -translate-y-1/2" />
    </Button>
  );
}

export function MobileBottomBar() {
  const locale = useLocale();

  return (
    <div className="bg-card flex shrink-0 items-center gap-2 border-t p-2">
      <PrefixCodeSelect
        aria-label={uiLocale.birdStatus.selectLabel[locale]}
        className="min-w-0 flex-1"
      />
      <Drawer showSwipeHandle>
        <DrawerTrigger render={<OpenSidebarDrawerButton />} />
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{uiLocale.meta.title[locale]}</DrawerTitle>
            <DrawerDescription>
              {uiLocale.meta.description[locale]}
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-4">
            <SidebarContent inDrawer />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
