import { Show, useContext } from "solid-js";
import { BirdContext } from "~/components/bird/BirdContext";
import { createOutputCodeSignal } from "~/components/bird/outputCodeSignal";
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
    const [state] = useContext(BirdContext);

    const { outputCode, isDefault, clearSelections, infoCodeText } =
        createOutputCodeSignal();

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
                <p>{infoCodeText().shortDescription}</p>
            </CardContent>
            <CardFooter>
                <div class="flex w-full flex-col">
                    <Show when={infoCodeText().longDescription}>
                        <p class="text-left text-muted-foreground">
                            {infoCodeText().longDescription}
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
