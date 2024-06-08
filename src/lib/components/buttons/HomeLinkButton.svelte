<script lang="ts">
	import { t } from 'svelte-i18n'
	import HomeIcon from 'svelte-material-icons/Home.svelte'
</script>

<a class="btn variant-soft-primary" href="/">
	<HomeIcon />
	<span>{$t('common.home')}</span>
</a>
