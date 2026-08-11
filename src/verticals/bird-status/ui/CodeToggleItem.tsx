import { useMemo, useRef } from "react";

import { Separator } from "#/components/ui/separator.tsx";
import { Toggle } from "#/components/ui/toggle.tsx";
import { useLocale } from "#/locale/LocaleContext.tsx";
import { uiLocale } from "#/locale/uiLocale.ts";

import { getSuffixCodeText } from "../data/getSuffixCodeText";
import type { PrefixCode } from "../data/prefixCode";
import {
  type SuffixCode,
  isCodeAllowedWithPrefixCode,
  suffixCodes,
} from "../data/suffixCodes";
import { renderSuffixCode } from "../utils/renderSuffixCode";

type CodeToggleItemProps = {
  code: SuffixCode;
  prefixCode: PrefixCode;
  pressed: boolean;
  onPressedChange: (pressed: boolean) => void;
};

export function CodeToggleItem({
  code,
  prefixCode,
  pressed,
  onPressedChange,
}: CodeToggleItemProps) {
  const locale = useLocale();
  const { shortDescription, longDescription } = getSuffixCodeText(code, locale);
  const mouseToggled = useRef(false);

  const disabledReason = useMemo(() => {
    if (isCodeAllowedWithPrefixCode(code, prefixCode)) {
      return null;
    }
    const entry = suffixCodes[code];
    if (entry.canOnlyBeUsedWithPrefixCode) {
      return {
        type: "canOnlyBeUsedWith" as const,
        statuses: entry.canOnlyBeUsedWithPrefixCode,
      };
    }
    return { type: "canNotBeUsedWith" as const, status: prefixCode };
  }, [code, prefixCode]);
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
          {renderSuffixCode(code)}
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
