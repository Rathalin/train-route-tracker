<script lang="ts">
	import TableColumn from '../(lib)/TableColumn.svelte'
	import OctagonIcon from 'svelte-material-icons/Octagon.svelte'

	export let stationName: string
	export let notes: string
</script>

<TableColumn><span class="text-tertiary-400"><OctagonIcon /></span></TableColumn>
<TableColumn><span>{stationName}</span></TableColumn>
<TableColumn><span>{notes}</span></TableColumn>
