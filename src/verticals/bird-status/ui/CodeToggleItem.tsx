import { useMemo, useRef } from "react";

import { Separator } from "#/components/ui/separator.tsx";
import { Toggle } from "#/components/ui/toggle.tsx";

import type { BirdStatusCode } from "../data/birdStatus";
import { getInfoCodeText } from "../data/getInfoCodeText";
import {
  type InfoCode,
  infoCodes,
  isCodeAllowedWithBirdStatus,
} from "../data/infoCodes";
import { useLocale } from "../locale/LocaleContext";
import { uiLocale } from "../locale/uiLocale";

type CodeToggleItemProps = {
  code: InfoCode;
  birdStatus: BirdStatusCode;
  pressed: boolean;
  onPressedChange: (pressed: boolean) => void;
};

export function CodeToggleItem({
  code,
  birdStatus,
  pressed,
  onPressedChange,
}: CodeToggleItemProps) {
  const locale = useLocale();
  const { shortDescription, longDescription } = getInfoCodeText(code, locale);
  const mouseToggled = useRef(false);

  const disabledReason = useMemo(() => {
    if (isCodeAllowedWithBirdStatus(code, birdStatus)) {
      return null;
    }
    const entry = infoCodes[code];
    if (entry.canOnlyBeUsedWithBirdStatus) {
      return {
        type: "canOnlyBeUsedWith" as const,
        statuses: entry.canOnlyBeUsedWithBirdStatus,
      };
    }
    return { type: "canNotBeUsedWith" as const, status: birdStatus };
  }, [code, birdStatus]);
  const disabled = disabledReason !== null;

  return (
    <div className="flex flex-col gap-px pt-px">
      <Toggle
        pressed={pressed}
        disabled={disabled}
        onPressedChange={(p) => {
          if (mouseToggled.current) {
            mouseToggled.current = false;
            return;
          }
          if (disabled) {
            return;
          }
          onPressedChange(p);
        }}
        onMouseDown={() => {
          if (disabled) {
            return;
          }
          mouseToggled.current = true;
          onPressedChange(!pressed);
        }}
        className="aria-pressed:border-primary aria-pressed:bg-primary/10 grid h-auto w-full cursor-pointer grid-cols-[auto_1fr] items-start gap-x-3 gap-y-0.5 overflow-hidden rounded-sm px-3 py-1 text-start whitespace-normal lg:grid-cols-[auto_3fr_5fr]"
      >
        <span className="bg-muted text-muted-foreground group-aria-pressed/toggle:bg-primary group-aria-pressed/toggle:text-primary-foreground flex size-12 shrink-0 items-center justify-center rounded-md font-mono text-2xl font-semibold">
          {code.toString().padStart(2, "0")}
        </span>
        <span className="group-aria-pressed/toggle:text-foreground text-sm font-medium">
          {shortDescription}
        </span>
        {longDescription ? (
          <span className="text-muted-foreground group-aria-pressed/toggle:text-foreground col-start-2 text-sm leading-snug lg:col-start-3">
            {longDescription}
          </span>
        ) : null}
      </Toggle>
      {disabledReason ? (
        <p className="text-muted-foreground px-3 py-1 text-xs">
          {disabledReason.type === "canOnlyBeUsedWith"
            ? uiLocale.codeToggle.disabledNote.canOnlyBeUsedWith[locale](
                code,
                disabledReason.statuses,
              )
            : uiLocale.codeToggle.disabledNote.canNotBeUsedWith[locale](
                code,
                disabledReason.status,
              )}
        </p>
      ) : null}
      <Separator />
    </div>
  );
}
