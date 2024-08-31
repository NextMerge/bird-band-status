export const commonLocale = {
    languages: {
        en: "English",
        fr: "Français",
    },
    meta: {
        title: {
            en: "Bird Banding status code",
            fr: "Code d'état de baguage d'oiseaux",
        },
        description: {
            en: "Calculate the Bird Banding database code for the condition of a bird",
            fr: "Calcule le code de la base de données de baguage d'oiseaux pour l'état d'un oiseau",
        },
    },
    header: {
        en: "Bird Banding status code",
        fr: "Code d'état de baguage d'oiseaux",
    },
    headerSubtitle: {
        en: "Computes the codes from:",
        fr: "Calcule les codes à partir de :",
    },
    headerNotice: {
        en: "This tool is not affiliated with the USGS Bird Banding Lab or the CWS Bird Banding Office.",
        fr: "Cet outil n'est pas affilié au USGS Bird Banding Lab ou au Bureau de baguage des oiseaux du SCF.",
    },
    featherSamplingsAndCloacalSwabsNotice: {
        en: "NOTE: Feather sampling and cloacal swabs do not affect the status code.",
        fr: "REMARQUE: Les prélèvements de plumes et les écouvillons cloacaux n'ont pas d'incidence sur le code d'état.",
    },
    sourceCode: {
        en: "Source code:",
        fr: "Code source :",
    },
    selectStatusCode: {
        en: "Select a status code:",
        fr: "Sélectionnez un code d'état:",
    },
    error: {
        unknown: {
            en: "Something went wrong",
            fr: "Quelque chose s'est mal passé",
        },
        mismatchCodes: {
            en: 'Status code "{{statusCode}}" is not valid with info code "{{infoCode}}":',
            fr: 'Le code d\'état "{{statusCode}}" n\'est pas valide avec le code de renseignements complémentaires  "{{infoCode}}" :',
        },
        infoCodeDoesNotInclude: {
            en: "Info code does not include the given status code",
            fr: "Le code de renseignements complémentaires n'inclut pas le code d'état donné",
        },
        infoCodeExcludes: {
            en: "Info code excludes the given status code",
            fr: "Le code de renseignements complémentaires exclut le code d'état donné",
        },
    },
    showDescription: {
        en: "Show description",
        fr: "Afficher la description",
    },
    hideDescription: {
        en: "Hide description",
        fr: "Masquer la description",
    },
    clearSelections: {
        en: "Clear selections",
        fr: "Effacer les sélections",
    },
    category: {
        All: {
            en: "All",
            fr: "Tous",
        },
        Sample: {
            en: "Sample",
            fr: "Échantillon",
        },
        CaptureMethod: {
            en: "Capture method",
            fr: "Méthode de capture",
        },
        VisualAuxMarker: {
            en: "Visual aux marker",
            fr: "Marqueur auxiliaire visuel",
        },
        ElectronicAuxMarker: {
            en: "Electronic aux marker",
            fr: "Marqueur auxiliaire électronique",
        },
        Other: {
            en: "Other",
            fr: "Autre",
        },
    },
};
