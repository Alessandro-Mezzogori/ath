<script lang="ts">
    import { clickOutsideAction } from 'svelte-legos';

    export let isOpen: boolean = false;
    export let name: string;
    
    let closing = false;
    const close = () => { 
        closing = true;
        isOpen = false
        
        console.log("closed");
    }

    const toggle = () => { 
        if(closing) {
            closing = false
            return;
        }

        isOpen = !isOpen
        
        console.log("open " + isOpen);
    };
    
    function test(e: CustomEvent<void>){
        console.log(e.target);
        console.log(e.currentTarget);
        console.log(e.detail);
    }
</script>

<div>
    <button on:click|stopPropagation={toggle} class="titlebar-button">{name}</button>
    {#if isOpen}
        <div class="dropdown" role="button" tabindex="0" on:mouseleave={close}>
            <slot />
        </div>
    {/if}
</div>

<style>
    .dropdown {
        background-color: var(--titlebar-bg);
        position: absolute;
        transition: all 0.5s ease;
        margin-top: 1rem;
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

    .titlebar-button:hover {
        background-color: var(--titlebar-button-hover-bg);
    }
</style>