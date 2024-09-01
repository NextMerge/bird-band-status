import { describe, expect, it } from "bun:test";
import { computeOutputInfoCode } from "~/birding/computeOutputInfoCode";
import {
    defaultAddCode,
    miscellaneous,
    twoOrMoreTypesOfAuxiliaryMarkers,
} from "~/birding/infoCodes";

describe("computeOutputInformation()", () => {
    it("should output the default code when the input is empty", () => {
        expect(computeOutputInfoCode([])).toEqual(defaultAddCode);
    });

    it("should output the only code when the input has only one code", () => {
        expect(computeOutputInfoCode([1])).toEqual(1);
    });

    it("should give an aux variant of the input when there is only one non-aux code", () => {
        expect(computeOutputInfoCode([18, 81])).toEqual(19);
        expect(computeOutputInfoCode([18, 81, 90])).toEqual(19);
    });

    it("should output the miscellaneous code when there are multiple non-aux codes", () => {
        expect(computeOutputInfoCode([18, 70])).toEqual(miscellaneous);
        expect(computeOutputInfoCode([18, 70, 87])).toEqual(miscellaneous);
    });

    describe("other miscellaneous cases", () => {
        it("85", () => {
            expect(computeOutputInfoCode([14, 18])).toEqual(miscellaneous);
        });

        it("25", () => {
            expect(computeOutputInfoCode([2, 80])).toEqual(
                twoOrMoreTypesOfAuxiliaryMarkers
            );
        });

        it("29", () => {
            expect(computeOutputInfoCode([3, 6])).toEqual(29);
        });

        it("30", () => {
            expect(computeOutputInfoCode([4, 7])).toEqual(30);
        });
    });
});
