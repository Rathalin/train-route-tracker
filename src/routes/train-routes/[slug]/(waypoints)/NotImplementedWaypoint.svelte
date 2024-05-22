<script lang="ts">
	import TableColumn from '../(lib)/TableColumn.svelte'
	import HelpIcon from 'svelte-material-icons/Help.svelte'

	export let typeName: string
</script>

<TableColumn>
	<HelpIcon />
</TableColumn>
<TableColumn>
	<span class="text-error-500 font-bold">{typeName}</span>
	<span>not implemented yet!</span>
</TableColumn>
<TableColumn><span></span></TableColumn>
