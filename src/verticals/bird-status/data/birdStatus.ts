export const birdStatuses = [2, 3, 4, 5, 7, 8] as const;

export type BirdStatusCode = (typeof birdStatuses)[number];

export const defaultBirdStatus = 3;
