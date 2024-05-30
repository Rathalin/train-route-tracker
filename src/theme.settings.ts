export const themes = [
	{ id: 'vintage', name: 'Vintage', icon: '📺' },
	{ id: 'wintry', name: 'Wintry', icon: '🌨️' },
	{ id: 'crimson', name: 'Crimson', icon: '⭕' },
	{ id: 'gold-nouveau', name: 'Gold Nouveau', icon: '💫' },
	{ id: 'skeleton', name: 'Skeleton', icon: '💀' },
	{ id: 'modern', name: 'Modern', icon: '🤖' },
	{ id: 'rocket', name: 'Rocket', icon: '🚀' },
	{ id: 'seafoam', name: 'Seafoam', icon: '🧜‍♀️' },
	{ id: 'sahara', name: 'Sahara', icon: '🏜️' },
	{ id: 'hamlindigo', name: 'Hamlindigo', icon: '👔' },
] as const
export type ThemeOption = (typeof themes)[number]['id']
export type ColorScheme = 'dark' | 'light'

export const defaultTheme = 'vintage' satisfies ThemeOption
export const defaultColorScheme = 'dark' satisfies ColorScheme

export const themeCookieKey = 'theme'
export const colorSchemeCookieKey = 'color-scheme'

export const themeDataAttribute = 'data-theme'
