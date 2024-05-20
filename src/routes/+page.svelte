<script lang="ts">
	import { invalidateAll } from '$app/navigation'
	import { enhance } from '$app/forms'
	import CircularProgress from '$lib/components/icon/CircularProgress.svelte'
	import CreationIcon from 'svelte-material-icons/Creation.svelte'
	import { getToastStore } from '@skeletonlabs/skeleton'
	import { _ } from 'svelte-i18n'

	export let form

	let isLoading = false

	const toastStore = getToastStore()
	$: if (form?.result === 'success') {
		toastStore.trigger({
			message: $_('page.example.action.example-action.success.message'),
			background: 'variant-filled-success',
		})
	} else if (form?.result === 'error') {
		toastStore.trigger({
			message: $_('page.example.action.example-action.error.message'),
			background: 'variant-filled-error',
		})
	}
</script>

<svelte:head>
	<title>{$_('page.example.title')}</title>
</svelte:head>

<div class="mx-4 mt-4 flow-root">
	<h1 class="h1 mt-4 mb-10">
		<span>{$_('page.example.h1.text')}</span>
	</h1>

	<article class="mb-10">
		<a class="underline" href="/train-routes/wrn-mrz">{'Wiener Neustadt -> Mürzzuschlag'}</a>
	</article>

	<article>
		<div class="flex flex-row gap-4">
			<form
				method="post"
				action="?/exampleAction"
				use:enhance={() => {
					isLoading = true
					return async ({ update }) => {
						await update()
						isLoading = false
					}
				}}
			>
				<button class="btn variant-filled-error">
					{#if isLoading}
						<CircularProgress />
					{:else}
						<CreationIcon />
					{/if}
					<span>{$_('page.example.action.example.button.label')}</span>
				</button>
			</form>
		</div>
	</article>
</div>

<svelte:window on:focus={() => invalidateAll()} />
