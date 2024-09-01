import { createContext } from "solid-js";
import { createStore } from "solid-js/store/types/server.js";
import { BirdStatusCode } from "~/birding/birdStatus";
import { InfoCode } from "~/birding/infoCodes";

type BirdContextType = ReturnType<
    typeof createStore<{
        birdStatusCode: BirdStatusCode;
        infoCodes: InfoCode[];
    }>
>;

export const BirdContext = createContext<BirdContextType>([
    undefined,
    undefined,
] as unknown as BirdContextType);
