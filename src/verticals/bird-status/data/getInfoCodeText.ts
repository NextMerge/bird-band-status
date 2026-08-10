import { type Locale, uiLocale } from "../locale/uiLocale";
import {
  type AuxVariantInfoCode,
  auxVariantInfoCodes,
  type InfoCode,
  infoCodeList,
  infoCodes,
  type OutputInfoCode,
  type SpecialOutputCode,
  specialOutputCodeText,
} from "./infoCodes";

function isAuxVariantCode(code: OutputInfoCode): code is AuxVariantInfoCode {
  return auxVariantInfoCodes.some((variant) => variant === code);
}

function isInfoCode(code: InfoCode | SpecialOutputCode): code is InfoCode {
  return code in infoCodes;
}

export function getInfoCodeText(
  code: OutputInfoCode,
  locale: Locale,
): {
  shortDescription: string;
  longDescription?: string;
} {
  if (isAuxVariantCode(code)) {
    const matchingCode = infoCodeList.find((c) => {
      return infoCodes[c].auxiliaryVariant === code;
    });

    if (!matchingCode) {
      throw new Error(
        `Could not find auxiliary variant code ${code.toString().padStart(2, "0")}`,
      );
    }

    const text = infoCodes[matchingCode];

    return {
      shortDescription: `${text.shortDescription[locale]}${uiLocale.output.shortDescriptionAuxPrefix[locale]}${text.shortDescriptionSuffix?.[locale] ?? ""}`,
      longDescription: text.longDescription
        ? `${text.longDescription[locale]} ${uiLocale.output.longDescriptionAuxPrefix[locale]}`
        : undefined,
    };
  }

  const text = isInfoCode(code) ? infoCodes[code] : specialOutputCodeText[code];

  return {
    shortDescription: `${text.shortDescription[locale]}${text.shortDescriptionSuffix?.[locale] ?? ""}`,
    longDescription: text.longDescription
      ? text.longDescription[locale]
      : undefined,
  };
}
