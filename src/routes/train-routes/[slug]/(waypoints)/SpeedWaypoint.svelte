<script lang="ts">
	import TableColumn from '../(lib)/TableColumn.svelte'
	import SpeedometerIcon from 'svelte-material-icons/Speedometer.svelte'
	import SpeedometerSlowIcon from 'svelte-material-icons/SpeedometerSlow.svelte'

	export let speedChange: 'increase' | 'decrease'
	export let text: string
	export let notes: string
</script>

<TableColumn>
	{#if speedChange === 'increase'}
		<span class="text-success-400"><SpeedometerIcon /></span>
	{:else if speedChange === 'decrease'}
		<span class="text-error-400"><SpeedometerSlowIcon /></span>
	{/if}
</TableColumn>
<TableColumn><span>{text}</span></TableColumn>
<TableColumn><span>{notes}</span></TableColumn>
