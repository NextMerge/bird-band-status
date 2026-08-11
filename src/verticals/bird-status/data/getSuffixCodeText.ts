import { type Locale, uiLocale } from "#/locale/uiLocale.ts";

import { renderSuffixCode } from "../utils/renderSuffixCode";
import {
  type AuxVariantSuffixCode,
  auxVariantSuffixCodes,
  type SuffixCode,
  suffixCodeList,
  suffixCodes,
  type OutputSuffixCode,
  type SpecialOutputCode,
  specialOutputCodeText,
} from "./suffixCodes";

function isAuxVariantCode(
  code: OutputSuffixCode,
): code is AuxVariantSuffixCode {
  return auxVariantSuffixCodes.some((variant) => variant === code);
}

function isSuffixCode(
  code: SuffixCode | SpecialOutputCode,
): code is SuffixCode {
  return code in suffixCodes;
}

export function getSuffixCodeText(
  code: OutputSuffixCode,
  locale: Locale,
): {
  shortDescription: string;
  longDescription?: string;
} {
  if (isAuxVariantCode(code)) {
    const matchingCode = suffixCodeList.find((c) => {
      return suffixCodes[c].auxiliaryVariant === code;
    });

    if (!matchingCode) {
      throw new Error(
        `Could not find auxiliary variant code ${renderSuffixCode(code)}`,
      );
    }

    const text = suffixCodes[matchingCode];

    return {
      shortDescription: `${text.shortDescription[locale]}${uiLocale.output.shortDescriptionAuxPrefix[locale]}${text.shortDescriptionSuffix?.[locale] ?? ""}`,
      longDescription: text.longDescription
        ? `${text.longDescription[locale]} ${uiLocale.output.longDescriptionAuxPrefix[locale]}`
        : undefined,
    };
  }

  const text = isSuffixCode(code)
    ? suffixCodes[code]
    : specialOutputCodeText[code];

  return {
    shortDescription: `${text.shortDescription[locale]}${text.shortDescriptionSuffix?.[locale] ?? ""}`,
    longDescription: text.longDescription
      ? text.longDescription[locale]
      : undefined,
  };
}
