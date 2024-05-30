<script lang="ts">
	import { _ } from 'svelte-i18n'
	import CheckIcon from 'svelte-material-icons/Check.svelte'
	import WaypointIcon from '../(waypoints)/WaypointIcon.svelte'
	import type { WaypointOption } from '../(waypoints)/WaypointOption'

	const waypointOptions = [
		{ id: 'station', name: $_('common.waypoint-type.station.name') },
		{ id: 'speed-increase', name: $_('common.waypoint-type.speed-increase.name') },
		{ id: 'speed-decrease', name: $_('common.waypoint-type.speed-decrease.name') },
		{ id: 'neutral-section', name: $_('common.waypoint-type.neutral-section.name') },
	]

	let selectedType: WaypointOption | null = null
</script>

<div class="flex flex-row items-end gap-6">
	<div class="flex-1 grid grid-cols-4 gap-4">
		<label class="label">
			<span>{$_('route.train-routes.slug.edit.form.waypoint.kilometer.label')}</span>
			<input
				class="input"
				type="number"
				step=".1"
				placeholder={$_('route.train-routes.slug.edit.form.waypoint.kilometer.placeholder')}
			/>
		</label>
		<label class="label">
			<span>{$_('route.train-routes.slug.edit.form.waypoint.type.label')}</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim"><WaypointIcon waypointType={selectedType ?? ''} /></div>
				<select class="select" bind:value={selectedType}>
					{#each waypointOptions as { id, name }}
						<option value={id}>{name}</option>
					{/each}
				</select>
			</div>
		</label>

		<label class="label">
			<span>{$_('route.train-routes.slug.edit.form.waypoint.description.label')}</span>
			<input class="input" type="text" />
		</label>

		<label class="label">
			<span>{$_('route.train-routes.slug.edit.form.waypoint.kilometer.label')}</span>
			<input class="input" type="text" />
		</label>
	</div>

	<button class="btn btn-icon variant-filled-success">
		<span><CheckIcon /></span>
	</button>
</div>
