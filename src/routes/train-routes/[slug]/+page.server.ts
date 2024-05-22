export async function load({ params, locals: { db } }) {
	const routeId = params.slug

	return {
		route: await db.route.findUnique({
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
		}),
	}
}
