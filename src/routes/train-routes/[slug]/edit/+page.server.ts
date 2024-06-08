import { error } from '@sveltejs/kit'
import { z } from 'zod'

export async function load({ params, locals: { db } }) {
	const routeId = params.slug

	const route = await db.route.findUnique({
		where: {
			shortName: routeId,
		},
	})
	if (route == null) {
		return error(404, 'Not found')
	}

	const waypoints = (
		await db.waypoint.findMany({
			where: {
				routeId: route.id,
			},
			orderBy: {
				kilometer: route.direction === 'asc' ? 'asc' : 'desc',
			},
		})
	).map((waypoint, i) => ({
		...waypoint,
		id: i,
	}))

	return {
		route: {
			...route,
			waypoints,
		},
	}
}


export const actions = {
	updateWaypoint: async ({ request, locals: { db } }) => {
    const formData = await request.formData()

		const formSchema = z.object({
			id: z.number(),
			lat: z.string(),
			lon: z.string(),
			kilometer: z.string(),
			name: z.string(),
		})
	},
}
