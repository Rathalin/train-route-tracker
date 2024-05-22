export async function load({ params, locals: { db } }) {
	const routeId = params.slug

	const route = await db.route.findUnique({
		where: {
			shortName: routeId,
		},
		include: {
			waypoints: {
				orderBy: {
					kilometer: 'asc',
				},
			},
		},
	})

	return {
		route,
	}
}
