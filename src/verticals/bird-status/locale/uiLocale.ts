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
    instructions: {
      before: {
        en: "Select one or more of the status codes on the right to compute the code to be given to the ",
        fr: "Sélectionnez un ou plusieurs codes d'état à droite pour calculer le code à fournir à la ",
      },
      link: {
        en: "North American Bird Banding Lab database",
        fr: "base de données du North American Bird Banding Lab",
      },
      after: {
        en: ".",
        fr: ".",
      },
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
  },
  birdStatus: {
    selectLabel: {
      en: "Bird status:",
      fr: "État de l'oiseau :",
    },
    status: {
      2: {
        en: "Transported",
        fr: "Transporté",
      },
      3: {
        en: "Normal wild bird",
        fr: "Oiseau sauvage normal",
      },
      4: {
        en: "Hand-reared, game-farm or hacked bird",
        fr: "Oiseau élevé en captivité ou hacké",
      },
      5: {
        en: "Sick, Exhausted, Over-stressed, Injured, or Physical Deformity",
        fr: "Malade, épuisé, sur-stressé, blessé ou difformité physique",
      },
      7: {
        en: "Rehabilitated and held",
        fr: "Réhabilité et détenu",
      },
      8: {
        en: "Held for longer than 24 hours for experimental or other purposes",
        fr: "Détenu plus de 24 heures à des fins expérimentales ou autres",
      },
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
      en: "Status code:",
      fr: "Code d'état :",
    },
    moreDetails: {
      en: "Details",
      fr: "Détails",
    },
    copiedStatusCode: {
      en: "Status code copied",
      fr: "Code d'état copié",
    },
    copyFailed: {
      en: "Copy failed",
      fr: "Échec de la copie",
    },
    copyFailedDescription: {
      en: "Could not copy the status code.",
      fr: "Impossible de copier le code d'état.",
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
    removeCode: {
      en: "Remove",
      fr: "Retirer",
    },
    closeDrawer: {
      en: "Close",
      fr: "Fermer",
    },
  },
  codeToggle: {
    disabledNote: {
      canOnlyBeUsedWith: {
        en: (code: number, statuses: number[]) =>
          `Code ${code.toString().padStart(2, "0")} can only be used with bird statuses ${statuses.map((s) => s.toString().padStart(2, "0")).join(", ")}.`,
        fr: (code: number, statuses: number[]) =>
          `Le code ${code.toString().padStart(2, "0")} ne peut être utilisé qu'avec les états d'oiseau ${statuses.map((s) => s.toString().padStart(2, "0")).join(", ")}.`,
      },
      canNotBeUsedWith: {
        en: (code: number, status: number) =>
          `Code ${code.toString().padStart(2, "0")} cannot be used with bird status ${status.toString().padStart(2, "0")}.`,
        fr: (code: number, status: number) =>
          `Le code ${code.toString().padStart(2, "0")} ne peut pas être utilisé avec l'état d'oiseau ${status.toString().padStart(2, "0")}.`,
      },
    },
  },
};
