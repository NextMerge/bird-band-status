import { ToggleGroup, ToggleGroupItem } from "#/components/ui/toggle-group.tsx";

function LanguageToggleGroup({
  value,
  onChange,
  className,
}: {
  value: "en" | "fr";
  onChange: (value: "en" | "fr") => void;
  className?: string;
}) {
  return (
    <ToggleGroup
      value={[value]}
      onValueChange={(next) => {
        if (next[0]) onChange(next[0] as "en" | "fr");
      }}
      className={className}
      variant="outline"
    >
      <ToggleGroupItem value="en" className="flex-1">
        EN
      </ToggleGroupItem>
      <ToggleGroupItem value="fr" className="flex-1">
        FR
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export { LanguageToggleGroup };
