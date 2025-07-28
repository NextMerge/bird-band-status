import {
  birdStatuses,
  defaultBirdStatus,
  type BirdStatusCode,
} from "@/birding/birdStatus";
import { computeOutputInfoCode } from "@/birding/computeOutputInfoCode";
import { getInfoCodeText } from "@/birding/getInfoCodeText";
import { infoCategories, type InfoCategory } from "@/birding/infoCategories";
import { infoCodes, inputInfoCodes, type InfoCode } from "@/birding/infoCodes";
import { Tile } from "@/components/Tile";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { createFileRoute, useRouteContext } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { getText, t } = useRouteContext({ from: "/" });

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

  const getFilteredInfoCodes = (category: InfoCategory | "All"): InfoCode[] => {
    if (category === "All") {
      return [...infoCodes];
    }
    return infoCodes.filter(
      (code) => inputInfoCodes[code].category === category,
    );
  };

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
    <main className="grid min-h-screen grid-cols-[1fr_400px] grid-rows-[auto_1fr] gap-6 p-6">
      {/* Table Section */}
      <div className="col-span-1 row-span-2">
        <Tile className="h-full p-6">
          <div className="space-y-4">
            <Tabs
              value={filter}
              onValueChange={(value) => {
                setFilter(value as InfoCategory | "All");
              }}
            >
              <TabsList className="border-purple-700/50 bg-purple-900/50">
                <TabsTrigger
                  value="All"
                  className="data-[state=active]:bg-purple-600"
                >
                  All
                </TabsTrigger>
                {infoCategories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-purple-600"
                  >
                    {getText(t.common.category[category])}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="max-h-[calc(100vh-200px)] overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10">
                    <TableHead className="w-20 font-bold text-red-400">
                      CODE
                    </TableHead>
                    <TableHead className="font-bold text-red-400">
                      SHORT DESCRIPTION
                    </TableHead>
                    <TableHead className="font-bold text-red-400">
                      LONG DESCRIPTION
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getFilteredInfoCodes(filter).map((code) => {
                    const text = getInfoCodeText(code, "en");
                    const isActive = infoCodesActive.includes(code);
                    return (
                      <TableRow
                        key={code}
                        onClick={() => {
                          toggleInfoCode(code);
                        }}
                        className={`cursor-pointer border-white/10 text-white hover:bg-white/10 ${
                          isActive ? "bg-blue-600/50 hover:bg-blue-700/50" : ""
                        }`}
                      >
                        <TableCell className="font-mono font-semibold text-red-400">
                          {code.toString().padStart(2, "0")}
                        </TableCell>
                        <TableCell className="text-white">
                          {text.shortDescription}
                        </TableCell>
                        <TableCell className="text-sm text-gray-300">
                          {text.longDescription ?? ""}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        </Tile>
      </div>

      {/* Header Section */}
      <div className="col-span-1 row-span-1">
        <Tile className="h-full p-6">
          <div className="space-y-4 text-white">
            <h1 className="text-2xl font-bold text-red-400">
              Bird Banding Status
            </h1>
            <h1 className="text-2xl font-bold text-purple-300">
              Code Calculator
            </h1>
            <p className="text-sm text-gray-300">Computes the codes from:</p>
            <div className="rounded-lg border border-red-500/30 bg-red-500/20 p-4">
              <div className="text-xs text-red-200">
                NOTE: Feather sampling and cloacal swabs do not affect the
                status code.
              </div>
            </div>
          </div>
        </Tile>
      </div>

      {/* Bird Status Selector + Output Code Display */}
      <div className="col-span-1 row-span-1">
        <Tile className="h-full p-6">
          <div className="space-y-6">
            <Select
              value={birdStatus.toString()}
              onValueChange={(value) => {
                const parsedValue = parseInt(value);
                if (parsedValue in birdStatuses) {
                  setBirdStatus(parsedValue as BirdStatusCode);
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
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="cursor-help font-mono text-4xl font-bold text-pink-400">
                      {outputStatusCode}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="left"
                    className="max-w-xs border-white/20 bg-slate-900"
                  >
                    <div className="space-y-2">
                      <div className="font-semibold text-white">
                        Active Info Codes:
                      </div>
                      {infoCodesActive.map((code) => {
                        const text = getInfoCodeText(code, "en");
                        return (
                          <div key={code} className="text-sm text-gray-300">
                            <div>
                              {code.toString().padStart(2, "0")}:{" "}
                              {text.shortDescription}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </TooltipContent>
                </Tooltip>
                <div className="mt-2 text-sm text-gray-300">Output code:</div>
              </div>

              <div className="rounded-lg border border-red-500/30 bg-red-500/20 p-4">
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-white">
                    {getInfoCodeText(outputInfoCode, "en").shortDescription}
                  </div>
                  {getInfoCodeText(outputInfoCode, "en").longDescription && (
                    <div className="text-xs leading-relaxed text-gray-300">
                      {getInfoCodeText(outputInfoCode, "en").longDescription}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Tile>
      </div>
    </main>
  );
}
