<script lang="ts">
	import TableColumn from '../(lib)/TableColumn.svelte'
	import SpeedometerIcon from 'svelte-material-icons/Speedometer.svelte'
	import { _ } from 'svelte-i18n'
	import type { ProgressState } from '../ProgressState'

	export let text: string
	export let progress: ProgressState
</script>

<TableColumn>
	<span
		class={progress === 'passed' ? 'text-surface-500' : 'text-success-400'}
		title={$_('route.train-routes.slug.waypoint-type.speed-increase.icon.tooltip')}
	>
		<SpeedometerIcon />
	</span>
</TableColumn>
<TableColumn><span>{text}</span></TableColumn>
