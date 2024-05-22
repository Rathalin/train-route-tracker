<script lang="ts">
	import { page } from '$app/stores'

	$: message = $page.error?.message ?? 'An error occurred'
</script>

<h1 class="h1 mt-10">{message}</h1>
