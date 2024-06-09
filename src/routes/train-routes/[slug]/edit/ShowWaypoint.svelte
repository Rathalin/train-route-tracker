<script lang="ts">
	import WaypointIcon from '../(waypoints)/WaypointIcon.svelte'
	import type { WaypointOption } from '../(waypoints)/WaypointOption'
	import EditIcon from 'svelte-material-icons/Pencil.svelte'
	import { createEventDispatcher } from 'svelte'
	import WaypointText from '../(waypoints)/WaypointText.svelte'
	import KilometerBoard from '../(lib)/KilometerBoard.svelte'
	import DeleteIcon from 'svelte-material-icons/Delete.svelte'
	import { enhance } from '$app/forms'

	export let id: number
	export let kilometer: number
	export let waypointType: WaypointOption | (string & {})
	export let text: string
	export let notes: string

	const dispatch = createEventDispatcher<{
		edit: {
			editId: number
		}
	}>()

	function onEditClick() {
		dispatch('edit', {
			editId: id,
		})
	}
</script>

<tr class="text-surface-700 dark:text-surface-300" on:dblclick={onEditClick}>
	<td class="flex flex-row items-center gap-2 min-h-[70px]">
		<button class="btn btn-icon btn-icon-sm variant-ghost" on:click={onEditClick}>
			<EditIcon />
		</button>
		<form action="?/delete" method="post" use:enhance>
			<button
				class="btn btn-icon btn-icon-sm variant-ghost-error"
				type="submit"
				name="id"
				value={id}
				on:dblclick|stopPropagation
			>
				<DeleteIcon />
			</button>
		</form>
	</td>

	<td>
		<KilometerBoard {kilometer} />
	</td>
	<td>
		<div class="flex flex-row items-center gap-2">
			<WaypointIcon {waypointType} />
			<WaypointText {waypointType} />
		</div>
	</td>
	<td>{text}</td>
	<td>{notes}</td>
</tr>
