import { describe, expect, it } from "vitest";

import {
  areSuffixCodesCompatible,
  isCodeAllowedWithPrefixCode,
} from "./suffixCodes";

describe("isCodeAllowedWithPrefixCode", () => {
  it("allows codes with no bird-status restrictions", () => {
    expect(isCodeAllowedWithPrefixCode(1, 3)).toBe(true);
    expect(isCodeAllowedWithPrefixCode(1, 7)).toBe(true);
  });

  it("enforces canOnlyBeUsedWithPrefixCode", () => {
    expect(isCodeAllowedWithPrefixCode(9, 3)).toBe(true);
    expect(isCodeAllowedWithPrefixCode(9, 5)).toBe(false);
  });

  it("enforces canNotBeUsedWithPrefixCode", () => {
    expect(isCodeAllowedWithPrefixCode(18, 3)).toBe(true);
    expect(isCodeAllowedWithPrefixCode(18, 7)).toBe(false);
  });
});

describe("areSuffixCodesCompatible", () => {
  it("allows codes with no suffix restrictions", () => {
    expect(areSuffixCodesCompatible(1, 2)).toBe(true);
  });

  it("blocks code 7 from combining with any other code, both directions", () => {
    expect(areSuffixCodesCompatible(7, 1)).toBe(false);
    expect(areSuffixCodesCompatible(1, 7)).toBe(false);
  });
});
