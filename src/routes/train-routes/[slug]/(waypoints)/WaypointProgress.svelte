<script lang="ts">
	export let progress: 'upcoming' | 'current' | 'passed'
</script>

{#if progress === 'upcoming'}
	<div class="flex flex-col items-center">
		<div class="w-1 h-3 bg-surface-400"></div>
		<div class="w-4 h-4 rounded-full bg-surface-400"></div>
		<div class="w-1 h-4 -mb-1 bg-surface-400"></div>
	</div>
{:else if progress === 'current'}
	<div class="flex flex-col items-center">
		<div class="w-1 h-3 bg-primary-500"></div>
		<div class="w-4 h-4 rounded-full bg-primary-500"></div>
		<div class="w-1 h-4 -mb-1 bg-surface-400"></div>
	</div>
{:else if progress === 'passed'}
	<div class="flex flex-col items-center">
		<div class="w-1 h-3 bg-primary-500"></div>
		<div class="w-4 h-4 rounded-full bg-primary-500"></div>
		<div class="w-1 h-4 -mb-1 bg-primary-500"></div>
	</div>
{/if}
