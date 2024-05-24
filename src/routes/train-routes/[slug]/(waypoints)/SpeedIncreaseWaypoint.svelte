<script lang="ts">
	import TableColumn from '../(lib)/TableColumn.svelte'
	import SpeedometerIcon from 'svelte-material-icons/Speedometer.svelte'
	import { _ } from 'svelte-i18n'

	export let text: string
</script>

<TableColumn>
	<span
		class="text-success-400"
		title={$_('page.train-routes.waypoint-type.speed-increase.icon.tooltip')}
	>
		<SpeedometerIcon />
	</span>
</TableColumn>
<TableColumn><span>{text}</span></TableColumn>
