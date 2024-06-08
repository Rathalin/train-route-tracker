<script lang="ts">
	import { t } from 'svelte-i18n'
	import type { WaypointOption } from './WaypointOption'
	import SpeedometerIcon from 'svelte-material-icons/Speedometer.svelte'
	import SpeedometerSlowIcon from 'svelte-material-icons/SpeedometerSlow.svelte'
	import OctagonIcon from 'svelte-material-icons/Octagon.svelte'
	import PauseIcon from 'svelte-material-icons/Pause.svelte'
	import HelpIcon from 'svelte-material-icons/Help.svelte'

	export let waypointType: WaypointOption | (string & {})
	export let highlighted: boolean = true
</script>

{#if waypointType === 'speed-increase'}
	<span
		class={highlighted ? 'text-success-400' : 'text-surface-500'}
		title={$t('common.waypoint-type.speed-increase.name')}
	>
		<SpeedometerIcon />
	</span>
{:else if waypointType === 'speed-decrease'}
	<span
		class={highlighted ? 'text-error-400' : 'text-surface-500'}
		title={$t('common.waypoint-type.speed-decrease.name')}
	>
		<SpeedometerSlowIcon />
	</span>
{:else if waypointType === 'station'}
	<span
		class={highlighted ? 'text-tertiary-400' : 'text-surface-500'}
		title={$t('common.waypoint-type.station.name')}
	>
		<OctagonIcon />
	</span>
{:else if waypointType === 'neutral-section'}
	<span
		class={highlighted ? 'text-blue-500' : 'text-surface-500'}
		title={$t('common.waypoint-type.neutral-section.name')}
	>
		<PauseIcon />
	</span>
{:else}
	<HelpIcon />
{/if}
