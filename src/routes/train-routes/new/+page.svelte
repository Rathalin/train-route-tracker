<script lang="ts">
	import { t } from 'svelte-i18n'
	import ArrowUpIcon from 'svelte-material-icons/ArrowUp.svelte'
	import ArrowDownIcon from 'svelte-material-icons/ArrowDown.svelte'
	import { directionOptions, type DirectionOption } from './directionOptions'
	import { goto } from '$app/navigation'
	import { getToastStore } from '@skeletonlabs/skeleton'
	import { browser } from '$app/environment'

	export let form

	let selectedDirection: DirectionOption = 'asc'
	let toastStore = getToastStore()

	$: if (form?.create?.success === true) {
		toastStore.trigger({
			message: $t('route.train-routes.new.action.success.message'),
			background: 'variant-filled-success',
		})
		if (browser) {
			goto(`/train-routes/${form.create.shortName}/edit`)
		}
	}
</script>

<svelte:head>
	<title>{$t('route.train-routes.new.title')}</title>
</svelte:head>

<div>
	<h1 class="h2 mt-4 mb-10 flex flex-row justify-between items-end gap-2 flex-wrap">
		<span>{$t('route.train-routes.new.heading.text')}</span>
	</h1>

	<article>
		<form action="?/create" method="post">
			<label class="label max-w-[60ch]">
				<span class="text-sm font-semibold">
					{$t('route.train-routes.new.form.title.label')}
				</span>
				<input
					class="input"
					name="title"
					type="text"
					placeholder={$t('route.train-routes.new.form.title.placeholder')}
					maxlength="60"
					required
				/>
			</label>

			<label class="label max-w-[18ch] mt-4">
				<span class="text-sm font-semibold">
					{$t('route.train-routes.new.form.shortName.label')}
				</span>
				<div class="flex flex-row items-center gap-2">
					<input
						class="input font-mono lowercase"
						name="shortName1"
						type="text"
						placeholder={$t('route.train-routes.new.form.shortName1.placeholder')}
						minlength="3"
						maxlength="3"
						required
					/>
					<span>{'-'}</span>
					<input
						class="input font-mono lowercase"
						name="shortName2"
						type="text"
						placeholder={$t('route.train-routes.new.form.shortName2.placeholder')}
						minlength="3"
						maxlength="3"
						required
					/>
				</div>
			</label>

			<label class="mt-8 label max-w-[60ch]">
				<span class="text-sm font-semibold">
					{$t('route.train-routes.new.form.direction.label')}
				</span>
				<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
					<div class="input-group-shim">
						{#if selectedDirection === 'asc'}
							<ArrowUpIcon />
						{:else}
							<ArrowDownIcon />
						{/if}
					</div>
					<select
						class="select rounded-l-none"
						name="direction"
						bind:value={selectedDirection}
						required
					>
						{#each directionOptions as directionOption}
							<option value={directionOption}>
								{directionOption === 'asc'
									? $t('route.train-routes.new.form.direction.asc')
									: $t('route.train-routes.new.form.direction.desc')}
							</option>
						{/each}
					</select>
				</div>
			</label>

			<button class="btn variant-filled-primary mt-8" type="submit">
				<span>{$t('route.train-routes.new.button.create.label')}</span>
			</button>
		</form>
	</article>
</div>
