<script lang="ts">
	import { t } from 'svelte-i18n'
	import { page } from '$app/stores'
	import { goto } from '$app/navigation'
	import CheckIcon from 'svelte-material-icons/Check.svelte'
	import CloseIcon from 'svelte-material-icons/Close.svelte'
	import { browser } from '$app/environment'

	export let data

	$: showDeleteSuccessAlert = $page.url.searchParams.has('deleted')

	function handleCloseAlert() {
		$page.url.searchParams.delete('deleted')
		if (browser) {
			goto($page.url.toString(), { replaceState: true })
		}
		showDeleteSuccessAlert = false
	}
</script>

<svelte:head>
	<title>{$t('route.home.h1.text')}</title>
</svelte:head>

<div>
	{#if showDeleteSuccessAlert}
		<aside class="alert variant-ghost-success mb-10 max-w-[60ch]">
			<CheckIcon class="text-xl" />
			<div class="alert-message">
				<span>{$t('route.home.alert.delete.success.message')}</span>
			</div>
			<div class="alert-actions">
				<button class="btn-icon variant-soft-success" on:click={handleCloseAlert}>
					<CloseIcon />
				</button>
			</div>
		</aside>
	{/if}

	<h1 class="h2 mt-4 mb-10">
		<span>{$t('route.home.h1.text')}</span>
	</h1>

	<article class="mb-10 flex flex-col gap-2">
		<ul class="list-nav">
			{#each data.routes as route}
				<li>
					<a href={`/train-routes/${route.shortName}`}>
						<span class="badge variant-ghost-primary uppercase font-mono tracking-wider">
							{route.shortName}
						</span>
						<span>{route.title}</span>
					</a>
				</li>
			{/each}
		</ul>
	</article>

	<div class="flex flex-row">
		<a href="/train-routes/new" class="btn variant-soft-primary">
			<span>{$t('route.home.button.create.label')}</span>
		</a>
	</div>
</div>
