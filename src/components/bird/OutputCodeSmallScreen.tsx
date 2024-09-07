import { Show, useContext } from "solid-js";
import { BirdContext } from "~/components/bird/BirdContext";
import { createOutputCodeSignal } from "~/components/bird/outputCodeSignal";
import { Button } from "~/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerLabel,
    DrawerTrigger,
} from "~/components/ui/drawer";
import { LocaleContext } from "~/locale/LocaleContext";
import { commonLocale } from "~/locale/mainLocale";

export default function OutputCodeSmallScreen() {
    const [locale] = useContext(LocaleContext);
    const [state] = useContext(BirdContext);

    const { outputCode, isDefault, clearSelections, infoCodeText } =
        createOutputCodeSignal();

    const codeItself = () => {
        return (
            state.birdStatusCode.toString() +
            outputCode().toString().padStart(2, "0")
        );
    };

    return (
        <Drawer>
            <DrawerTrigger
                as="div"
                class="-mx-4 flex h-16 w-auto items-center justify-center bg-muted text-[2rem]"
                role="button"
            >
                {codeItself()}
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>{commonLocale.outputCode[locale()]}</DrawerHeader>
                <div class="text-center text-[6rem]">{codeItself()}</div>
                <DrawerLabel>{infoCodeText().shortDescription}</DrawerLabel>
                <DrawerDescription class="mb-4">
                    {infoCodeText().longDescription}
                </DrawerDescription>
                <Show when={!isDefault()}>
                    <DrawerFooter class="mb-4">
                        <Button
                            variant={"destructive"}
                            onClick={() => {
                                clearSelections();
                            }}
                        >
                            {commonLocale.clearSelections[locale()]}
                        </Button>
                    </DrawerFooter>
                </Show>
            </DrawerContent>
        </Drawer>
    );
}
