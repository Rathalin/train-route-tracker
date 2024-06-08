<script lang="ts">
	import { t } from 'svelte-i18n'
	import ShowWaypoint from './ShowWaypoint.svelte'
	import PencilIcon from 'svelte-material-icons/Pencil.svelte'
	import PlusIcon from 'svelte-material-icons/Plus.svelte'
	import EditWaypoint from './EditWaypoint.svelte'
	import AddWaypoint from './AddWaypoint.svelte'

	export let data
	export let form

	let editId: number | null = null
	let add: boolean = false

	$: if (form?.update?.success === true) {
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
		<div class="flex flex-row gap-10">
			<span>{data.route.title}</span>
			<button
				class="btn-icon variant-filled-primary"
				on:click={() => {
					add = true
					editId = null
				}}
			>
				<PlusIcon />
			</button>
		</div>

		<div class="flex flex-row items-center flew-wrap gap-4">
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
			{#if add}
				<AddWaypoint
					on:cancel={() => {
						add = false
					}}
				/>
			{/if}
			{#each data.route.waypoints as { id, kilometer, type, text, notes } (id)}
				{#if id === editId}
					<EditWaypoint
						{id}
						{kilometer}
						selectedType={type}
						{text}
						{notes}
						on:cancel={() => {
							editId = null
						}}
					/>
				{:else}
					<ShowWaypoint
						{id}
						{kilometer}
						waypointType={type}
						{text}
						{notes}
						on:edit={(event) => {
							editId = event.detail.editId
							add = false
						}}
					/>
				{/if}
			{/each}
		</tbody>
	</table>
</div>
