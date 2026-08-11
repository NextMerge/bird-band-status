import { cn } from "#/lib/utils.ts";
import { useLocale } from "#/locale/LocaleContext.tsx";
import { uiLocale } from "#/locale/uiLocale.ts";

import { computeOutputSuffixCode } from "../../bird-status/data/computeOutputSuffixCode";
import { getSuffixCodeText } from "../../bird-status/data/getSuffixCodeText";
import { useSelectedSuffixCodes } from "../../bird-status/ui/SelectedSuffixCodesContext";
import { FullCodeCopyButton } from "./FullCodeCopyButton";

export function FullCodeOutput({ className }: { className?: string }) {
  const locale = useLocale();
  const { selectedSuffixCodes } = useSelectedSuffixCodes();
  const outputSuffixCode = computeOutputSuffixCode([...selectedSuffixCodes]);
  const outputText = getSuffixCodeText(outputSuffixCode, locale);

  return (
    <div className={cn("space-y-4", className)}>
      <div className="space-y-2">
        <h2 className="text-sm font-semibold">
          {uiLocale.output.outputCode[locale]}
        </h2>
        <div className="flex flex-col gap-2">
          <FullCodeCopyButton />
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
