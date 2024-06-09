import { fail, redirect } from '@sveltejs/kit'

export async function load({ params, locals: { db } }) {
	const routeId = params.slug

	const route = await db.route.findUnique({
		where: {
			shortName: routeId,
		},
	})
	if (route == null) {
		return {
			route: null,
		}
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
