<script lang="ts">
	export let progress: 'upcoming' | 'current' | 'passed'
</script>

{#if progress === 'upcoming'}
	<div class="flex flex-col items-center">
		<div class="w-1 h-3 bg-surface-700"></div>
		<div class="w-4 h-4 rounded-full bg-surface-700"></div>
		<div class="w-1 h-4 -mb-1 bg-surface-700"></div>
	</div>
{:else if progress === 'current'}
	<div class="flex flex-col items-center">
		<div class="w-1 h-3 bg-primary-500"></div>
		<div class="grid my-[-0.4rem] items-center justify-items-center">
			<div class="ringring border-primary-500"></div>
			<div class="circle bg-primary-500"></div>
		</div>
		<div class="w-1 h-4 -mb-1 bg-surface-700"></div>
	</div>
{:else if progress === 'passed'}
	<div class="flex flex-col items-center">
		<div class="w-1 h-3 bg-primary-500"></div>
		<div class="w-4 h-4 rounded-full bg-primary-500"></div>
		<div class="w-1 h-4 -mb-1 bg-primary-500"></div>
	</div>
{/if}

<style scoped>
	.circle,
	.ringring {
		grid-area: 1 / 1;
	}

	.circle {
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
	}

	.ringring {
		height: 1.8rem;
		width: 1.8rem;
		border-radius: 50%;
		border-width: 3px;
		border-style: solid;
		animation: pulsate 1s ease-out;
		animation-iteration-count: infinite;
		opacity: 0;
	}
	@keyframes pulsate {
		0% {
			transform: scale(0.1, 0.1);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			transform: scale(1.2, 1.2);
			opacity: 0;
		}
	}
</style>
