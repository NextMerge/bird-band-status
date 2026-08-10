export type Locale = "en" | "fr";

export const uiLocale = {
  meta: {
    languages: {
      en: "English",
      fr: "Français",
    },
    title: {
      en: "Bird Banding Code Calculator",
      fr: "Code d'état de baguage d'oiseaux",
    },
    description: {
      en: "Calculate the Bird Banding database code for the condition of a bird",
      fr: "Calcule le code de la base de données de baguage d'oiseaux pour l'état d'un oiseau",
    },
  },
  header: {
    headerTitle: {
      en: "Compute the bird banding status code for the",
      fr: "Calcule le code d'état de baguage d'oiseaux pour le",
    },
    headerNotice: {
      en: "This tool is not affiliated with the USGS Bird Banding Lab or the CWS Bird Banding Office.",
      fr: "Cet outil n'est pas affilié au USGS Bird Banding Lab ou au Bureau de baguage des oiseaux du SCF.",
    },
    sourceCode: {
      en: "Source code",
      fr: "Code source",
    },
    madeBy: {
      en: "Made with ❤️ by someone",
      fr: "Fait avec ❤️ par quelqu'un",
    },
    featherSamplingsAndCloacalSwabsNotice: {
      en: "NOTE: Feather sampling and cloacal swabs do not affect the status code.",
      fr: "REMARQUE: Les prélèvements de plumes et les écouvillons cloacaux n'ont pas d'incidence sur le code d'état.",
    },
    mortalityButton: {
      en: "Mortalities",
      fr: "Mortalités",
    },
    birdBandingProgramLink: {
      en: "North American Bird Banding Program",
      fr: "Programme nord-américain de baguage",
    },
  },
  table: {
    tableColumns: {
      code: {
        en: "Code",
        fr: "Code",
      },
      description: {
        en: "Description",
        fr: "Description",
      },
      definition: {
        en: "Definition",
        fr: "Définition",
      },
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
  },
  output: {
    shortDescriptionAuxPrefix: {
      en: ", plus one or more auxiliary markers used",
      fr: ", et l'oiseau porte un ou plusieurs marqueurs auxiliaires",
    },
    longDescriptionAuxPrefix: {
      en: "All markers must be described in marker-related fields.",
      fr: "Tous les marqueurs doivent être décrits dans les champs relatifs aux marqueurs.",
    },
    selectStatusCode: {
      en: "Select a status code:",
      fr: "Sélectionnez un code d'état:",
    },
    outputCode: {
      en: "Output code:",
      fr: "Code de sortie :",
    },
    clearSelections: {
      en: "Clear selections",
      fr: "Effacer les sélections",
    },
    activeInfoCodes: {
      en: "Active info codes:",
      fr: "Codes d'info actifs :",
    },
    noActiveInfoCodes: {
      en: "No active info codes",
      fr: "Aucun code d'info actif",
    },
    closeDrawer: {
      en: "Close",
      fr: "Fermer",
    },
  },
};
