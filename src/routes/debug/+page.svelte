<script>
	const data = [
		{ kilometer: 49, text: 'Speed increase to 100' },
		{ kilometer: 56, text: 'Station St. Egyden' },
		{ kilometer: 62, text: 'Station Neunkirchen' },
	]
</script>

<div class="grid-container">
	{#each data as item}
		<div class="grid-item">
			<h2>{item.kilometer} km</h2>
			<p>{item.text}</p>
		</div>
	{/each}
</div>

<style>
	.grid-container {
		display: grid;
		grid-auto-flow: column;
		gap: 1rem; /* Adjust the gap between columns as needed */
	}
	.grid-item {
		padding: 1rem;
		text-align: center;
	}
</style>
