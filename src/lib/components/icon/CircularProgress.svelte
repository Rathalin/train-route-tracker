<script>
	/**
	 * @default 1rem
	 */
	export let size = '1rem'
</script>

<div class={`spinner`} style={`width: ${size}; height: ${size};`}></div>

<style>
	.spinner {
		border-color: currentColor;
		border-top-color: transparent;
		border-style: solid;
		border-width: 2px;
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
