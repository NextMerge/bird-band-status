import { Notice } from "@/components/Notice";
import { Button } from "@/components/ui/button";
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

type OutputContentProps = {
  birdStatus: BirdStatusCode;
  onBirdStatusChange: (status: BirdStatusCode) => void;
  activeInfoCodes: InfoCode[];
  onClearInfoCodes: () => void;
  outputStatusCode: string;
  outputInfoCode: InfoCode | AuxVariantInfoCode | 0 | 25 | 85;
};

export function OutputContent(props: OutputContentProps) {
  const { getText, t, language } = useRouteContext({ from: "/" });

  const outputCodeElement = (
    <div className="font-mono text-[4rem] font-bold text-pink-400">
      {props.outputStatusCode}
    </div>
  );

  return (
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
          <SelectValue placeholder={getText(t.output.selectStatusCode)} />
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
            {getText(t.output.outputCode)}
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="cursor-help">{outputCodeElement}</div>
            </TooltipTrigger>
            <TooltipContent side="left" className="max-w-sm">
              <div className="space-y-3">
                <div className="border-b border-white/20 pb-2 font-semibold text-white">
                  {getText(t.output.activeInfoCodes)}
                </div>
                {props.activeInfoCodes.length === 0 ? (
                  <div className="text-sm text-gray-400 italic">
                    {getText(t.output.noActiveInfoCodes)}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {[...props.activeInfoCodes]
                      .sort((a, b) => a - b)
                      .map((code) => {
                        const text = getInfoCodeText(code, language);
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
              {getInfoCodeText(props.outputInfoCode, language).shortDescription}
            </div>
            {getInfoCodeText(props.outputInfoCode, language)
              .longDescription && (
              <div className="text-xs leading-relaxed text-gray-300">
                {
                  getInfoCodeText(props.outputInfoCode, language)
                    .longDescription
                }
              </div>
            )}
          </div>
        </Notice>

        {(props.activeInfoCodes.length > 0 || props.birdStatus !== 3) && (
          <div className="flex justify-center pt-2">
            <Button
              onClick={() => {
                props.onBirdStatusChange(3);
                props.onClearInfoCodes();
              }}
              variant="outline"
              size="sm"
              className="border-red-500/50 text-xs text-red-400 hover:border-red-400 hover:bg-red-500/10 hover:text-red-300"
            >
              {getText(t.output.clearSelections)}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
