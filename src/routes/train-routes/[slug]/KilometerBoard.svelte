<script lang="ts">
	export let kilometer: number

	$: integer = Math.floor(kilometer)
	$: decimal = (kilometer - integer).toFixed(3).slice(2)
</script>

<div class="flex flex-row gap-1 items-center justify-end whitespace-pre font-mono">
	<span>{integer.toString().padStart(3)}</span>
	<span>{'/'}</span>
	<span>{decimal}</span>
</div>
