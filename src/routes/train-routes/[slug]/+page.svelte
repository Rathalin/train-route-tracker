<script lang="ts">
	import { _ } from 'svelte-i18n'
	import StationWaypoint from './(waypoints)/StationWaypoint.svelte'
	import TableColumn from './(lib)/TableColumn.svelte'
	import KilometerBoard from './(lib)/KilometerBoard.svelte'
	import WaypointProgress from './(lib)/WaypointProgress.svelte'
	import HomeLinkButton from '$lib/components/buttons/HomeLinkButton.svelte'
	import NotImplementedWaypoint from './(waypoints)/NotImplementedWaypoint.svelte'
	import NeutralSectionWaypoint from './(waypoints)/NeutralSectionWaypoint.svelte'
	import SpeedDecreaseWaypoint from './(waypoints)/SpeedDecreaseWaypoint.svelte'
	import SpeedIncreaseWaypoint from './(waypoints)/SpeedIncreaseWaypoint.svelte'
	import type { ProgressState } from './ProgressState'

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
	<div class="mx-4 mt-4 flow-root">
		<h1 class="h1 mt-4 mb-10">
			{$_('page.train-routes.h1.text', { values: { routeName: data.route.title } })}
		</h1>

		<div class="table-container">
			<table class="table table-hover mb-10">
				<thead>
					<tr>
						<th class="w-10">{$_('page.train-routes.table.progress')}</th>
						<th class="table-cell-fit">{$_('page.train-routes.table.kilometer')}</th>
						<th class="table-cell-fit"></th>
						<th>{$_('page.train-routes.table.description')}</th>
						<th class="w-1/2">{$_('page.train-routes.table.notes')}</th>
					</tr>
				</thead>
				{#each waypoints as waypoint}
					<tr
						class="table-row hover:text-white hover:bg-secondary-500 cursor-pointer {waypoint.progress ===
						'current'
							? 'bg-secondary-800'
							: ''} {waypoint.progress === 'passed' ? 'text-surface-500' : ''}"
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
						{#if waypoint.type === 'speed-increase'}
							<SpeedIncreaseWaypoint text={waypoint.text} progress={waypoint.progress} />
						{:else if waypoint.type === 'speed-decrease'}
							<SpeedDecreaseWaypoint text={waypoint.text} progress={waypoint.progress} />
						{:else if waypoint.type === 'station'}
							<StationWaypoint stationName={waypoint.text} progress={waypoint.progress} />
						{:else if waypoint.type === 'neutral-section'}
							<NeutralSectionWaypoint progress={waypoint.progress} />
						{:else}
							<NotImplementedWaypoint typeName={waypoint.type} />
						{/if}
						<TableColumn><span>{waypoint.notes}</span></TableColumn>
					</tr>
				{/each}
				<tfoot class="h-1"></tfoot>
			</table>
		</div>
	</div>
{:else}
	<h1 class="h1 mt-10">{$_('page.train-routes.error.route-not-found.message')}</h1>
	<div class="mt-6">
		<HomeLinkButton />
	</div>
{/if}
