<script lang="ts">
	import { _ } from 'svelte-i18n'
	import EditWaypoint from './EditWaypoint.svelte'

	export let data
</script>

<svelte:head>
	<title>
		{$_('route.train-routes.slug.edit.title', { values: { route: data.route.title } })}
	</title>
</svelte:head>

<div>
	<h1 class="h1 mt-4 mb-10">{data.route.title}</h1>

	{#each data.route.waypoints as { id, kilometer, type, text, notes } (id)}
		<EditWaypoint {kilometer} selectedType={type} {text} {notes} />
	{/each}
</div>
