import { createContext } from "solid-js";
import { createStore } from "solid-js/store/types/server.js";
import { AdditionalInformationCode } from "~/birding/additionalInformationCodes";
import { BirdStatus } from "~/birding/birdStatus";

type BirdContextType = ReturnType<
    typeof createStore<{
        birdStatus: BirdStatus;
        infoCodes: AdditionalInformationCode[];
    }>
>;

export const BirdContext = createContext<BirdContextType>([
    undefined,
    undefined,
] as unknown as BirdContextType);
