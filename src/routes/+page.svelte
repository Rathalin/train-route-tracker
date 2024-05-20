<script lang="ts">
	import { invalidateAll } from '$app/navigation'
	import { _ } from 'svelte-i18n'
</script>

<svelte:head>
	<title>{$_('page.home.h1.text')}</title>
</svelte:head>

<div class="mx-4 mt-4 flow-root">
	<h1 class="h1 mt-4 mb-10">
		<span>{$_('page.home.h1.text')}</span>
	</h1>

	<article class="mb-10">
		<a class="underline" href="/train-routes/wrn-mrz">{'Wiener Neustadt -> Mürzzuschlag'}</a>
	</article>
</div>

<svelte:window on:focus={() => invalidateAll()} />
