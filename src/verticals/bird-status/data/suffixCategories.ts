export const suffixCategories = [
  "Sample",
  "CaptureMethod",
  "VisualAuxMarker",
  "ElectronicAuxMarker",
  "Other",
] as const;

export type SuffixCategory = (typeof suffixCategories)[number];
