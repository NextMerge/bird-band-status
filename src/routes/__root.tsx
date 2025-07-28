import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { birdStatusLocale } from "@/locale/birdStatusLocale";
import { infoCodeLocale } from "@/locale/infoCodeLocale";
import { commonLocale } from "@/locale/mainLocale";

type RootRouteContext = {
  language: "en" | "fr";
  getText: (textObj: { en: string; fr: string }) => string;
  t: {
    common: typeof commonLocale;
    birdStatus: typeof birdStatusLocale;
    infoCode: typeof infoCodeLocale;
  };
};

export const Route = createRootRouteWithContext<RootRouteContext>()({
  component: () => (
    <>
      {/* <Header /> */}

      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  context: () => {
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
      common: commonLocale,
      birdStatus: birdStatusLocale,
      infoCode: infoCodeLocale,
    };

    return {
      language,
      getText: (textObj: { en: string; fr: string }) => textObj[language],
      t,
    };
  },
});
