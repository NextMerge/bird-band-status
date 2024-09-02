import { createEffect, createSignal, For, Show, useContext } from "solid-js";
import { InfoCategory } from "~/birding/infoCategories";
import { InfoCode, infoCodes, inputInfoCodes } from "~/birding/infoCodes";
import { BirdContext } from "~/components/bird/BirdContext";
import {
    Checkbox,
    CheckboxControl,
    CheckboxDescription,
    CheckboxLabel,
} from "~/components/ui/checkbox";
import { infoCodeLocale } from "~/locale/infoCodeLocale";
import { LocaleContext } from "~/locale/LocaleContext";

type Props = {
    category?: InfoCategory;
};

export default function InfoList(props: Props) {
    const [locale] = useContext(LocaleContext);
    const [state, setState] = useContext(BirdContext);
    const [inputInfo, setInputInfo] = createSignal<
        {
            code: InfoCode;
            shortDescription: {
                en: string;
                fr: string;
            };
            longDescription?: {
                en: string;
                fr: string;
            };
        }[]
    >();

    createEffect(() => {
        const codes = props.category
            ? infoCodes.filter((code) => {
                  return inputInfoCodes[code].category === props.category;
              })
            : infoCodes;

        const infoInput = codes.map((code) => {
            const short = infoCodeLocale[code].shortDescription;
            const long = infoCodeLocale[code].longDescription;

            return {
                code,
                shortDescription: short,
                longDescription: long,
            };
        });

        setInputInfo(infoInput);
    });

    const isCodeDisabled = (code: InfoCode) => {
        const info = inputInfoCodes[code];
        const status = state.birdStatusCode;

        if (info.canOnlyBeUsedWithBirdStatus) {
            return !info.canOnlyBeUsedWithBirdStatus.includes(status);
        }

        if (info.canNotBeUsedWithBirdStatus) {
            return info.canNotBeUsedWithBirdStatus.includes(status);
        }

        return false;
    };

    const isCodeActive = (code: InfoCode) => {
        if (state.infoCodesActive[code]) {
            if (isCodeDisabled(code)) {
                toggleCode(code);
            }
        }

        return state.infoCodesActive[code];
    };

    const toggleCode = (code: InfoCode) => {
        setState("infoCodesActive", code, (prev) => !prev);
    };

    return (
        <div class="flex flex-col divide-y-2">
            <For each={inputInfo()}>
                {(info) => (
                    <Checkbox
                        class="group flex items-start justify-start space-x-2 py-3 text-left"
                        disabled={isCodeDisabled(info.code)}
                        checked={isCodeActive(info.code)}
                        onChange={() => {
                            toggleCode(info.code);
                        }}
                    >
                        <CheckboxControl class="group" />
                        <div class="grid gap-1.5 leading-none">
                            <CheckboxLabel class="text-md font-medium leading-none group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-50">
                                {info.code.toString().padStart(2, "0")} -{" "}
                                {info.shortDescription[locale()]}
                            </CheckboxLabel>
                            <Show
                                when={
                                    info.longDescription &&
                                    !isCodeDisabled(info.code)
                                }
                            >
                                <CheckboxDescription class="text-sm text-muted-foreground">
                                    {info.longDescription?.[locale()]}
                                </CheckboxDescription>
                            </Show>
                        </div>
                    </Checkbox>
                )}
            </For>
        </div>
    );
}
