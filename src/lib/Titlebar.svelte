<script lang="ts">
    import { appWindow } from '@tauri-apps/api/window';
    import IconMinimize from '~icons/codicon/chrome-minimize';
    import IconMaximize from '~icons/codicon/chrome-restore';
    import IconClose from '~icons/codicon/chrome-close';
	import MenuDropdown from './menu/Menu.svelte';
	import MenuItem from './menu/MenuItem.svelte';
    import { commandGroups } from './menu/commands';

    async function minimize(){
        await appWindow.minimize();
    }
    
    async function toggleMaximize(){
        await appWindow.toggleMaximize();
    }
    
    async function close(){
        await appWindow.close();
    }
</script>

<div data-tauri-drag-region class="titlebar">
    <div class="titlebar-sub">
        {#each commandGroups as commandGroup}
        <MenuDropdown name={commandGroup.name}>
            {#each commandGroup.commands as command}
            <MenuItem 
                name={command.name}
                command={command.command}
                shortcut={command.shortcut}
            />
            {/each}
        </MenuDropdown>
        {/each}
    </div>
    <div>
        <button class="titlebar-icon-button" id="titlebar-minimize" on:click={minimize}>
            <IconMinimize />
        </button>
        <button class="titlebar-icon-button" id="titlebar-maximize" on:click={toggleMaximize}>
            <IconMaximize />
        </button>
        <button class="titlebar-icon-button" id="titlebar-close" on:click={close}>
            <IconClose />
        </button>
    </div>  
</div>

<style>
    .titlebar {
        user-select: none;
        display: flex;
        justify-content: space-between;
    }
    
    .titlebar-sub {
        display: flex;
    }
    
    .titlebar-button {
        display: inline-block;
        text-align: center;
        width: var(--titlebar-button-width);
        height: var(--titlebar-button-height);
        border: var(--titlebar-button-border);
        border-radius: var(--titlebar-button-border-radius);
        color: var(--titlebar-button-text-color);
        padding: var(--titlebar-button-padding);
        font-family: var(--font);
        font-size: var(--font-size);
        background: transparent;
    }

    .titlebar-icon-button {
        display: inline-block;
        text-align: center;
        width: var(--titlebar-button-width);
        border: var(--titlebar-button-border);
        color: var(--titlebar-button-text-color);
        padding: var(--titlebar-button-padding);
        font-family: var(--font);
        font-size: var(--font-size);
        background: transparent;
    }
    
    .titlebar-button:hover, .titlebar-icon-button:hover {
        background-color: var(--titlebar-button-hover-bg);
    }
</style>