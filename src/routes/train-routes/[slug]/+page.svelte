<script lang="ts">
	import { _ } from 'svelte-i18n'
</script>

<svelte:head>
	<title>{$_('page.example.title')}</title>
</svelte:head>

<div class="mx-4 mt-4 flow-root">
	<h1 class="h1 mt-4 mb-10">
		<span>{$_('page.example.h1.text')}</span>
	</h1>

	<article></article>
</div>
