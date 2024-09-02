import { useContext } from "solid-js";
import { LocaleContext } from "~/locale/LocaleContext";
import { commonLocale } from "~/locale/mainLocale";

export default function About() {
    const [locale] = useContext(LocaleContext);
    return (
        <main class="mx-auto p-4 text-center text-primary">
            <h1 class="max-6-xs my-16 text-6xl font-thin uppercase text-sky-300">
                {commonLocale.header[locale()]}
            </h1>
            <p class="max-6-xs my-6 text-2xl font-thin">
                {commonLocale.headerSubtitle[locale()]}{" "}
                <a
                    target="_blank"
                    class="text-sky-600 hover:underline"
                    href="https://www.pwrc.usgs.gov/BBL/Bander_Portal/login/birdstatus.php"
                >
                    https://www.pwrc.usgs.gov/BBL/Bander_Portal/login/birdstatus.php
                </a>
            </p>
            <p class="text-2xl">
                {commonLocale.sourceCode[locale()]}{" "}
                <a
                    target="_blank"
                    class="text-sky-600 hover:underline"
                    href="https://github.com/NextMerge/bird-band-status"
                >
                    https://github.com/NextMerge/bird-band-status
                </a>
            </p>
            <p class="mt-6">
                {commonLocale.featherSamplingsAndCloacalSwabsNotice[locale()]}
            </p>
            <p class="text-muted-foreground">
                {commonLocale.headerNotice[locale()]}
            </p>
        </main>
    );
}
