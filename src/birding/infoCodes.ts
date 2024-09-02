import { BirdStatusCode } from "~/birding/birdStatus";
import { InfoCategory } from "~/birding/infoCategories";

export const infoCodes = [
    1, 2, 3, 4, 6, 7, 8, 9, 11, 14, 16, 18, 20, 33, 39, 40, 51, 59, 69, 70, 75,
    80, 81, 87, 90,
] as const;
export type InfoCode = (typeof infoCodes)[number];

export const auxVariantInfoCodes = [
    10, 12, 15, 17, 19, 21, 29, 30, 34, 41, 71, 88,
] as const;
export type AuxVariantInfoCode = (typeof auxVariantInfoCodes)[number];

export function getAuxMarkerCodes(): InfoCode[] {
    return infoCodes.filter((code) => {
        return (
            inputInfoCodes[code].category === "VisualAuxMarker" ||
            inputInfoCodes[code].category === "ElectronicAuxMarker"
        );
    });
}

export const defaultAddCode = 0;
export const twoOrMoreTypesOfAuxiliaryMarkers = 25;
export const miscellaneous = 85;

export const inputInfoCodes: {
    [key in InfoCode]: {
        auxiliaryVariant?: AuxVariantInfoCode;
        category: InfoCategory;
        canOnlyBeUsedWithBirdStatus?: BirdStatusCode[];
        canNotBeUsedWithBirdStatus?: BirdStatusCode[];
    };
} = {
    1: {
        category: "VisualAuxMarker",
    },
    2: {
        category: "VisualAuxMarker",
    },
    3: {
        category: "VisualAuxMarker",
        canOnlyBeUsedWithBirdStatus: [3],
    },
    4: {
        category: "VisualAuxMarker",
        canOnlyBeUsedWithBirdStatus: [3],
    },
    6: {
        auxiliaryVariant: 29,
        category: "VisualAuxMarker",
    },
    7: {
        auxiliaryVariant: 30,
        category: "VisualAuxMarker",
    },
    8: {
        category: "VisualAuxMarker",
    },
    9: {
        auxiliaryVariant: 10,
        category: "Other",
        canOnlyBeUsedWithBirdStatus: [2, 3, 4, 8],
    },
    11: {
        auxiliaryVariant: 12,
        category: "Other",
    },
    14: {
        auxiliaryVariant: 15,
        category: "Sample",
    },
    16: {
        auxiliaryVariant: 17,
        category: "Sample",
    },
    18: {
        auxiliaryVariant: 19,
        category: "Sample",
        canNotBeUsedWithBirdStatus: [7],
    },
    20: {
        auxiliaryVariant: 21,
        category: "Other",
    },
    33: {
        auxiliaryVariant: 34,
        category: "CaptureMethod",
        canNotBeUsedWithBirdStatus: [7],
    },
    39: {
        category: "VisualAuxMarker",
    },
    40: {
        auxiliaryVariant: 41,
        category: "Other",
        canOnlyBeUsedWithBirdStatus: [4, 5, 7],
    },
    51: {
        category: "VisualAuxMarker",
    },
    59: {
        category: "VisualAuxMarker",
    },
    69: {
        category: "VisualAuxMarker",
    },
    70: {
        auxiliaryVariant: 71,
        category: "CaptureMethod",
        canOnlyBeUsedWithBirdStatus: [2, 3, 5, 8],
    },
    75: {
        category: "ElectronicAuxMarker",
    },
    80: {
        category: "ElectronicAuxMarker",
    },
    81: {
        category: "ElectronicAuxMarker",
    },
    87: {
        auxiliaryVariant: 88,
        category: "CaptureMethod",
        canNotBeUsedWithBirdStatus: [4],
    },
    90: {
        category: "ElectronicAuxMarker",
    },
};
