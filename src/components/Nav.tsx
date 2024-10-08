import { useLocation } from "@solidjs/router";
import { useContext } from "solid-js";
import { Button } from "~/components/ui/button";
import { LocaleContext } from "~/locale/LocaleContext";
import { commonLocale } from "~/locale/mainLocale";

export default function Nav() {
    const [locale, setLocale] = useContext(LocaleContext);

    const location = useLocation();
    const active = (path: string) =>
        path === location.pathname
            ? "border-sky-600"
            : "border-transparent hover:border-sky-600";

    return (
        <nav class="bg-sky-800">
            <ul class="container flex items-center p-3 text-gray-200">
                <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
                    <a href="/">Home</a>
                </li>
                <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
                    <a href="/about">About</a>
                </li>
                <li class="ml-auto">
                    <Button
                        class="rounded bg-sky-600 px-4 py-2 text-white"
                        onClick={() =>
                            setLocale(locale() === "en" ? "fr" : "en")
                        }
                    >
                        {locale() === "en"
                            ? commonLocale.languages.fr
                            : commonLocale.languages.en}
                    </Button>
                </li>
            </ul>
        </nav>
    );
}
