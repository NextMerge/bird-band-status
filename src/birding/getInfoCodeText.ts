import {
    AuxVariantInfoCode,
    auxVariantInfoCodes,
    InfoCode,
    infoCodes,
    inputInfoCodes,
} from "~/birding/infoCodes";
import { infoCodeLocale } from "~/locale/infoCodeLocale";
import { commonLocale } from "~/locale/mainLocale";

export function getInfoCodeText(
    code: InfoCode | AuxVariantInfoCode | 0 | 25 | 85,
    locale: "en" | "fr"
): {
    shortDescription: string;
    longDescription?: string;
} {
    if (auxVariantInfoCodes.includes(code as AuxVariantInfoCode)) {
        // check through the key map inputInfoCodes and return the key whose value contains the auxiliaryVariant
        const mightCode = infoCodes.find((c) => {
            return inputInfoCodes[c].auxiliaryVariant === code;
        });

        if (!mightCode) {
            throw new Error(
                `Could not find auxiliary variant code ${code.toString().padStart(2, "0")}`
            );
        }

        const text = infoCodeLocale[mightCode];

        return {
            shortDescription: `${text.shortDescription[locale]}${commonLocale.shortDescriptionAuxPrefix[locale]}`,
            longDescription: text.longDescription
                ? `${text.longDescription[locale]} ${commonLocale.longDescriptionAuxPrefix[locale]}`
                : undefined,
        };
    }

    const text = infoCodeLocale[code as InfoCode | 0 | 25 | 85];

    return {
        shortDescription: text.shortDescription[locale],
        longDescription: text.longDescription
            ? text.longDescription[locale]
            : undefined,
    };
}
