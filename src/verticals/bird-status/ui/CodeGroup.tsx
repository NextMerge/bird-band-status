import type { InfoCode } from "../data/infoCodes";
import { CodeToggleItem } from "./CodeToggleItem";
import { useSelectedCodes } from "./SelectedCodesContext";

export function CodeGroup({ codes }: { codes: readonly InfoCode[] }) {
  const { selectedCodes, toggleCode } = useSelectedCodes();

  return (
    <div className="gap-1">
      {codes.map((code) => (
        <CodeToggleItem
          key={code}
          code={code}
          pressed={selectedCodes.has(code)}
          onPressedChange={() => toggleCode(code)}
        />
      ))}
    </div>
  );
}
