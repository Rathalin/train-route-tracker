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
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
			},
			screens: {
				DEFAULT: '100%',
				sm: '640px',
				md: '640px',
				lg: '768px',
				xl: '1024px',
				'2xl': '1280px',
			},
		},
		extend: {},
	},
	plugins: [
		forms,
		skeleton({
			themes: {
				preset: [
					{ name: 'skeleton', enhancements: true },
					{ name: 'wintry', enhancements: true },
					{ name: 'modern', enhancements: true },
					{ name: 'rocket', enhancements: true },
					{ name: 'seafoam', enhancements: true },
					{ name: 'vintage', enhancements: true },
					{ name: 'sahara', enhancements: true },
					{ name: 'hamlindigo', enhancements: true },
					{ name: 'gold-nouveau', enhancements: true },
					{ name: 'crimson', enhancements: true },
				],
				custom: [myCustomTheme],
			},
		}),
	],
} satisfies Config
