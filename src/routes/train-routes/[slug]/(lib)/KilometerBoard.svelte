<script lang="ts">
	export let kilometer: number

	$: integer = Math.floor(kilometer)
	$: decimal = (kilometer - integer).toFixed(1).slice(2)
</script>

<div class="flex flex-row gap-1 items-center whitespace-pre font-mono">
	<span>{integer.toString().padStart(3)}</span>
	<span>{'/'}</span>
	<span>{decimal}</span>
</div>
