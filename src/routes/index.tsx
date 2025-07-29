import {
  defaultBirdStatus,
  type BirdStatusCode,
} from "@/features/feature-bird-status/data/birdStatus";
import { computeOutputInfoCode } from "@/features/feature-bird-status/data/computeOutputInfoCode";
import { type InfoCategory } from "@/features/feature-bird-status/data/infoCategories";
import type { InfoCode } from "@/features/feature-bird-status/data/infoCodes";
import { inputInfoCodes } from "@/features/feature-bird-status/data/infoCodes";
import { BirdStatusHeader } from "@/features/feature-bird-status/ui/BirdStatusHeader";
import { InfoCodesTable } from "@/features/feature-bird-status/ui/InfoCodesTable";
import { OutputCalculator } from "@/features/feature-bird-status/ui/OutputCalculator";
import { OutputDrawer } from "@/features/feature-bird-status/ui/OutputDrawer";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const [birdStatus, setBirdStatus] =
    useState<BirdStatusCode>(defaultBirdStatus);
  const [infoCodesActive, setInfoCodesActive] = useState<InfoCode[]>([]);

  const outputStatusCode = useMemo(() => {
    return `${birdStatus.toString()}${computeOutputInfoCode(infoCodesActive).toString().padStart(2, "0")}`;
  }, [birdStatus, infoCodesActive]);

  const outputInfoCode = useMemo(() => {
    return infoCodesActive.length > 0
      ? computeOutputInfoCode(infoCodesActive)
      : 0;
  }, [infoCodesActive]);

  const [filter, setFilter] = useState<InfoCategory | "All">("All");

  // Remove incompatible info codes when bird status changes
  useEffect(() => {
    setInfoCodesActive((prevCodes) => {
      return prevCodes.filter((code) => {
        const codeConfig = inputInfoCodes[code];

        // Check if this code has a whitelist and the current bird status is not in it
        if (
          codeConfig.canOnlyBeUsedWithBirdStatus &&
          !codeConfig.canOnlyBeUsedWithBirdStatus.includes(birdStatus)
        ) {
          return false;
        }

        // Check if this code has a blacklist and the current bird status is in it
        if (codeConfig.canNotBeUsedWithBirdStatus?.includes(birdStatus)) {
          return false;
        }

        return true;
      });
    });
  }, [birdStatus]);

  const toggleInfoCode = (code: InfoCode) => {
    setInfoCodesActive((prev) => {
      if (prev.includes(code)) {
        return prev.filter((c) => c !== code);
      } else {
        return [...prev, code];
      }
    });
  };

  return (
    <main className="mx-auto flex max-w-[1800px] gap-6 p-6 pb-[88px] lg:pb-6">
      <div className="flex-1">
        <InfoCodesTable
          filter={filter}
          onFilterChange={setFilter}
          activeInfoCodes={infoCodesActive}
          onToggleInfoCode={toggleInfoCode}
          currentBirdStatus={birdStatus}
        />
      </div>

      <div className="hidden h-auto w-[350px] flex-col gap-6 lg:flex xl:w-[400px]">
        <div className="flex-shrink-0">
          <BirdStatusHeader />
        </div>

        <div>
          <OutputCalculator
            birdStatus={birdStatus}
            onBirdStatusChange={setBirdStatus}
            activeInfoCodes={infoCodesActive}
            onClearInfoCodes={() => {
              setInfoCodesActive([]);
            }}
            outputStatusCode={outputStatusCode}
            outputInfoCode={outputInfoCode}
          />
        </div>
      </div>
      <div className="lg:hidden">
        <OutputDrawer
          birdStatus={birdStatus}
          onBirdStatusChange={setBirdStatus}
          activeInfoCodes={infoCodesActive}
          onClearInfoCodes={() => {
            setInfoCodesActive([]);
          }}
          outputStatusCode={outputStatusCode}
          outputInfoCode={outputInfoCode}
        />
      </div>
    </main>
  );
}
