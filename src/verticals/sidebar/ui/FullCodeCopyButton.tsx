import { useEffect, useRef, useState } from "react";

import { toast } from "#/components/ui/toast.tsx";
import { cn } from "#/lib/utils.ts";
import { useLocale } from "#/locale/LocaleContext.tsx";
import { uiLocale } from "#/locale/uiLocale.ts";

import { computeOutputSuffixCode } from "../../bird-status/data/computeOutputSuffixCode";
import {
  usePrefixCode,
  useSelectedSuffixCodes,
} from "../../bird-status/ui/SelectedSuffixCodesContext";
import { renderSuffixCode } from "../../bird-status/utils/renderSuffixCode";

export function FullCodeCopyButton({ className }: { className?: string }) {
  const locale = useLocale();
  const { selectedSuffixCodes } = useSelectedSuffixCodes();
  const { prefixCode } = usePrefixCode();

  const outputSuffixCode = computeOutputSuffixCode([...selectedSuffixCodes]);
  const statusCode = Number(
    `${prefixCode}${renderSuffixCode(outputSuffixCode)}`,
  );

  const [statusFlashCount, setStatusFlashCount] = useState(0);
  const isFirstStatusFlashRef = useRef(true);

  useEffect(() => {
    if (isFirstStatusFlashRef.current) {
      isFirstStatusFlashRef.current = false;
      return;
    }
    setStatusFlashCount((count) => count + 1);
  }, [selectedSuffixCodes, prefixCode]);

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
