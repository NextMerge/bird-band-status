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
        en: "Select one or more of the codes on the right to compute the status code to be submitted to the ",
        fr: "Sélectionnez un ou plusieurs codes à droite pour calculer le code d'état à soumettre à la ",
      },
      link: {
        en: "North American Bird Banding Program database",
        fr: "base de données du Programme nord-américain de baguage des oiseaux",
      },
      after: {
        en: ".",
        fr: ".",
      },
    },
    headerNotice: {
      en: "This tool is not affiliated with the CWS Bird Banding Office or the USGS Bird Banding Lab.",
      fr: "Cet outil n'est pas affilié au Bureau de baguage des oiseaux du SCF ou au USGS Bird Banding Lab.",
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
    mobileDrawerTitle: {
      en: "Details",
      fr: "Détails",
    },
    mobileDrawerDescription: {
      en: "Selected codes, language, and links",
      fr: "Codes sélectionnés, langue et liens",
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
        definition: {
          en: "Transported to a different 10-minute block, but otherwise normal wild bird (requires an additional permit from Federal Law Enforcement and/or State agencies): may or may not be held for longer than 24 hours. Banding location, age, sex, and date banded must be those at release. Capture location and date must be given in Remarks.",
          fr: "Transporté à un bloc de 10 minutes différent, mais il s’agit par ailleurs d’un oiseau sauvage normal (il faut détenir un permis délivré par les autorités d’application de la loi fédérales et/ou d’État) : peut avoir été maintenu en captivité pendant plus de 24 heures, ou non. Le lieu de baguage, l’âge, le sexe et la date de baguage doivent être établis au moment de la remise en liberté. Le lieu et la date de la capture doivent être indiqués dans le champ « Remarques ».",
        },
      },
      3: {
        en: "Normal wild bird",
        fr: "Oiseau sauvage normal",
        definition: {
          en: "Normal, wild bird: released in same 10-minute block as captured: held 24 hours or less.",
          fr: "Oiseau sauvage normal : relâché dans le bloc de 10 minutes où il a été capturé; maintenu en captivité pendant 24 heures ou moins.",
        },
      },
      4: {
        en: "Hand-reared, game-farm or hacked bird",
        fr: "Oiseau élevé en captivité ou hacké",
        definition: {
          en: "Hand-reared or hacked: raised in captivity from egg or taken as nestling or orphan. Banding location, age, sex, and date banded must be those at release. Hand-rearing may include transporting. If a hand-reared bird is also injured, use additional information code 85. Capture location and date must be given in Remarks.",
          fr: "Élevé en captivité ou relâché : élevé en captivité à partir d’un œuf, ou capturé comme oisillon ou orphelin. Le lieu de baguage, l’âge, le sexe et la date de baguage doivent être établis au moment de la remise en liberté. L’élevage en captivité peut comprendre le transport. Si un oiseau élevé en captivité est également blessé, utiliser le code de renseignements complémentaires 85. Le lieu et la date de la capture doivent être indiqués dans le champ « Remarques ».",
        },
      },
      5: {
        en: "Sick, Exhausted, Over-stressed, Injured, or Physical Deformity",
        fr: "Malade, épuisé, sur-stressé, blessé ou difformité physique",
        definition: {
          en: "Sick, Exhausted, Over-stressed (or shock), Injured (old or new injury), or with a Physical Deformity; held 24 hours or less: may or may not be treated or transported. Requires an explanation in the Remarks.",
          fr: "Malade, épuisé, surmené (ou état de choc), blessé (blessure ancienne ou nouvelle) ou présentant une difformité physique; maintenu en captivité pendant 24 heures ou moins : peut avoir été transporté ou traité, ou non. Explication requise dans le champ « Remarques ».",
        },
      },
      7: {
        en: "Rehabilitated and held",
        fr: "Réhabilité et détenu",
        definition: {
          en: 'Rehabilitated and held longer than 24 hours: sick, exhausted, injured, or crippled: (assumes that transportation and/or blood sampling may be involved). Requires an explanation in "Remarks", including capture location, a short description of the injury and how long it was in captivity (under 250 characters). Rehab birds should NOT be banded before they are ready for release. Banding location, age, sex, and date banded must be those at release.',
          fr: "Réadapté et maintenu en captivité pendant plus de 24 heures : malade, épuisé, blessé ou handicapé (on suppose qu’un transport ou un prélèvement sanguin ou les deux peut avoir eu lieu). Une explication doit être fournie dans le champ « Remarques », y compris le lieu de la capture ainsi qu’une brève description de la blessure et de la durée de la captivité (moins de 250 caractères). Les oiseaux réhabilités NE devraient PAS être bagués avant d’être prêts pour leur remise en liberté. Le lieu de baguage, l’âge, le sexe et la date de baguage doivent être établis au moment de la remise en liberté.",
        },
      },
      8: {
        en: "Held for longer than 24 hours for experimental or other purposes",
        fr: "Détenu plus de 24 heures à des fins expérimentales ou autres",
        definition: {
          en: "Held for longer than 24 hours for experimental or other purposes (including falconry under Federal and State falconry permits) otherwise normal, wild. Status 8 may include transporting, but if held only for transporting use status code 2. Holding for experimentation and transporting both require an additional permit from Fish and Wildlife Service Regional Office and/or State agencies. Age, sex, and banding date must be those at release. Requires an explanation in Remarks, including capture date and location.",
          fr: "Maintenu en captivité pendant plus de 24 heures à des fins expérimentales ou autres (y compris la fauconnerie en vertu d’un permis fédéral ou d’État). Il s’agit par ailleurs d’un oiseau sauvage normal. Le code d’état 8 peut comprendre le transport mais, si l’oiseau est maintenu en captivité seulement pour le transport, utiliser le code d’état 2. Le maintien en captivité à des fins expérimentales et pour le transport exige l’obtention de deux permis supplémentaires du bureau régional du Fish and Wildlife Service et/ou d’organismes d’État. L’âge, le sexe et la date de baguage doivent être établis au moment de la remise en liberté. Explication requise dans le champ « Remarques », y compris au sujet du lieu et de la date de capture.",
        },
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
          `Code ${code.toString()} can only be used with bird statuses ${statuses.map((s) => s.toString()).join(", ")}.`,
        fr: (code: number, statuses: number[]) =>
          `Le code ${code.toString()} ne peut être utilisé qu'avec les états d'oiseau ${statuses.map((s) => s.toString()).join(", ")}.`,
      },
      canNotBeUsedWith: {
        en: (code: number, status: number) =>
          `Code ${code.toString()} cannot be used with bird status ${status.toString()}.`,
        fr: (code: number, status: number) =>
          `Le code ${code.toString()} ne peut pas être utilisé avec l'état d'oiseau ${status.toString()}.`,
      },
    },
  },
};
