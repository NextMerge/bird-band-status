import {
  HeadContent,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { birdStatusLocale } from "@/features/feature-bird-status/locale/birdStatusLocale";
import { headerLocale } from "@/features/feature-bird-status/locale/headerLocale";
import { infoCodeLocale } from "@/features/feature-bird-status/locale/infoCodeLocale";
import { metaLocale } from "@/features/feature-bird-status/locale/metaLocale";
import { outputLocale } from "@/features/feature-bird-status/locale/outputLocale";
import { tableLocale } from "@/features/feature-bird-status/locale/tableLocale";

type RootRouteContext = {
  language: "en" | "fr";
  getText: (textObj: { en: string; fr: string }) => string;
  t: {
    header: typeof headerLocale;
    output: typeof outputLocale;
    table: typeof tableLocale;
    birdStatus: typeof birdStatusLocale;
    infoCode: typeof infoCodeLocale;
  };
};

export const Route = createRootRouteWithContext<RootRouteContext>()({
  beforeLoad: () => {
    const locale = localStorage.getItem("locale");
    if (!locale) {
      const browserLocale = navigator.language.split("-")[0];
      if (browserLocale === "fr") {
        localStorage.setItem("locale", "fr");
      } else {
        localStorage.setItem("locale", "en");
      }
    }

    const language = locale === "fr" ? ("fr" as const) : ("en" as const);

    const t = {
      header: headerLocale,
      output: outputLocale,
      table: tableLocale,
      birdStatus: birdStatusLocale,
      infoCode: infoCodeLocale,
    };

    return {
      language,
      getText: (textObj: { en: string; fr: string }) => textObj[language],
      t,
    };
  },
  head: (ctx) => ({
    meta: [
      {
        title: ctx.match.context.getText(metaLocale.meta.title),
      },
      {
        name: "description",
        content: ctx.match.context.getText(metaLocale.meta.description),
      },
    ],
  }),
  component: () => (
    <>
      {/* <Header /> */}

      <HeadContent />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
