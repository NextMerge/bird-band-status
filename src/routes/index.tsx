import { createStore } from "solid-js/store";
import { BirdStatusCode, defaultBirdStatus } from "~/birding/birdStatus";
import { InfoCode, infoCodes } from "~/birding/infoCodes";
import { BirdContext } from "~/components/bird/BirdContext";
import BirdStatusSelect from "~/components/bird/BirdStatusSelect";
import InfoCodeTabs from "~/components/bird/InfoCodeTabs";
import OutputCode from "~/components/bird/OutputCode";

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
        <main class="mx-auto p-4 text-center">
            <BirdContext.Provider value={[state, setState]}>
                <div class="flex flex-row">
                    <div class={"basis-2/3"}>
                        <InfoCodeTabs />
                    </div>
                    <div class="basis-1/3">
                        <div class={"sticky top-0 flex flex-col gap-10 pt-3"}>
                            <BirdStatusSelect />
                            <OutputCode />
                        </div>
                    </div>
                </div>
            </BirdContext.Provider>
        </main>
    );
}
