import { error } from '@sveltejs/kit'

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

	if (route == null) {
		return error(404, 'Route not found')
	}

	return {
		route,
	}
}
