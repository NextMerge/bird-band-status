import { For, useContext } from "solid-js";
import { infoCategories } from "~/birding/infoCategories";
import InfoList from "~/components/bird/InfoList";
import {
    Tabs,
    TabsContent,
    TabsIndicator,
    TabsList,
    TabsTrigger,
} from "~/components/ui/tabs";
import { LocaleContext } from "~/locale/LocaleContext";
import { commonLocale } from "~/locale/mainLocale";

export default function InfoCodeTabs() {
    const [locale] = useContext(LocaleContext);
    const allCategories = ["All", ...infoCategories] as const;

    return (
        <Tabs defaultValue="account" class="px-6">
            <TabsList>
                <For each={allCategories}>
                    {(category) => (
                        <TabsTrigger value={category}>
                            {commonLocale.category[category][locale()]}
                        </TabsTrigger>
                    )}
                </For>
                <TabsIndicator />
            </TabsList>
            <TabsContent value="All">
                <InfoList />
            </TabsContent>
            <For each={infoCategories}>
                {(category) => (
                    <TabsContent value={category}>
                        <InfoList category={category} />
                    </TabsContent>
                )}
            </For>
        </Tabs>
    );
}
