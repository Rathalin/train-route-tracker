import type { Actions } from './$types'

export const actions = {
	seedDb: async ({ locals }) => {
		try {
			await locals.db.waypoint.deleteMany()
			await locals.db.route.deleteMany()
			await locals.db.route.create({
				data: {
					shortName: 'wrn-mrz',
					title: 'Wiener Neustadt - Mürzzuschlag',
					waypoints: {
						createMany: {
							data: [
								{
									kilometer: 48.1,
									type: 'station',
									text: 'Wiener Neustadt',
									notes: '',
								},
								{
									kilometer: 49.0,
									type: 'speed-increase',
									text: '100 km/h',
									notes: '',
								},
								{
									kilometer: 49.8,
									type: 'speed-increase',
									text: '160 km/h',
									notes: '',
								},
								{
									kilometer: 56.6,
									type: 'station',
									text: 'St. Egyden',
									notes: '',
								},
								{
									kilometer: 62.6,
									type: 'station',
									text: 'Neunkirchen',
									notes: '',
								},
								{
									kilometer: 67.1,
									type: 'station',
									text: 'Ternitz',
									notes: '',
								},
								{
									kilometer: 69.0,
									type: 'speed-decrease',
									text: '150 km/h',
									notes: '',
								},
								{
									kilometer: 69.9,
									type: 'station',
									text: 'Pottschach',
									notes: '',
								},
								{
									kilometer: 74.8,
									type: 'station',
									text: 'Gloggnitz',
									notes: '',
								},
								{
									kilometer: 76.0,
									type: 'speed-decrease',
									text: '80 km/h',
									notes: '',
								},
								{
									kilometer: 76.8,
									type: 'speed-decrease',
									text: '70 km/h',
									notes: '',
								},
								{
									kilometer: 77.6,
									type: 'station',
									text: 'Schlöglmühl',
									notes: '',
								},
								{
									kilometer: 79.2,
									type: 'speed-increase',
									text: '80 km/h',
									notes: '',
								},
								{
									kilometer: 81.8,
									type: 'station',
									text: 'Payerbach-Reichenau',
									notes: '',
								},
								{
									kilometer: 82.0,
									type: 'speed-decrease',
									text: '70 km/h',
									notes: '',
								},
								{
									kilometer: 84.8,
									type: 'station',
									text: 'Küb',
									notes: '',
								},
								{
									kilometer: 84.9,
									type: 'speed-decrease',
									text: '60 km/h',
									notes: '',
								},
								{
									kilometer: 88.1,
									type: 'station',
									text: 'Eichberg',
									notes: '',
								},
								{
									kilometer: 88.8,
									type: 'speed-increase',
									text: '70 km/h',
									notes: '',
								},
								{
									kilometer: 91.8,
									type: 'speed-decrease',
									text: '60 km/h',
									notes: '',
								},
								{
									kilometer: 92.2,
									type: 'station',
									text: 'Klamm-Schottwien',
									notes: '',
								},
								{
									kilometer: 97.6,
									type: 'station',
									text: 'Breitenstein',
									notes: '',
								},
								{
									kilometer: 100.2,
									type: 'speed-decrease',
									text: '50 km/h',
									notes: '',
								},
								{
									kilometer: 102.0,
									type: 'station',
									text: 'Wolfsbergkogel',
									notes: '',
								},
								{
									kilometer: 103.2,
									type: 'station',
									text: 'Semmering',
									notes: '',
								},
								{
									kilometer: 103.4,
									type: 'speed-decrease',
									text: '40 km/h',
									notes: '',
								},
								{
									kilometer: 103.5,
									type: 'speed-increase',
									text: '65 km/h',
									notes: '',
								},
								{
									kilometer: 105.2,
									type: 'speed-increase',
									text: '80 km/h',
									notes: '',
								},
								{
									kilometer: 107.7,
									type: 'station',
									text: 'Steinhaus',
									notes: '',
								},
								{
									kilometer: 110.5,
									type: 'station',
									text: 'Spital am Semmering',
									notes: '',
								},
								{
									kilometer: 115.0,
									type: 'speed-decrease',
									text: '40 km/h',
									notes: '',
								},
								{
									kilometer: 116.7,
									type: 'station',
									text: 'Mürzzuschlag',
									notes: '',
								},
							],
						},
					},
				},
			})
			return {
				seedDb: {
					success: true,
				},
			}
		} catch (dbError) {
			return {
				seedDb: {
					error: 'Database error',
				},
			}
		}
	},
} satisfies Actions
