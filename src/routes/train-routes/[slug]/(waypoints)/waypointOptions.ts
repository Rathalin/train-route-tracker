export const waypointOptions = [
	'station',
	'speed-increase',
	'speed-decrease',
	'neutral-section',
] as const
export type WaypointOption = (typeof waypointOptions)[number]
