<script lang="ts">
	import { _ } from 'svelte-i18n'
	import SpeedWaypoint from './(waypoints)/SpeedWaypoint.svelte'
	import StationWaypoint from './(waypoints)/StationWaypoint.svelte'
	import TableColumn from './(lib)/TableColumn.svelte'
	import KilometerBoard from './(lib)/KilometerBoard.svelte'
	import WaypointProgress from './(waypoints)/WaypointProgress.svelte'
	import HomeLinkButton from '$lib/components/buttons/HomeLinkButton.svelte'
	import NotImplementedWaypoint from './(waypoints)/NotImplementedWaypoint.svelte'
	import NeutralSectionWaypoint from './(waypoints)/NeutralSectionWaypoint.svelte'

	export let data

	let lastSelectedIndex = 1

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
						{#if waypoint.type === 'speed-increase'}
							<SpeedWaypoint speedChange={'increase'} text={waypoint.text} notes={waypoint.notes} />
						{:else if waypoint.type === 'speed-decrease'}
							<SpeedWaypoint speedChange={'decrease'} text={waypoint.text} notes={waypoint.notes} />
						{:else if waypoint.type === 'station'}
							<StationWaypoint stationName={waypoint.text} notes={waypoint.notes} />
						{:else if waypoint.type === 'neutral-section'}
							<NeutralSectionWaypoint notes={waypoint.notes} />
						{:else}
							<NotImplementedWaypoint typeName={waypoint.type} />
						{/if}
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
