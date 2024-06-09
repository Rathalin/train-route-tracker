import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { error, fail } from '@sveltejs/kit'
import { z } from 'zod'
import { zfd } from 'zod-form-data'
import { waypointOptions } from '../(waypoints)/waypointOptions.js'

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
			console.log(zodError.message)
			return fail(400, { error: zodError.message })
		}

		try {
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
		} catch (e) {
			if (e instanceof PrismaClientKnownRequestError) {
				console.log(e.message)
				if (e.code === 'P2002') {
					return fail(400, {
						type: 'duplicate-key',
					})
				}
			}
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
			console.log(zodError.message)
			return fail(400, { error: zodError.message })
		}

		try {
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
		} catch (e) {
			if (e instanceof PrismaClientKnownRequestError) {
				console.log(e.message)
				if (e.code === 'P2002') {
					return fail(400, {
						type: 'duplicate-key',
					})
				}
			}
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

		try {
			await db.waypoint.delete({
				where: {
					id: data.id,
				},
			})
			console.log('Deleted waypoint with id', data.id)
		} catch (e) {
			if (e instanceof PrismaClientKnownRequestError) {
				console.log(e.message)
				if (e.code === 'P2002') {
					return fail(400, {
						type: 'duplicate-key',
					})
				}
			}
		}
	},
}
