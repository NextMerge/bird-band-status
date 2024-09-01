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
            inputInfoCodes[code].category === "Visual Aux Marker" ||
            inputInfoCodes[code].category === "Electronic Aux Marker"
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
        category: "Visual Aux Marker",
    },
    2: {
        category: "Visual Aux Marker",
    },
    3: {
        category: "Visual Aux Marker",
        canOnlyBeUsedWithBirdStatus: [3],
    },
    4: {
        category: "Visual Aux Marker",
        canOnlyBeUsedWithBirdStatus: [3],
    },
    6: {
        auxiliaryVariant: 29,
        category: "Visual Aux Marker",
    },
    7: {
        auxiliaryVariant: 30,
        category: "Visual Aux Marker",
    },
    8: {
        category: "Visual Aux Marker",
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
        category: "Capture Method",
        canNotBeUsedWithBirdStatus: [7],
    },
    39: {
        category: "Visual Aux Marker",
    },
    40: {
        auxiliaryVariant: 41,
        category: "Other",
        canOnlyBeUsedWithBirdStatus: [4, 5, 7],
    },
    51: {
        category: "Visual Aux Marker",
    },
    59: {
        category: "Visual Aux Marker",
    },
    69: {
        category: "Visual Aux Marker",
    },
    70: {
        auxiliaryVariant: 71,
        category: "Capture Method",
        canOnlyBeUsedWithBirdStatus: [2, 3, 5, 8],
    },
    75: {
        category: "Electronic Aux Marker",
    },
    80: {
        category: "Electronic Aux Marker",
    },
    81: {
        category: "Electronic Aux Marker",
    },
    87: {
        auxiliaryVariant: 88,
        category: "Capture Method",
        canNotBeUsedWithBirdStatus: [4],
    },
    90: {
        category: "Electronic Aux Marker",
    },
};
