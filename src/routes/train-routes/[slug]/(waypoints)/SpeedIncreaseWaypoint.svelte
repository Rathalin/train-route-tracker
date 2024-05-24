<script lang="ts">
	import TableColumn from '../(lib)/TableColumn.svelte'
	import SpeedometerIcon from 'svelte-material-icons/Speedometer.svelte'
	import { _ } from 'svelte-i18n'

	export let text: string
	export let passed: boolean
</script>

<TableColumn>
	<span
		class={passed ? 'text-surface-500' : 'text-success-400'}
		title={$_('page.train-routes.waypoint-type.speed-increase.icon.tooltip')}
	>
		<SpeedometerIcon />
	</span>
</TableColumn>
<TableColumn><span>{text}</span></TableColumn>
