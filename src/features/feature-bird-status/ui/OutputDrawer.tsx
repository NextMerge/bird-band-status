import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import type { BirdStatusCode } from "@/features/feature-bird-status/data/birdStatus";
import type {
  AuxVariantInfoCode,
  InfoCode,
} from "@/features/feature-bird-status/data/infoCodes";
import { useRouteContext } from "@tanstack/react-router";
import { ChevronUpIcon } from "lucide-react";
import { OutputContent } from "./OutputContent";

type OutputDrawerProps = {
  birdStatus: BirdStatusCode;
  onBirdStatusChange: (status: BirdStatusCode) => void;
  activeInfoCodes: InfoCode[];
  onClearInfoCodes: () => void;
  outputStatusCode: string;
  outputInfoCode: InfoCode | AuxVariantInfoCode | 0 | 25 | 85;
};

export function OutputDrawer(props: OutputDrawerProps) {
  const { getText, t } = useRouteContext({ from: "/" });

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="fixed right-0 bottom-0 left-0 flex items-center justify-between border-t border-slate-700 bg-slate-800 p-4 text-white transition-colors hover:bg-slate-700">
          <div className="flex w-full items-center justify-center gap-3">
            <div className="text-sm text-gray-300">
              {getText(t.output.outputCode)}
            </div>
            <div className="font-mono text-2xl font-bold text-pink-400">
              {props.outputStatusCode}
            </div>
          </div>
          <ChevronUpIcon className="h-5 w-5 text-gray-400" />
        </button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <div className="p-4">
            <OutputContent
              birdStatus={props.birdStatus}
              onBirdStatusChange={props.onBirdStatusChange}
              activeInfoCodes={props.activeInfoCodes}
              onClearInfoCodes={props.onClearInfoCodes}
              outputStatusCode={props.outputStatusCode}
              outputInfoCode={props.outputInfoCode}
            />
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">{getText(t.output.closeDrawer)}</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
