<script lang="ts">
	import TableColumn from '../(lib)/TableColumn.svelte'
	import OctagonIcon from 'svelte-material-icons/Octagon.svelte'
	import { _ } from 'svelte-i18n'
	import type { ProgressState } from '../ProgressState'

	export let stationName: string
	export let progress: ProgressState
</script>

<TableColumn>
	<span
		class={progress === 'passed' ? 'text-surface-500' : 'text-tertiary-400'}
		title={$_('page.train-routes.waypoint-type.station.icon.tooltip')}
	>
		<OctagonIcon />
	</span>
</TableColumn>
<TableColumn><span>{stationName}</span></TableColumn>
