import { error, fail, redirect } from '@sveltejs/kit'
import { z } from 'zod'
import { zfd } from 'zod-form-data'
import { waypointOptions } from '../(waypoints)/waypointOptions'

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
		sortId: i,
	}))

	return {
		route: {
			...route,
			waypoints,
		},
	}
}

export const actions = {
	create: async ({ request, params, locals: { db } }) => {
		const shortName = params.slug
		const {
			success,
			error: zodError,
			data,
		} = zfd
			.formData({
				kilometer: zfd.numeric(z.number()),
				waypointType: zfd.text(z.enum(waypointOptions)),
				description: zfd.text(z.string().optional()),
				note: zfd.text(z.string().optional()),
			})
			.safeParse(await request.formData())

		if (!success) {
			return fail(400, { error: zodError.message })
		}

		await db.waypoint.create({
			data: {
				route: {
					connect: {
						shortName,
					},
				},
				kilometer: data.kilometer,
				type: data.waypointType,
				text: data.description ?? '',
				notes: data.note ?? '',
			},
		})

		return {
			create: {
				success: true,
			},
		}
	},

	update: async ({ request, locals: { db } }) => {
		const {
			success,
			error: zodError,
			data,
		} = zfd
			.formData({
				id: zfd.numeric(z.number()),
				kilometer: zfd.numeric(z.number()),
				waypointType: zfd.text(z.enum(waypointOptions)),
				description: zfd.text(z.string().optional()),
				note: zfd.text(z.string().optional()),
			})
			.safeParse(Object.fromEntries(await request.formData()))

		if (!success) {
			return fail(400, { error: zodError.message })
		}

		await db.waypoint.update({
			where: {
				id: data.id,
			},
			data: {
				kilometer: data.kilometer,
				type: data.waypointType,
				text: data.description ?? '',
				notes: data.note ?? '',
			},
		})

		return {
			update: {
				success: true,
			},
		}
	},

	delete: async ({ request, locals: { db } }) => {
		const {
			success,
			error: zodError,
			data,
		} = zfd
			.formData({
				id: zfd.numeric(z.number()),
			})
			.safeParse(await request.formData())

		if (!success) {
			return fail(400, { error: zodError.message })
		}

		await db.waypoint.delete({
			where: {
				id: data.id,
			},
		})
	},

	deleteRoute: async ({ params, locals: { db } }) => {
		const shortName = params.slug

		await db.waypoint.deleteMany({
			where: {
				route: {
					shortName,
				},
			},
		})

		const route = await db.route.delete({
			where: {
				shortName,
			},
			select: {
				title: true,
			},
		})

		return redirect(303, `/?deleted=${route.title}`)
	},
}
