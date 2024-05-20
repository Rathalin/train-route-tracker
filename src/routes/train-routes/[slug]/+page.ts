import { error } from '@sveltejs/kit'

export function load({ params }) {
	switch (params.slug) {
		case 'wrn-mrz': {
			return {
				title: 'Wiener Neustadt - Mürzzuschlag',
				sections: [
					{
						kilometer: { integer: 48, decimal: 1 },
						data: { type: 'station', name: 'Wiener Neustadt' },
					},
					{
						kilometer: { integer: 49, decimal: 0 },
						data: { type: 'speed-increase', speed: 100 },
					},
					{
						kilometer: { integer: 49, decimal: 8 },
						data: { type: 'speed-increase', speed: 160 },
					},
					{
						kilometer: { integer: 56, decimal: 6 },
						data: { type: 'station', name: 'St. Egyden' },
					},
					{
						kilometer: { integer: 62, decimal: 6 },
						data: { type: 'station', name: 'Neunkirchen' },
					},
					{
						kilometer: { integer: 67, decimal: 1 },
						data: { type: 'station', name: 'Ternitz' },
					},
					{
						kilometer: { integer: 69, decimal: 0 },
						data: { type: 'speed-decrease', speed: 150 },
					},
					{
						kilometer: { integer: 69, decimal: 9 },
						data: { type: 'station', name: 'Pottschach' },
					},
					{
						kilometer: { integer: 74, decimal: 8 },
						data: { type: 'station', name: 'Gloggnitz' },
					},
					{
						kilometer: { integer: 76, decimal: 0 },
						data: { type: 'speed-decrease', speed: 80 },
					},
					{
						kilometer: { integer: 76, decimal: 8 },
						data: { type: 'speed-decrease', speed: 70 },
					},
					{
						kilometer: { integer: 77, decimal: 6 },
						data: { type: 'station', name: 'Schlöglmühl' },
					},
					{
						kilometer: { integer: 79, decimal: 2 },
						data: { type: 'speed-increase', speed: 80 },
					},
					{
						kilometer: { integer: 81, decimal: 8 },
						data: { type: 'station', name: 'Payerbach-Reichenau' },
					},
					{
						kilometer: { integer: 82, decimal: 0 },
						data: { type: 'speed-decrease', speed: 70 },
					},
					{
						kilometer: { integer: 84, decimal: 8 },
						data: { type: 'station', name: 'Küb' },
					},
					{
						kilometer: { integer: 84, decimal: 9 },
						data: { type: 'speed-decrease', speed: 60 },
					},
					{
						kilometer: { integer: 88, decimal: 1 },
						data: { type: 'station', name: 'Eichberg' },
					},
					{
						kilometer: { integer: 88, decimal: 8 },
						data: { type: 'speed-increase', speed: 70 },
					},
					{
						kilometer: { integer: 91, decimal: 8 },
						data: { type: 'speed-decrease', speed: 60 },
					},
					{
						kilometer: { integer: 92, decimal: 2 },
						data: { type: 'station', name: 'Klamm-Schottwien' },
					},
					{
						kilometer: { integer: 97, decimal: 6 },
						data: { type: 'station', name: 'Breitenstein' },
					},
					{
						kilometer: { integer: 100, decimal: 2 },
						data: { type: 'speed-decrease', speed: 50 },
					},
					{
						kilometer: { integer: 102, decimal: 0 },
						data: { type: 'station', name: 'Wolfsbergkogel' },
					},
					{
						kilometer: { integer: 103, decimal: 2 },
						data: { type: 'station', name: 'Semmering' },
					},
					{
						kilometer: { integer: 103, decimal: 4 },
						data: { type: 'speed-decrease', speed: 40 },
					},
					{
						kilometer: { integer: 103, decimal: 5 },
						data: { type: 'speed-increase', speed: 65 },
					},
					{
						kilometer: { integer: 105, decimal: 2 },
						data: { type: 'speed-increase', speed: 80 },
					},
					{
						kilometer: { integer: 107, decimal: 7 },
						data: { type: 'station', name: 'Steinhaus' },
					},
					{
						kilometer: { integer: 110, decimal: 5 },
						data: { type: 'station', name: 'Spital am Semmering' },
					},
					{
						kilometer: { integer: 115, decimal: 0 },
						data: { type: 'speed-decrease', speed: 40 },
					},
					{
						kilometer: { integer: 116, decimal: 7 },
						data: { type: 'station', name: 'Mürzzuschlag' },
					},
				],
			} satisfies TrainRoute
		}
		default:
			return error(404, 'Not Found')
	}
}

type WaypointData =
	| {
			type: 'station'
			name: string
	  }
	| {
			type: 'speed-decrease'
			speed: number
	  }
	| {
			type: 'speed-increase'
			speed: number
	  }
	| {
			type: 'neutral-section'
	  }

type Waypoint = {
	kilometer: {
		integer: number
		decimal: number
	}
	data: WaypointData
}

type TrainRoute = {
	title: string
	sections: Waypoint[]
}
