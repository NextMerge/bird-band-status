import { InfoCategory } from "~/birding/infoCategories";

export type AdditionalInformationCode = {
    code: number;
    codeForWithAuxiliaryMarkers?: number;
    category: InfoCategory;
    canOnlyBeUsedWithBirdStatuses?: number[];
    canNotBeUsedWithBirdStatuses?: number[];
    shortDescription: {
        en: string;
        fr: string;
    };
    longDescription?: {
        en: string;
        fr: string;
    };
};

export const defaultAddCode: AdditionalInformationCode = {
    code: 0,
    category: "Visual Aux Marker",
    shortDescription: {
        en: "Federal numbered metal band only",
        fr: "Bague métallique fédérale numérotée uniquement",
    },
};

export const twoOrMoreTypesOfAuxiliaryMarkers: AdditionalInformationCode = {
    code: 25,
    category: "Other",
    shortDescription: {
        en: "Two or more types of auxiliary markers",
        fr: "Deux ou plusieurs types de marqueurs auxiliaires",
    },
    longDescription: {
        en: "Two or more types of auxiliary markers (e.g., neck collar and color leg band or wing tag and radio transmitter). All markers must be described in marker-related fields.",
        fr: "Deux ou plusieurs types de marqueurs auxiliaires (par exemple, collier cervical et bague de couleur aux pattes ou étiquette d'aile et émetteur radio). Tous les marqueurs doivent être décrits dans les champs liés aux marqueurs.",
    },
};

export const miscellaneous: AdditionalInformationCode = {
    code: 85,
    category: "Other",
    shortDescription: {
        en: "Miscellaneous (combination or situation not covered by other ai codes)",
        fr: "Divers (combinaison ou situation non couverte par d'autres codes de renseignements complémentaires)",
    },
    longDescription: {
        en: "Miscellaneous (combination or situation not covered by other additional information codes) - An explanation is needed in Remarks. For example, a bird that was color-banded, sexed by laparotomy, and blood-sampled would be 385 with an explanation 385 = C/B, laparotomy, blood sample. All markers must be described in marker-related fields.",
        fr: "Divers (combinaison ou situation non couverte par d'autres codes de renseignements complémentaires) - Une explication est nécessaire dans les remarques. Par exemple, un oiseau qui a été bagué de couleur, sexé par laparotomie et échantillonné en sang serait 385 avec une explication 385 = C/B, laparotomie, prélèvement sanguin. Tous les marqueurs doivent être décrits dans les champs liés aux marqueurs.",
    },
};

