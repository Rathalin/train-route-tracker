import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { error, fail } from '@sveltejs/kit'
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
	update: async ({ request, locals: { db } }) => {
		const {
			success,
			error: zodError,
			data,
		} = z
			.object({
				id: z.number(),
				lat: z.string(),
				lon: z.string(),
				kilometer: z.string(),
				name: z.string(),
			})
			.safeParse(Object.fromEntries(await request.formData()))
	},

	delete: async ({ request, locals: { db } }) => {
		const {
			success,
			error: zodError,
			data: waypointId,
		} = z.number().safeParse(Object.fromEntries(await request.formData()))

		if (!success) {
			console.log(zodError.message)
			return fail(400, { error: zodError.message })
		}

		try {
			console.log('Deleting', waypointId)
			// await db.waypoint.delete({
			// 	where: {
			// 		id: waypointId,
			// 	},
			// })
		} catch (e) {
			if (e instanceof PrismaClientKnownRequestError) {
				if (e.code === 'P2002') {
					return fail(400, {
						type: 'duplicateEntry',
					})
				}
			}
		}
	},
}
