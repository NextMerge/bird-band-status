import { createUniqueId, useContext } from "solid-js";
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
import { commonLocale } from "~/locale/mainLocale";

export default function BirdStatusSelect() {
    const [state, setState] = useContext(BirdContext);
    const [locale] = useContext(LocaleContext);
    const id = createUniqueId();

    const selectOption = (option: BirdStatusCode | null) => {
        setState("birdStatusCode", option ?? defaultBirdStatus);
    };

    const getLabel = (code: BirdStatusCode) => {
        const text = birdStatusLocale[code];
        return `${code.toString()} - ${text.title[locale()]}`;
    };

    return (
        <Select
            id={id}
            value={state.birdStatusCode}
            options={[...birdStatuses]}
            onChange={selectOption}
            itemComponent={(props) => (
                <SelectItem item={props.item}>
                    {getLabel(props.item.rawValue)}
                </SelectItem>
            )}
        >
            <div class="pb-3">
                <label for={id}>
                    {commonLocale.selectStatusCode[locale()]}
                </label>
            </div>
            <SelectTrigger>
                <SelectValue<BirdStatusCode>>
                    {(state) => getLabel(state.selectedOption())}
                </SelectValue>
            </SelectTrigger>
            <SelectContent />
        </Select>
    );
}
