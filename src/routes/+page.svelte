<script lang="ts">
	import { t } from 'svelte-i18n'
	import { page } from '$app/stores'
	import { getToastStore } from '@skeletonlabs/skeleton'

	export let data

	const toastStore = getToastStore()

	$: if ($page.url.searchParams.has('deleted')) {
		const deletedTitle = $page.url.searchParams.get('deleted')
		toastStore.trigger({
			message: $t('route.home.alert.delete.success.message', { values: { title: deletedTitle } }),
			background: 'variant-filled-success',
		})
	}
</script>

<svelte:head>
	<title>{$t('route.home.h1.text')}</title>
</svelte:head>

<div>
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
