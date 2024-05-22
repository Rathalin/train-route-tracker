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
						type: 'station',
						text: 'Wiener Neustadt',
						notes: '',
					},
					{
						id: 2,
						kilometer: { integer: 49, decimal: 0 },
						type: 'speed-increase',
						text: '100 km/h',
						notes: '',
					},
					{
						id: 3,
						kilometer: { integer: 49, decimal: 8 },
						type: 'speed-increase',
						text: '160 km/h',
						notes: '',
					},
					{
						id: 4,
						kilometer: { integer: 56, decimal: 6 },
						type: 'station',
						text: 'St. Egyden',
						notes: '',
					},
					{
						id: 5,
						kilometer: { integer: 62, decimal: 6 },
						type: 'station',
						text: 'Neunkirchen',
						notes: '',
					},
					{
						id: 6,
						kilometer: { integer: 67, decimal: 1 },
						type: 'station',
						text: 'Ternitz',
						notes: '',
					},
					{
						id: 7,
						kilometer: { integer: 69, decimal: 0 },
						type: 'speed-decrease',
						text: '150 km/h',
						notes: '',
					},
					{
						id: 8,
						kilometer: { integer: 69, decimal: 9 },
						type: 'station',
						text: 'Pottschach',
						notes: '',
					},
					{
						id: 9,
						kilometer: { integer: 74, decimal: 8 },
						type: 'station',
						text: 'Gloggnitz',
						notes: '',
					},
					{
						id: 10,
						kilometer: { integer: 76, decimal: 0 },
						type: 'speed-decrease',
						text: '80 km/h',
						notes: '',
					},
					{
						id: 11,
						kilometer: { integer: 76, decimal: 8 },
						type: 'speed-decrease',
						text: '70 km/h',
						notes: '',
					},
					{
						id: 12,
						kilometer: { integer: 77, decimal: 6 },
						type: 'station',
						text: 'Schlöglmühl',
						notes: '',
					},
					{
						id: 13,
						kilometer: { integer: 79, decimal: 2 },
						type: 'speed-increase',
						text: '80 km/h',
						notes: '',
					},
					{
						id: 14,
						kilometer: { integer: 81, decimal: 8 },
						type: 'station',
						text: 'Payerbach-Reichenau',
						notes: '',
					},
					{
						id: 15,
						kilometer: { integer: 82, decimal: 0 },
						type: 'speed-decrease',
						text: '70 km/h',
						notes: '',
					},
					{
						id: 16,
						kilometer: { integer: 84, decimal: 8 },
						type: 'station',
						text: 'Küb',
						notes: '',
					},
					{
						id: 17,
						kilometer: { integer: 84, decimal: 9 },
						type: 'speed-increase',
						text: '100 km/h',
						notes: '',
					},
					{
						id: 18,
						kilometer: { integer: 88, decimal: 1 },
						type: 'station',
						text: 'Eichberg',
						notes: '',
					},
					{
						id: 19,
						kilometer: { integer: 88, decimal: 8 },
						type: 'speed-increase',
						text: '70 km/h',
						notes: '',
					},
					{
						id: 20,
						kilometer: { integer: 91, decimal: 8 },
						type: 'station',
						text: 'Gloggnitz',
						notes: '',
					},
					{
						id: 21,
						kilometer: { integer: 92, decimal: 2 },
						type: 'station',
						text: 'Klamm-Schottwien',
						notes: '',
					},
					{
						id: 22,
						kilometer: { integer: 97, decimal: 6 },
						type: 'station',
						text: 'Breitenstein',
						notes: '',
					},
					{
						id: 23,
						kilometer: { integer: 100, decimal: 2 },
						type: 'speed-decrease',
						text: '50 km/h',
						notes: '',
					},
					{
						id: 24,
						kilometer: { integer: 102, decimal: 0 },
						type: 'station',
						text: 'Wolfsbergkogel',
						notes: '',
					},
					{
						id: 25,
						kilometer: { integer: 103, decimal: 2 },
						type: 'station',
						text: 'Semmering',
						notes: '',
					},
					{
						id: 26,
						kilometer: { integer: 103, decimal: 4 },
						type: 'speed-decrease',
						text: '40 km/h',
						notes: '',
					},
					{
						id: 27,
						kilometer: { integer: 103, decimal: 5 },
						type: 'speed-increase',
						text: '65 km/h',
						notes: '',
					},
					{
						id: 28,
						kilometer: { integer: 105, decimal: 2 },
						type: 'speed-increase',
						text: '80 km/h',
						notes: '',
					},
					{
						id: 29,
						kilometer: { integer: 107, decimal: 7 },
						type: 'station',
						text: 'Steinhaus',
						notes: '',
					},
					{
						id: 30,
						kilometer: { integer: 110, decimal: 5 },
						type: 'station',
						text: 'Spital am Semmering',
						notes: '',
					},
					{
						id: 31,
						kilometer: { integer: 115, decimal: 0 },
						type: 'speed-decrease',
						text: '40 km/h',
						notes: '',
					},
					{
						id: 32,
						kilometer: { integer: 116, decimal: 7 },
						type: 'station',
						text: 'Mürzzuschlag',
						notes: '',
					},
				],
			} satisfies TrainRoute
		}
		default:
			return error(404, 'Not Found')
	}
}

type Waypoint = {
	id: number
	kilometer: {
		integer: number
		decimal: number
	}
	type: 'station' | 'speed-decrease' | 'speed-increase' | 'neutral-section'
	text: string
	notes: string
}

type TrainRoute = {
	title: string
	waypoints: Waypoint[]
}
