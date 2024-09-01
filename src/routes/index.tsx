import { A } from "@solidjs/router";
import { createStore } from "solid-js/store";
import { AdditionalInformationCode } from "~/birding/additionalInformationCodes";
import { defaultBirdStatus } from "~/birding/birdStatus";
import { BirdContext } from "~/components/bird/BirdContext";
import BirdStatusSelect from "~/components/bird/BirdStatusSelect";

export default function Home() {
    const [state, setState] = createStore({
        birdStatusCode: defaultBirdStatus.code,
        infoCodes: [] as AdditionalInformationCode[],
    });

    return (
        <main class="mx-auto p-4 text-center">
            <h1 class="max-6-xs my-16 text-6xl font-thin uppercase text-sky-300">
                Hello world!
            </h1>
            <BirdContext.Provider value={[state, setState]}>
                <BirdStatusSelect />
            </BirdContext.Provider>
            <p class="mt-8">
                Visit{" "}
                <a
                    href="https://solidjs.com"
                    target="_blank"
                    class="text-sky-300 hover:underline"
                >
                    solidjs.com
                </a>{" "}
                to learn how to build Solid apps.
            </p>
            <p class="my-4">
                <span>Home</span>
                {" - "}
                <A href="/about" class="text-sky-300 hover:underline">
                    About Page
                </A>{" "}
            </p>
        </main>
    );
}
