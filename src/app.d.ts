import type { getGlobalDb } from '$lib/db'

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	declare namespace App {
		interface Locals {
			db: ReturnType<typeof getGlobalDb>
		}
		// interface PageData {}
		// interface Error {}
		// interface Platform {}
	}
	// See https://kit.svelte.dev/docs/types#app
	// for information about these interfaces
}
