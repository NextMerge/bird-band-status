import { describe, expect, it } from "bun:test";
import {
    AdditionalInformationCode,
    defaultAddCode,
    getAllInputInfo,
    miscellaneous,
    twoOrMoreTypesOfAuxiliaryMarkers,
} from "~/birding/additionalInformationCodes";
import { computeOutputInformationCode } from "~/birding/computeOutputInformationCode";

function getInfoByCode(code: number): AdditionalInformationCode {
    const result = getAllInputInfo().find((info) => info.code === code);
    if (!result) {
        throw new Error(`No information found for code ${code.toString()}`);
    }

    return result;
}

describe("computeOutputInformation()", () => {
    it("should output the default code when the input is empty", () => {
        expect(computeOutputInformationCode([])).toEqual({
            outputInfo: defaultAddCode,
            auxVariant: false,
        });
    });

    it("should output the only code when the input has only one code", () => {
        const code = getInfoByCode(1);
        expect(computeOutputInformationCode([code])).toEqual({
            outputInfo: code,
            auxVariant: false,
        });
    });

    it("should give an aux variant of the input when there is only one non-aux code", () => {
        const result = {
            outputInfo: getInfoByCode(18),
            auxVariant: true,
        };

        expect(
            computeOutputInformationCode([getInfoByCode(18), getInfoByCode(81)])
        ).toEqual(result);
        expect(
            computeOutputInformationCode([
                getInfoByCode(18),
                getInfoByCode(81),
                getInfoByCode(90),
            ])
        ).toEqual(result);
    });

    it("should output the miscellaneous code when there are multiple non-aux codes", () => {
        const result = {
            outputInfo: miscellaneous,
            auxVariant: false,
        };

        expect(
            computeOutputInformationCode([getInfoByCode(18), getInfoByCode(70)])
        ).toEqual(result);
        expect(
            computeOutputInformationCode([
                getInfoByCode(18),
                getInfoByCode(70),
                getInfoByCode(87),
            ])
        ).toEqual(result);
    });

    describe("other miscellaneous cases", () => {
        it("385", () => {
            expect(
                computeOutputInformationCode([
                    getInfoByCode(14),
                    getInfoByCode(18),
                ])
            ).toEqual({
                outputInfo: miscellaneous,
                auxVariant: false,
            });
        });

        it("325", () => {
            expect(
                computeOutputInformationCode([
                    getInfoByCode(2),
                    getInfoByCode(80),
                ])
            ).toEqual({
                outputInfo: twoOrMoreTypesOfAuxiliaryMarkers,
                auxVariant: false,
            });
        });

        it("329", () => {
            expect(
                computeOutputInformationCode([
                    getInfoByCode(3),
                    getInfoByCode(6),
                ])
            ).toEqual({
                outputInfo: getInfoByCode(6),
                auxVariant: true,
            });
        });

        it("330", () => {
            expect(
                computeOutputInformationCode([
                    getInfoByCode(4),
                    getInfoByCode(7),
                ])
            ).toEqual({
                outputInfo: getInfoByCode(7),
                auxVariant: true,
            });
        });
    });
});
