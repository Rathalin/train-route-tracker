<script lang="ts">
	import TableColumn from './TableColumn.svelte'
	import SpeedometerIcon from 'svelte-material-icons/Speedometer.svelte'
	import SpeedometerSlowIcon from 'svelte-material-icons/SpeedometerSlow.svelte'

	export let speed: number
	export let speedChange: 'increase' | 'decrease'
	export let notes: string
</script>

<TableColumn>
	{#if speedChange === 'increase'}
		<span class="text-success-400"><SpeedometerIcon /></span>
	{:else if speedChange === 'decrease'}
		<span class="text-error-400"><SpeedometerSlowIcon /></span>
	{/if}
</TableColumn>
<TableColumn><span>{speed}</span></TableColumn>
<TableColumn><span>{notes}</span></TableColumn>
