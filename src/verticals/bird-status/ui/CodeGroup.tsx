import { useState } from "react";

import { ToggleGroup, ToggleGroupItem } from "#/components/ui/toggle-group.tsx";

import { infoCategories } from "../data/infoCategories";
import { infoCodes, type InfoCode } from "../data/infoCodes";
import { useLocale } from "../locale/LocaleContext";
import { uiLocale } from "../locale/uiLocale";
import { CodeToggleItem } from "./CodeToggleItem";
import { useBirdStatus, useSelectedCodes } from "./SelectedCodesContext";

const categoryOptions = ["All", ...infoCategories] as const;

export function CodeGroup({ codes }: { codes: readonly InfoCode[] }) {
  const { selectedCodes, toggleCode } = useSelectedCodes();
  const { birdStatus } = useBirdStatus();
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredCodes =
    selectedCategory === "All"
      ? codes
      : codes.filter((code) => infoCodes[code].category === selectedCategory);

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
          birdStatus={birdStatus}
          pressed={selectedCodes.has(code)}
          onPressedChange={() => {
            toggleCode(code);
          }}
        />
      ))}
    </div>
  );
}
