<script lang="ts">
	import { invalidateAll } from '$app/navigation'
	import { _ } from 'svelte-i18n'

	export let data
</script>

<svelte:head>
	<title>{$_('route.home.h1.text')}</title>
</svelte:head>

<div class="mx-4 mt-4 flow-root">
	<h1 class="h1 mt-4 mb-10">
		<span>{$_('route.[home].h1.text')}</span>
	</h1>

	<article class="mb-10 flex flex-col gap-2">
		{#each data.routes as route}
			<a class="underline" href={`/train-routes/${route.shortName}`}>{route.title}</a>
		{/each}
	</article>
</div>

<svelte:window on:focus={() => invalidateAll()} />
