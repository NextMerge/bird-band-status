import { useContext } from "solid-js";
import { birdStatuses, defaultBirdStatus } from "~/birding/birdStatus";
import { BirdContext } from "~/components/bird/BirdContext";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";
import { LocaleContext } from "~/locale/LocaleContext";

export default function BirdStatusSelect() {
    const [state, setState] = useContext(BirdContext);
    const [locale] = useContext(LocaleContext);

    const selectOption = (option: number | null) => {
        setState("birdStatusCode", option ?? defaultBirdStatus.code);
    };

    const getLabel = (code: number) => {
        const status = birdStatuses.find((status) => status.code === code);
        return `${code.toString()} - ${status?.title[locale()] ?? ""}`;
    };

    return (
        <Select
            value={state.birdStatusCode}
            options={birdStatuses.map((status) => status.code)}
            onChange={selectOption}
            itemComponent={(props) => (
                <SelectItem item={props.item}>
                    {getLabel(props.item.rawValue)}
                </SelectItem>
            )}
        >
            <SelectTrigger>
                <SelectValue<number>>
                    {(state) => getLabel(state.selectedOption())}
                </SelectValue>
            </SelectTrigger>
            <SelectContent />
        </Select>
    );
}
