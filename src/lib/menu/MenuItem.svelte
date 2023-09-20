<script lang="ts">
	import type { Command } from "./commands";

    export let command: Command;
</script>

<li class="menuitem">
    <div on:click={command.callback} role="button" tabindex="0" on:keypress={() => {}}> 
        <span class="titlebar-button" >
            {command.name}
        </span>
        
        {#if command.trigger}
        <span class="shortcut-text">{command.trigger.shortcutText}</span>
        {/if}
    </div>
</li>

<style>
    .menuitem {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding-block: 0;
        padding-inline: 15px;
        gap: 30px;
        border-radius: 5px;
    }
    
    .menuitem:hover {
        background-color: var(--menuitem-hover); 
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
    
    .shortcut-text {
        display: inline-block;
        text-align: center;
        vertical-align: middle;
    }
</style>