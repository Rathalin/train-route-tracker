<script lang="ts">
	import { t } from 'svelte-i18n'
	import EditWaypoint from './EditWaypoint.svelte'
	import ShowWaypoint from './ShowWaypoint.svelte'
	import PencilIcon from 'svelte-material-icons/Pencil.svelte'

	export let data

	let editId: number | null = null

	function handleEdit(event: CustomEvent<{ editId: number }>) {
		editId = event.detail.editId
	}

	function handleCancel() {
		editId = null
	}
</script>

<svelte:head>
	<title>
		{$t('route.train-routes.slug.edit.title', { values: { route: data.route.title } })}
	</title>
</svelte:head>

<div>
	<h1 class="h2 mt-4 mb-10 flex flex-row justify-between items-end gap-2 flex-wrap">
		<span>{data.route.title}</span>

		<div class="flex flex-row items-center flew-wrap">
			<a href="/train-routes/{data.route.shortName}" class="btn variant-ghost-primary">
				<PencilIcon />
				<span>{$t('route.train-routes.slug.edit.button.back.label')}</span>
			</a>
		</div>
	</h1>

	<table class="table table-compact mb-10">
		<thead>
			<tr>
				<th class="table-cell-fit">{$t('route.train-routes.slug.edit.table.actions')}</th>
				<th class="w-60">{$t('route.train-routes.slug.table.kilometer')}</th>
				<th class="w-1/4">{$t('route.train-routes.slug.table.type')}</th>
				<th class="w-1/4">{$t('route.train-routes.slug.table.description')}</th>
				<th class="w-1/4">{$t('route.train-routes.slug.table.notes')}</th>
			</tr>
		</thead>
		<tbody>
			{#each data.route.waypoints as { id, kilometer, type, text, notes } (id)}
				{#if id === editId}
					<EditWaypoint
						{id}
						{kilometer}
						selectedType={type}
						{text}
						{notes}
						on:cancel={handleCancel}
					/>
				{:else}
					<ShowWaypoint {id} {kilometer} waypointType={type} {text} {notes} on:edit={handleEdit} />
				{/if}
			{/each}
		</tbody>
	</table>
</div>
