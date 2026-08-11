import type { ComponentProps } from "react";

import {
  NativeSelect,
  NativeSelectOption,
} from "#/components/ui/native-select.tsx";
import { cn } from "#/lib/utils.ts";
import { useLocale } from "#/locale/LocaleContext.tsx";
import { uiLocale } from "#/locale/uiLocale.ts";

import { prefixCodes } from "../../bird-status/data/prefixCode";
import { usePrefixCode } from "../../bird-status/ui/SelectedSuffixCodesContext";

export function PrefixCodeSelect({
  className,
  ...props
}: Omit<ComponentProps<typeof NativeSelect>, "value" | "onChange">) {
  const locale = useLocale();
  const { prefixCode, setPrefixCode } = usePrefixCode();

  return (
    <NativeSelect
      value={prefixCode.toString()}
      onChange={(event) => {
        const value = Number(event.target.value);
        const nextCode = prefixCodes.find((code) => code === value);
        if (nextCode) {
          setPrefixCode(nextCode);
        }
      }}
      className={cn("w-full", className)}
      {...props}
    >
      {prefixCodes.map((code) => (
        <NativeSelectOption key={code} value={code.toString()}>
          {code.toString()} – {uiLocale.birdStatus.status[code][locale]}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  );
}
