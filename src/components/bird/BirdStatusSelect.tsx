import { useContext } from "solid-js";
import {
    BirdStatusCode,
    birdStatuses,
    defaultBirdStatus,
} from "~/birding/birdStatus";
import { BirdContext } from "~/components/bird/BirdContext";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";
import { birdStatusLocale } from "~/locale/birdStatusLocale";
import { LocaleContext } from "~/locale/LocaleContext";

export default function BirdStatusSelect() {
    const [state, setState] = useContext(BirdContext);
    const [locale] = useContext(LocaleContext);

    const selectOption = (option: BirdStatusCode | null) => {
        setState("birdStatusCode", option ?? defaultBirdStatus);
    };

    const getLabel = (code: BirdStatusCode) => {
        const text = birdStatusLocale[code];
        return `${code.toString()} - ${text.title[locale()]}`;
    };

    return (
        <Select
            value={state.birdStatusCode}
            options={[...birdStatuses]}
            onChange={selectOption}
            itemComponent={(props) => (
                <SelectItem item={props.item}>
                    {getLabel(props.item.rawValue)}
                </SelectItem>
            )}
        >
            <SelectTrigger>
                <SelectValue<BirdStatusCode>>
                    {(state) => getLabel(state.selectedOption())}
                </SelectValue>
            </SelectTrigger>
            <SelectContent />
        </Select>
    );
}
