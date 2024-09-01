export type BirdStatus = {
    code: number;
    title: {
        en: string;
        fr: string;
    };
    definition: {
        en: string;
        fr: string;
    };
};

export const defaultBirdStatus: BirdStatus = {
    code: 3,
    title: {
        en: "Normal wild bird",
        fr: "Oiseau sauvage normal",
    },
    definition: {
        en: "Normal, wild bird: released in same 10-minute block as captured: held 24 hours or less.",
        fr: "Oiseau sauvage normal : relâché dans le bloc de 10 minutes où il a été capturé; maintenu en captivité pendant 24 heures ou moins.",
    },
};

export const birdStatuses: BirdStatus[] = [
    {
        code: 2,
        title: {
            en: "Transported",
            fr: "Transporté",
        },
        definition: {
            en: "Transported to a different 10-minute block, but otherwise normal wild bird (requires an additional permit from Federal Law Enforcement and/or State agencies): may or may not be held for longer than 24 hours. Banding location, age, sex, and date banded must be those at release. Capture location and date must be given in Remarks.",
            fr: "Transporté à un bloc de 10 minutes différent, mais il s’agit par ailleurs d’un oiseau sauvage normal (il faut détenir un permis délivré par les autorités d’application de la loi fédérales et/ou d’État) : peut avoir été maintenu en captivité pendant plus de 24 heures, ou non. Le lieu de baguage, l’âge, le sexe et la date de baguage doivent être établis au moment de la remise en liberté. Le lieu et la date de la capture doivent être indiqués dans le champ « Remarques ».",
        },
    },
    defaultBirdStatus,
    {
        code: 4,
        title: {
            en: "Hand-reared, game-farm or hacked bird",
            fr: "Oiseau élevé en captivité, élevé pour la chasse ou relâché",
        },
        definition: {
            en: "Hand-reared or hacked: raised in captivity from egg or taken as nestling or orphan. Banding location, age, sex, and date banded must be those at release. Hand-rearing may include transporting. If a hand-reared bird is also injured, use additional information code 85. Capture location and date must be given in Remarks.",
            fr: "Élevé en captivité ou relâché : élevé en captivité à partir d’un œuf, ou capturé comme oisillon ou orphelin. Le lieu de baguage, l’âge, le sexe et la date de baguage doivent être établis au moment de la remise en liberté. L’élevage en captivité peut comprendre le transport. Si un oiseau élevé en captivité est également blessé, utiliser le code de renseignements complémentaires 85. Le lieu et la date de la capture doivent être indiqués dans le champ « Remarques ».",
        },
    },
    {
        code: 5,
        title: {
            en: "Sick, Exhausted, Over-stressed, Injured, or Physical Deformity",
            fr: "Malade, épuisé, surmené, blessé ou difforme",
        },
        definition: {
            en: "Sick, Exhausted, Over-stressed (or shock), Injured (old or new injury), or with a Physical Deformity; held 24 hours or less: may or may not be treated or transported. Requires an explanation in the Remarks.",
            fr: "Malade, épuisé, surmené (ou état de choc), blessé (blessure ancienne ou nouvelle) ou présentant une difformité physique; maintenu en captivité pendant 24 heures ou moins : peut avoir été transporté ou traité, ou non. Explication requise dans le champ « Remarques ».",
        },
    },
    {
        code: 7,
        title: {
            en: "Rehabilitated and held",
            fr: "Réadapté et maintenu en captivité",
        },
        definition: {
            en: 'Rehabilitated and held longer than 24 hours: sick, exhausted, injured, or crippled: (assumes that transportation and/or blood sampling may be involved). Requires an explanation in "Remarks", including capture location, a short description of the injury and how long it was in captivity (under 250 characters). Rehab birds should NOT be banded before they are ready for release. Banding location, age, sex, and date banded must be those at release.',
            fr: "Réadapté et maintenu en captivité pendant plus de 24 heures : malade, épuisé, blessé ou handicapé (on suppose qu’un transport ou un prélèvement sanguin ou les deux peut avoir eu lieu). Une explication doit être fournie dans le champ « Remarques », y compris le lieu de la capture ainsi qu’une brève description de la blessure et de la durée de la captivité (moins de 250 caractères). Les oiseaux réhabilités NE devraient PAS être bagués avant d’être prêts pour leur remise en liberté. Le lieu de baguage, l’âge, le sexe et la date de baguage doivent être établis au moment de la remise en liberté.",
        },
    },
    {
        code: 8,
        title: {
            en: "Held for longer than 24 hours for experimental or other purposes",
            fr: "Maintenu en captivité pendant plus de 24 heures à des fins expérimentales ou autres",
        },
        definition: {
            en: "Held for longer than 24 hours for experimental or other purposes (including falconry under Federal and State falconry permits) otherwise normal, wild. Status 8 may include transporting, but if held only for transporting use status code 2. Holding for experimentation and transporting both require an additional permit from Fish and Wildlife Service Regional Office and/or State agencies. Age, sex, and banding date must be those at release. Requires an explanation in Remarks, including capture date and location.",
            fr: "Maintenu en captivité pendant plus de 24 heures à des fins expérimentales ou autres (y compris la fauconnerie en vertu d’un permis fédéral ou d’État). Il s’agit par ailleurs d’un oiseau sauvage normal. Le code d’état 8 peut comprendre le transport mais, si l’oiseau est maintenu en captivité seulement pour le transport, utiliser le code d’état 2. Le maintien en captivité à des fins expérimentales et pour le transport exige l’obtention de deux permis supplémentaires du bureau régional du Fish and Wildlife Service et/ou d’organismes d’État. L’âge, le sexe et la date de baguage doivent être établis au moment de la remise en liberté. Explication requise dans le champ « Remarques », y compris au sujet du lieu et de la date de capture.",
        },
    },
];
