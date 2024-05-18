import { browser } from '$app/environment'
import { writable } from 'svelte/store'
import {
	defaultColorScheme,
	defaultTheme,
	type ColorScheme,
	type ThemeOption,
} from '../../theme.settings'

export const themeStore = writable<{
	theme: ThemeOption
	colorScheme: ColorScheme
}>(
	browser
		? {
				theme:
					(document.body.getAttribute('data-theme') as ThemeOption | undefined) ?? defaultTheme,
				colorScheme:
					(document.body.getAttribute('data-color-scheme') as ColorScheme | undefined) ??
					defaultColorScheme,
			}
		: {
				theme: defaultTheme,
				colorScheme: defaultColorScheme,
			},
)
