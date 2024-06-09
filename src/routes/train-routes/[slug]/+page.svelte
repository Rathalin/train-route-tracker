<script lang="ts">
	import { t } from 'svelte-i18n'
	import TableColumn from './(lib)/TableColumn.svelte'
	import KilometerBoard from './(lib)/KilometerBoard.svelte'
	import WaypointProgress from './(lib)/WaypointProgress.svelte'
	import HomeLinkButton from '$lib/components/buttons/HomeLinkButton.svelte'
	import PencilIcon from 'svelte-material-icons/Pencil.svelte'
	import type { ProgressState } from './(lib)/ProgressState'
	import WaypointIcon from './(waypoints)/WaypointIcon.svelte'

	export let data

	let currentWaypointIndex = 0

	$: waypoints =
		data.route?.waypoints?.map((waypoint) => ({
			progress: getWaypointProgress(waypoint.id, currentWaypointIndex) as ProgressState,
			...waypoint,
		})) ?? []

	function getWaypointProgress(index: number, max: number): ProgressState {
		if (index < max) {
			return 'passed'
		}
		if (index > max) {
			return 'upcoming'
		}
		return 'current'
	}
</script>

<svelte:head>
	<title>{data.route?.title ?? 'Route not found'}</title>
</svelte:head>

{#if data.route != null}
	<div>
		<h1 class="h2 mt-4 mb-10 flex flex-row justify-between items-end gap-2 flex-wrap">
			<span>{data.route.title}</span>

			<div class="flex flex-row items-center flew-wrap gap-2">
				<a
					href="/train-routes/{data.route.shortName}/edit"
					class="btn-icon variant-soft-secondary"
					title={$t('route.train-routes.slug.button.edit-route.label')}
				>
					<PencilIcon />
				</a>
			</div>
		</h1>

		<div class="table-container">
			<table class="table table-interactive table-compact mb-10">
				<thead>
					<tr>
						<th class="table-cell-fit">{$t('route.train-routes.slug.table.progress')}</th>
						<th class="table-cell-fit">{$t('route.train-routes.slug.table.kilometer')}</th>
						<th class="table-cell-fit"></th>
						<th class="w-1/3">{$t('route.train-routes.slug.table.description')}</th>
						<th class="w-1/3">{$t('route.train-routes.slug.table.notes')}</th>
					</tr>
				</thead>
				<tbody>
					{#each waypoints as waypoint}
						<tr
							class="{waypoint.progress === 'current'
								? 'table-row-checked'
								: ''} {waypoint.progress === 'passed'
								? 'text-surface-300 dark:text-surface-500'
								: ''}"
							on:click={() => {
								currentWaypointIndex = waypoint.id
							}}
						>
							<td>
								<span class="flex flex-row justify-center">
									<WaypointProgress progress={waypoint.progress} />
								</span>
							</td>
							<TableColumn><KilometerBoard kilometer={waypoint.kilometer} /></TableColumn>
							<TableColumn>
								<WaypointIcon
									waypointType={waypoint.type}
									highlighted={waypoint.progress !== 'passed'}
								/>
							</TableColumn>
							<TableColumn><span>{waypoint.text}</span></TableColumn>
							<TableColumn><span>{waypoint.notes}</span></TableColumn>
						</tr>
					{/each}
				</tbody>
				<tfoot class="h-1"></tfoot>
			</table>
		</div>
	</div>
{:else}
	<h1 class="h1 mt-10">{$t('route.train-routes.slug.error.route-not-found.message')}</h1>
	<div class="mt-6">
		<HomeLinkButton />
	</div>
{/if}

<style>
	.table tbody td {
		padding: 0 !important;
	}
</style>
