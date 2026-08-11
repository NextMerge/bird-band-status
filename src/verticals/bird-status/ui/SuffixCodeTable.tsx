import { useState } from "react";

import { ToggleGroup, ToggleGroupItem } from "#/components/ui/toggle-group.tsx";
import { useLocale } from "#/locale/LocaleContext.tsx";
import { uiLocale } from "#/locale/uiLocale.ts";

import { suffixCategories } from "../data/suffixCategories";
import { type SuffixCode, suffixCodes } from "../data/suffixCodes";
import { CodeToggleItem } from "./CodeToggleItem";
import {
  usePrefixCode,
  useSelectedSuffixCodes,
} from "./SelectedSuffixCodesContext";

const categoryOptions = ["All", ...suffixCategories] as const;

export function SuffixCodeTable({ codes }: { codes: readonly SuffixCode[] }) {
  const { selectedSuffixCodes, toggleSuffixCode } = useSelectedSuffixCodes();
  const { prefixCode } = usePrefixCode();
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredCodes =
    selectedCategory === "All"
      ? codes
      : codes.filter((code) => suffixCodes[code].category === selectedCategory);

  return (
    <div className="flex flex-col gap-1">
      <ToggleGroup
        value={[selectedCategory]}
        onValueChange={(next) => {
          if (next[0]) {
            setSelectedCategory(next[0]);
          }
        }}
        variant="outline"
        className="flex-wrap"
      >
        {categoryOptions.map((category) => (
          <ToggleGroupItem key={category} value={category}>
            {uiLocale.table.category[category][locale]}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      {filteredCodes.map((code) => (
        <CodeToggleItem
          key={code}
          code={code}
          prefixCode={prefixCode}
          pressed={selectedSuffixCodes.has(code)}
          onPressedChange={() => {
            toggleSuffixCode(code);
          }}
        />
      ))}
    </div>
  );
}
