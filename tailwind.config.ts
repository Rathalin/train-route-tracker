import { join } from 'path'
import type { Config } from 'tailwindcss'
import { skeleton } from '@skeletonlabs/tw-plugin'
import { myCustomTheme } from './src/my-custom-theme'
import forms from '@tailwindcss/forms'

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
	],
	theme: {
		extend: {},
	},
	plugins: [
		forms,
		skeleton({
			themes: {
				preset: [
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
				],
				custom: [myCustomTheme],
			},
		}),
	],
} satisfies Config
