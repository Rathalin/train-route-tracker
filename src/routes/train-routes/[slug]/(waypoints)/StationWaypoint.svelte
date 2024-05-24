<script lang="ts">
	import TableColumn from '../(lib)/TableColumn.svelte'
	import OctagonIcon from 'svelte-material-icons/Octagon.svelte'
	import { _ } from 'svelte-i18n'

	export let stationName: string
</script>

<TableColumn>
	<span
		class="text-tertiary-400"
		title={$_('page.train-routes.waypoint-type.station.icon.tooltip')}
	>
		<OctagonIcon />
	</span>
</TableColumn>
<TableColumn><span>{stationName}</span></TableColumn>
