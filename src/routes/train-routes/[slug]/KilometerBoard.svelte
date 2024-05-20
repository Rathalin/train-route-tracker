<script lang="ts">
	export let kilometer: {
		integer: number
		decimal: number
	}
</script>

<div class="flex flex-row gap-1 items-center justify-end whitespace-pre font-mono">
	<span>{kilometer.integer.toString().padStart(3)}</span>
	<span>{'/'}</span>
	<span>{kilometer.decimal}</span>
</div>
