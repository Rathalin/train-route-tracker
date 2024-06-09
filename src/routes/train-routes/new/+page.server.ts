import { z } from 'zod'
import { zfd } from 'zod-form-data'
import { directionOptions } from './directionOptions.js'
import { fail } from '@sveltejs/kit'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

export const actions = {
	create: async ({ request, locals: { db } }) => {
		const {
			success,
			error: zodError,
			data,
		} = zfd
			.formData({
				title: zfd.text(z.string()),
				shortName1: zfd.text(z.string().min(3).max(3)),
				shortName2: zfd.text(z.string().min(3).max(3)),
				direction: zfd.text(z.enum(directionOptions)),
			})
			.safeParse(await request.formData())

		if (!success) {
			console.log(zodError.message)
			return fail(400, { error: zodError.message })
		}

		const shortName = `${data.shortName1.toLowerCase()}-${data.shortName2.toLowerCase()}`

		try {
			await db.route.create({
				data: {
					title: data.title,
					shortName,
					direction: data.direction,
				},
			})

			return {
				create: {
					success: true,
					shortName,
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
}
