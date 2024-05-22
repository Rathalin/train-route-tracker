<script lang="ts">
	import TableColumn from '../(lib)/TableColumn.svelte'
	import PauseIcon from 'svelte-material-icons/Pause.svelte'
	import { _ } from 'svelte-i18n'

	export let notes: string
</script>

<TableColumn><span class="text-blue-500"><PauseIcon /></span></TableColumn>
<TableColumn>
	<span>{$_('page.train-routes.waypoint-type.neutral-section.label')}</span>
</TableColumn>
<TableColumn><span>{notes}</span></TableColumn>
