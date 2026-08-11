import {
  auxMarkerCodes,
  type SuffixCode,
  suffixCodeList,
  suffixCodes,
  type OutputSuffixCode,
  specialOutputCodes,
} from "./suffixCodes";

export function computeOutputSuffixCode(
  inputCodes: SuffixCode[],
): OutputSuffixCode {
  if (inputCodes.length === 0) {
    return specialOutputCodes.none;
  }

  if (inputCodes.length === 1) {
    return inputCodes[0];
  }

  const nonAuxCodes = inputCodes.filter(
    (code) => !auxMarkerCodes.includes(code),
  );

  if (nonAuxCodes.length === 0) {
    const specialAuxCode = suffixCodeList.find(
      (code) =>
        inputCodes.includes(code) &&
        suffixCodes[code].auxiliaryVariant !== undefined,
    );
    const specialAuxVariant =
      specialAuxCode && suffixCodes[specialAuxCode].auxiliaryVariant;
    if (specialAuxVariant) {
      return specialAuxVariant;
    }

    return specialOutputCodes.multipleAuxMarkers;
  }

  if (nonAuxCodes.length === 1) {
    return suffixCodes[nonAuxCodes[0]].auxiliaryVariant!;
  }

  return specialOutputCodes.miscellaneous;
}
