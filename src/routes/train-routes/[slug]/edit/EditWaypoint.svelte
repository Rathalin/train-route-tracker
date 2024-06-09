<script lang="ts">
	import { t } from 'svelte-i18n'
	import CheckIcon from 'svelte-material-icons/Check.svelte'
	import CloseIcon from 'svelte-material-icons/Close.svelte'
	import { createEventDispatcher } from 'svelte'
	import { enhance } from '$app/forms'
	import { waypointOptions, type WaypointOption } from '../(waypoints)/WaypointOption'
	import WaypointIcon from '../(waypoints)/WaypointIcon.svelte'
	import WaypointText from '../(waypoints)/WaypointText.svelte'

	export let id: number
	export let kilometer: number | null
	export let selectedType: WaypointOption | (string & {}) | null
	export let text: string
	export let notes: string

	const dispatch = createEventDispatcher<{
		cancel: undefined
	}>()
</script>

<tr>
	<td>
		<span class="flex flex-row items-center gap-2">
			<button
				class="btn btn-icon btn-icon-sm variant-ghost"
				on:click={() => {
					dispatch('cancel')
				}}
			>
				<CloseIcon />
			</button>
			<form id="updateForm" action="?/update" method="post" use:enhance>
				<button
					class="btn btn-icon btn-icon-sm variant-ghost-primary"
					type="submit"
					name="id"
					value={id}
				>
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
				value={kilometer}
				form="updateForm"
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
					<WaypointIcon waypointType={selectedType ?? ''} />
				</div>
				<select
					class="select rounded-l-none"
					name="waypointType"
					bind:value={selectedType}
					form="updateForm"
					required
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
			<input class="input" name="description" type="text" value={text} form="updateForm" />
		</label>
	</td>

	<td>
		<label class="label">
			<span class="hidden text-sm font-semibold">
				{$t('route.train-routes.slug.edit.form.waypoint.note.label')}
			</span>
			<input class="input" name="note" type="text" value={notes} form="updateForm" />
		</label>
	</td>
</tr>
