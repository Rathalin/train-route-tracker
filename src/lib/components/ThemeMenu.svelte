<script lang="ts">
	import { LightSwitch, popup, type PopupSettings } from '@skeletonlabs/skeleton'
	import { themes, type ThemeOption } from '../../theme.settings'
	import { themeStore } from '$lib/stores/theme.store'
	import { t } from 'svelte-i18n'
	import PaletteIcon from 'svelte-material-icons/Palette.svelte'

	const popupSettings: PopupSettings = {
		event: 'click',
		target: 'theme-menu',
		placement: 'bottom-end',
		closeQuery: '.will-close',
	}

	function setTheme(theme: ThemeOption) {
		themeStore.update((current) => ({
			...current,
			theme,
		}))
	}

	$: classesActive = (option: ThemeOption) =>
		option === $themeStore.theme ? '!bg-primary-500' : ''
</script>

<button
	class="btn btn-sm variant-ghost text-surface-600 dark:text-surface-300"
	use:popup={popupSettings}
>
	<span><PaletteIcon /></span>
	<span>{$t('header.theme-selector.button.label')}</span>
</button>
<div data-popup="theme-menu" class="card variant-filled-surface p-4 w-72 shadow-xl !mx-0">
	<div class="flex flex-row mx-2">
		<div class="flex-auto font-bold">{$t('header.theme-selector.menu.mode.label')}</div>
		<LightSwitch title={$t('header.theme-selector.menu.mode.switch.title')} />
	</div>
	<hr class="divider mt-6 mb-6" />
	<div class="list-nav">
		<ul>
			{#each themes as { id, name, icon }}
				<li class="capitalize">
					<button class={`w-full capitalize ${classesActive(id)}`} on:click={() => setTheme(id)}>
						<span>{icon}</span>
						<span>{name}</span>
					</button>
				</li>
			{/each}
		</ul>
	</div>
	<div class="arrow bg-inherit" />
</div>
