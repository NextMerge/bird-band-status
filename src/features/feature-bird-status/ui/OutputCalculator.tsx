import { Tile } from "@/components/Tile";
import type { BirdStatusCode } from "@/features/feature-bird-status/data/birdStatus";
import type {
  AuxVariantInfoCode,
  InfoCode,
} from "@/features/feature-bird-status/data/infoCodes";
import { OutputContent } from "./OutputContent";

type OutputCalculatorProps = {
  birdStatus: BirdStatusCode;
  onBirdStatusChange: (status: BirdStatusCode) => void;
  activeInfoCodes: InfoCode[];
  onClearInfoCodes: () => void;
  outputStatusCode: string;
  outputInfoCode: InfoCode | AuxVariantInfoCode | 0 | 25 | 85;
};

export function OutputCalculator(props: OutputCalculatorProps) {
  return (
    <Tile className="h-full p-6">
      <OutputContent
        birdStatus={props.birdStatus}
        onBirdStatusChange={props.onBirdStatusChange}
        activeInfoCodes={props.activeInfoCodes}
        onClearInfoCodes={props.onClearInfoCodes}
        outputStatusCode={props.outputStatusCode}
        outputInfoCode={props.outputInfoCode}
      />
    </Tile>
  );
}
