export const prefixCodes = [2, 3, 4, 5, 7, 8] as const;

export type PrefixCode = (typeof prefixCodes)[number];

export const defaultPrefixCode: PrefixCode = 3;
