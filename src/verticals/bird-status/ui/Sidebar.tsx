import { Link } from "@tanstack/react-router";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentProps,
} from "react";

import { Button, buttonVariants } from "#/components/ui/button.tsx";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "#/components/ui/item.tsx";
import { LanguageToggleGroup } from "#/components/ui/language-toggle-group.tsx";
import {
  NativeSelect,
  NativeSelectOption,
} from "#/components/ui/native-select.tsx";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "#/components/ui/popover.tsx";
import { ScrollArea } from "#/components/ui/scroll-area.tsx";
import { Separator } from "#/components/ui/separator.tsx";
import { toast } from "#/components/ui/toast.tsx";
import { cn } from "#/lib/utils.ts";

import { birdSilhouettes } from "../data/birdSilhouettes.ts";
import { birdStatuses } from "../data/birdStatus";
import { computeOutputInfoCode } from "../data/computeOutputInfoCode";
import { getInfoCodeText } from "../data/getInfoCodeText";
import { useLocale, useSetLocale } from "../locale/LocaleContext";
import { uiLocale } from "../locale/uiLocale";
import { useBirdStatus, useSelectedCodes } from "./SelectedCodesContext";

export function BirdStatusSelect({
  className,
  ...props
}: Omit<ComponentProps<typeof NativeSelect>, "value" | "onChange">) {
  const locale = useLocale();
  const { birdStatus, setBirdStatus } = useBirdStatus();

  return (
    <NativeSelect
      value={birdStatus.toString()}
      onChange={(event) => {
        const value = Number(event.target.value);
        const nextStatus = birdStatuses.find((status) => status === value);
        if (nextStatus) {
          setBirdStatus(nextStatus);
        }
      }}
      className={cn("w-full", className)}
      {...props}
    >
      {birdStatuses.map((code) => (
        <NativeSelectOption key={code} value={code.toString()}>
          {code.toString()} – {uiLocale.birdStatus.status[code][locale]}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  );
}

export function StatusCodeCopyButton({ className }: { className?: string }) {
  const locale = useLocale();
  const { selectedCodes } = useSelectedCodes();
  const { birdStatus } = useBirdStatus();

  const outputInfoCode = computeOutputInfoCode([...selectedCodes]);
  const statusCode = Number(
    `${birdStatus}${outputInfoCode.toString().padStart(2, "0")}`,
  );

  const [statusFlashCount, setStatusFlashCount] = useState(0);
  const isFirstStatusFlashRef = useRef(true);

  useEffect(() => {
    if (isFirstStatusFlashRef.current) {
      isFirstStatusFlashRef.current = false;
      return;
    }
    setStatusFlashCount((count) => count + 1);
  }, [selectedCodes, birdStatus]);

  const copyStatusCode = async () => {
    const text = statusCode.toString().padStart(3, "0");
    try {
      await navigator.clipboard.writeText(text);
      toast.add({
        title: uiLocale.output.copiedStatusCode[locale],
        description: text,
        type: "success",
      });
    } catch {
      toast.add({
        title: uiLocale.output.copyFailed[locale],
        description: uiLocale.output.copyFailedDescription[locale],
        type: "error",
      });
    }
  };

  return (
    <button
      key={statusFlashCount}
      type="button"
      onClick={() => {
        void copyStatusCode();
      }}
      className={cn(
        "text-primary-foreground flex size-20 w-full cursor-pointer items-center justify-center rounded-xl font-mono text-4xl font-semibold transition-opacity hover:opacity-90",
        statusFlashCount > 0 && "animate-[flash_0.5s_ease-in-out]",
        className,
      )}
    >
      {statusCode.toString().padStart(3, "0")}
    </button>
  );
}

export function CopyableStatusCode({ className }: { className?: string }) {
  const locale = useLocale();
  const { selectedCodes } = useSelectedCodes();
  const outputInfoCode = computeOutputInfoCode([...selectedCodes]);
  const outputText = getInfoCodeText(outputInfoCode, locale);

  return (
    <div className={cn("space-y-4", className)}>
      <div className="space-y-2">
        <h2 className="text-sm font-semibold">
          {uiLocale.output.outputCode[locale]}
        </h2>
        <div className="flex flex-col gap-2">
          <StatusCodeCopyButton />
          <div className="flex min-w-0 flex-col gap-1">
            <p className="text-sm leading-snug">
              {outputText.shortDescription}
            </p>
            {outputText.longDescription && (
              <details className="text-muted-foreground text-sm leading-snug">
                <summary className="text-primary cursor-pointer text-xs font-medium hover:underline">
                  {uiLocale.output.moreDetails[locale]}
                </summary>
                {outputText.longDescription}
              </details>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function RandomBird() {
  const bird = useMemo(
    () => birdSilhouettes[Math.floor(Math.random() * birdSilhouettes.length)],
    [],
  );

  return (
    <Popover>
      <PopoverTrigger className="mx-auto flex aspect-square w-40 cursor-pointer items-center justify-center rounded-xl p-2">
        <img
          src={bird.imagePath}
          alt={bird.name}
          className="h-full w-full object-contain invert"
        />
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <PopoverHeader>
          <PopoverTitle>{bird.name}</PopoverTitle>
          <PopoverDescription>
            <a
              href={bird.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              View on Wikimedia Commons
            </a>
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}

export function SidebarContent() {
  const locale = useLocale();
  const setLocale = useSetLocale();
  const { selectedCodes, toggleCode, clearCodes } = useSelectedCodes();
  const sortedSelectedCodes = [...selectedCodes];
  // oxlint-disable-next-line unicorn/no-array-sort
  sortedSelectedCodes.sort((a, b) => a - b);

  return (
    <>
      <div className="space-y-3">
        <RandomBird />
        <p className="text-muted-foreground text-sm leading-snug">
          {uiLocale.header.instructions.before[locale]}
          <a
            href="https://www.pwrc.usgs.gov/BBL/Bander_Portal/login/birdstatus.php"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-4"
          >
            {uiLocale.header.instructions.link[locale]}
          </a>
          {uiLocale.header.instructions.after[locale]}
        </p>
      </div>

      <div className="space-y-1">
        <label
          htmlFor="bird-status"
          className="text-muted-foreground text-xs font-medium"
        >
          {uiLocale.birdStatus.selectLabel[locale]}
        </label>
        <BirdStatusSelect id="bird-status" />
      </div>

      <p className="border-destructive/30 bg-destructive/10 rounded-xl border p-2 text-sm">
        {uiLocale.header.featherSamplingsAndCloacalSwabsNotice[locale]}
      </p>

      <CopyableStatusCode />

      <div className="mt-auto space-y-3">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold">
              {uiLocale.output.activeInfoCodes[locale]}
            </h2>
            {selectedCodes.size > 0 && (
              <Button
                variant="ghost"
                size="xs"
                onClick={() => {
                  clearCodes();
                }}
              >
                {uiLocale.output.clearSelections[locale]}
              </Button>
            )}
          </div>
          <ScrollArea className="border-border h-36 rounded-lg border">
            {selectedCodes.size === 0 ? (
              <p className="text-muted-foreground p-2 text-sm">
                {uiLocale.output.noActiveInfoCodes[locale]}
              </p>
            ) : (
              <div className="flex flex-col gap-1 p-2">
                {sortedSelectedCodes.map((code) => {
                  const { shortDescription } = getInfoCodeText(code, locale);
                  return (
                    <Item
                      key={code}
                      size="xs"
                      variant="outline"
                      className="flex-nowrap gap-1 border-none p-px"
                    >
                      <ItemMedia className="flex size-8 items-center justify-center rounded-md font-mono text-sm font-semibold">
                        {code.toString().padStart(2, "0")}
                      </ItemMedia>
                      <ItemContent className="min-w-0">
                        <ItemTitle className="line-clamp-1 truncate text-xs text-ellipsis">
                          {shortDescription}
                        </ItemTitle>
                      </ItemContent>
                      <ItemActions className="shrink-0">
                        <Button
                          variant="destructive"
                          size="xs"
                          onClick={() => {
                            toggleCode(code);
                          }}
                        >
                          {uiLocale.output.removeCode[locale]}
                        </Button>
                      </ItemActions>
                    </Item>
                  );
                })}
              </div>
            )}
          </ScrollArea>
        </div>
        <div className="flex gap-2">
          <Link
            to="/mortalities"
            className={cn(buttonVariants({ variant: "outline" }), "flex-1")}
          >
            {uiLocale.header.mortalityButton[locale]}
          </Link>
          <Separator orientation="vertical" />
          <LanguageToggleGroup
            value={locale}
            onChange={setLocale}
            className="w-full flex-1"
          />
        </div>
        <p className="text-muted-foreground text-center text-xs">
          {uiLocale.header.headerNotice[locale]}
        </p>
        <p className="text-muted-foreground text-center text-xs">
          {uiLocale.header.madeBy[locale]} ·{" "}
          <a
            href="https://github.com/NextMerge/bird-band-status"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-4"
          >
            {uiLocale.header.sourceCode[locale]}
          </a>
        </p>
      </div>
    </>
  );
}

export function Sidebar() {
  return (
    <aside className="flex w-80 shrink-0 flex-col gap-5 overflow-y-auto p-4">
      <SidebarContent />
    </aside>
  );
}
