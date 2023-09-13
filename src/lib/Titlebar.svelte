<script lang="ts">
    import { appWindow } from '@tauri-apps/api/window';
    import IconMinimize from '~icons/codicon/chrome-minimize';
    import IconMaximize from '~icons/codicon/chrome-restore';
    import IconClose from '~icons/codicon/chrome-close';

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
    <div>
        <button class="titlebar-button" id="titlebar-close" >
            <span>logo</span>
        </button>
        <button class="titlebar-button" id="titlebar-close" >
            file
        </button>
    </div>
    <div>
        <button class="titlebar-button" id="titlebar-minimize" on:click={minimize}>
            <IconMinimize />
        </button>
        <button class="titlebar-button" id="titlebar-maximize" on:click={toggleMaximize}>
            <IconMaximize />
        </button>
        <button class="titlebar-button" id="titlebar-close" on:click={close}>
            <IconClose />
        </button>
    </div>  
</div>

<style>
    .titlebar {
        height: var(--title-bar-height);
        background: var(--title-bar-bg);
        padding: var(--title-bar-padding);
        user-select: none;
        display: flex;
        justify-content: space-between;
        position: relative;
        top: 0;
        left: 0;
        right: 0;
    }
    
    .titlebar-button {
        display: inline-block;
        text-align: center;
        width: var(--title-bar-button-width);
        height: var(--title-bar-button-height);
        border: var(--title-bar-button-border);
        border-radius: var(--title-bar-button-border-radius);
        color: var(--title-bar-button-text-color);
        padding: var(--title-bar-button-padding);
        font-family: var(--font);
        font-size: var(--font-size);
        background: transparent;
    }
    
    .titlebar-button:hover {
        background-color: var(--title-bar-button-hover-bg);
    }
</style>