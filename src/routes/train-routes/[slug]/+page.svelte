<script lang="ts">
	import { _ } from 'svelte-i18n'
	import SpeedWaypoint from './SpeedWaypoint.svelte'
	import StationWaypoint from './StationWaypoint.svelte'
	import TableColumn from './TableColumn.svelte'
	import KilometerBoard from './KilometerBoard.svelte'
	import WaypointProgress from './WaypointProgress.svelte'

	export let data

	let lastSelectedIndex = 0

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
	<title>{data.title}</title>
</svelte:head>

<div class="mx-4 mt-4 flow-root">
	<h1 class="h1 mt-4 mb-10">
		{$_('page.traine-routes.h1.text', { values: { routeName: data.title } })}
	</h1>

	<div class="table-container">
		<table class="table table-hover max-w-4xl mb-10">
			<thead>
				<tr>
					<th class="w-10">{$_('page.train-routes.table.progress')}</th>
					<th class="table-cell-fit">{$_('page.train-routes.table.kilometer')}</th>
					<th class="table-cell-fit"></th>
					<th>{$_('page.train-routes.table.waypoint')}</th>
					<th>{$_('page.train-routes.table.notes')}</th>
				</tr>
			</thead>
			{#each data.waypoints as waypoint}
				<tr
					class="table-row hover:text-white hover:bg-secondary-500 cursor-pointer {waypoint.id ===
					lastSelectedIndex
						? 'bg-secondary-800'
						: ''} {waypoint.id < lastSelectedIndex ? 'text-surface-500' : ''}"
					on:click={() => {
						lastSelectedIndex = waypoint.id
					}}
				>
					<td>
						<span class="flex flex-row justify-center">
							<WaypointProgress progress={getWaypointProgress(waypoint.id, lastSelectedIndex)} />
						</span>
					</td>
					<TableColumn><KilometerBoard kilometer={waypoint.kilometer} /></TableColumn>
					{#if waypoint.data.type === 'speed-increase'}
						<SpeedWaypoint
							speed={waypoint.data.speed}
							speedChange={'increase'}
							notes={waypoint.notes}
						/>
					{:else if waypoint.data.type === 'speed-decrease'}
						<SpeedWaypoint
							speed={waypoint.data.speed}
							speedChange={'decrease'}
							notes={waypoint.notes}
						/>
					{:else if waypoint.data.type === 'station'}
						<StationWaypoint stationName={waypoint.data.name} notes={waypoint.notes} />
					{:else}
						<div>TODO</div>
					{/if}
				</tr>
			{/each}
			<tfoot class="h-1"></tfoot>
		</table>
	</div>
</div>
