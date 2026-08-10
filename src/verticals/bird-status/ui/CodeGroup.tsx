import { useState } from "react";

import { ItemGroup } from "#/components/ui/item.tsx";

import type { InfoCode } from "../data/infoCodes";
import { CodeToggleItem } from "./CodeToggleItem";

export function CodeGroup({ codes }: { codes: readonly InfoCode[] }) {
  const [selected, setSelected] = useState<Set<InfoCode>>(new Set());

  return (
    <ItemGroup>
      {codes.map((code) => (
        <CodeToggleItem
          key={code}
          code={code}
          pressed={selected.has(code)}
          onPressedChange={(pressed) => {
            setSelected((prev) => {
              const next = new Set(prev);
              if (pressed) {
                next.add(code);
              } else {
                next.delete(code);
              }
              return next;
            });
          }}
        />
      ))}
    </ItemGroup>
  );
}
