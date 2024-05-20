<script lang="ts">
	import KilometerBoard from './KilometerBoard.svelte'
	import TableColumn from './TableColumn.svelte'

	export let kilometer: {
		integer: number
		decimal: number
	}
	export let stationName: string
</script>

<TableColumn><KilometerBoard {kilometer} /></TableColumn>
<TableColumn>{stationName}</TableColumn>
<TableColumn></TableColumn>
