import { describe, expect, it } from "vitest";

import { computeOutputSuffixCode } from "./computeOutputSuffixCode";
import { specialOutputCodes } from "./suffixCodes";

describe("computeOutputSuffixCode()", () => {
  it("should output the default code when the input is empty", () => {
    expect(computeOutputSuffixCode([])).toEqual(specialOutputCodes.none);
  });

  it("should output the only code when the input has only one code", () => {
    expect(computeOutputSuffixCode([1])).toEqual(1);
  });

  it("should give an aux variant of the input when there is only one non-aux code", () => {
    expect(computeOutputSuffixCode([18, 81])).toEqual(19);
    expect(computeOutputSuffixCode([18, 81, 90])).toEqual(19);
  });

  it("should output the miscellaneous code when there are multiple non-aux codes", () => {
    expect(computeOutputSuffixCode([18, 70])).toEqual(
      specialOutputCodes.miscellaneous,
    );
    expect(computeOutputSuffixCode([18, 70, 87])).toEqual(
      specialOutputCodes.miscellaneous,
    );
  });

  describe("other miscellaneous cases", () => {
    it("85", () => {
      expect(computeOutputSuffixCode([14, 18])).toEqual(
        specialOutputCodes.miscellaneous,
      );
    });

    it("25", () => {
      expect(computeOutputSuffixCode([2, 80])).toEqual(
        specialOutputCodes.multipleAuxMarkers,
      );
    });

    it("29", () => {
      expect(computeOutputSuffixCode([3, 6])).toEqual(29);
    });

    it("30", () => {
      expect(computeOutputSuffixCode([4, 7])).toEqual(30);
    });
  });
});
