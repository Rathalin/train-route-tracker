<script lang="ts">
	import { enhance } from '$app/forms'
	import { invalidateAll } from '$app/navigation'
	import CircularProgress from '$lib/components/icon/CircularProgress.svelte'
	import CreationIcon from 'svelte-material-icons/Creation.svelte'
	import { getToastStore } from '@skeletonlabs/skeleton'
	import { _ } from 'svelte-i18n'

	export let data
	export let form

	let seedDbAction = { isLoading: false }

	const toastStore = getToastStore()
	$: if (form?.seedDb.success) {
		toastStore.trigger({
			message: $_('page.home.action.seed-db.success.message'),
			background: 'variant-filled-success',
		})
	} else if (form?.seedDb.error) {
		toastStore.trigger({
			message: $_('page.home.action.seed-db.error.message'),
			background: 'variant-filled-error',
		})
	}
</script>

<svelte:head>
	<title>{$_('page.home.h1.text')}</title>
</svelte:head>

<div class="mx-4 mt-4 flow-root">
	<h1 class="h1 mt-4 mb-10">
		<span>{$_('page.home.h1.text')}</span>
	</h1>

	<article class="mb-10 flex flex-col gap-2">
		{#each data.routes as route}
			<a class="underline" href={`/train-routes/${route.shortName}`}>{route.title}</a>
		{/each}
	</article>

	<article>
		<form
			action="?/seedDb"
			method="post"
			use:enhance={() => {
				seedDbAction.isLoading = true
				return async ({ update }) => {
					await update()
					seedDbAction.isLoading = false
				}
			}}
		>
			<button class="btn variant-filled-primary">
				{#if seedDbAction.isLoading}
					<CircularProgress />
				{:else}
					<CreationIcon />
				{/if}
				<span>Seed DB</span>
			</button>
		</form>
	</article>
</div>

<svelte:window on:focus={() => invalidateAll()} />
