export const directionOptions = ['asc', 'desc'] as const
export type DirectionOption = (typeof directionOptions)[number]
