<script lang="ts">
	import { _ } from 'svelte-i18n'
	import SpeedWaypoint from './SpeedWaypoint.svelte'
	import StationWaypoint from './StationWaypoint.svelte'
	import TableColumn from './TableColumn.svelte'

	export let data
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="mx-4 mt-4 flow-root">
	<h1 class="h1 mt-4 mb-10">
		{$_('page.traine-routes.h1.text', { values: { routeName: data.title } })}
	</h1>

	<div class="table-container">
		<table class="table table-hover max-w-4xl pb-4 mb-10">
			<thead>
				<tr>
					<th></th>
					<th class="table-cell-fit">{$_('page.train-routes.table.kilometer')}</th>
					<th>{$_('page.train-routes.table.waypoint')}</th>
					<th>{$_('page.train-routes.table.description')}</th>
				</tr>
			</thead>
			{#each data.sections as section}
				<label
					class="table-row border-b border-b-surface-600 last-of-type:border-b-transparent hover:bg-surface-700"
				>
					<TableColumn>
						<input class="checkbox" type="checkbox" />
					</TableColumn>
					{#if section.data.type === 'speed-increase'}
						<SpeedWaypoint
							kilometer={section.kilometer}
							speed={section.data.speed}
							speedChange={'increase'}
						/>
					{:else if section.data.type === 'speed-decrease'}
						<SpeedWaypoint
							kilometer={section.kilometer}
							speed={section.data.speed}
							speedChange={'decrease'}
						/>
					{:else if section.data.type === 'station'}
						<StationWaypoint kilometer={section.kilometer} stationName={section.data.name} />
					{:else}
						<div>?</div>
					{/if}
				</label>
			{/each}
		</table>
	</div>
</div>
