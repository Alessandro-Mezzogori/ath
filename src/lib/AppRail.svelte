<script context="module" lang="ts">
	import type { SvelteComponent } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

    export type AppRailButtonData = {
        icon: typeof SvelteComponent<SvelteHTMLElements['svg']>;
        key: string; 
    };
</script>

<script lang="ts">
    import { drawer } from './drawer';
    export let data: AppRailButtonData[];

    function onAppRailClick(key: string){
        console.log(key);
        const drawerValue = $drawer;
        
        if(drawerValue.key === key){
            $drawer.isOpen = !$drawer.isOpen;
            $drawer = $drawer;
            return;
        }
        
        $drawer = {
            isOpen: true,
            key: key
        };
    }
</script>

<div class="apprail">
    {#each data as item}
    <button class="apprail-button" on:click={() => onAppRailClick(item.key)}>
        <svelte:component this={item.icon} />
    </button>
    {/each}
</div>

<style>
    .apprail {
        display: flex;
        flex-direction: column;
    }

    .apprail-button {
        display: inline-block;
        text-align: center;
        width: var(--apprail-button-width);
        height: var(--apprail-button-height);
        border: var(--apprail-button-border);
        border-radius: var(--apprail-button-border-radius);
        color: var(--apprail-button-color);
        padding: var(--apprail-button-padding);
        background: var(--apprail-button-background);
    }
    
    .apprail-button:hover {
        filter: brightness(1.4);
    }
</style>