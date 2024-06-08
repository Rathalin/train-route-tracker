<script lang="ts">
	import { t } from 'svelte-i18n'
	import CheckIcon from 'svelte-material-icons/Check.svelte'
	import CloseIcon from 'svelte-material-icons/Close.svelte'
	import { createEventDispatcher } from 'svelte'
	import { enhance } from '$app/forms'
	import { waypointOptions, type WaypointOption } from '../(waypoints)/WaypointOption'
	import WaypointIcon from '../(waypoints)/WaypointIcon.svelte'
	import WaypointText from '../(waypoints)/WaypointText.svelte'

	let selectedType: WaypointOption

	const dispatch = createEventDispatcher<{
		cancel: undefined
	}>()

	function onCancelClick() {
		dispatch('cancel')
	}
</script>

<tr class="!border-b-4 !border-b-surface-500">
	<td>
		<span class="flex flex-row items-center gap-2">
			<button class="btn btn-icon btn-icon-sm variant-ghost" on:click={onCancelClick}>
				<CloseIcon />
			</button>
			<form action="?/create" method="post" use:enhance id="createForm">
				<button class="btn btn-icon btn-icon-sm variant-ghost-primary" type="submit">
					<CheckIcon />
				</button>
			</form>
		</span>
	</td>

	<td>
		<label class="label">
			<span class="hidden text-sm font-semibold">
				{$t('route.train-routes.slug.edit.form.waypoint.kilometer.label')}
			</span>
			<input
				class="input"
				name="kilometer"
				type="number"
				step=".1"
				placeholder={$t('route.train-routes.slug.edit.form.waypoint.kilometer.placeholder')}
				form="createForm"
				required
			/>
		</label>
	</td>

	<td>
		<label class="label">
			<span class="hidden text-sm font-semibold">
				{$t('route.train-routes.slug.edit.form.waypoint.type.label')}
			</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">
					<WaypointIcon waypointType={selectedType} />
				</div>
				<select
					class="select rounded-l-none"
					name="waypointType"
					form="createForm"
					required
					bind:value={selectedType}
				>
					{#each waypointOptions as waypointOption}
						<option value={waypointOption}>
							<WaypointText waypointType={waypointOption} />
						</option>
					{/each}
				</select>
			</div>
		</label>
	</td>

	<td>
		<label class="label">
			<span class="hidden text-sm font-semibold">
				{$t('route.train-routes.slug.edit.form.waypoint.description.label')}
			</span>
			<input class="input" name="description" type="text" form="createForm" />
		</label>
	</td>

	<td>
		<label class="label">
			<span class="hidden text-sm font-semibold">
				{$t('route.train-routes.slug.edit.form.waypoint.note.label')}
			</span>
			<input class="input" name="note" type="text" form="createForm" />
		</label>
	</td>
</tr>
