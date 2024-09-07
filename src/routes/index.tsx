import { createStore } from "solid-js/store";
import { BirdStatusCode, defaultBirdStatus } from "~/birding/birdStatus";
import { InfoCode, infoCodes } from "~/birding/infoCodes";
import { BirdContext } from "~/components/bird/BirdContext";
import BirdStatusSelect from "~/components/bird/BirdStatusSelect";
import InfoCodeTabs from "~/components/bird/InfoCodeTabs";
import OutputCode from "~/components/bird/OutputCode";
import OutputCodeSmallScreen from "~/components/bird/OutputCodeSmallScreen";

export default function Home() {
    const [state, setState] = createStore({
        birdStatusCode: defaultBirdStatus as BirdStatusCode,
        infoCodesActive: infoCodes.reduce((acc, code) => {
            // @ts-expect-error - Untyped reducer builder
            acc[code] = false;
            return acc;
        }, {}) as { [key in InfoCode]: boolean },
    });

    return (
        <main class="mx-4 mt-4 text-center">
            <BirdContext.Provider value={[state, setState]}>
                <div class="hidden lg:block">
                    <div class="flex flex-col lg:flex-row">
                        <div
                            class={"lg:max-w-[66%] lg:flex-shrink lg:basis-2/3"}
                        >
                            <InfoCodeTabs />
                        </div>
                        <div class="lg:block lg:min-w-[300px] lg:basis-1/3">
                            <div
                                class={
                                    "flex flex-col gap-10 pt-3 lg:sticky lg:top-0"
                                }
                            >
                                <BirdStatusSelect />
                                <OutputCode />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-8 lg:hidden">
                    <BirdStatusSelect />
                    <InfoCodeTabs />
                    <div class="sticky bottom-0">
                        <OutputCodeSmallScreen />
                    </div>
                </div>
            </BirdContext.Provider>
        </main>
    );
}
