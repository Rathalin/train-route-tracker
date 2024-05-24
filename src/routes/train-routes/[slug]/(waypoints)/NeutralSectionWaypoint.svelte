<script lang="ts">
	import TableColumn from '../(lib)/TableColumn.svelte'
	import PauseIcon from 'svelte-material-icons/Pause.svelte'
	import { _ } from 'svelte-i18n'
</script>

<TableColumn>
	<span
		class="text-blue-500"
		title={$_('page.train-routes.waypoint-type.neutral-section.icon.tooltip')}
	>
		<PauseIcon />
	</span>
</TableColumn>
<TableColumn>
	<span>{$_('page.train-routes.waypoint-type.neutral-section.label')}</span>
</TableColumn>
