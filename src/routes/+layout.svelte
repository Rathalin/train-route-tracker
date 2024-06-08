<script lang="ts">
	import ThemeMenu from '$lib/components/ThemeMenu.svelte'
	import '../app.postcss'
	import { AppShell, AppBar, Toast } from '@skeletonlabs/skeleton'
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom'
	import { themeStore } from '$lib/stores/theme.store'
	import { browser } from '$app/environment'
	import { themeCookieKey, themeDataAttribute } from '../theme.settings'
	import { onDestroy } from 'svelte'
	import { initializeStores, storePopup } from '@skeletonlabs/skeleton'

	initializeStores()
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow })

	const unsubscribe = themeStore.subscribe((value) => {
		if (browser) {
			document.body.setAttribute(themeDataAttribute, value.theme)
			document.cookie = `${themeCookieKey}=${value.theme};path=/;SameSite=Strict`
		}
	})

	onDestroy(() => {
		unsubscribe()
	})
</script>

<Toast />

<!-- App Shell -->
<AppShell slotPageHeader="blur-sm">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/" class="transition duration-10l0 hover:scale-105">
					<strong class="text-xl uppercase">Train Routes</strong>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<ThemeMenu />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<main class="container mx-auto mt-10">
		<slot />
	</main>
	<svelte:fragment slot="footer"></svelte:fragment>
</AppShell>
