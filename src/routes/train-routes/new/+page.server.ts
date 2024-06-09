import { z } from 'zod'
import { zfd } from 'zod-form-data'
import { directionOptions } from './directionOptions.js'
import { fail, redirect } from '@sveltejs/kit'

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
			return fail(400, { error: zodError.message })
		}

		const shortName = `${data.shortName1.toLowerCase()}-${data.shortName2.toLowerCase()}`

		await db.route.create({
			data: {
				title: data.title,
				shortName,
				direction: data.direction,
			},
		})

		return redirect(303, encodeURI(`/train-routes/${shortName}/edit?new=${data.title}`))
	},
}
