import { useContext } from "solid-js";
import {
    BirdStatus,
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
import { LocaleContext } from "~/locale/LocaleContext";

export default function BirdStatusSelect() {
    const [state, setState] = useContext(BirdContext);
    const [locale] = useContext(LocaleContext);

    const selectOption = (option: BirdStatus | null) => {
        setState("birdStatus", option ?? defaultBirdStatus);
    };

    const getLabel = (status: BirdStatus) => {
        return `${status.code.toString()} - ${status.title[locale()]}`;
    };

    return (
        <Select
            disallowEmptySelection
            value={state.birdStatus}
            optionValue={"code"}
            onChange={selectOption}
            options={birdStatuses}
            itemComponent={(props) => (
                <SelectItem item={props.item}>
                    {getLabel(props.item.rawValue)}
                </SelectItem>
            )}
        >
            <SelectTrigger>
                <SelectValue<BirdStatus>>
                    {(state) => getLabel(state.selectedOption())}
                </SelectValue>
            </SelectTrigger>
            <SelectContent />
        </Select>
    );
}
