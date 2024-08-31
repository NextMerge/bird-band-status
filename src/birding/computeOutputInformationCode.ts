import {
    AdditionalInformationCode,
    auxMarkerCodes,
    defaultAddCode,
    miscellaneous,
    nonAuxMarkerCodes,
    twoOrMoreTypesOfAuxiliaryMarkers,
} from "~/birding/additionalInformationCodes";

export function computeOutputInformationCode(
    inputInformation: AdditionalInformationCode[]
): { outputInfo: AdditionalInformationCode; auxVariant: boolean } {
    if (inputInformation.length <= 0) {
        return { outputInfo: defaultAddCode, auxVariant: false };
    }

    if (inputInformation.length <= 1) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return { outputInfo: inputInformation[0]!, auxVariant: false };
    }

    if (inputInformation.every((code) => auxMarkerCodes.includes(code))) {
        const theExceptions = inputInformation.find(
            (info) => info.code === 6 || info.code === 7
        );

        if (theExceptions) {
            return { outputInfo: theExceptions, auxVariant: true };
        }

        return {
            outputInfo: twoOrMoreTypesOfAuxiliaryMarkers,
            auxVariant: false,
        };
    }

    const inputCodesThatAreNotAuxMarkers = inputInformation.filter((code) =>
        nonAuxMarkerCodes.includes(code)
    );

    if (inputCodesThatAreNotAuxMarkers.length === 1) {
        return {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            outputInfo: inputCodesThatAreNotAuxMarkers[0]!,
            auxVariant: true,
        };
    }

    return {
        outputInfo: miscellaneous,
        auxVariant: false,
    };
}
