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

	const waypoints = await db.waypoint.findMany({
		where: {
			routeId: route.id,
		},
		orderBy: {
			kilometer: route.direction === 'asc' ? 'asc' : 'desc',
		},
	})

	return {
		route: {
			...route,
			waypoints,
		},
	}
}