export const auxMarkerCodes: AdditionalInformationCode[] = [
    {
        code: 1,
        category: "Visual Aux Marker",
        shortDescription: {
            en: "Colored leg band(s): plastic, metal, paint, tape",
            fr: "Bague(s) de couleur(s) aux pattes : plastique, métal, peinture, ruban adhésif",
        },
        longDescription: {
            en: "Colored leg band(s) of plastic or metal - This applies to painted or anodized Federal bands as well as colored tape over bands. Note: two metal bands should never be used on the same tarsus.",
            fr: "Bague(s) de couleur(s) aux pattes en plastique ou en métal - Cela s'applique aux bagues fédérales peintes ou anodisées ainsi qu'aux rubans adhésifs colorés sur les bagues. Remarque : deux bagues métalliques ne doivent jamais être utilisées sur le même tarse.",
        },
    },
    {
        code: 2,
        category: "Visual Aux Marker",
        shortDescription: {
            en: "Neck collar - usually coded",
            fr: "Collier cervical - habituellement codé",
        },
        longDescription: {
            en: "Neck collar - Collar codes and colors must be reported in marker-related fields.",
            fr: "Collier cervical - Les codes et les couleurs des colliers doivent être signalés dans les champs liés aux marqueurs.",
        },
    },
    {
        code: 3,
        category: "Visual Aux Marker",
        canOnlyBeUsedWithBirdStatuses: [3],
        shortDescription: {
            en: "Reward band (Federal or State)",
            fr: "Bague de récompense (fédérale ou d'État)",
        },
    },
    {
        code: 4,
        category: "Visual Aux Marker",
        canOnlyBeUsedWithBirdStatuses: [3],
        shortDescription: {
            en: "Control band (Reward band studies only)",
            fr: "Bague de contrôle (études de bagues de récompense uniquement)",
        },
        longDescription: {
            en: "Control band - For use in conjunction with reward band studies only.",
            fr: "Bague de contrôle - À utiliser uniquement en conjonction avec des études de bagues de récompense.",
        },
    },
    {
        code: 6,
        codeForWithAuxiliaryMarkers: 29,
        category: "Visual Aux Marker",
        shortDescription: {
            en: "Misc. metal band (State, Provincial etc) with address or telephone number, plus Federal band",
            fr: "Bague métallique diverses (État, provincial, etc.) avec adresse ou numéro de téléphone, plus bague fédérale",
        },
        longDescription: {
            en: "Miscellaneous band - Metal bands with an additional address or telephone number, including State or Provincial bands, private organizations bands, and rarely banders. Explanation must be given in the Remarks field.",
            fr: "Bague diverse - Bagues métalliques avec une adresse ou un numéro de téléphone supplémentaire, y compris les bagues d'État ou provinciales, les bagues d'organisations privées et rarement les bagueurs. Une explication doit être donnée dans le champ « Remarques ».",
        },
    },
    {
        code: 7,
        codeForWithAuxiliaryMarkers: 30,
        category: "Visual Aux Marker",
        shortDescription: {
            en: "Double-banded (Two Federal bands placed on a bird at the same time)",
            fr: "Double bague (Deux bagues fédérales placées sur un oiseau en même temps)",
        },
        longDescription: {
            en: "Two Federal bands placed on a bird at the same time. One Federal band on each tarsus -- two metal bands cannot be used on the same tarsus. This code does not apply to a bird to whom a second band was added at a subsequent encounter.",
            fr: "Deux bagues fédérales placées sur un oiseau en même temps. Une bague fédérale sur chaque tarse - deux bagues métalliques ne peuvent pas être utilisées sur le même tarse. Ce code ne s'applique pas à un oiseau auquel une deuxième bague a été ajoutée lors d'une rencontre ultérieure.",
        },
    },
    {
        code: 8,
        category: "Visual Aux Marker",
        shortDescription: {
            en: "Temporary markers: Paint or dye; other temporary markers on feathers (imping, tape on tail)",
            fr: "Marqueurs temporaires : Peinture ou teinture ; autres marqueurs temporaires sur les plumes (imping, ruban adhésif sur la queue)",
        },
        longDescription: {
            en: "Temporary markers - Any part of bird painted or dyed, or other temporary markers on feathers (e.g., imping, tail streamers, etc.).",
            fr: "Marqueurs temporaires - Toute partie de l'oiseau peinte ou teinte, ou d'autres marqueurs temporaires sur les plumes (par exemple, imping, streamers de queue, etc.).",
        },
    },
    {
        code: 39,
        category: "Visual Aux Marker",
        shortDescription: {
            en: "Wing, patagial, head, back, and/or nape tag(s)",
            fr: "Marque(s) d'aile, patagium, tête, dos et/ou nuque",
        },
        longDescription: {
            en: "Wing, patagial, head, back, and/or nape tag(s). All markers must be described in marker-related fields.",
            fr: "Marque(s) d'aile, patagium, tête, dos et/ou nuque. Tous les marqueurs doivent être décrits dans les champs liés aux marqueurs.",
        },
    },
    {
        code: 51,
        category: "Visual Aux Marker",
        shortDescription: {
            en: "Nasal saddle and nasal discs or other bill marker",
            fr: "Selle nasale et disques nasaux ou autre marqueur de bec",
        },
        longDescription: {
            en: "Nasal saddle and nasal discs or other bill marker - Marker must be described in marker-related fields and in Remarks if necessary.",
            fr: "Selle nasale et disques nasaux ou autre marqueur de bec - Le marqueur doit être décrit dans les champs liés aux marqueurs et dans les remarques si nécessaire.",
        },
    },
    {
        code: 59,
        category: "Visual Aux Marker",
        shortDescription: {
            en: "Web tagged, usually coded",
            fr: "Étiqueté sur le web, habituellement codé",
        },
        longDescription: {
            en: "Web tagged - Marker must be described in marker-related fields.",
            fr: "Étiqueté sur le web - Le marqueur doit être décrit dans les champs liés aux marqueurs.",
        },
    },
    {
        code: 69,
        category: "Visual Aux Marker",
        shortDescription: {
            en: "Flag, streamer, or tab on leg",
            fr: "Drapeau, fanion ou languette sur la patte",
        },
        longDescription: {
            en: "Flag, streamer, or tab on leg - Marker must be described in marker-related fields.",
            fr: "Drapeau, fanion ou languette sur la patte - Le marqueur doit être décrit dans les champs liés aux marqueurs.",
        },
    },
    {
        code: 75,
        category: "Electronic Aux Marker",
        shortDescription: {
            en: "PIT tag",
            fr: "Puce électronique",
        },
        longDescription: {
            en: "Equipped with PIT tag only (see also additional information code 25) - Marker must be described in marker-related fields. Frequency and type of attachment may be listed in Remarks.",
            fr: "Équipé uniquement d'une puce électronique (voir également le code de renseignements complémentaires 25) - Le marqueur doit être décrit dans les champs liés aux marqueurs. La fréquence et le type de fixation peuvent être indiqués dans les remarques.",
        },
    },
    {
        code: 80,
        category: "Electronic Aux Marker",
        shortDescription: {
            en: "Satellite/Cell/GPS transmitter",
            fr: "Transmetteur satellite/cellulaire/GPS",
        },
        longDescription: {
            en: "Equipped with Satellite/Cell/GPS transmitter only (see also additional information code 25) - Marker must be described in marker-related fields. Frequency and type of attachment may be listed in Remarks.",
            fr: "Équipé uniquement d'un transmetteur satellite/cellulaire/GPS (voir également le code de renseignements complémentaires 25) - Le marqueur doit être décrit dans les champs liés aux marqueurs. La fréquence et le type de fixation peuvent être indiqués dans les remarques.",
        },
    },
    {
        code: 81,
        category: "Electronic Aux Marker",
        shortDescription: {
            en: "Radio transmitter",
            fr: "Émetteur radio",
        },
        longDescription: {
            en: "Equipped with radio transmitter only (see also additional information code 25) - Marker must be described in marker-related fields. Frequency and type of attachment may be listed in Remarks.",
            fr: "Équipé uniquement d'un émetteur radio (voir également le code de renseignements complémentaires 25) - Le marqueur doit être décrit dans les champs liés aux marqueurs. La fréquence et le type de fixation peuvent être indiqués dans les remarques.",
        },
    },
    {
        code: 90,
        category: "Electronic Aux Marker",
        shortDescription: {
            en: "Data logger (including geo-locators)",
            fr: "Enregistreur de données (y compris les géo-localisateurs)",
        },
        longDescription: {
            en: "Equipped with data logger only (see also additional information code 25) - Marker must be described in marker-related fields. Frequency and type of attachment may be listed in Remarks.",
            fr: "Équipé uniquement d'un enregistreur de données (voir également le code de renseignements complémentaires 25) - Le marqueur doit être décrit dans les champs liés aux marqueurs. La fréquence et le type de fixation peuvent être indiqués dans les remarques.",
        },
    },
];

