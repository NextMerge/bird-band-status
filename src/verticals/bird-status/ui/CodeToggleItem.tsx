import { Toggle } from "#/components/ui/toggle.tsx";

import { getInfoCodeText } from "../data/getInfoCodeText";
import type { InfoCode } from "../data/infoCodes";
import { useLocale } from "../locale/LocaleContext";

type CodeToggleItemProps = {
  code: InfoCode;
  pressed: boolean;
  onPressedChange: (pressed: boolean) => void;
};

export function CodeToggleItem({
  code,
  pressed,
  onPressedChange,
}: CodeToggleItemProps) {
  const locale = useLocale();
  const { shortDescription, longDescription } = getInfoCodeText(code, locale);

  return (
    <Toggle
      pressed={pressed}
      onPressedChange={onPressedChange}
      className="aria-pressed:border-primary aria-pressed:bg-primary/10 h-auto w-full cursor-pointer items-start justify-start gap-3 overflow-hidden border px-4 py-3 text-start"
    >
      <span className="bg-muted text-muted-foreground group-aria-pressed/toggle:bg-primary group-aria-pressed/toggle:text-primary-foreground flex size-10 shrink-0 items-center justify-center rounded-lg font-mono text-lg font-semibold">
        {code.toString().padStart(2, "0")}
      </span>
      <span className="flex min-w-0 flex-col gap-2 text-wrap">
        <span className="group-aria-pressed/toggle:text-foreground text-sm font-medium">
          {shortDescription}
        </span>
        <span className="text-muted-foreground group-aria-pressed/toggle:text-foreground text-sm opacity-80">
          {longDescription}
        </span>
      </span>
    </Toggle>
  );
}
