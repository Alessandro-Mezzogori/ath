<script lang="ts">
    import { isRegistered, register } from "@tauri-apps/api/globalShortcut";
	import { onMount } from "svelte";

    export let name: string;
    export let command: () => void;
    export let shortcut: string | undefined;
    
    onMount(async () => {
        if(shortcut && !(await isRegistered(shortcut))){
            register(shortcut, command);
        }
    });
</script>

<li class="menuitem">
    <button 
        class="titlebar-button"
        on:click={command} >
        {name}
    </button>
    
    {#if shortcut}
    <span>{shortcut}</span>
    {/if}
</li>

<style>
    .menuitem {
        display: flex;
        justify-content: space-between;
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
</style>