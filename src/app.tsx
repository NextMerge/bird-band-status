import { ColorModeProvider, ColorModeScript } from "@kobalte/core";
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { createSignal, Suspense } from "solid-js";
import Nav from "~/components/Nav";
import { LocaleContext } from "~/locale/LocaleContext";
import { commonLocale } from "~/locale/mainLocale";
import "./app.css";

export default function App() {
    const [locale, setLocale] = createSignal<"en" | "fr">("en");

    return (
        <Router
            root={(props) => (
                <LocaleContext.Provider value={[locale, setLocale]}>
                    <Nav />
                    <Suspense>{props.children}</Suspense>
                    <ColorModeScript />
                    <ColorModeProvider />
                    <MetaProvider>
                        <title>{commonLocale.meta.title[locale()]}</title>
                        <meta
                            name="description"
                            content={commonLocale.meta.description[locale()]}
                        />
                    </MetaProvider>
                </LocaleContext.Provider>
            )}
        >
            <FileRoutes />
        </Router>
    );
}
