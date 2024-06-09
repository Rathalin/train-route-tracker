<script lang="ts">
	import { t } from 'svelte-i18n'
	import type { WaypointOption } from './waypointOptions'

	const waypointTypes: Record<string, string> = {
		station: $t('common.waypoint-type.station.name'),
		'speed-increase': $t('common.waypoint-type.speed-increase.name'),
		'speed-decrease': $t('common.waypoint-type.speed-decrease.name'),
		'neutral-section': $t('common.waypoint-type.neutral-section.name'),
	}

	export let waypointType: WaypointOption | (string & {})
</script>

{waypointTypes[waypointType] ?? ''}
