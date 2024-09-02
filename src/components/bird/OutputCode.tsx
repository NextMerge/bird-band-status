import { Show, useContext } from "solid-js";
import { produce } from "solid-js/store";
import { defaultBirdStatus } from "~/birding/birdStatus";
import { computeOutputInfoCode } from "~/birding/computeOutputInfoCode";
import { getInfoCodeText } from "~/birding/getInfoCodeText";
import { infoCodes } from "~/birding/infoCodes";
import { BirdContext } from "~/components/bird/BirdContext";
import { Button } from "~/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import { LocaleContext } from "~/locale/LocaleContext";
import { commonLocale } from "~/locale/mainLocale";

export default function OutputCode() {
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

    return (
        <Card class="bg-muted">
            <CardHeader>
                <CardTitle>{commonLocale.outputCode[locale()]}</CardTitle>
            </CardHeader>
            <CardContent>
                <p class="text-[6rem]">
                    {state.birdStatusCode.toString()}
                    {outputCode().toString().padStart(2, "0")}
                </p>
                <p>
                    {getInfoCodeText(outputCode(), locale()).shortDescription}
                </p>
            </CardContent>
            <CardFooter>
                <div class="flex w-full flex-col">
                    <Show
                        when={
                            getInfoCodeText(outputCode(), locale())
                                .longDescription
                        }
                    >
                        <p class="text-left text-muted-foreground">
                            {
                                getInfoCodeText(outputCode(), locale())
                                    .longDescription
                            }
                        </p>
                    </Show>
                    <Show when={!isDefault()}>
                        <p class="mt-10">
                            <Button
                                variant={"destructive"}
                                onClick={() => {
                                    clearSelections();
                                }}
                            >
                                {commonLocale.clearSelections[locale()]}
                            </Button>
                        </p>
                    </Show>
                </div>
            </CardFooter>
        </Card>
    );
}