export const nonAuxMarkerCodes: AdditionalInformationCode[] = [
    {
        code: 9,
        codeForWithAuxiliaryMarkers: 10,
        category: "Other",
        canOnlyBeUsedWithBirdStatuses: [2, 3, 4, 8],
        shortDescription: {
            en: "All flight feathers on one or both wings clipped or pulled upon release",
            fr: "Toutes les plumes de vol d'une ou des deux ailes coupées ou arrachées lors de la remise en liberté",
        },
    },
    {
        code: 11,
        codeForWithAuxiliaryMarkers: 12,
        category: "Other",
        shortDescription: {
            en: "Sexed by laparotomy or laparoscopy",
            fr: "Sexé par laparotomie ou laparoscopie",
        },
    },
    {
        code: 14,
        codeForWithAuxiliaryMarkers: 15,
        category: "Sample",
        shortDescription: {
            en: "Mouth swab",
            fr: "Écouvillon buccal",
        },
    },
    {
        code: 16,
        codeForWithAuxiliaryMarkers: 17,
        category: "Sample",
        shortDescription: {
            en: "Tracheal swab",
            fr: "Écouvillon trachéal",
        },
    },
    {
        code: 18,
        codeForWithAuxiliaryMarkers: 19,
        category: "Sample",
        canNotBeUsedWithBirdStatuses: [7],
        shortDescription: {
            en: "Blood sample taken",
            fr: "Prélèvement sanguin effectué",
        },
        longDescription: {
            en: "Blood sample taken (contact the appropriate Bird Banding Office for the required permit).",
            fr: "Prélèvement sanguin effectué (contacter le bureau de baguage des oiseaux approprié pour le permis requis).",
        },
    },
    {
        code: 20,
        codeForWithAuxiliaryMarkers: 21,
        category: "Other",
        shortDescription: {
            en: "Fostered or cross-fostered into wild nests",
            fr: "Fostering ou élevé par des parents adoptifs dans des nids sauvages",
        },
    },
    {
        code: 33,
        codeForWithAuxiliaryMarkers: 34,
        category: "Capture Method",
        canNotBeUsedWithBirdStatuses: [7],
        shortDescription: {
            en: "Taken from an artificial nest structure (eg, nest boxes, platforms, etc)",
            fr: "Pris dans une structure de nid artificielle (par exemple, nichoirs, plateformes, etc.)",
        },
        longDescription: {
            en: "Taken from an artificial nest structure (e.g., nest boxes, platforms, etc.). Includes hacked birds as code 433.",
            fr: "Pris dans une structure de nid artificielle (par exemple, nichoirs, plateformes, etc.). Comprend les oiseaux élevés par des parents adoptifs comme code 433.",
        },
    },

    {
        code: 40,
        codeForWithAuxiliaryMarkers: 41,
        category: "Other",
        canOnlyBeUsedWithBirdStatuses: [4, 5, 7],
        shortDescription: {
            en: "Oiled",
            fr: "Huilé",
        },
    },

    {
        code: 70,
        codeForWithAuxiliaryMarkers: 71,
        category: "Capture Method",
        canOnlyBeUsedWithBirdStatuses: [2, 3, 5, 8],
        shortDescription: {
            en: "Captured by spotlighting",
            fr: "Capturé par éclairage",
        },
    },

    {
        code: 87,
        codeForWithAuxiliaryMarkers: 88,
        category: "Capture Method",
        canNotBeUsedWithBirdStatuses: [4],
        shortDescription: {
            en: "Captured with drugs or tranquilizers",
            fr: "Capturé avec des médicaments ou des tranquillisants",
        },
    },
];

export function getAllInputInfo(): AdditionalInformationCode[] {
    return [...auxMarkerCodes, ...nonAuxMarkerCodes].sort(
        (a, b) => a.code - b.code
    );
}
