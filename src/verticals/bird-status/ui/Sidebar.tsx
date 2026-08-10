import { useLocale } from "../locale/LocaleContext";
import { uiLocale } from "../locale/uiLocale";

export function Sidebar() {
  const locale = useLocale();

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
      <p className="text-muted-foreground">
        {uiLocale.header.madeBy[locale]} · {uiLocale.header.sourceCode[locale]}
      </p>
    </aside>
  );
}
