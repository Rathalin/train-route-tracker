<script lang="ts">
	import { _ } from 'svelte-i18n'
	import CheckIcon from 'svelte-material-icons/Check.svelte'
	import WaypointIcon from '../(waypoints)/WaypointIcon.svelte'
	import CloseIcon from 'svelte-material-icons/Close.svelte'
	import type { WaypointOption } from '../(waypoints)/WaypointOption'

	const waypointOptions = [
		{ id: 'station', name: $_('common.waypoint-type.station.name') },
		{ id: 'speed-increase', name: $_('common.waypoint-type.speed-increase.name') },
		{ id: 'speed-decrease', name: $_('common.waypoint-type.speed-decrease.name') },
		{ id: 'neutral-section', name: $_('common.waypoint-type.neutral-section.name') },
	]

	export let kilometer: number | null
	export let selectedType: WaypointOption | (string & {}) | null
	export let text: string
	export let notes: string
</script>

<div class="flex flex-row items-end gap-4">
	<div class="flex-1 grid grid-cols-[12ch_2fr_3fr_3fr] gap-3">
		<label class="label">
			<span>{$_('route.train-routes.slug.edit.form.waypoint.kilometer.label')}</span>
			<input
				class="input"
				type="number"
				step=".1"
				placeholder={$_('route.train-routes.slug.edit.form.waypoint.kilometer.placeholder')}
				value={kilometer}
			/>
		</label>
		<label class="label">
			<span>{$_('route.train-routes.slug.edit.form.waypoint.type.label')}</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">
					<WaypointIcon waypointType={selectedType ?? ''} />
				</div>
				<select class="select" bind:value={selectedType}>
					{#each waypointOptions as { id, name }}
						<option value={id}>{name}</option>
					{/each}
				</select>
			</div>
		</label>

		<label class="label">
			<span>{$_('route.train-routes.slug.edit.form.waypoint.description.label')}</span>
			<input class="input" type="text" value={text} />
		</label>

		<label class="label">
			<span>{$_('route.train-routes.slug.edit.form.waypoint.kilometer.label')}</span>
			<input class="input" type="text" value={notes} />
		</label>
	</div>

	<div class="flex flex-row items-center gap-2">
		<button class="btn btn-icon variant-filled" type="reset">
			<span><CloseIcon /></span>
		</button>
		<button class="btn btn-icon variant-filled-success" type="submit">
			<span><CheckIcon /></span>
		</button>
	</div>
</div>
