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

	export let data

	let currentWaypointIndex = 0

	function getWaypointProgress(index: number, max: number) {
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
						<th>{$_('page.train-routes.table.waypoint')}</th>
						<th class="w-1/2">{$_('page.train-routes.table.notes')}</th>
					</tr>
				</thead>
				{#each data.route.waypoints as waypoint}
					<tr
						class="table-row hover:text-white hover:bg-secondary-500 cursor-pointer {getWaypointProgress(
							waypoint.id,
							currentWaypointIndex,
						) === 'current'
							? 'bg-secondary-800'
							: ''} {getWaypointProgress(waypoint.id, currentWaypointIndex) === 'passed'
							? 'text-surface-500'
							: ''}"
						on:click={() => {
							currentWaypointIndex = waypoint.id
						}}
					>
						<td>
							<span class="flex flex-row justify-center">
								<WaypointProgress
									progress={getWaypointProgress(waypoint.id, currentWaypointIndex)}
								/>
							</span>
						</td>
						<TableColumn><KilometerBoard kilometer={waypoint.kilometer} /></TableColumn>
						{#if waypoint.type === 'speed-increase'}
							<SpeedIncreaseWaypoint text={waypoint.text} />
						{:else if waypoint.type === 'speed-decrease'}
							<SpeedDecreaseWaypoint text={waypoint.text} />
						{:else if waypoint.type === 'station'}
							<StationWaypoint stationName={waypoint.text} />
						{:else if waypoint.type === 'neutral-section'}
							<NeutralSectionWaypoint />
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
