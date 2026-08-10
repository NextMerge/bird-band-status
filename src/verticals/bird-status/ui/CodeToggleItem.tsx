import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "#/components/ui/item.tsx";
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
      className="aria-pressed:border-primary aria-pressed:bg-primary/10 h-auto justify-start whitespace-normal"
    >
      <div className="flex gap-1">
        <pre className="font-mono text-2xl">
          {code.toString().padStart(2, "0")}
        </pre>
        <div className="flex flex-col items-start">
          <span className="group-aria-pressed/toggle:text-foreground flex text-start">
            {shortDescription}
          </span>
          <span className="line-clamp-none text-sm opacity-70">
            {longDescription}
          </span>
        </div>
      </div>
    </Toggle>
  );
}
