import { Tile } from "@/components/Tile";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { BirdStatusCode } from "@/features/feature-bird-status/data/birdStatus";
import { getInfoCodeText } from "@/features/feature-bird-status/data/getInfoCodeText";
import {
  infoCategories,
  type InfoCategory,
} from "@/features/feature-bird-status/data/infoCategories";
import {
  infoCodes,
  inputInfoCodes,
  type InfoCode,
} from "@/features/feature-bird-status/data/infoCodes";
import { useRouteContext } from "@tanstack/react-router";

type InfoCodesTableProps = {
  filter: InfoCategory | "All";
  onFilterChange: (filter: InfoCategory | "All") => void;
  activeInfoCodes: InfoCode[];
  onToggleInfoCode: (code: InfoCode) => void;
  currentBirdStatus: BirdStatusCode;
};

export function InfoCodesTable(props: InfoCodesTableProps) {
  const { getText, t } = useRouteContext({ from: "/" });

  const getFilteredInfoCodes = (category: InfoCategory | "All"): InfoCode[] => {
    if (category === "All") {
      return [...infoCodes];
    }
    return infoCodes.filter(
      (code) => inputInfoCodes[code].category === category,
    );
  };

  const isInfoCodeDisabled = (code: InfoCode): boolean => {
    const codeConfig = inputInfoCodes[code];

    // Check if this code has a whitelist and the current bird status is not in it
    if (
      codeConfig.canOnlyBeUsedWithBirdStatus &&
      !codeConfig.canOnlyBeUsedWithBirdStatus.includes(props.currentBirdStatus)
    ) {
      return true;
    }

    // Check if this code has a blacklist and the current bird status is in it
    if (
      codeConfig.canNotBeUsedWithBirdStatus?.includes(props.currentBirdStatus)
    ) {
      return true;
    }

    return false;
  };

  return (
    <Tile className="h-full p-6">
      <div className="space-y-4">
        <Tabs
          value={props.filter}
          onValueChange={(value) => {
            props.onFilterChange(value as InfoCategory | "All");
          }}
        >
          <TabsList className="grid w-full grid-cols-6 rounded-lg border border-slate-700/50 bg-slate-800/60 p-1 backdrop-blur-sm">
            <TabsTrigger
              value="All"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-all duration-200 hover:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg"
            >
              All
            </TabsTrigger>
            {infoCategories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-all duration-200 hover:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                {getText(t.common.category[category])}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <Table>
          <TableHeader>
            <TableRow className="border-white/10">
              <TableHead className="w-20 font-bold text-red-400">
                {getText(t.common.tableColumns.code).toUpperCase()}
              </TableHead>
              <TableHead className="font-bold text-red-400">
                {getText(t.common.tableColumns.description).toUpperCase()}
              </TableHead>
              <TableHead className="font-bold text-red-400">
                {getText(t.common.tableColumns.definition).toUpperCase()}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {getFilteredInfoCodes(props.filter).map((code) => {
              const text = getInfoCodeText(code, "en");
              const isActive = props.activeInfoCodes.includes(code);
              const isDisabled = isInfoCodeDisabled(code);
              return (
                <TableRow
                  key={code}
                  aria-disabled={isDisabled}
                  aria-checked={isActive}
                  aria-label={`${code.toString().padStart(2, "0")} ${text.shortDescription}`}
                  role="checkbox"
                  onClick={() => {
                    if (!isDisabled) {
                      props.onToggleInfoCode(code);
                    }
                  }}
                  className={`border-white/10 ${
                    isDisabled
                      ? "cursor-not-allowed opacity-50"
                      : `cursor-pointer text-white hover:bg-white/10 ${
                          isActive ? "bg-blue-600/50 hover:bg-blue-700/50" : ""
                        }`
                  }`}
                >
                  <TableCell
                    className={`font-mono font-semibold ${
                      isDisabled ? "text-gray-500" : "text-red-400"
                    }`}
                  >
                    {code.toString().padStart(2, "0")}
                  </TableCell>
                  <TableCell
                    className={isDisabled ? "text-gray-500" : "text-white"}
                  >
                    {text.shortDescription}
                  </TableCell>
                  <TableCell
                    className={`text-sm ${
                      isDisabled ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    {text.longDescription ?? ""}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </Tile>
  );
}
