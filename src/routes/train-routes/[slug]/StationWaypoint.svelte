<script lang="ts">
	import TableColumn from './TableColumn.svelte'
	import HomeIcon from 'svelte-material-icons/Home.svelte'

	export let stationName: string
	export let notes: string
</script>

<TableColumn><span class="text-tertiary-400"><HomeIcon /></span></TableColumn>
<TableColumn><span>{stationName}</span></TableColumn>
<TableColumn><span>{notes}</span></TableColumn>
