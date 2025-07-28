import { Notice } from "@/components/Notice";
import { Tile } from "@/components/Tile";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  birdStatuses,
  type BirdStatusCode,
} from "@/features/feature-bird-status/data/birdStatus";
import { getInfoCodeText } from "@/features/feature-bird-status/data/getInfoCodeText";
import type {
  AuxVariantInfoCode,
  InfoCode,
} from "@/features/feature-bird-status/data/infoCodes";
import { useRouteContext } from "@tanstack/react-router";

type OutputCalculatorProps = {
  birdStatus: BirdStatusCode;
  onBirdStatusChange: (status: BirdStatusCode) => void;
  activeInfoCodes: InfoCode[];
  outputStatusCode: string;
  outputInfoCode: InfoCode | AuxVariantInfoCode | 0 | 25 | 85;
};

export function OutputCalculator(props: OutputCalculatorProps) {
  const { getText, t } = useRouteContext({ from: "/" });

  return (
    <Tile className="h-full p-6">
      <div className="space-y-6">
        <Select
          value={props.birdStatus.toString()}
          onValueChange={(value) => {
            const parsedValue = parseInt(value) as BirdStatusCode;
            if (birdStatuses.includes(parsedValue)) {
              props.onBirdStatusChange(parsedValue);
            }
          }}
        >
          <SelectTrigger className="border-white/20 bg-white/10 text-white">
            <SelectValue placeholder={getText(t.common.selectStatusCode)} />
          </SelectTrigger>
          <SelectContent className="border-white/20 bg-slate-900">
            {birdStatuses.map((status) => (
              <SelectItem
                key={status}
                value={status.toString()}
                className="text-white hover:bg-white/10"
              >
                {status.toString()} - {getText(t.birdStatus[status].title)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="space-y-4">
          <div className="text-center">
            <div className="text-sm text-gray-300">
              {getText(t.common.outputCode)}
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-help font-mono text-4xl font-bold text-pink-400">
                  {props.outputStatusCode}
                </div>
              </TooltipTrigger>
              <TooltipContent side="left" className="max-w-sm">
                <div className="space-y-3">
                  <div className="border-b border-white/20 pb-2 font-semibold text-white">
                    Active Info Codes:
                  </div>
                  {props.activeInfoCodes.length === 0 ? (
                    <div className="text-sm text-gray-400 italic">
                      No active info codes
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {[...props.activeInfoCodes]
                        .sort((a, b) => a - b)
                        .map((code) => {
                          const text = getInfoCodeText(code, "en");
                          return (
                            <div key={code} className="flex gap-2 text-sm">
                              <span className="min-w-[2rem] font-mono font-semibold text-pink-300">
                                {code.toString().padStart(2, "0")}:
                              </span>
                              <span className="text-gray-200">
                                {text.shortDescription}
                              </span>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              </TooltipContent>
            </Tooltip>
          </div>

          <Notice>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-white">
                {getInfoCodeText(props.outputInfoCode, "en").shortDescription}
              </div>
              {getInfoCodeText(props.outputInfoCode, "en").longDescription && (
                <div className="text-xs leading-relaxed text-gray-300">
                  {getInfoCodeText(props.outputInfoCode, "en").longDescription}
                </div>
              )}
            </div>
          </Notice>
        </div>
      </div>
    </Tile>
  );
}
