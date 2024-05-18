export async function load() {
	return {
		foo: 'bar',
	}
}

export const actions = {
	exampleAction: async () => {
		const result = (Math.random() > 0.5 ? 'success' : 'error') as 'success' | 'error'
		return {
			result,
		}
	},
}
