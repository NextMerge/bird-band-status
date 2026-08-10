import { getInfoCodeText } from "../data/getInfoCodeText";
import { useLocale } from "../locale/LocaleContext";
import { uiLocale } from "../locale/uiLocale";
import { useSelectedCodes } from "./SelectedCodesContext";

export function Sidebar() {
  const locale = useLocale();
  const { selectedCodes } = useSelectedCodes();

  return (
    <aside className="w-80 shrink-0 space-y-6 p-8">
      <h1 className="text-xl leading-snug font-semibold">
        {uiLocale.header.headerTitle[locale]}{" "}
        <span className="text-primary underline underline-offset-4">
          {uiLocale.header.birdBandingProgramLink[locale]}
        </span>
      </h1>
      <p className="border-destructive/30 bg-destructive/10 rounded-xl border p-4">
        {uiLocale.header.featherSamplingsAndCloacalSwabsNotice[locale]}
      </p>
      <div className="space-y-2">
        <h2 className="text-sm font-semibold">
          {uiLocale.output.activeInfoCodes[locale]}
        </h2>
        {selectedCodes.size === 0 ? (
          <p className="text-muted-foreground text-sm">
            {uiLocale.output.noActiveInfoCodes[locale]}
          </p>
        ) : (
          <ul className="space-y-2">
            {[...selectedCodes]
              .sort((a, b) => a - b)
              .map((code) => (
                <li
                  key={code}
                  className="bg-muted rounded-lg px-3 py-2 text-sm"
                >
                  <span className="font-mono font-semibold">
                    {code.toString().padStart(2, "0")}
                  </span>{" "}
                  {getInfoCodeText(code, locale).shortDescription}
                </li>
              ))}
          </ul>
        )}
      </div>
      <p className="text-muted-foreground">
        {uiLocale.header.madeBy[locale]} · {uiLocale.header.sourceCode[locale]}
      </p>
    </aside>
  );
}
