import {
  auxMarkerCodes,
  type InfoCode,
  infoCodes,
  type OutputInfoCode,
  specialOutputCodes,
} from "./infoCodes";

export function computeOutputInfoCode(inputCodes: InfoCode[]): OutputInfoCode {
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
    if (inputCodes.includes(6)) {
      return 29;
    }
    if (inputCodes.includes(7)) {
      return 30;
    }

    return specialOutputCodes.multipleAuxMarkers;
  }

  if (nonAuxCodes.length === 1) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return infoCodes[nonAuxCodes[0]].auxiliaryVariant!;
  }

  return specialOutputCodes.miscellaneous;
}
