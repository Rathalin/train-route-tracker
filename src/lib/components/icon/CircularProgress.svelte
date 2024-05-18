<script>
	/**
	 * @default border-black dark:border-white
	 */
	export let colorClasses = 'border-black dark:border-white'
	/**
	 * @default border-t-transparent dark:border-t-transparent
	 */
	export let bgColorClasses = 'border-t-transparent dark:border-t-transparent'
	/**
	 * @default 1rem
	 */
	export let size = '1rem'
</script>

<div
	class={`spinner ${colorClasses} ${bgColorClasses}`}
	style={`width: ${size}; height: ${size};`}
></div>

<style>
	.spinner {
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
