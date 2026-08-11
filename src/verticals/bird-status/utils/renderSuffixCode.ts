import type { OutputSuffixCode } from "../data/suffixCodes";

export function renderSuffixCode(code: OutputSuffixCode): string {
  return code.toString().padStart(2, "0");
}
