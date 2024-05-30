import { error } from '@sveltejs/kit'

export async function load({ params: { slug: routeId }, locals: { db } }) {
	const route = await db.route.findUnique({
		where: {
			shortName: routeId,
		},
		include: {
			waypoints: true,
		},
	})

	if (route == null) {
		return error(404, 'Not found')
	}

	return {
		route,
	}
}
