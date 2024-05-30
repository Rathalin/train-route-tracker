<script lang="ts">
	import { _ } from 'svelte-i18n'

	export let data
</script>

<svelte:head>
	<title>
		{$_('route.train-routes.slug.edit.title', { values: { route: data.route.title } })}
	</title>
</svelte:head>

<div>
	<h1>{data.route.title}</h1>
</div>
