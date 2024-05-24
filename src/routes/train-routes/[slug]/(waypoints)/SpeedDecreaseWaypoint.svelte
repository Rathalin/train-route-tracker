<script lang="ts">
	import TableColumn from '../(lib)/TableColumn.svelte'
	import SpeedometerSlowIcon from 'svelte-material-icons/SpeedometerSlow.svelte'
	import { _ } from 'svelte-i18n'
	import type { ProgressState } from '../ProgressState'

	export let text: string
	export let progress: ProgressState
</script>

<TableColumn>
	<span
		class={progress === 'passed' ? 'text-surface-500' : 'text-error-400'}
		title={$_('page.train-routes.waypoint-type.speed-decrease.icon.tooltip')}
	>
		<SpeedometerSlowIcon />
	</span>
</TableColumn>
<TableColumn><span>{text}</span></TableColumn>
