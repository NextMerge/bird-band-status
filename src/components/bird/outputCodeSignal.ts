import { useContext } from "solid-js";
import { produce } from "solid-js/store";
import { defaultBirdStatus } from "~/birding/birdStatus";
import { computeOutputInfoCode } from "~/birding/computeOutputInfoCode";
import { getInfoCodeText } from "~/birding/getInfoCodeText";
import { infoCodes } from "~/birding/infoCodes";
import { BirdContext } from "~/components/bird/BirdContext";
import { LocaleContext } from "~/locale/LocaleContext";

export function createOutputCodeSignal() {
    const [locale] = useContext(LocaleContext);
    const [state, setState] = useContext(BirdContext);

    const outputCode = () =>
        computeOutputInfoCode(
            infoCodes.filter((code) => state.infoCodesActive[code])
        );

    const isDefault = () => {
        return state.birdStatusCode === defaultBirdStatus && outputCode() === 0;
    };

    const clearSelections = () => {
        setState(
            produce((prev) => {
                prev.birdStatusCode = defaultBirdStatus;
                for (const code of infoCodes) {
                    prev.infoCodesActive[code] = false;
                }
            })
        );
    };

    const infoCodeText = () => getInfoCodeText(outputCode(), locale());

    return {
        outputCode,
        isDefault,
        clearSelections,
        infoCodeText,
    };
}
