<script lang="ts">
    import { appWindow } from '@tauri-apps/api/window';
    import IconMinimize from '~icons/codicon/chrome-minimize';
    import IconMaximize from '~icons/codicon/chrome-restore';
    import IconClose from '~icons/codicon/chrome-close';
    import { open } from '@tauri-apps/api/dialog';
    import { invoke } from '@tauri-apps/api/tauri';
	import MenuDropdown from './MenuDropdown.svelte';

    async function minimize(){
        await appWindow.minimize();
    }
    
    async function toggleMaximize(){
        await appWindow.toggleMaximize();
    }
    
    async function close(){
        await appWindow.close();
    }
    
    async function openMarkdown(){
        const selected = await open({
            multiple: false,
            filters: [{
                name: 'Markdown',
                extensions: ['md']
            }]
        });
        
        if(!Array.isArray(selected) && selected !== null){
           console.log(selected);
           
           // TODO open file in editor in new tab? 
           invoke("load_file_contents", {
               path: selected
           }).then(x => console.log(x))
           .catch(err => console.error(err));
        }
    }
    
    let fileOpen: boolean = false;
</script>

<div data-tauri-drag-region class="titlebar">
    <div class="titlebar-sub">
        <button class="titlebar-button dropdown" id="titlebar-close" on:click={openMarkdown}>
            open
        </button>
        <MenuDropdown name={"test lel"}>
            <ul>
                <li>ciao</li>
                <li>ciao</li>
                <li>ciao</li>
            </ul>
        </MenuDropdown>
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