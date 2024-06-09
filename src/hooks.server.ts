import type { Handle } from '@sveltejs/kit'
import { locale } from 'svelte-i18n'
import { sequence } from '@sveltejs/kit/hooks'
import {
	colorSchemeCookieKey,
	defaultColorScheme,
	defaultTheme,
	themeCookieKey,
} from './theme.settings'
import { getGlobalDb } from '$lib/db'

const i18n = (async ({ event, resolve }) => {
	const lang = event.request.headers.get('accept-language')?.split(',')[0]
	if (lang) {
		locale.set(lang)
	}
	return resolve(event)
}) satisfies Handle

const theming = (async ({ event, resolve }) => {
	let theme = event.cookies.get(themeCookieKey)
	if (theme == null) {
		theme = defaultTheme
	}
	let colorScheme = event.cookies.get(colorSchemeCookieKey)
	if (colorScheme == null) {
		event.cookies.set(colorSchemeCookieKey, defaultColorScheme, { path: '/' })
		colorScheme = defaultColorScheme
	}

	return await resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace('%theme%', theme)
		},
	})
}) satisfies Handle

const initDatabase = (async ({ event, resolve }) => {
	event.locals.db = getGlobalDb()
	return resolve(event)
}) satisfies Handle

export const handle = sequence(i18n, theming, initDatabase)
