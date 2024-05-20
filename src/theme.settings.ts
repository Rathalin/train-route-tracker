export const themeOptions = [
	'my custom theme',
	'skeleton',
	'wintry',
	'modern',
	'rocket',
	'seafoam',
	'vintage',
	'sahara',
	'hamlindigo',
	'gold-nouveau',
	'crimson',
] as const
export type ThemeOption = (typeof themeOptions)[number]
export type ColorScheme = 'dark' | 'light'

export const defaultTheme = 'my custom theme' satisfies ThemeOption
export const defaultColorScheme = 'dark' satisfies ColorScheme

export const themeCookieKey = 'theme'
export const colorSchemeCookieKey = 'color-scheme'

export const themeDataAttribute = 'data-theme'
