import { error } from '@sveltejs/kit'

export function load({ params }) {
	switch (params.slug) {
		case 'wrn-mrz': {
			return {
				title: 'Wiener Neustadt - Mürzzuschlag',
				waypoints: [
					{
						id: 1,
						kilometer: { integer: 48, decimal: 1 },
						data: { type: 'station', name: 'Wiener Neustadt' },
						notes: '',
					},
					{
						id: 2,
						kilometer: { integer: 49, decimal: 0 },
						data: { type: 'speed-increase', speed: 100 },
						notes: '',
					},
					{
						id: 3,
						kilometer: { integer: 49, decimal: 8 },
						data: { type: 'speed-increase', speed: 160 },
						notes: '',
					},
					{
						id: 4,
						kilometer: { integer: 56, decimal: 6 },
						data: { type: 'station', name: 'St. Egyden' },
						notes: '',
					},
					{
						id: 5,
						kilometer: { integer: 62, decimal: 6 },
						data: { type: 'station', name: 'Neunkirchen' },
						notes: '',
					},
					{
						id: 6,
						kilometer: { integer: 67, decimal: 1 },
						data: { type: 'station', name: 'Ternitz' },
						notes: '',
					},
					{
						id: 7,
						kilometer: { integer: 69, decimal: 0 },
						data: { type: 'speed-decrease', speed: 150 },
						notes: '',
					},
					{
						id: 8,
						kilometer: { integer: 69, decimal: 9 },
						data: { type: 'station', name: 'Pottschach' },
						notes: '',
					},
					{
						id: 9,
						kilometer: { integer: 74, decimal: 8 },
						data: { type: 'station', name: 'Gloggnitz' },
						notes: '',
					},
					{
						id: 10,
						kilometer: { integer: 76, decimal: 0 },
						data: { type: 'speed-decrease', speed: 80 },
						notes: '',
					},
					{
						id: 11,
						kilometer: { integer: 76, decimal: 8 },
						data: { type: 'speed-decrease', speed: 70 },
						notes: '',
					},
					{
						id: 12,
						kilometer: { integer: 77, decimal: 6 },
						data: { type: 'station', name: 'Schlöglmühl' },
						notes: '',
					},
					{
						id: 13,
						kilometer: { integer: 79, decimal: 2 },
						data: { type: 'speed-increase', speed: 80 },
						notes: '',
					},
					{
						id: 14,
						kilometer: { integer: 81, decimal: 8 },
						data: { type: 'station', name: 'Payerbach-Reichenau' },
						notes: '',
					},
					{
						id: 15,
						kilometer: { integer: 82, decimal: 0 },
						data: { type: 'speed-decrease', speed: 70 },
						notes: '',
					},
					{
						id: 16,
						kilometer: { integer: 84, decimal: 8 },
						data: { type: 'station', name: 'Küb' },
						notes: '',
					},
					{
						id: 17,
						kilometer: { integer: 84, decimal: 9 },
						data: { type: 'speed-decrease', speed: 60 },
						notes: '',
					},
					{
						id: 18,
						kilometer: { integer: 88, decimal: 1 },
						data: { type: 'station', name: 'Eichberg' },
						notes: '',
					},
					{
						id: 19,
						kilometer: { integer: 88, decimal: 8 },
						data: { type: 'speed-increase', speed: 70 },
						notes: '',
					},
					{
						id: 20,
						kilometer: { integer: 91, decimal: 8 },
						data: { type: 'speed-decrease', speed: 60 },
						notes: '',
					},
					{
						id: 21,
						kilometer: { integer: 92, decimal: 2 },
						data: { type: 'station', name: 'Klamm-Schottwien' },
						notes: '',
					},
					{
						id: 22,
						kilometer: { integer: 97, decimal: 6 },
						data: { type: 'station', name: 'Breitenstein' },
						notes: '',
					},
					{
						id: 23,
						kilometer: { integer: 100, decimal: 2 },
						data: { type: 'speed-decrease', speed: 50 },
						notes: '',
					},
					{
						id: 24,
						kilometer: { integer: 102, decimal: 0 },
						data: { type: 'station', name: 'Wolfsbergkogel' },
						notes: '',
					},
					{
						id: 25,
						kilometer: { integer: 103, decimal: 2 },
						data: { type: 'station', name: 'Semmering' },
						notes: '',
					},
					{
						id: 26,
						kilometer: { integer: 103, decimal: 4 },
						data: { type: 'speed-decrease', speed: 40 },
						notes: '',
					},
					{
						id: 27,
						kilometer: { integer: 103, decimal: 5 },
						data: { type: 'speed-increase', speed: 65 },
						notes: '',
					},
					{
						id: 28,
						kilometer: { integer: 105, decimal: 2 },
						data: { type: 'speed-increase', speed: 80 },
						notes: '',
					},
					{
						id: 29,
						kilometer: { integer: 107, decimal: 7 },
						data: { type: 'station', name: 'Steinhaus' },
						notes: '',
					},
					{
						id: 30,
						kilometer: { integer: 110, decimal: 5 },
						data: { type: 'station', name: 'Spital am Semmering' },
						notes: '',
					},
					{
						id: 31,
						kilometer: { integer: 115, decimal: 0 },
						data: { type: 'speed-decrease', speed: 40 },
						notes: '',
					},
					{
						id: 32,
						kilometer: { integer: 116, decimal: 7 },
						data: { type: 'station', name: 'Mürzzuschlag' },
						notes: '',
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
	id: number
	kilometer: {
		integer: number
		decimal: number
	}
	data: WaypointData
	notes: string
}

type TrainRoute = {
	title: string
	waypoints: Waypoint[]
}
