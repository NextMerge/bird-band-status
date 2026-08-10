import { Bird } from "lucide-react";
import { useState } from "react";

import { Button } from "#/components/ui/button.tsx";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "#/components/ui/item.tsx";
import {
  NativeSelect,
  NativeSelectOption,
} from "#/components/ui/native-select.tsx";

import { birdStatuses, defaultBirdStatus } from "../data/birdStatus";
import { computeOutputInfoCode } from "../data/computeOutputInfoCode";
import { getInfoCodeText } from "../data/getInfoCodeText";
import { useLocale } from "../locale/LocaleContext";
import { uiLocale } from "../locale/uiLocale";
import { useSelectedCodes } from "./SelectedCodesContext";

export function Sidebar() {
  const locale = useLocale();
  const { selectedCodes, toggleCode } = useSelectedCodes();

  // ponytail: bird status is local state only used to build the displayed status code; it does not yet filter or validate the available info codes.
  const [birdStatus, setBirdStatus] = useState(defaultBirdStatus);

  const outputInfoCode = computeOutputInfoCode([...selectedCodes]);
  const outputText = getInfoCodeText(outputInfoCode, locale);
  const statusCode = Number(
    `${birdStatus}${outputInfoCode.toString().padStart(2, "0")}`,
  );

  const sortedSelectedCodes = [...selectedCodes];
  // oxlint-disable-next-line unicorn/no-array-sort
  sortedSelectedCodes.sort((a, b) => a - b);

  return (
    <aside className="flex w-80 shrink-0 flex-col gap-5 overflow-y-auto p-4">
      <div className="space-y-3">
        <div className="border-border bg-muted/20 flex aspect-square w-24 items-center justify-center rounded-xl border border-dashed">
          <Bird className="text-muted-foreground size-10" />
        </div>
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
        <NativeSelect
          id="bird-status"
          value={birdStatus.toString()}
          onChange={(event) => {
            setBirdStatus(Number(event.target.value));
          }}
          className="w-full"
        >
          {birdStatuses.map((code) => (
            <NativeSelectOption key={code} value={code.toString()}>
              {code.toString().padStart(2, "0")} –{" "}
              {uiLocale.birdStatus.status[code][locale]}
            </NativeSelectOption>
          ))}
        </NativeSelect>
      </div>

      <p className="border-destructive/30 bg-destructive/10 rounded-xl border p-2 text-sm">
        {uiLocale.header.featherSamplingsAndCloacalSwabsNotice[locale]}
      </p>

      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-sm font-semibold">
            {uiLocale.output.outputCode[locale]}
          </h2>
          <div className="flex items-center gap-3">
            <span className="bg-primary text-primary-foreground flex size-12 shrink-0 items-center justify-center rounded-md font-mono text-2xl font-semibold">
              {statusCode.toString().padStart(3, "0")}
            </span>
            <p className="text-sm leading-snug">
              {outputText.shortDescription}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-sm font-semibold">
            {uiLocale.output.activeInfoCodes[locale]}
          </h2>
          {selectedCodes.size === 0 ? (
            <p className="text-muted-foreground text-sm">
              {uiLocale.output.noActiveInfoCodes[locale]}
            </p>
          ) : (
            <div className="flex flex-col gap-1">
              {sortedSelectedCodes.map((code) => {
                const { shortDescription } = getInfoCodeText(code, locale);
                return (
                  <Item
                    key={code}
                    size="xs"
                    variant="outline"
                    className="gap-1 border-none p-px"
                  >
                    <ItemMedia className="flex size-8 items-center justify-center rounded-md font-mono text-sm font-semibold">
                      {code.toString().padStart(2, "0")}
                    </ItemMedia>
                    <ItemContent className="min-w-0">
                      <ItemTitle className="line-clamp-1 truncate text-xs text-ellipsis">
                        {shortDescription}
                      </ItemTitle>
                    </ItemContent>
                    <ItemActions>
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
        </div>
      </div>

      <p className="text-muted-foreground mt-auto text-center text-xs">
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
    </aside>
  );
}
