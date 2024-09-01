import {
    AuxVariantInfoCode,
    defaultAddCode,
    getAuxMarkerCodes,
    InfoCode,
    inputInfoCodes,
    miscellaneous,
    twoOrMoreTypesOfAuxiliaryMarkers,
} from "~/birding/infoCodes";

export function computeOutputInfoCode(
    inputCodes: InfoCode[]
): InfoCode | AuxVariantInfoCode | 0 | 25 | 85 {
    if (inputCodes.length <= 0) {
        return defaultAddCode;
    }

    if (inputCodes.length <= 1) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return inputCodes[0]!;
    }

    const auxMarkerCodes = getAuxMarkerCodes();

    if (inputCodes.every((code) => auxMarkerCodes.includes(code))) {
        if (inputCodes.includes(6)) {
            return 29;
        }
        if (inputCodes.includes(7)) {
            return 30;
        }

        return twoOrMoreTypesOfAuxiliaryMarkers;
    }

    const inputCodesThatAreNotAuxMarkers = inputCodes.filter(
        (code) => !auxMarkerCodes.includes(code)
    );

    if (inputCodesThatAreNotAuxMarkers.length === 1) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return inputInfoCodes[inputCodesThatAreNotAuxMarkers[0]!]
            .auxiliaryVariant!;
    }

    return miscellaneous;
}
