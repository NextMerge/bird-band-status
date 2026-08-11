import { describe, expect, it } from "vitest";

import { isCodeAllowedWithPrefixCode } from "./suffixCodes";

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
