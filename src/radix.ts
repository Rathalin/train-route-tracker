import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin'

export const radix: CustomThemeConfig = {
	name: 'radix',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '255 255 255',
		'--on-warning': '255 255 255',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #000000
		'--color-primary-50': '217 217 217', // #d9d9d9
		'--color-primary-100': '204 204 204', // #cccccc
		'--color-primary-200': '191 191 191', // #bfbfbf
		'--color-primary-300': '153 153 153', // #999999
		'--color-primary-400': '77 77 77', // #4d4d4d
		'--color-primary-500': '0 0 0', // #000000
		'--color-primary-600': '0 0 0', // #000000
		'--color-primary-700': '0 0 0', // #000000
		'--color-primary-800': '0 0 0', // #000000
		'--color-primary-900': '0 0 0', // #000000
		// secondary | #252527
		'--color-secondary-50': '222 222 223', // #dededf
		'--color-secondary-100': '211 211 212', // #d3d3d4
		'--color-secondary-200': '201 201 201', // #c9c9c9
		'--color-secondary-300': '168 168 169', // #a8a8a9
		'--color-secondary-400': '102 102 104', // #666668
		'--color-secondary-500': '37 37 39', // #252527
		'--color-secondary-600': '33 33 35', // #212123
		'--color-secondary-700': '28 28 29', // #1c1c1d
		'--color-secondary-800': '22 22 23', // #161617
		'--color-secondary-900': '18 18 19', // #121213
		// tertiary | #bb3407
		'--color-tertiary-50': '245 225 218', // #f5e1da
		'--color-tertiary-100': '241 214 205', // #f1d6cd
		'--color-tertiary-200': '238 204 193', // #eeccc1
		'--color-tertiary-300': '228 174 156', // #e4ae9c
		'--color-tertiary-400': '207 113 81', // #cf7151
		'--color-tertiary-500': '187 52 7', // #bb3407
		'--color-tertiary-600': '168 47 6', // #a82f06
		'--color-tertiary-700': '140 39 5', // #8c2705
		'--color-tertiary-800': '112 31 4', // #701f04
		'--color-tertiary-900': '92 25 3', // #5c1903
		// success | #227321
		'--color-success-50': '222 234 222', // #deeade
		'--color-success-100': '211 227 211', // #d3e3d3
		'--color-success-200': '200 220 200', // #c8dcc8
		'--color-success-300': '167 199 166', // #a7c7a6
		'--color-success-400': '100 157 100', // #649d64
		'--color-success-500': '34 115 33', // #227321
		'--color-success-600': '31 104 30', // #1f681e
		'--color-success-700': '26 86 25', // #1a5619
		'--color-success-800': '20 69 20', // #144514
		'--color-success-900': '17 56 16', // #113810
		// warning | #775c0e
		'--color-warning-50': '235 231 219', // #ebe7db
		'--color-warning-100': '228 222 207', // #e4decf
		'--color-warning-200': '221 214 195', // #ddd6c3
		'--color-warning-300': '201 190 159', // #c9be9f
		'--color-warning-400': '160 141 86', // #a08d56
		'--color-warning-500': '119 92 14', // #775c0e
		'--color-warning-600': '107 83 13', // #6b530d
		'--color-warning-700': '89 69 11', // #59450b
		'--color-warning-800': '71 55 8', // #473708
		'--color-warning-900': '58 45 7', // #3a2d07
		// error | #7e1810
		'--color-error-50': '236 220 219', // #ecdcdb
		'--color-error-100': '229 209 207', // #e5d1cf
		'--color-error-200': '223 197 195', // #dfc5c3
		'--color-error-300': '203 163 159', // #cba39f
		'--color-error-400': '165 93 88', // #a55d58
		'--color-error-500': '126 24 16', // #7e1810
		'--color-error-600': '113 22 14', // #71160e
		'--color-error-700': '95 18 12', // #5f120c
		'--color-error-800': '76 14 10', // #4c0e0a
		'--color-error-900': '62 12 8', // #3e0c08
		// surface | #202020
		'--color-surface-50': '222 222 222', // #dedede
		'--color-surface-100': '210 210 210', // #d2d2d2
		'--color-surface-200': '199 199 199', // #c7c7c7
		'--color-surface-300': '166 166 166', // #a6a6a6
		'--color-surface-400': '99 99 99', // #636363
		'--color-surface-500': '32 32 32', // #202020
		'--color-surface-600': '29 29 29', // #1d1d1d
		'--color-surface-700': '24 24 24', // #181818
		'--color-surface-800': '19 19 19', // #131313
		'--color-surface-900': '16 16 16', // #101010
	},
}
