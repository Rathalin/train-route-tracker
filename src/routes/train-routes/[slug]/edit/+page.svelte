<script lang="ts">
	import { t } from 'svelte-i18n'
	import { getToastStore } from '@skeletonlabs/skeleton'
	import ShowWaypoint from './ShowWaypoint.svelte'
	import PencilIcon from 'svelte-material-icons/ArrowLeft.svelte'
	import DeleteIcon from 'svelte-material-icons/Delete.svelte'
	import EditWaypoint from './EditWaypoint.svelte'
	import AddWaypoint from './AddWaypoint.svelte'
	import AddRow from './AddRow.svelte'
	import { enhance } from '$app/forms'
	import { page } from '$app/stores'

	export let data
	export let form

	let editId: number | null = null
	let add: boolean = false

	const toastStore = getToastStore()
	$: if (form?.update?.success === true) {
		editId = null
	} else if (form?.error != null) {
		toastStore.trigger({
			message: $t('common.action.error.message'),
			background: 'variant-filled-error',
		})
	}

	$: if ($page.url.searchParams.has('new')) {
		const newTitle = $page.url.searchParams.get('new')
		toastStore.trigger({
			message: $t('route.train-routes.slug.edit.alert.create.success.message', {
				values: { title: newTitle },
			}),
			background: 'variant-filled-success',
		})
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
			<div>
				<div class="text-surface-300 font-light uppercase text-sm">
					{$t('route.train-routes.slug.edit.heading.edit')}
				</div>
				<div>{data.route.title}</div>
			</div>
		</div>

		<div class="flex flex-row items-center flew-wrap gap-2">
			<a
				href="/train-routes/{data.route.shortName}"
				class="btn-icon variant-soft-secondary"
				title={$t('route.train-routes.slug.edit.button.back.label')}
			>
				<PencilIcon />
			</a>
			<form action="?/deleteRoute" method="post" class="flex" use:enhance>
				<button class="btn-icon variant-soft-secondary" type="submit">
					<DeleteIcon />
				</button>
			</form>
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
			{:else}
				<AddRow
					on:add={() => {
						add = true
						editId = null
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
