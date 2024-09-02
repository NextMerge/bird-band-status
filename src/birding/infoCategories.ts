export const infoCategories = [
    "Sample",
    "CaptureMethod",
    "VisualAuxMarker",
    "ElectronicAuxMarker",
    "Other",
] as const;

export type InfoCategory = (typeof infoCategories)[number];
