import { describe, expect, it } from "vitest";

import { isCodeAllowedWithBirdStatus } from "./infoCodes";

describe("isCodeAllowedWithBirdStatus", () => {
  it("allows codes with no bird-status restrictions", () => {
    expect(isCodeAllowedWithBirdStatus(1, 3)).toBe(true);
    expect(isCodeAllowedWithBirdStatus(1, 7)).toBe(true);
  });

  it("enforces canOnlyBeUsedWithBirdStatus", () => {
    expect(isCodeAllowedWithBirdStatus(9, 3)).toBe(true);
    expect(isCodeAllowedWithBirdStatus(9, 5)).toBe(false);
  });

  it("enforces canNotBeUsedWithBirdStatus", () => {
    expect(isCodeAllowedWithBirdStatus(18, 3)).toBe(true);
    expect(isCodeAllowedWithBirdStatus(18, 7)).toBe(false);
  });
});
