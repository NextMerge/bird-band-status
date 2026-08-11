import { Link } from "@tanstack/react-router";

import { Button, buttonVariants } from "#/components/ui/button.tsx";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "#/components/ui/item.tsx";
import { LanguageToggleGroup } from "#/components/ui/language-toggle-group.tsx";
import { ScrollArea } from "#/components/ui/scroll-area.tsx";
import { Separator } from "#/components/ui/separator.tsx";
import { cn } from "#/lib/utils.ts";
import { useLocale, useSetLocale } from "#/locale/LocaleContext.tsx";
import { uiLocale } from "#/locale/uiLocale.ts";

import { getSuffixCodeText } from "../../bird-status/data/getSuffixCodeText";
import { useSelectedSuffixCodes } from "../../bird-status/ui/SelectedSuffixCodesContext";
import { renderSuffixCode } from "../../bird-status/utils/renderSuffixCode";
import { FullCodeOutput } from "./FullCodeOutput";
import { PrefixCodeSelect } from "./PrefixCodeSelect";
import { RandomBird } from "./RandomBird";

export function SidebarContent({ inDrawer }: { inDrawer?: boolean }) {
  const locale = useLocale();
  const setLocale = useSetLocale();
  const { selectedSuffixCodes, toggleSuffixCode, clearSuffixCodes } =
    useSelectedSuffixCodes();
  const sortedSelectedSuffixCodes = [...selectedSuffixCodes];
  // oxlint-disable-next-line unicorn/no-array-sort
  sortedSelectedSuffixCodes.sort((a, b) => a - b);

  return (
    <>
      <div className="space-y-3">
        <RandomBird className={inDrawer ? "w-24" : undefined} />
        <p className="text-muted-foreground text-sm leading-snug">
          {inDrawer
            ? uiLocale.header.instructions.beforeDrawer[locale]
            : uiLocale.header.instructions.before[locale]}
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
          htmlFor="prefix-code"
          className="text-muted-foreground text-xs font-medium"
        >
          {uiLocale.birdStatus.selectLabel[locale]}
        </label>
        <PrefixCodeSelect id="prefix-code" />
      </div>

      <p className="border-destructive/30 bg-destructive/10 rounded-xl border p-2 text-sm">
        {uiLocale.header.featherSamplingsAndCloacalSwabsNotice[locale]}
      </p>

      <FullCodeOutput />

      <div className="mt-auto space-y-3">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold">
              {uiLocale.output.activeInfoCodes[locale]}
            </h2>
            {selectedSuffixCodes.size > 0 && (
              <Button
                variant="ghost"
                size="xs"
                onClick={() => {
                  clearSuffixCodes();
                }}
              >
                {uiLocale.output.clearSelections[locale]}
              </Button>
            )}
          </div>
          <ScrollArea className="border-border h-36 rounded-lg border">
            {selectedSuffixCodes.size === 0 ? (
              <p className="text-muted-foreground p-2 text-sm">
                {uiLocale.output.noActiveInfoCodes[locale]}
              </p>
            ) : (
              <div className="flex flex-col gap-1 p-2">
                {sortedSelectedSuffixCodes.map((code) => {
                  const { shortDescription } = getSuffixCodeText(code, locale);
                  return (
                    <Item
                      key={code}
                      size="xs"
                      variant="outline"
                      className="flex-nowrap gap-1 border-none p-px"
                    >
                      <ItemMedia className="flex size-8 items-center justify-center rounded-md font-mono text-sm font-semibold">
                        {renderSuffixCode(code)}
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
                            toggleSuffixCode(code);
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
