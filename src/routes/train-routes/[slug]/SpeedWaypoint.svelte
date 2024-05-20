<script lang="ts">
	import KilometerBoard from './KilometerBoard.svelte'
	import TableColumn from './TableColumn.svelte'

	export let kilometer: {
		integer: number
		decimal: number
	}
	export let speed: number
	export let speedChange: 'increase' | 'decrease'
</script>

<TableColumn><KilometerBoard {kilometer} /></TableColumn>
<TableColumn>{speed}</TableColumn>
{#if speedChange === 'increase'}
	<TableColumn>↑</TableColumn>
{:else if speedChange === 'decrease'}
	<TableColumn>↓</TableColumn>
{/if}
