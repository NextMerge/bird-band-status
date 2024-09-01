import { createContext } from "solid-js";
import { createStore } from "solid-js/store/types/server.js";
import { AdditionalInformationCode } from "~/birding/additionalInformationCodes";

type BirdContextType = ReturnType<
    typeof createStore<{
        birdStatusCode: number;
        infoCodes: AdditionalInformationCode[];
    }>
>;

export const BirdContext = createContext<BirdContextType>([
    undefined,
    undefined,
] as unknown as BirdContextType);
