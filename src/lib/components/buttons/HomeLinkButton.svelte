<script lang="ts">
	import { _ } from 'svelte-i18n'
	import HomeIcon from 'svelte-material-icons/Home.svelte'
</script>

<a class="btn variant-soft-primary" href="/">
	<HomeIcon />
	<span>{$_('common.home')}</span>
</a>
