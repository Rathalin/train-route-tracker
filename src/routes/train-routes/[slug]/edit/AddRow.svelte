<script lang="ts">
	import PlusIcon from 'svelte-material-icons/Plus.svelte'
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher<{ add: undefined }>()
</script>

<tr>
	<td id="td-add" colspan="5">
		<div class="flex flex-row justify-center items-center -my-4">
			<div class="border-b-2 border-b-primary-900 flex-1 basis-[45%]"></div>
			<button
				class="btn-icon btn-icon-sm variant-ghost-primary"
				on:click={() => {
					dispatch('add')
				}}
			>
				<PlusIcon />
			</button>
			<div class="border-b-2 border-b-primary-900 flex-1 basis-[55%]"></div>
		</div>
	</td>
</tr>

<style>
	.table tr td#td-add {
		padding: 0 !important;
	}
</style>
