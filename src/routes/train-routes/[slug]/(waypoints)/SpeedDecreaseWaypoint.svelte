<script lang="ts">
	import TableColumn from '../(lib)/TableColumn.svelte'
	import SpeedometerSlowIcon from 'svelte-material-icons/SpeedometerSlow.svelte'
	import { _ } from 'svelte-i18n'

	export let text: string
	export let passed: boolean
</script>

<TableColumn>
	<span
		class={passed ? 'text-surface-500' : 'text-error-400'}
		title={$_('page.train-routes.waypoint-type.speed-decrease.icon.tooltip')}
	>
		<SpeedometerSlowIcon />
	</span>
</TableColumn>
<TableColumn><span>{text}</span></TableColumn>
